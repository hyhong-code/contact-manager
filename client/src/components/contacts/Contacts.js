import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";

const Contacts = ({ contacts, filtered }) => {
  if (!contacts.length) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {filtered
        ? filtered.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        : contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
    </Fragment>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filtered: PropTypes.array,
};

const mapStateToProps = ({ contact: { contacts, filtered } }) => ({
  contacts,
  filtered,
});

export default connect(mapStateToProps)(Contacts);
