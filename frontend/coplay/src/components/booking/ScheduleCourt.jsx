// components/booking/ScheduleCourt.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../../store/actions/game';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
  };

  componentDidMount() {
    this.props.fetchGames( this.props.activeClubId, this.props.activeSportId, moment().format('YYYY-MM-DD'));
  }

  handleChangeDate = (event) => {
    //this.setState({ [event.target.name]: event.target.value });
    this.props.fetchGames( this.props.activeClubId, this.props.activeSportId, event.target.value);
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
    console.log(courtResourceMap);
    const myEventsListi = this.props.games.map((game, index) =>
      ({
        title: game.cpGame.isPrivate?"Reservation":"OpenParty",
        start: moment("2019-06-27T13:00:00.000Z").toDate(),//moment(game.cpGame.startDate.substring(0, 11)+game.cpGame.startTime+".000Z").toDate(),
        end: moment("2019-06-27T15:00:00.000Z").toDate(),//moment(game.cpGame.startDate.substring(0, 11)+game.cpGame.startTime+".000Z").add(60, 'm').toDate(),
        resourceId: game.cpGame.fkPlayground,
      })
    );
    const myEventsList = [
  {title: "Double", start: moment("2019-05-06T10:00:00.000Z").toDate(), end: moment("2019-04-29T11:00:00.000Z").toDate(), resourceId: 3,},
  {title: "Simple", start: moment("2019-05-06T13:00:00.000Z").toDate(), end: moment("2019-04-29T15:00:00.000Z").toDate(), resourceId: 1,},
];


    console.log(myEventsList);
    console.log(myEventsListi);

    return (

      <div>
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
  activeClubId: state.club.activeClubId,
  activeSportId: state.sport.activeSportId,
  games: state.game.games,
  courts: state.playground.courts,
});


const mapDispatchToProps = (dispatch) => ({
    fetchGames: (idClub, idSport, date) => dispatch(fetchGames(idClub, idSport, date))
});

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(ScheduleCourt));
