import axios from "axios";
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from '../contacts/contacts-actions';

axios.defaults.baseURL = 'https://62c6b3892b03e73a58d49b8b.mockapi.io';

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest);
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    };    

    // axios
    //     .get('/contacts')
    //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
    //     .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = ({ name, phone }) => async dispatch => {
    const contact = {
        name, phone,
    };

    dispatch(addContactRequest);

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }

    // axios
    //     .post('/contacts', contact)
    //     .then(({ data }) =>
    //         dispatch(addContactSuccess(data)),
    //     )
    //     .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest);

    try {
        await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactSuccess(contactId))
    } catch (error) {
        dispatch(deleteContactError(error))
    }

//     axios
//         .delete(`/contacts/${contactId}`)
//         .then(() => dispatch(deleteContactSuccess(contactId)))
//         .catch(error => dispatch(deleteContactError(error)));
};