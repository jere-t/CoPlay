// route/Navigation.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Customers from '../views/customers';
import Trainings from '../views/trainings';
import Calendar from '../views/calendar';

class Navigator extends React.Component {

  render() {
    const { classes } = this.props;

    return(
      <BrowserRouter>
        <div>
          <AppBar position="sticky" hide="true">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Personal Trainer Company
              </Typography>
              <Button disableRipple={true} component={Link} to="/" >
                Customers
              </Button>
              <Button disableRipple={true} component={Link} to="/trainings">
                Trainings
              </Button>
              <Button disableRipple={true} component={Link} to="/calendar">
                Calendar
              </Button>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Customers}/>
            <Route path="/trainings" component={Trainings}/>
            <Route path="/calendar" component={Calendar}/>
            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
        </div>
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

export default withStyles(styles)(Navigator);
//export default connect(mapStateToProps, { logout })(withStyles(styles)(Navigator));
