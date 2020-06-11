import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import { registerUser, clearError } from "../../actions/authActions";

const Register = ({
  alert,
  setAlert,
  registerUser,
  clearError,
  auth: { isAuthenticated, error },
  history,
}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

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
  }, [error, isAuthenticated, history]);

  const { name, email, password, password2 } = user;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!name || !email || !password) {
      setAlert("Please fill out all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerUser(user);
    }
    setUser({ name: "", email: "", password: "", password2: "" });
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Comfirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

Register.propTypes = {
  alert: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

const mapStateToProps = ({ alert, auth }) => ({ alert, auth });

export default connect(mapStateToProps, { setAlert, registerUser, clearError })(
  Register
);
