import s from './ContactsItem.module.css';

const ContactsItem = ({onContactDelete, deleting, id, name, phone }) => {
    return (
        <li className={s.item}>
            <p> <b>{name}</b>: {phone}</p>
            <button
                className={s.button}
                type='button'
                onClick={() => onContactDelete(id)}
            >
                {deleting ? 'Deleting...' : 'Delete'}
            </button>
        </li>
    );
};


export default ContactsItem;


















// ===========================================================
// import s from './ContactsItem.module.css';

// const ContactsItem = ({ id, name, phone, onContactDelete }) => {
//     return (
//         <li className={s.item}>
//             <p>{name}: {phone}</p>
//             <button
//                 className={s.button}
//                 type='button'
//                 onClick={() => onContactDelete(id)}
//             >Delete</button>
//         </li>
//     );
// };


// export default ContactsItem;