import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...otherProps
}) => {
  return (
    <Route
      {...otherProps}
      render={(routeProps) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PrivateRoute);
