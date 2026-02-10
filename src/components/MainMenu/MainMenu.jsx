import MenuUp from './MenuUp/MenuUp.jsx';
import MenuDown from './MenuDown/MenuDown.jsx';
import Rubrikator from './rubrikator/Rubrikator.jsx';
import styles from './MainMenu.module.scss';

function MainMenu() {
    return (
        <div className={styles.root}>
            <MenuUp />
            <MenuDown/>

            {/* <Rubrikator /> */}
            

        </div>
    )
};
export default MainMenu;
