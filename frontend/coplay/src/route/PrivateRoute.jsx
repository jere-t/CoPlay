// route/PrivateRoute.jsx

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={ props =>
        rest.isLog?(
          <Component {...props} />
        ):(
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        ) }
    />
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.account.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
