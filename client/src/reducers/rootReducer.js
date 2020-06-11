import { combineReducers } from "redux";
import contacts from "./contactReducer";
import current from "./currentContactReducer";

export default combineReducers({
  contacts,
  current,
});
