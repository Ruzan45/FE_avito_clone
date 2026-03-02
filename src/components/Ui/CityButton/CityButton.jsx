import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';

import Cookies from 'js-cookie';
import { hystoryToRedux } from '../../../Redux/slices/positionSlice.js';

import './CityButton.scss'

function MapButton({onOpen, openedMap}) {
    const dispatch = useDispatch();
    
    const [openedQuestion, setOpenedQuestion] = useState(false);
    const { hystorySearch } = useSelector(state => state.positionSlice);
    const windowQuestion = useRef(null);

    const address = hystorySearch.data[0]?.address;
    const place = address?.city ?? address?.town ?? address?.village ?? null;
    const baseCity = {
        "place_id": 180848080,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 583204619,
        "lat": "55.7558470",
        "lon": "37.6177036",
        "class": "highway",
        "type": "milestone",
        "place_rank": 30,
        "importance": 0.45205081730259244,
        "addresstype": "highway",
        "name": "Нулевой километр",
        "display_name": "Нулевой километр, проезд Воскресенские Ворота, 18, 62, Тверской район, Москва, Центральный федеральный округ, 103265, Россия",
        "address": {
            "highway": "Нулевой километр",
            "road": "проезд Воскресенские Ворота",
            "quarter": "18",
            "suburb": "Тверской район",
            "city": "Москва",
            "state": "Москва",
            "ISO3166-2-lvl4": "RU-MOW",
            "region": "Центральный федеральный округ",
            "postcode": "103265",
            "country": "Россия",
            "country_code": "ru"
        },
        "boundingbox": [
            "55.7557970",
            "55.7558970",
            "37.6176536",
            "37.6177536"
        ]
    }

    useEffect(() => { //закрываем окошко с вопросом с результатом поиска при клике вне него
        let handleClickOutside = (e) => {
            if (!(windowQuestion.current && windowQuestion.current.contains(e.target))) { setOpenedQuestion(false) };
        }
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        }
    }, []);

    useEffect(() => {
        if (openedMap) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [openedMap]);
    useEffect(() => {
        const cookie = Cookies.get('question');
        !cookie && setOpenedQuestion(true);
    }, [])


    const questionFn = (click) => {
        if (click === true) {
            setOpenedQuestion(false);
            Cookies.set('question', { expires: 1, path: '/' });
            !hystorySearch.data[0] && dispatch(hystoryToRedux(baseCity)); //если нет последнего сохранённого города, то сохранить базовый город Москва
        } else {
            setOpenedQuestion(false);
            onOpen();
        }
    };
    return (
        <div className="city-button">
            <div className="city-button__location">
                <span className="cp city-button__location__text lnk-color2" onClick={() => onOpen()}><i className="fa fa-map-marker cp" aria-hidden="true"></i>  {place || 'Москва'}</span>
                {openedQuestion &&
                    <div ref={windowQuestion} className="city-button__location__window">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 15 L15 15 Q15 15 0 0 Z" fill="#ffffff" />
                        </svg>
                        <div className='city-button__location__window__question'>
                            <div className='city-button__location__window__question__text'><span>Это ваш город?</span></div>
                            <div className='city-button__location__window__question__buttons'>
                                <div><button className='cp style-button button-color3' onClick={() => questionFn(true)}>Да</button></div>
                                <div><button className='cp style-button button-color2' onClick={() => questionFn(false)}>Изменить</button></div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default MapButton;
