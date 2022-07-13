import { useDispatch, useSelector } from 'react-redux';
import {  changeFilter } from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  
  const changedFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  }
  return (
    <div className={s.filter}>
      <label className={s.label}>Find contact by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={changedFilter}
      /></label>
    </div>
  );
}

export default Filter;