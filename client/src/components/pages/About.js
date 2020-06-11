import React, { useEffect } from "react";
import { loadUser } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const About = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <h1>About this app</h1>
      <p className="my-1">
        This is a MERN stack app to help users manage contacts.
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

About.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(About);
