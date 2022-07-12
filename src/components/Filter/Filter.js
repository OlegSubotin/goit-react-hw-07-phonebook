import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from 'redux/contacts/contacts-actions';     
import s from './Filter.module.css';

const Filter = () => {
    const value = useSelector(state=>state.filter);
    const dispatch = useDispatch();


    return (
        <div className={s.wrapper}>
            <label className={s.label}>Find contacts by name</label>
            <input
                className={s.input}
                type='text'
                name='filter'
                value={value}
                onChange={e => dispatch(changeFilter(e.currentTarget.value))}
            />
        </div>
    );
};

export default Filter;