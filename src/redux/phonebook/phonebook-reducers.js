import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  filter,
});
