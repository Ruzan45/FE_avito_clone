import React from 'react';
import BigVisualMenu from '../components/BigVisualMenu/BigVisualMenu.jsx';
import IndexRecomendations from '../components/IndexRecomendations/IndexRecomendations.jsx';
import MyAddsBlock from '../components/MyAddsBlock/MyAddsBlock.jsx';
import MyFavoritesBlock from '../components/MyFavoritesBlock/MyFavoritesBlock.jsx';
import RecentlyViewedBlock from '../components/RecentlyViewedBlock/RecentlyViewedBlock.jsx';
import IndexRules from '../components/IndexRules/IndexRules.jsx';



import '../scss/Home.scss'


function Home () {
  return (
  <>
    <div className="content content-width">
        <div className="index-content">
                <BigVisualMenu />
                <IndexRecomendations />
       </div>
       <div className="index-sticky-container">
            <MyAddsBlock /> {/* переделать под один компонент с передачей пропса */}
            <MyFavoritesBlock />
            <RecentlyViewedBlock />
            <IndexRules />
            
        </div>
        
    </div>
  </>
  )
}

export default Home;