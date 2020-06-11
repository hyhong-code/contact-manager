import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deleteContact,
  setCurrentContact,
  clearCurrentContact,
} from "../../actions/contactActions";

const ContactItem = ({
  contact,
  deleteContact,
  setCurrentContact,
  clearCurrentContact,
}) => {
  const { name, _id, email, phone, type } = contact;
  const handleDelete = () => {
    deleteContact(_id);
    clearCurrentContact();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left ">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={`badge ${
            type === "professional" ? "badge-success" : "badge-primary"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.substring(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrentContact(contact)}
        >
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-danger btn-sm">
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
  setCurrentContact: PropTypes.func.isRequired,
  clearCurrentContact: PropTypes.func.isRequired,
};

export default connect(null, {
  deleteContact,
  clearCurrentContact,
  setCurrentContact,
})(ContactItem);
