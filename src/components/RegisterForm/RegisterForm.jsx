import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import { serverError, registerError } from 'utils/notification';
import { useRegisterMutation } from 'redux/userApi';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
    const [regicter, { isLoading, error }] = useRegisterMutation();

    useEffect(() => {
        if (error) {
            if (error.status === 400) {
                registerError();
            }
            if (error.status === 500) {
                serverError();
            }
        }
    });

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        regicter({ name, email, password });
    };

    return (
        <>
            <ToastContainer autoClose={2000} position="top-center" />
            <form
                className={css.form}
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <label className={css.label}>
                    Username
                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        name="name"
                        placeholder="Username"
                        required
                    />
                </label>
                <label className={css.label}>
                    Email
                    <input
                        className={css.input}
                        type="email"
                        autoComplete="off"
                        name="email"
                        placeholder="Email - example@mail.com"
                        required
                    />
                </label>
                <label className={css.label}>
                    Password
                    <input
                        className={css.input}
                        type="password"
                        autoComplete="off"
                        name="password"
                        placeholder="Password - minimum 7 characters"
                        required
                    />
                </label>
                <button className={css.btn} type="submit" disabled={isLoading}>
                    {isLoading && <RotatingLines height="20" width="20" />}
                    Register
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
