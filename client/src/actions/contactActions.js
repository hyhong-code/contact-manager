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
export const setCurrentContact = (contact) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: contact,
  });
};

// Clear current contact
export const clearCurrentContact = () => async (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

// Update contacts
export const updateContact = (contact) => async (dispatch) => {
  dispatch({
    type: UPDATE_CONTACT,
    payload: contact,
  });
};

// Filter contacts
export const filterContacts = (text) => async (dispatch) => {
  dispatch({
    type: FILTER_CONTACT,
    payload: text,
  });
};

// Clear filter
export const clearFilter = () => async (dispatch) => {
  dispatch({
    type: CLEAR_FILTER,
  });
};
