import React, { useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import { connect } from "react-redux";
import { loadUser } from "../../actions/authActions";
import PropTypes from "prop-types";

const Home = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="grid-2">
      <div className="">
        <ContactForm />
      </div>
      <div className="">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

Home.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(Home);
