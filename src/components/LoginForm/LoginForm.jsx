import { useLoginMutation } from 'redux/userApi';

import css from './LoginForm.module.css';

const LoginForm = () => {
    const [login] = useLoginMutation();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        login({ email, password });
        console.log(email, password);
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
