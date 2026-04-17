import Raiting from "../../Ui/Raiting/Raiting";

function IndexUserMenu () {
  return (
    <div className="index-user-menu">
                <ul>
                    <div>
                        <a href="" className="lnk-color">
                            <Raiting />
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