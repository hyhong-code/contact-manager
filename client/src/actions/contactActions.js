import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../actions/actionTypes";

// Add contact
export const addContact = (contact) => async (dispatch) => {
  contact.id = uuidv4();
  dispatch({
    type: ADD_CONTACT,
    payload: contact,
  });
};

// Delete contact
export const deleteContact = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CONTACT,
    payload: id,
  });
};

// Set current contact

// Clear current contact

// Update contacts

// Filter contacts

// Clear filter
