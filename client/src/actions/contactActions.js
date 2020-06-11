import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

// Add contact
export const addContact = (contact) => async (dispatch) => {
  contact.id = uuidv4();
  dispatch({
    type: ADD_CONTACT,
    payload: contact,
  });
};

// Delete contact

// Set current contact

// Clear current contact

// Update contacts

// Filter contacts

// Clear filter
