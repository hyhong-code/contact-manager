import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alerts = ({ alert }) => {
  return (
    !!alert.length &&
    alert.map((a) => (
      <div key={a.id} className={`alert alert-${a.type}`}>
        <i className="fas fa-info-circle"></i> {a.msg}
      </div>
    ))
  );
};

Alerts.propTypes = { alert: PropTypes.array.isRequired };

const mapStateToProps = ({ alert }) => ({ alert });

export default connect(mapStateToProps)(Alerts);
