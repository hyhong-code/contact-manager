import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../../actions/contactActions";

const ContactForm = ({ addContact }) => {
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
    addContact(contact);
    setContact({ name: "", email: "", phone: "", type: "personal" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">Add Contact</h2>
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
          value="Add Contact"
        />
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(null, { addContact })(ContactForm);
