function IndexUserMenu () {
  return (
    <div className="index-user-menu">
                <ul>
                    <div>
                        <a href="" className="lnk-color">
                            <div className="index-u-m-rating">
                                <strong>5,0</strong>
                                <span>
                                    <ul className="index-u-m-rat-stars">
                                    <li><img src="/img/icons/star.png" alt="star"/></li>
                                    <li><img src="/img/icons/star.png" alt="star"/></li>
                                    <li><img src="/img/icons/star.png" alt="star"/></li>
                                    <li><img src="/img/icons/star.png" alt="star"/></li>
                                    <li><img src="/img/icons/star.png" alt="star"/></li>
                                    </ul>
                                </span>
                                <span>3 отзыва</span>
                            </div>
                        </a>
                    </div>
                    <div className="index-u-m-group">
                        <ul>
                            <li><a className="lnk-color" href="">Мои объявления</a></li>
                            <li><a className="lnk-color" href="">Мои отзывы</a><span className="d-text">4</span></li>
                            <li><a className="lnk-color" href="">Избранное</a><span className="d-text">3</span></li>
                            <li><a className="lnk-color" href="">Сообщения</a><span className="d-text">3</span></li>
                        </ul>
                    </div>
                    <div className="index-u-m-group">
                        <ul>
                            <li><a className="lnk-color" href="">Управление профилем</a></li>
                            <li><a className="lnk-color" href="">Настройки профиля</a></li>
                        </ul>
                    </div>
                    <div className="index-u-m-exit-button index-u-m-group">
                        <ul>
                            <li><a className="lnk-color2">Выйти из аккаунта</a></li>
                        </ul>
                    </div>
                </ul>
      </div>
  )
}
export default IndexUserMenu;