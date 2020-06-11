import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterContacts, clearFilter } from "../../actions/contactActions";

const ContactFilter = ({ filterContacts, clearFilter }) => {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
    if (evt.target.value) {
      filterContacts(evt.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form action="">
      <input
        type="text"
        value={text}
        placeholder="Filter Contacts"
        onChange={handleChange}
      />
    </form>
  );
};

ContactFilter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default connect(null, { filterContacts, clearFilter })(ContactFilter);
