import axios from "axios";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../actions/actionTypes";

// Add contact
export const addContact = (contact) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const resp = await axios.post("api/contacts", contact, config);
    dispatch({
      type: ADD_CONTACT,
      payload: resp.data,
    });
  } catch (error) {
    console.error(error.response.data.errors[0].msg);
    dispatch({
      type: CONTACT_ERROR,
      payload: error.response.data.errors[0].msg,
    });
  }
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
