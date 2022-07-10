import s from './ContactsItem.module.css';

const ContactsItem = ({ id, name, phone, onContactDelete }) => {
    return (
        <li className={s.item}>
            <p>{name}: {phone}</p>
            <button
                className={s.button}
                type='button'
                onClick={() => onContactDelete(id)}
            >Delete</button>
        </li>
    );
};


export default ContactsItem;