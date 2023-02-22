import FormPhonebook from 'components/FormPhonebook/';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
    return (
        <div className={css.wrapper}>
            <h1 className={css.titlePhone}>Phonebook</h1>
            <FormPhonebook />
            <h2 className={css.titleCont}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
};
export default ContactsPage;
