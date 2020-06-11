import { combineReducers } from "redux";
import contact from "./contactReducer";
import auth from "./authReducer";

export default combineReducers({
  contact,
  auth,
});
