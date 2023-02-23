import css from './LoginForm.module.css';

const LoginForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Email
                <input
                    className={css.input}
                    type="email"
                    name="email"
                    placeholder="Email"
                />
            </label>
            <label className={css.label}>
                Password
                <input
                    className={css.input}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </label>
            <button className={css.btn} type="submit">
                Log In
            </button>
        </form>
    );
};

export default LoginForm;
