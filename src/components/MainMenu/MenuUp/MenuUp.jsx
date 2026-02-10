import React from 'react';
import './MenuUp.scss';
import IndexUserMenu from './IndexUserMenu.jsx';
import { useSelector, useDispatch } from 'react-redux';
import IndexMapBlock from '../../IndexMapBlock/IndexMapBlock.jsx';

function MenuUp() {
  const [userMenu, setOpenedUserMenu] = React.useState(false);
  const [city, setCity] = React.useState('Москва');
  const [openedMap, setOpenedMap] = React.useState(false);
  const { hystorySearch } = useSelector(state => state.positionSlice);

  const address = hystorySearch.data[0]?.address;
  const place = address?.city ?? address?.town ?? address?.village ?? null;
  console.log(place);

  React.useEffect(() => {
    if (openedMap) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openedMap]);

  return (
    <div className="menu-high">
      <div className="menu-high-inner content-width">
        <div className="menu-high-region"><li><a className="cp" onClick={() => setOpenedMap(true)}><i className="fa fa-map-marker cp" aria-hidden="true"></i>  {place || city}</a></li></div>
        <div className="user-header-menu">
          <ul>
            <li className="head-icon fav-head"><a><i className="fa fa-heart cp" aria-hidden="true"></i></a><p className="head-icon-num">3</p></li>
            <li className="head-icon message-head"><a><i className="fa fa-commenting cp" aria-hidden="true"></i></a><p className="head-icon-num">3</p></li>
            <li className="name-login-index-btn" onMouseEnter={() => (setOpenedUserMenu(true))} onMouseLeave={() => setOpenedUserMenu(false)}>
              <a className="cp">Рузан <i className="fa fa-angle-down" aria-hidden="true"></i></a>{/* <a className="cp">Вход и регистрация</a> */}
              {userMenu && (<IndexUserMenu />)}

            </li>
            <li><a className="add-ads-button cp style-button button-color">Разместить объявление</a></li>
          </ul>
        </div>
      </div>
      {openedMap && <IndexMapBlock onClose={() => setOpenedMap(false)} />}
    </div>
  )
}
export default MenuUp;
