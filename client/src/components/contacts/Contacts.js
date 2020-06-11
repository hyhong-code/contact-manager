import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";

const Contacts = ({ contacts, filtered }) => {
  if (!contacts.length) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered
          ? filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
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
