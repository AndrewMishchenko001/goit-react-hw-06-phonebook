import { ADD_CONTACTS, DELETE_CONTACTS, UPDATE_FILTER } from "./contacts-types";

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACTS:
      return [payload, ...state];
    case DELETE_CONTACTS:
      return state.filter((contact) => contact.id !== payload.id);
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER:
      return payload.text;
    case CLEAR_FILTER:
      return;
    default:
      return state;
  }
};
