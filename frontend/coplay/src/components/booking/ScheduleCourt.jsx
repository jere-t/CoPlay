// components/booking/ScheduleCourt.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dates from './dates';//Not my file --> download on github

import CreateGame from '../game/CreateGame';
import ShowInfoEvent from './ShowInfoEvent';

class ScheduleCourt extends Component {
  state = {
    open: false,
    openInfo: false,
    fkPlayground: 0,
    time: moment().format('HH:mm'),
    event: '',
  };

  handleSelectEvent = (event) => {
    this.setState({ openInfo: true, event: event });
    //alert(event.title + " start: " +event.start);
  };

  handleSelectSlot = (event) => {
    this.setState({time: moment(event.start).format('HH:mm'), fkPlayground: event.resourceId, open: true, });
  };

  handleClose = () => {
    this.setState({ open: false, openInfo: false,});
  };

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    const courtResourceMap = this.props.courts.map((court) =>
      ({
        idPg: court.cpPlayground.idPg , nameCourt: court.cpPlayground.nameCourt,
      })
    );
    const eventsList = this.props.games.map((game) =>
      ({
        title: game.cpGame.isPrivate?"Reservation":"OpenParty",
        start: moment(game.cpGame.startDate).toDate(),
        end: moment(game.cpGame.startDate).add(60, 'm').toDate(),//moment(game.cpGame.startDate.substring(0, 11)+game.cpGame.startTime).add(60, 'm').toDate(),
        resourceId: game.cpGame.fkPlayground,
      })
    );

    return (
      <div>
        <BigCalendar
            selectable
            onSelectEvent={this.handleSelectEvent}
            onSelectSlot={this.handleSelectSlot}
            localizer={localizer}
            events={eventsList}
            defaultView='day'
            views={['day']}
            style={{ height: '70vh' }}
            getNow={() => moment(this.props.date).toDate()}
            toolbar={false}
            resources={courtResourceMap}
            resourceIdAccessor="idPg"
            resourceTitleAccessor="nameCourt"
            step={60}
            timeslots={1}
            min={dates.add(dates.endOf(new Date(2019, 17, 1), 'day'), 25201, 'seconds')}
            max={dates.add(dates.endOf(new Date(2019, 17, 1), 'day'), -7200, 'seconds')}
        />
      <CreateGame open={this.state.open} handleClose={this.handleClose} date={this.props.date} time={this.state.time} idPg={this.state.fkPlayground} />
      <ShowInfoEvent open={this.state.openInfo} handleClose={this.handleClose} event={this.state.event} />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.game.games,
  courts: state.playground.courts,
});


export default connect(mapStateToProps) (ScheduleCourt);
