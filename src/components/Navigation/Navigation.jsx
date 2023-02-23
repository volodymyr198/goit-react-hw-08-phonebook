import { NavLink } from 'react-router-dom';

import css from '../AppBar/AppBar.module.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" className={css.link}>
                Home
            </NavLink>
            <NavLink to="/contacts" className={css.link}>
                Contacts
            </NavLink>
        </nav>
    );
};

export default Navigation;
