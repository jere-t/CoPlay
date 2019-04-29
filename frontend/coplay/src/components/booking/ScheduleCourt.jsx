// components/booking/ScheduleCourt.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dates from './dates'


class ScheduleCourt extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    sports: [{idSport:1, nameSport:"Tennis"},{idSport:2, nameSport:"Padel"},{idSport:3, nameSport:"Squash"}],
  };

  handleChange = (event) => {
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelect = (event) => {
    console.log(event.resourceId);
    console.log(event.start);
    console.log(event.end);
    console.log(event.slot);

  };

  handleSelectt = ({ start, end }) => {
  const title = window.prompt('New Event name')
  if (title)
    this.setState({
      events: [
        ...this.state.events,
        {
          start,
          end,
          title,
        },
      ],
    })
}

  render() {
    //console.log(moment("2019-11-25T10:00:00.000Z").format('HH:mm'));
    const { classes } = this.props;
    const timeSlot = 30;
    const localizer = BigCalendar.momentLocalizer(moment)
    const courtResourceMap = [
      { idPg: 1, nameCourt: 'Court' },
      { idPg: 2, nameCourt: 'Court2' },
      { idPg: 3, nameCourt: 'Court3'  },
      //{ resourceId: {idPg}, resourceTitle: 'Meeting room 2' },
    ]
    const myEventsList = [
      {title: "Double", start: moment("2019-04-29T10:00:00.000Z").toDate(), end: moment("2019-04-29T11:00:00.000Z").toDate(), resourceId: 3,},
      {title: "Simple", start: moment("2019-04-29T13:00:00.000Z").toDate(), end: moment("2019-04-29T15:00:00.000Z").toDate(), resourceId: 1,},
    ];
    let formats = {
        selectRangeFormat: () =>
          moment("7:00am").toDate()+" — "+moment("10:00pm").toDate()


      }

    return (

      <div>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Date"
            type="date"
            name="date"
            defaultValue={this.state.date}
            className={classes.textField}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />

        </form>
        <div>

            <BigCalendar
                selectable
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={this.handleSelect}
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
                formats={formats}
            />

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

export default withStyles(styles)(ScheduleCourt);
