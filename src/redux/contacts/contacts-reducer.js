import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from './contacts-actions';

const items = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter
});



// ===============================================================================
// redux

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(({id}) => id !== payload);
        
//         default:
//             return state;
//     };
// };





// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case [actions.changeFilter]:
//             return payload;
        
//         default:
//             return state;
//     };
// };