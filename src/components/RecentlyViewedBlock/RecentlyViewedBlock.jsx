import '../../scss/indexStickyBlock.scss'

function RecentlyViewedBlock () {
  return (
    <div className="index-sticky-block">
                <h3>Недавно просмотренное</h3>
                <div className="sticky-contain">
                    <a className="sticky-item" href="add1.rt">
                        <div className="sticky-img-block"><img src="/img/tovar-img/tovar-min-img/Screenshot_1.png" alt=""/></div>
                        <div className="sticky-deskription">
                            <p className="lnk-color">Помидоры домашние разные сорта</p>
                            <p className="price-sticky">6 000 ₽</p>
                            <p className="d-text">Помидоры домашние, с собственного огорода. Самовывоз, московск...</p>
                        </div>
                    </a>
                    <a className="sticky-item" href="add1.rt">
                        <div className="sticky-img-block"><img src="/img/tovar-img/tovar-min-img/Screenshot_4.png" alt=""/></div>
                        <div className="sticky-deskription">
                            <p className="lnk-color">Помидоры домашние разные сорта</p>
                            <p className="price-sticky">6 000 ₽</p>
                            <p className="d-text">Помидоры домашние, с собственного огорода. Самовывоз, московск...</p>
                        </div>
                    </a>
                    <a className="sticky-item" href="add1.rt">
                        <div className="sticky-img-block"><img src="/img/tovar-img/tovar-min-img/Screenshot_9.png" alt=""/></div>
                        <div className="sticky-deskription">
                            <p className="lnk-color">Помидоры домашние разные сорта</p>
                            <p className="price-sticky">6 000 ₽</p>
                            <p className="d-text">Помидоры домашние, с собственного огорода. Самовывоз, московск...</p>
                        </div>
                    </a>
                    <a className="sticky-item" href="add1.rt">
                        <div className="sticky-img-block"><img src="/img/tovar-img/tovar-min-img/Screenshot_7.png" alt=""/></div>
                        <div className="sticky-deskription">
                            <p className="lnk-color">Помидоры домашние разные сорта</p>
                            <p className="price-sticky">6 000 ₽</p>
                            <p className="d-text">Помидоры домашние, с собственного огорода. Самовывоз, московск...</p>
                        </div>
                    </a>
                </div>
                
    </div>
  )
}

export default RecentlyViewedBlock;