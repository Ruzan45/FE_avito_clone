import {useState} from 'react';
import CityButton from '../../Ui/CityButton/CityButton.jsx'
import IndexMapBlock from '../../Home/IndexMapBlock/IndexMapBlock.jsx';
import './MenuDown.scss';

function MenuDown() {
    const [openedMap, setOpenedMap] = useState(false);
    return (
        <div className="menuDown content-width">
            <div className="all-catigories-button cp style-button button-color">
                <div><i className="fa fa-bars" aria-hidden="true"></i>{/* <img src="/img/close.svg" /> */}</div><a>Все категории</a>
            </div>

            <div className="search-block">
                <div className="search-form"><label><input className="search-input" autoComplete="off" maxLength="100" type="text" placeholder="Поиск по объявлениям" /></label>
                    <div className="search-result"><ul>
                        <li><a>Яица домашние</a></li>
                        <li><a>Помидоры</a></li>
                        <li><a>Мясо Говядина</a></li>
                        <li><a>Гусятина</a></li>
                        <li><a>Гусятина</a></li>
                        <li><a>Гусятина</a></li>
                        <li><a>Гусятина</a></li>
                        <li><a>Гусятина</a></li>
                    </ul>
                    </div>

                </div>

                <div className="search-button"><button type="button" className="cp style-button button-color"><span>Найти</span></button></div>
            </div>
            <CityButton onOpen={() => setOpenedMap(true)} openedMap={openedMap} />
            {openedMap && <IndexMapBlock onClose={() => setOpenedMap(false)} />}
        </div>
    )
}
export default MenuDown;
