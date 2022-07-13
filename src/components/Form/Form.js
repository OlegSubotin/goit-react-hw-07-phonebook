import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ClipLoader from "react-spinners/ClipLoader";
import { useAddContactMutation, useFetchContactsQuery } from 'redux/contacts/contactSlice';
import s from './Form.module.css';

const Form = () => {
    const [params, setParams] = useState({ name: '', phone: '' });
    const [addContact, { isLoading }] = useAddContactMutation();
    const { data } = useFetchContactsQuery();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        setParams({ ...params, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        data.find(({ name, phone }) => params.name === name || params.phone === phone)
            ? Notify.failure(`${params.name} exists in your phonebook`)
            : addContactOnSubmit();
    };

    const addContactOnSubmit = () => {
        addContact(params);
        Notify.success(`${params.name} has been added to the phone book`);
        reset();
    };

    const reset = () => {
        setParams({ name: '', phone: '' });
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label} > Name </label>
            <input
                className={s.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={params.name}
                onChange={handleChange}

            />
            <label className={s.label}>Number</label>
            <input
                className={s.input}
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={params.phone}
                onChange={handleChange}
            />
            <button className={s.submit} type="submit">
                {isLoading ? <ClipLoader size='10px' /> : 'Add contact'}
            </button>
        </form>
    );
};

export default Form;