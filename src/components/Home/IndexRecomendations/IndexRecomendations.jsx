import React from 'react';
import './IndexRecomendations.scss';
import RecomendationsItem from './RecomendationsItem.jsx';

function IndexRecomendations() {
    const imgObj = {  //получаем с сервера объект
        0: '/img/tovar-img/tovar-min-img/1.K8H3rLa1hyipCm0vrbAG4pwNhShJB20vqQqFKg.jpg',
        1: '/img/tovar-img/tovar-min-img/1.pDaegra1CN_AJOLY2vz5FfUjCt8gKeLYwCQK3Q.webp',
        2: '/img/tovar-img/tovar-min-img/1.fUy9P7a10aXjmTuiyzoGf-ue06UDlDui45nTpw.jpg',
    }
    

    return (
        <div className="index-recomendations">
            <h2>Рекомендации для вас</h2>
            <div className="block-recomend-item">
                <RecomendationsItem imgObj={imgObj}/>
                <RecomendationsItem imgObj={imgObj}/>
                <RecomendationsItem imgObj={imgObj}/>
                <RecomendationsItem imgObj={imgObj}/>
                
            </div>

        </div>
    )
}
export default IndexRecomendations;
