import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "./actionTypes";

// Load user: token -> userdata
export const loadUser = () => async (dispatch) => {
  // Load token into global headers
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const resp = await axios.get("api/auth");
    dispatch({
      type: USER_LOADED,
      payload: resp.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.errors[0].msg,
    });
  }
};

// Register user: userdata -> token
export const registerUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(formData);

  try {
    const resp = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: resp.data,
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error.response.data.errors[0].msg);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errors[0].msg,
    });
  }
};

// Login user: userdata -> token
export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(formData);

  try {
    const resp = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: resp.data,
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error.response.data.errors[0].msg);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errors[0].msg,
    });
  }
};

// Logout user: destroy token
export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// Clear error
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
