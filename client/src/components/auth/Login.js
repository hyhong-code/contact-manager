import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, clearError } from "../../actions/authActions";
import { setAlert } from "../../actions/alertActions";

const Login = ({
  loginUser,
  setAlert,
  clearError,
  history,
  auth: { isAuthenticated, error },
}) => {
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error) {
      if (error !== "No token, authorization denied") {
        setAlert(error, "danger", 5000);
      }
      clearError();
    }
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginUser(user);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { loginUser, setAlert, clearError })(
  Login
);
