import css from './UserMenu.module.css';

const UserMenu = () => {
    return (
        <div className={css.userMenu__wrapper}>
            <p className={css.userMenu__text}>
                Welcome <span></span>
            </p>
            <button className={css.userMenu__btn} type="button">
                Log out
            </button>
        </div>
    );
};

export default UserMenu;
