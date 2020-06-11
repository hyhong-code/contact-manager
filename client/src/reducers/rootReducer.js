import { combineReducers } from "redux";
import contact from "./contactReducer";
import auth from "./authReducer";
import alert from "./alertReducer";

export default combineReducers({
  contact,
  auth,
  alert,
});
