// components/booking/Booking.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ScheduleCourt from './ScheduleCourt';

class Booking extends Component {
  state = {
    //When sport is create need to config this state
    activeSport: 1,
    sports: [{idSport:1, nameSport:"Tennis"},{idSport:2, nameSport:"Padel"},{idSport:3, nameSport:"Squash"}],
  };

  handleChange = (event, activeSport) => {
    console.log(activeSport);
    this.setState({ activeSport });

  };

  render() {
    const { classes } = this.props;
    const sportTab = this.state.sports.map((sport, index) =>
      <Tab label={sport.nameSport} value={sport.idSport} key={index} />
    );


    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.activeSport}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {sportTab}
          </Tabs>
        </Paper>
        <ScheduleCourt idSport={this.state.activeSport}/>
      </div>
    );
  }
}


const styles = {
  root: {
    flexGrow: 1,
  },
};

Booking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Booking);
