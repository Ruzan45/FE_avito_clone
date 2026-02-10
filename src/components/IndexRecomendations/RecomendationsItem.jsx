import React from 'react'

function RecomendationsItem({imgObj}) {
    const [activeImg, setActiveImg] = React.useState(0);
    const [isAllLoaded, setAllLoaded] = React.useState(false);
    const [loadedCount, setLoadedCount] = React.useState(0);
    React.useEffect(() => {
      loadedCount === Object.keys(imgObj).length && setAllLoaded(true);
    }, [loadedCount])
    
    return (
        <div className="recomendations-item slider-head">
            <div className="recomend-img" onMouseLeave={() => (setActiveImg(0))}>
                {!isAllLoaded && <div className="spinner-loader recomend-item-spinner"> </div>}
                {Object.entries(imgObj).map((obj) => (
                    <img key={obj[0]} src={obj[1]} alt="" onLoad={()=>(setLoadedCount(prev => prev + 1))} style={{display: isAllLoaded && activeImg == obj[0] ? 'block' : 'none'}} />
                ))}


                <div className='tmb-wrap'>
                    <div className='tmb-wrap-table'>
                        {Object.entries(imgObj).map((obj, i) => (
                            <div onMouseEnter={() => (setActiveImg(i))} key={obj[0]} ></div>
                        ))
                        }
                    </div>
                </div>
            </div>
            <div className="recomend-item-deskrip">
                <div className="item-title-block"><a className="item-title lnk-color2" href=""><h6>Дом 242,2 м² на участке 14,8 сот.</h6></a>
                    <div className="index-add-to-fav"><i className="fa fa-heart-o" aria-hidden="true"></i> {/* <i className="fa fa-heart" aria-hidden="true"></i> */}</div>
                </div>
                <div className="index-item-price">
                    <h4 className="price"><strong>16 700 000 ₽</strong></h4>{/* <h6 className="old-price">17 300 000 ₽</h6> */}
                </div>
                <div className="index-item-place">
                    <p className="d-text">г.Тюмень, р-н Восточный</p>
                </div>
            </div>
        </div>
    )
}

export default RecomendationsItem;