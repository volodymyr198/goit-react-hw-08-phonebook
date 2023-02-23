import { useEffect } from 'react';
import { useLogOutMutation } from 'redux/userApi';

import css from './UserMenu.module.css';

const UserMenu = () => {
    const [logOut] = useLogOutMutation();

    return (
        <div className={css.userMenu__wrapper}>
            <p className={css.userMenu__text}>
                Welcome <span></span>
            </p>
            <button
                className={css.userMenu__btn}
                type="button"
                onClick={() => logOut()}
            >
                Log out
            </button>
        </div>
    );
};

export default UserMenu;
