import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ClipLoader from "react-spinners/ClipLoader";
import { useAddContactMutation } from 'redux/contacts/contactSlice';
import s from './Form.module.css';

const Form = () => {
    const [params, setParams] = useState({ name: '', phone: '' });
    const [addContact, { isLoading }] = useAddContactMutation();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        setParams({ ...params, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addContact(params);
        Notify.info(`${params.name} has been added to the phone book`);
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
































// =========================================================================
// import { useState } from "react";
// import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from "react-redux";
// import { contactsOperations, contactsSelectors } from 'redux/contacts';
// import s from './Form.module.css';

// function Form() {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const dispatch = useDispatch();
//     const contacts = useSelector(contactsSelectors.getContacts);

//     const nameInputId = nanoid();
//     const phoneInputId = nanoid();

//     const handleChange = e => {
//         const { name, value } = e.currentTarget;
//         switch (name) {
//             case 'name': setName(value);
//                 break;
//             case 'phone': setPhone(value);
//                 break;
//             default: return;
//         };
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (contacts.find(contact => contact.name === name || contact.phone === phone)) {
//             alert(`! ${name} exist in the book !`)
//         } else {
//             dispatch(contactsOperations.addContact({ name, phone }));
//             reset();
//         };        
//     }; 
    
//     const reset = () => {
//         setName('');
//         setPhone('');
//     };

    // return (
    //     <form className={s.form} onSubmit={handleSubmit}>
    //         <label className={s.label} htmlFor={nameInputId}> Name </label>
    //         <input
    //             className={s.input}
    //             type="text"
    //             name="name"
    //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //             required
    //             value={name}
    //             onChange={handleChange}
    //             id={nameInputId}
    //         />
    //         <label className={s.label} htmlFor={phoneInputId}>Number</label>
    //         <input
    //             className={s.input}
    //             type="tel"
    //             name="phone"
    //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //             required
    //             value={phone}
    //             onChange={handleChange}
    //             id={phoneInputId}
    //         />
    //         <button className={s.submit} type="submit">Add contact</button>
    //     </form>
    // );
// };

// export default Form;