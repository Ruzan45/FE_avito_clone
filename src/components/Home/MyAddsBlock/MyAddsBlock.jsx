import '../../../scss/indexStickyBlock.scss'

function MyAddsBlock () {
  return (
    <div className="index-sticky-block">
                <h3>Мои объявления</h3>
                <div className="sticky-contain">
                    <a className="sticky-item" href="add1.rt">
                        <div className="sticky-img-block"><img src="/img/tovar-img/tovar-min-img/Screenshot_1.png" alt=""/></div>
                        <div className="sticky-deskription">
                            <p className="lnk-color">Помидоры домашние разные сорта</p>
                            <p className="price-sticky">6 000 ₽</p>
                            <p className="d-text">Осталось 15 дней</p>
                            <div className="sticky-info">
                                <div><i className="fa fa-eye d-text" aria-hidden="true"></i> <p className="d-text">117</p></div>
                                <div><i className="fa fa-heart d-text" aria-hidden="true"></i> <p className="d-text">2</p></div>
                            </div>
                        </div>
                    </a>
                    <a className="sticky-item" href="add1.rt">
                        <div className="sticky-img-block"><img src="/img/tovar-img/tovar-min-img/Screenshot_4.png" alt=""/></div>
                        <div className="sticky-deskription">
                            <p className="lnk-color">Помидоры домашние разные сорта</p>
                            <p className="price-sticky">6 000 ₽</p>
                            <p className="d-text">Осталось 15 дней</p>
                            <div className="sticky-info">
                                <div><i className="fa fa-eye d-text" aria-hidden="true"></i> <p className="d-text">117</p></div>
                                <div><i className="fa fa-heart d-text" aria-hidden="true"></i> <p className="d-text">2</p></div>
                            </div>
                        </div>
                    </a>
                    <a className="sticky-item" href="add1.rt">
                        <div className="sticky-img-block"><img src="/img/tovar-img/tovar-min-img/Screenshot_9.png" alt=""/></div>
                        <div className="sticky-deskription">
                            <p className="lnk-color">Помидоры домашние разные сорта</p>
                            <p className="price-sticky">6 000 ₽</p>
                            <p className="d-text">Осталось 15 дней</p>
                            <div className="sticky-info">
                                <div><i className="fa fa-eye d-text" aria-hidden="true"></i> <p className="d-text">117</p></div>
                                <div><i className="fa fa-heart d-text" aria-hidden="true"></i> <p className="d-text">2</p></div>
                            </div>
                        </div>
                    </a>
                    <a className="sticky-item" href="add1.rt">
                        <div className="sticky-img-block"><img src="/img/tovar-img/tovar-min-img/Screenshot_7.png" alt=""/></div>
                        <div className="sticky-deskription">
                            <p className="lnk-color">Помидоры домашние разные сорта</p>
                            <p className="price-sticky">6 000 ₽</p>
                            <p className="d-text">Осталось 15 дней</p>
                            <div className="sticky-info">
                                <div><i className="fa fa-eye d-text" aria-hidden="true"></i> <p className="d-text">117</p></div>
                                <div><i className="fa fa-heart d-text" aria-hidden="true"></i> <p className="d-text">2</p></div>
                            </div>
                        </div>
                    </a>
                </div>
                <a href=""><button className="cp style-button button-color2">Все мои объявления</button></a>
                
            </div>
  )
}

export default MyAddsBlock;
