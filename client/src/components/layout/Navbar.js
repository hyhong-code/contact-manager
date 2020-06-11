import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <Link to="/">
        <h1>
          <i className={icon}></i> {title}
        </h1>
      </Link>
      <ul>
        <li>
          <NavLink exact activeStyle={{ textDecoration: "underline" }} to="/">
            Home
          </NavLink>
        </li>
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

export default Navbar;
