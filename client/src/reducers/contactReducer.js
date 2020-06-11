import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../actions/actionTypes";

const INITIAL_STATE = [
  {
    id: 1,
    name: "Denny Hong",
    email: "hong@gmail.com",
    phone: "206-666-6666",
    type: "professional",
  },
  {
    id: 2,
    name: "Lily Yuan",
    email: "lily@gmail.com",
    phone: "206-626-6666",
    type: "professional",
  },
  {
    id: 3,
    name: "Owen Whiter",
    email: "owen@gmail.com",
    phone: "206-636-6666",
    type: "personal",
  },
];

const contactReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};

export default contactReducer;
