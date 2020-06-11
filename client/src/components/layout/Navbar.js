import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";

const Navbar = ({
  title,
  icon,
  logoutUser,
  auth: { isAuthenticated, user },
}) => {
  const handleLogout = () => {
    logoutUser();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to="/" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"> </i>{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
      <li>
        <NavLink exact activeStyle={{ textDecoration: "underline" }} to="/">
          Home
        </NavLink>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <NavLink
          exact
          activeStyle={{ textDecoration: "underline" }}
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          activeStyle={{ textDecoration: "underline" }}
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <Link to="/">
        <h1>
          <i className={icon}></i> {title}
        </h1>
      </Link>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
        <li>
          <NavLink
            exact
            activeStyle={{ textDecoration: "underline" }}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Manager",
  icon: "fas fa-id-card-alt",
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(Navbar);
