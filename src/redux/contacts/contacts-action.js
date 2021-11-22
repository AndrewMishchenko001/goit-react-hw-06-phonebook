import { ADD_CONTACTS, DELETE_CONTACTS, UPDATE_FILTER } from "./contacts-types";

export const addContacts = (id, name, number) => ({
  type: actionTypes.ADD_CONTACTS,
  payload: { id, name, number },
});

export const deleteContacts = (id) => ({
  type: actionTypes.DELETE_CONTACTS,
  payload: { id },
});

export const updateFilter = (text) => ({
  type: actionTypes.UPDATE_FILTER,
  payload: { text },
});

export const deleteFilter = () => ({
  type: actionTypes.CLEAR_FILTER,
});
