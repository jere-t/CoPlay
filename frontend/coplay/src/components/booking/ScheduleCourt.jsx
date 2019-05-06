// components/booking/ScheduleCourt.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dates from './dates';
import CreateGame from '../game/CreateGame';



class ScheduleCourt extends Component {
  state = {
    open: false,
    fkPlayground: 0,
    time: moment().format('HH:mm'),
    date: moment().format('YYYY-MM-DD'),
  };

  handleSelectEvent = (event) => {
    alert(event.title + " start: " +event.start);
  };

  handleSelectSlot = (event) => {
    this.setState({time: moment(event.start).format('HH:mm'), fkPlayground: event.resourceId, open: true, });
  };

  handleClose = () => {
    this.setState({open: false,})
  };

  render() {
    const { classes } = this.props;
    const localizer = BigCalendar.momentLocalizer(moment);
    const courtResourceMap = this.props.courts.map((court) =>
      ({
        idPg: court.cpPlayground.idPg , nameCourt: court.cpPlayground.nameCourt,
      })
    );
    const myEventsList = this.props.games.map((game) =>
      ({
        title: game.cpGame.isPrivate?"Reservation":"OpenParty",
        start: moment(game.cpGame.startDate).toDate(),
        end: moment(game.cpGame.startDate).add(60, 'm').toDate(),//moment(game.cpGame.startDate.substring(0, 11)+game.cpGame.startTime).add(60, 'm').toDate(),
        resourceId: game.cpGame.fkPlayground,
      })
    );

    return (
      <div>
        <div>
          <BigCalendar
              selectable
              onSelectEvent={this.handleSelectEvent}
              onSelectSlot={this.handleSelectSlot}
              localizer={localizer}
              events={myEventsList}
              defaultView='day'
              views={['day']}
              style={{ height: '70vh' }}
              getNow={() => moment(this.state.date).toDate()}
              toolbar={false}
              resources={courtResourceMap}
              resourceIdAccessor="idPg"
              resourceTitleAccessor="nameCourt"
              step={60}
              timeslots={1}
              min={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), 25201, 'seconds')}
              max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -7200, 'seconds')}
          />
        <CreateGame open={this.state.open} handleClose={this.handleClose} date={this.state.date} time={this.state.time} idPg={this.state.fkPlayground} />
        </div>

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

ScheduleCourt.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  games: state.game.games,
  courts: state.playground.courts,
});


export default connect(mapStateToProps) (withStyles(styles)(ScheduleCourt));
