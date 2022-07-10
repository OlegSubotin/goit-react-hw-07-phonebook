import React from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "redux/contacts";
import s from './Filter.module.css';

const searchInputId = nanoid();

const Filter = () => {
    const value = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();

    return (
        <div className={s.wrapper}>
            <label htmlFor={searchInputId} className={s.label}>Find contacts by name</label>
            <input
                id={searchInputId}
                className={s.input}
                type='text'
                value={value}
                onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
            />
        </div>
    );
};

export default Filter;