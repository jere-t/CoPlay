// components/connect/Connect.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSport } from '../../store/actions/sport';
import { fetchGamesConnect } from '../../store/actions/game';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AvailableGame from './AvailableGame';

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('YYYY-MM-DD'),
    };
  }

  componentDidMount() {
    this.props.fetchSport(this.props.activeClubId);
    this.props.fetchGamesConnect( this.props.activeClubId, this.props.activeSportId, this.state.date);
  }

  handleChangeDate = (event) => {
    this.setState({ date: event.target.value });
    this.props.fetchGamesConnect( this.props.activeClubId, this.props.activeSportId, event.target.value);
  };

  handleChange = (event, activeSport) => {
    console.log(activeSport);
    this.props.changeActiveSport(activeSport);
    this.props.fetchGamesConnect( this.props.activeClubId, activeSport, this.state.date);
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
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Date"
            type="date"
            name="date"
            defaultValue={moment().format('YYYY-MM-DD')}
            className={classes.textField}
            onChange={this.handleChangeDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <AvailableGame idSport={this.props.activeSportId} date={this.state.date}/>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

Connect.propTypes = {
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
    fetchGamesConnect: (idClub, idSport, date) => dispatch(fetchGamesConnect(idClub, idSport, date))
});

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(Connect));
