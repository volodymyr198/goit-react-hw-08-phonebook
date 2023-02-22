import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AppBar from 'components/AppBar';
import Container from 'components/Container';
import css from './App.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const App = () => {
    return (
        <Container>
            <AppBar />
            <Suspense fallback={<p className={css.default}>...loading</p>}>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/contacts" element={<ContactsPage />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </Suspense>
        </Container>
    );
};

export default App;
