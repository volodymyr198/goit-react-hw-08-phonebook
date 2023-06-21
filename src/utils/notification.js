import { toast } from 'react-toastify';

export const loginError = () => toast.error('Sorry, wrong email or password!');

export const registerError = () =>
    toast.error(
        'Sorry, incorrect data entered! The password must contain at least 7 characters! The mail name must be at least 7 characters long and contain letters!'
    );

export const serverError = () =>
    toast.error('Sorry, something went wrong, please try again later!');

export const notifyAddContact = () => toast.success('Contact added!');

export const notifyDeliteContact = () => toast.info('Contact deleted!');

export const addContactNameError = message =>
    toast.error(`${message} is already in contacts!`);