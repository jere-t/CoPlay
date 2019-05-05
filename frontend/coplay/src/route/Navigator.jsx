// route/Navigation.jsx

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Login from '../views/login';
import Booking from '../views/booking';
import Connect from '../views/connect';
import Account from '../views/account';
import Admin from '../views/admin';

class Navigator extends React.Component {

  render() {
    const { classes } = this.props;

    return(
      <BrowserRouter>
          <AppBar position="sticky" hide="true">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
                Connect & Play
              </Typography>
              <Button disableRipple={true} component={Link} to="/booking" >
                Booking
              </Button>
              <Button disableRipple={true} component={Link} to="/connect">
                Connect
              </Button>
              <Button disableRipple={true} component={Link} to="/account">
                Account
              </Button>
              <Button disableRipple={false} component={Link} to="/admin">
                Admin
              </Button>
              <Button disableRipple={false} component={Link} to="/">
                {this.props.activeUser?"Logout":"Login"}
              </Button>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/booking" component={Booking}/>
            <Route path="/connect" component={Connect}/>
            <Route path="/account" component={Account}/>
            <Route path="/admin" component={Admin}/>
            <Route render={() => <h1>Error 404: Page not found</h1>}/>
          </Switch>
      </ BrowserRouter>

    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: 'left',
  },
};

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const mapStateToProps = state => ({
    activeUser: state.club.activeUser
});

export default connect(mapStateToProps) (withStyles(styles)(Navigator));
//export default connect(mapStateToProps, { logout })(withStyles(styles)(Navigator));
