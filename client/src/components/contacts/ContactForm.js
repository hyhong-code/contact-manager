import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addContact,
  clearCurrentContact,
  updateContact,
} from "../../actions/contactActions";

const ContactForm = ({
  addContact,
  current,
  clearCurrentContact,
  updateContact,
}) => {
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const handleChange = (evt) => {
    setContact({ ...contact, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!current) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearCurrentContact();
    setContact({ name: "", email: "", phone: "", type: "personal" });
  };

  const clearAll = () => {
    clearCurrentContact();
    setContact({ name: "", email: "", phone: "", type: "personal" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">
        {!current ? "Add Contact" : "Update Contact"}
      </h2>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        value={email}
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="text"
        value={phone}
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />
      <h5>Contact type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={handleChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={handleChange}
      />{" "}
      Professional
      <div>
        <input
          className="btn btn-primary btn-block"
          type="submit"
          value={!current ? "Add Contact" : "Update Contact"}
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  current: PropTypes.object,
  clearCurrentContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contact: { current } }) => ({
  current,
});

export default connect(mapStateToProps, {
  addContact,
  clearCurrentContact,
  updateContact,
})(ContactForm);
