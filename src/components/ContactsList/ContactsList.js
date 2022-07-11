import ClipLoader from "react-spinners/ClipLoader";
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactSlice';
import ContactsItem from 'components/ContactsItem';
import s from './ContactsList.module.css';

const ContactsList = () => {
    const { data, isFetching } = useFetchContactsQuery();
    const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();
    return (
        <>
            {isFetching &&
                <ClipLoader className={s.loader} />
            }
            {data &&
                <ul className={s.list}>
                    {data.map(({ id, name, phone }) => (
                        <ContactsItem
                            key={id}
                            id={id}
                            name={name}
                            phone={phone}
                            onContactDelete={deleteContact}
                            deleting={isDeleting}
                        />
                    ))}
                </ul>
            }
        </>
    );
};

export default ContactsList;
































// =======================================================================
// import ContactsItem from 'components/ContactsItem';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { contactsOperations, contactsSelectors } from 'redux/contacts';
// import s from './ContactsList.module.css';
// import { useFetchContactsQuery } from '../../redux/contacts/contactSlice';

// const ContactsList = () =>{
//     const { data } = useFetchContactsQuery();

//     const contacts = data;

//     // const onContactDelete = (id) => {
//     //     dispatch(contactsOperations.deleteContact(id));
//     // };

//     return (
//         <ul className={s.list}>
//             {contacts.map(({ id, name, phone }) => (
//                 <ContactsItem
//                     key={id}
//                     id={id}
//                     name={name}
//                     phone={phone}
//                     // onContactDelete={onContactDelete}
//                 />
//             ))}
//         </ul>
//     );
// };

// export default ContactsList;