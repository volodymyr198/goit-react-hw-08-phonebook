import { useRegisterMutation } from 'redux/userApi';

import css from './RegisterForm.module.css';

const RegisterForm = () => {
    const [regicter] = useRegisterMutation();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        regicter({ name, email, password });
        console.log(name, email, password);
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Username
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    placeholder="Username"
                />
            </label>
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
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
