import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './IndexMapBlock.scss';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import debounce from 'lodash.debounce'; //большая библиотека с множеством функций, именно этот метод аналог setTimeOut
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { hystoryToRedux, fetchSearchWhithVal, fetchSearchPosition, fetchSearchAddressOnClose, statusNull } from '../../Redux/slices/positionSlice';
import CloseIcon from '@mui/icons-material/Close';


function IndexMapBlock({ onClose }) {
    const dispatch = useDispatch();
    const { hystorySearch, searchResults, searchPosition, searchAddressOnClose } = useSelector(state => state.positionSlice);
    const hystory = hystorySearch.data;

    const [position, setPosition] = useState(null); // текущая позиция карты
    const [positionMarker, setPositionMarker] = useState(null); // текущая позиция маркера


    const [searchInputVal, setSearchInputVal] = useState('');
    const [isVisibleResult, setIsVisibleResult] = useState(false);
    const [isVisibleMap, setIsVisibleMap] = useState(false);
    /* const [isVisibelContainer, setIsVisibleContainer] = useState(true); */
    /* const [markerKey, setMarkerKey] = useState(0); // для пересоздания маркера при обновлении */
    const [map, setMap] = useState(null);
    const [places, setPlaces] = useState(null);
    const [queryStates, setStates] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [isZooming, setIsZooming] = useState(false);


    const markerRef = useRef(null);
    const currentPosition = useRef(null); // Для хранения позиции при перетаскивании
    const resultBlock = useRef(null); //Результат поиска
    const mapBlockBack = useRef(null);

    const customIcon = new L.Icon({  //настройки маркера
        iconUrl: '/img/icons/mapMarkerUp.svg',
        iconSize: [25, 41], // Размер иконки
        iconAnchor: [12, 41], // Точка привязки
        popupAnchor: [1, -34], // Точка всплывающего окна
        /* shadowUrl: '/img/icons/shadowMapMarker.svg', */ // Если нужна тень
        shadowSize: [41, 41]
    });

    const isMounted = useRef(false); //"самописный" persist без сторонних библиотек, isMounted предотвращает перезапись localStorage пустым значением при самом первом рендере (когда стейт еще инициализируется).
    useEffect(() => {
        if (isMounted.current) {
            window.localStorage.setItem('hystoryPositionUser', JSON.stringify(hystory));
        }
        isMounted.current = true;
    }, [hystory]);
    useEffect(() => { //закрываем окошко с результатом поиска при клике вне него
        let handleClickOutside = (e) => {
            if (!(resultBlock.current && resultBlock.current.contains(e.target))) { setIsVisibleResult(false) };
        }
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        }
    }, [])
    useEffect(() => { //закрываем окошко с результатом поиска при клике вне него
        let handleClickOutside = (e) => {
            e.target === mapBlockBack.current && onClose();
        }
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        }
    }, [])
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.body.addEventListener('keydown', handleEsc);
        return () => {
            document.body.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]); // Зависимость от onClose гарантирует актуальность функции
    useEffect(() => { //восстанавливам позицию при перезагрузке страницы
        if (isMounted.current) {
            if (hystory[0]) {
                setPosition([parseFloat(hystory[0].lat), parseFloat(hystory[0].lon)]);
                if (map) {
                    map.setView([parseFloat(hystory[0].lat), parseFloat(hystory[0].lon)], 17);// Перемещение к новым координатам
                    markerToCenter();
                    setIsVisibleMap(true);
                    addressPrettyer(hystory[0]);
                    setSelectedAddress(hystory[0]);
                    console.log('Позиция восстановлена из LC')
                }
            }
        }
        isMounted.current = true;
    }, [map])

    const searchWithValue = useCallback( //useCallback чтобы не было рерэндера
        debounce((value) => { //задержка
            if (/^[а-яёА-ЯЁ0-9.,"\s]+$/.test(value) && value.length > 2) {
                handleSearchWhithVal(value)
            } else {
                setIsLoading(false);
                setNoResults(!!value);
                setPlaces(null);
                setStates('');
            }
        }, 2000),
        [],
    )
    const searchWithPosition = useCallback(//useCallback чтобы не было рерэндера
        debounce(() => { //задержка
            mouseUpSearch();
        }, 1000),
        [],
    );
    const mouseUpSearch = async () => {
        if (!currentPosition.current) return;
        setIsLoading(true);
        dispatch(fetchSearchPosition(currentPosition.current));
    };
    const handleSearchWhithVal = async (search) => {
        if (!search) return;
        setPlaces(null);
        dispatch(fetchSearchWhithVal(search));
    };
    useEffect(() => {
        searchResults.status === 'loading' && setIsLoading(true);
        if (searchResults.status === 'loaded') {
            if (searchResults.items) {
                setNoResults(false);
                setPlaces(searchResults.items);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                setNoResults(true);
            }
        }
        searchResults.status === 'error' && console.log(searchResults.errMsg);
    }, [searchResults])

    useEffect(() => {
        searchPosition.status === 'loading' && setIsLoading(true);
        if (searchPosition.status === 'loaded') {
            if (searchPosition.item) {
                addressPrettyer(searchPosition.item);
                setSelectedAddress(searchPosition.item);
                setPlaces(null);
                setIsLoading(false);
            }
        }
        searchPosition.status === 'error' && console.log(searchPosition.errMsg);

    }, [searchPosition])

    useEffect(() => {
        let status = searchAddressOnClose.status;
        status === 'loading' && setIsLoading(true);
        if (status === 'loaded') {
            if (searchAddressOnClose.item) {
                onClose();
                dispatch(statusNull());
            }
        }
        status === 'error' && console.log(searchAddressOnClose.errMsg);
    }, [searchAddressOnClose])



    const addressPrettyer = (res) => { // убираем из строчки адреса лишнюю информацию
        if (res.address) {
            const { town, city, village, road, house_number, county, state } = res.address;
            const query = [town, city, village, road, house_number]
                .filter(Boolean)
                .join(', ');
            const qState = [county, state !== city ? state : null]
                .filter(Boolean)
                .join(', ');
            setSearchInputVal(query);
            setStates(qState);
        } else {
            if (res.display_name) {
                const query = res.display_name
                setSearchInputVal(query);
                setStates('');
            };
        }
    }


    /* Если вы хотите искать только в конкретном регионе России, добавьте параметры viewbox (координаты углов) и bounded=1.
Пример: ...&viewbox=37.1,55.9,37.9,55.5&bounded=1 (поиск строго в районе Москвы). */


    //const success = ({ coords }) => {
    //const { latitude, longitude } = coords
    //setPosition([latitude, longitude]);
    // вызываем функцию, передавая ей текущую позицию и сообщение
    // getMap(currentPosition, 'You are here')
    //}
    // const error = ({ message }) => {
      //  console.log(message)
    //}

    const markerToCenter = (lat, lng) => {
        if (map && markerRef.current) {
            const center = map.getCenter();//функция считывает центр предыдущей позиции если резко переключиться к другому адресу, поэтому нужен фикс ниже
            //map.panTo(center);
            markerRef.current.setLatLng(center);
            currentPosition.current = center; // Обновляем переменную с позицией
            if (lat) {//если идет выбор адреса из поисковика, то изменить позицию маркера тоже //фикс бага с перемещением маркера при выборе адреса неподалёку
                setPositionMarker([lat, lng]); ////фикс
                currentPosition.current = { lat: lat, lng: lng };//фикс
            };
        };
    }

    // Компонент для обрабатывания клика по карте

    /* useEffect(() => {
        if (map) {
            const center = map.getCenter();
            // Установка центра при первой загрузке
        }
    }, [map]); */
    const onChangeInputVal = (event) => {
        const { value } = event.target;
        !isVisibleResult && setIsVisibleResult(true);
        setSearchInputVal(value);
        setIsLoading(true);
        searchWithValue(value);

        if (!value) {
            setIsVisibleMap(false);
        }
    }
    const onClearButton = () => {
        setSearchInputVal('');
        setPlaces(null);
        setIsVisibleMap(false);
        setStates('');
        setNoResults(false);
    }


    const onClickPosition = (obj) => {
        // setPosition([parseFloat(obj.lat), parseFloat(obj.lon)]); //parseFloat разбирает текстовую строку, ищет и возвращает из неё десятичное число
        const lat = parseFloat(obj.lat);
        const lng = parseFloat(obj.lon);
        map.setView([lat, lng], 17);// Перемещение к новым координатам
        markerToCenter(lat, lng);
        addressPrettyer(obj);
        setIsVisibleResult(false);
        if (!isVisibleMap) { setIsVisibleMap(true) };
        setSelectedAddress(obj);
    }
    const clickShowResult = () => {
        if (selectedAddress.address) { //если в запросе есть данные об адресе
            dispatch(hystoryToRedux(selectedAddress));
            onClose();
        } else {//если нет, то вызывай другой extraReducers
            dispatch(fetchSearchAddressOnClose(selectedAddress));
        }
    }

    function MapInstatse() {
        const map = useMap(); // Получаем инстанс карты 
        if (map) { setMap(map); }
        return null;
    }
    function MapResizer() { //фикс бага с недозагрузкой карты
        useEffect(() => {
            const timer = setTimeout(() => {
                map.invalidateSize();
            }, 100);
            return () => clearTimeout(timer);
        }, [map]);

        return null;
    }

    // Обработчик перетаскивания маркера
    /* const handleMarkerDragEnd = (e) => {
        const latlng = e.target.getLatLng();
        setPosition([latlng.lat, latlng.lng]);
    }; */

    const MapEventHandler = () => {
        useMapEvents({
            drag: () => {// Обновляем позицию маркера в центре карты при перетаскивании
                markerToCenter();
            },
            move: () => {
                markerRef.current._icon.src = '/img/icons/mapMarkerDown.svg';
            },
            moveend: () => {
                markerRef.current._icon.src = '/img/icons/mapMarkerUp.svg';
            },
            zoomstart: () => {
                setIsZooming(true);
                console.log('start')
            },
            zoomend: () => {
                setIsZooming(false);
                console.log('end')

            },
            mouseup: () => {
                // Обновляем окончательную позицию при отпускании мыши
                if (isZooming) {console.log('zoom true')};
                if (currentPosition.current) {
                    searchWithPosition();
                }
            },
            click: (e) => {
                map.setView([parseFloat(e.latlng.lat), parseFloat(e.latlng.lng)], 17);
                if (e.latlng) {
                    markerRef.current.setLatLng(e.latlng);
                    currentPosition.current = e.latlng;
                    searchWithPosition();
                }
            }

            /* mouseup(e) {   //определять по IP

                console.log(e)
                navigator.geolocation.getCurrentPosition(success, error, {
                    enableHighAccuracy: true
                });

                setMarkerKey(prev => prev + 1);
            }, */
        });
        return null;
    };

    return (
        <div className="index-map-block-back" ref={mapBlockBack}>
            <div className="index-map-block-main-container">
                <span className="close-button-i-m-b" onClick={onClose}>
                    <CloseIcon
                        sx={{
                            color: 'rgb(237 237 237)',
                            fontSize: '35px',
                            transition: '0.05s', // плавный переход
                            '&:hover': {
                                transform: 'scale(1.1)', // увеличение
                            },
                            '&:active': {
                                transform: 'scale(0.9)', // эффект сжатия
                            }
                        }} /></span>

                <div className="index-map-block-container">

                    <div className="i-m-b-first-wrapper">

                        <div className="i-m-b-input-block">
                            <h2>Город или регион</h2>
                            <div ref={resultBlock} className="i-m-b-input-block__input">
                                <div className='i-m-b-input-block__input__input-button'>
                                    <input type="text" placeholder="Ваш город, улица, дом" onFocus={() => setIsVisibleResult(true)} value={searchInputVal} onChange={onChangeInputVal} />


                                    {
                                        isLoading ?
                                            <div className="i-m-b-input-block__input__input-button__clear-button">
                                                <div className="spinner-loader map-input-spiner"></div>
                                            </div>
                                            :
                                            searchInputVal &&
                                            <div className="i-m-b-input-block__input__input-button__clear-button">
                                                <CloseIcon onClick={() => onClearButton()}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        transition: '0.05s',
                                                        '&:hover': {
                                                            transform: 'scale(1.1)',
                                                        },
                                                        '&:active': {
                                                            transform: 'scale(0.9)',
                                                        }
                                                    }} />
                                            </div>

                                    }

                                </div>

                                {isVisibleResult &&
                                    (<div className="i-m-b-input-block__input__result">
                                        <ul>
                                            {
                                                isLoading ? <Skeleton count={2} className='skeleton' />
                                                    :
                                                    places ? places.map((obj, i) => (
                                                        <li key={i} onClick={() => onClickPosition(obj)} className="i-m-b-input-block__input__result__item">
                                                            <span>
                                                                <h4> {obj.display_name}</h4>
                                                            </span>
                                                        </li>
                                                    ))
                                                        :
                                                        !noResults && hystory && hystory.map((obj, i) => (
                                                            <li key={i} onClick={() => onClickPosition(obj)} className="i-m-b-input-block__input__result__item hystory">
                                                                <span>
                                                                    <h4> {obj.display_name}</h4>
                                                                </span>
                                                            </li>
                                                        ))
                                            }
                                            {isLoading ? <Skeleton count={1} className='skeleton' />
                                                : noResults ?
                                                    <li className="i-m-b-input-block__input__result__noresult">
                                                        <span className="i-m-b-input-block__input__noresult">
                                                            <h4><strong>Ничего не найдено</strong></h4>
                                                        </span>
                                                    </li>
                                                    :
                                                    <li className="i-m-b-input-block__input__result__item">
                                                        <span className="i-m-b-input-block__input__result__item__area">
                                                            <h4>Все регионы</h4>
                                                        </span>
                                                    </li>
                                            }

                                        </ul>

                                    </div>)
                                }


                            </div>
                            <div className="i-m-b-input-block__state" style={{ display: queryStates ? 'block' : 'none' }}>
                                <h3>Район и область</h3>
                                <input type="text" readOnly value={queryStates} />
                            </div>

                        </div>
                        <div className="i-m-b-map-container" style={{ display: isVisibleMap ? 'block' : 'none' }}>

                            <MapContainer
                                center={position || [55.75, 37.62]}
                                zoom={17}
                                style={{ height: '400px', width: '100%' }}
                                scrollWheelZoom={false}
                            >
                                <MapInstatse />
                                <MapResizer />

                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                                {/* Обработка кликов по карте */}
                                <MapEventHandler />

                                {/* Маркер - только если есть позиция */}
                                {map && (
                                    <Marker
                                        /* key={markerKey} */
                                        position={positionMarker || map.getCenter()}
                                        ref={markerRef}
                                        icon={customIcon}
                                    /* draggable={true}
                                    eventHandlers={{
                                        dragend: handleMarkerDragEnd,
                                    }} */
                                    />
                                )}
                            </MapContainer>
                        </div>
                        {
                            isVisibleMap &&
                            <div className="i-m-b-show-result-button-container">
                                <button className="i-m-b-show-result-button style-button button-color3" disabled={isLoading} onClick={() => clickShowResult()}>
                                    {isLoading ? <div className="spinner-loader show-result-button-spiner"></div> : <h5>Показать больше 1 тыс. объявлений</h5>}
                                </button>
                            </div>
                        }


                    </div>

                </div>
            </div>
        </div>

    )
}

export default IndexMapBlock;

