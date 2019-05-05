// components/booking/Booking.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSport } from '../../store/actions/sport';
import { fetchCourt } from '../../store/actions/playground';
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
  };

  componentDidMount() {
    this.props.fetchSport(this.props.activeClubId);
    this.props.fetchCourt(this.props.activeClubId, this.props.activeSportId);
  }

  handleChange = (event, activeSport) => {
    this.props.changeActiveSport(activeSport);
    this.props.fetchCourt(this.props.activeClubId, activeSport);
  };

  render() {
    const { classes } = this.props;
    const sportTab = this.props.sports.map((sport, index) =>
      <Tab label={sport.cpSport.nameSport} value={sport.cpSport.idSport} key={index} />
    );


    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.props.activeSportId}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {sportTab}
          </Tabs>
        </Paper>
        <ScheduleCourt idSport={this.props.activeSportId}/>
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

const mapStateToProps = state => ({
  activeClubId: state.club.activeClubId,
  activeSportId: state.sport.activeSportId,
  sports: state.sport.sports,
});


const mapDispatchToProps = (dispatch) => ({
    fetchSport: (idClub) => dispatch(fetchSport(idClub)),
    changeActiveSport: (activeSport) => dispatch({ type: 'CHANGE_ACTIVE_SPORT', activeSportId: activeSport }),
    fetchCourt: (idClub, idSport) => dispatch(fetchCourt(idClub, idSport)),
});

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(Booking));
