import BigVisualMenu from '../components/Home/BigVisualMenu/BigVisualMenu.jsx';
import IndexRecomendations from '../components/Home/IndexRecomendations/IndexRecomendations.jsx';
import MyAddsBlock from '../components/Home/MyAddsBlock/MyAddsBlock.jsx';
import MyFavoritesBlock from '../components/Home/MyFavoritesBlock/MyFavoritesBlock.jsx';
import RecentlyViewedBlock from '../components/Home/RecentlyViewedBlock/RecentlyViewedBlock.jsx';
import IndexRules from '../components/Home/IndexRules/IndexRules.jsx';
import MenuUp from '../components/MainMenu/MenuUp/MenuUp.jsx';
import MenuDown from '../components/MainMenu/MenuDown/MenuDown.jsx';

import '../scss/Home.scss'


function Home() {
  return (
    <>
      <div className='mainMenu'>
        <MenuUp />
        <MenuDown />
      </div>
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