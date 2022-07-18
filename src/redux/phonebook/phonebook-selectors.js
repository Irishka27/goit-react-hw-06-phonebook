import { createSelector } from '@reduxjs/toolkit';
const getFilterValueState = state => state.contacts.filter;
const getItemsValueState = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [ getItemsValueState, getFilterValueState],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  }
);
export { getFilterValueState, getItemsValueState, getVisibleContacts };