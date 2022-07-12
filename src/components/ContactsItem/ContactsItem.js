import ClipLoader from "react-spinners/ClipLoader";
import { useDeleteContactMutation } from 'redux/contacts/contactSlice';
import s from './ContactsItem.module.css';

const ContactsItem = ({ id, name, phone }) => {
    const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();

    return (
        <li className={s.item}>
            <p> <b>{name}</b>: {phone}</p>
            <button
                className={s.button}
                type='button'
                onClick={() => deleteContact(id)}
                disabled={isDeleting}
            >
                {isDeleting ? <ClipLoader size={10}/> : 'Delete'}
            </button>
        </li>
    );
};


export default ContactsItem;