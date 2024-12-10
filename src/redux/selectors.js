import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilterValue = selectFilter;
