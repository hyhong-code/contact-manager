import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../actions/actionTypes";

const INITIAL_STATE = null;

const currentContactReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT:
      return payload;
    case CLEAR_CURRENT:
      return null;
    default:
      return state;
  }
};

export default currentContactReducer;
