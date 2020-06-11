import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getContacts } from "../../actions/contactActions";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

const Contacts = ({ contacts, filtered, loading, getContacts }) => {
  useEffect(() => {
    getContacts();
  }, []);

  if (contacts && !contacts.length && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  filtered: PropTypes.array,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contact: { contacts, filtered, loading } }) => ({
  contacts,
  filtered,
  loading,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
