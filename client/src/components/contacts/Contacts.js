import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";

const Contacts = ({ contacts }) => {
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  contacts,
});

export default connect(mapStateToProps)(Contacts);
