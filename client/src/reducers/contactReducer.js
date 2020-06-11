import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  contacts: [
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
  ],
  current: null,
  filtered: null,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${payload}`, "gi");
          return !!contact.name.match(regex) || !!contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default contactReducer;
