import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';

import css from './AppBar.module.css';

const AppBar = () => {
    return (
        <header className={css.header__wrapper}>
            <Navigation />
            <UserMenu />
            <AuthNav />
            {/* {isLoggedIn ? <UserMenu/> : <AuthNav/>} */}
        </header>
    );
};

export default AppBar;
