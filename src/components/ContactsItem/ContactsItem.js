import s from './ContactsItem.module.css';

const ContactsItem = ({ id, name, number, onContactDelete }) => {
    return (
        <li className={s.item}>
            <p>{name}: {number}</p>
            <button
                className={s.button}
                type='button'
                onClick={() => onContactDelete(id)}
            >Delete</button>
        </li>
    );
};


export default ContactsItem;