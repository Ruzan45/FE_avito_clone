import React from 'react';
import { Link } from 'react-router-dom'; // заменяем все HTML ссылки для динамической подгрузки
import './MenuUp.scss';
import IndexUserMenu from './IndexUserMenu.jsx';
import Logo from '../../Ui/Logo/Logo';

function MenuUp() {
  
  const [userMenu, setOpenedUserMenu] = React.useState(false);

  return (
    <div className="menu-high">
      <div className="menu-high-inner content-width">
        
        <Logo />
        <div className="user-header-menu">
          <ul>
            <li><a className='icon lnk-color3'><i className="fa fa-heart cp" aria-hidden="true"></i><p className="head-icon-num">3</p></a></li>
            <li><a className='icon lnk-color3'><i className="fa fa-commenting cp" aria-hidden="true"></i><p className="head-icon-num">3</p></a></li>
            <li><a className='icon lnk-color3'><i class="fa fa-bell" aria-hidden="true"></i><p className="head-icon-num">3</p></a></li>

            <li className="name-login-index-btn" onMouseEnter={() => (setOpenedUserMenu(true))} onMouseLeave={() => setOpenedUserMenu(false)}>
              <Link className="cp lnk-color2" to="/profile">Рузан <i className="fa fa-angle-down" aria-hidden="true"></i></Link>{/* <a className="cp">Вход и регистрация</a> */}
              {userMenu && <IndexUserMenu />}

            </li>
            <li><a className="add-ads-button cp style-button button-color">Разместить объявление</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
export default MenuUp;
