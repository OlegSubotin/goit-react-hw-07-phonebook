import ContactsItem from 'components/ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import s from './ContactsList.module.css';


const ContactsList = () => {
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
    const dispatch = useDispatch();

    const onContactDelete = (id) => {
        dispatch(contactsOperations.deleteContact(id));
    };

    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, phone }) => (
                <ContactsItem
                    key={id}
                    id={id}
                    name={name}
                    phone={phone}
                    onContactDelete={onContactDelete}
                />
            ))}
        </ul>
    );
};

export default ContactsList;