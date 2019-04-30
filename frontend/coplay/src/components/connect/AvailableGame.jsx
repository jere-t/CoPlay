// components/connect/AvailableGame.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

import GameCard from './GameCard';


class AvailableGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //When sport is create need to config this state
      games: [],
      date: moment().format('YYYY-MM-DD'),
      testGames: [ {idGame:1, isSingle:true, isPrivate:true, duration: 60, startDate: "2019-04-31T00:00:00.000Z", startTime: "10:00", description: "fgerioh fe", nameCourt: "1"  },
                   {idGame:3, isSingle:false, isPrivate:false, duration: 60, startDate: "2019-04-31T00:00:00.000Z", startTime: "12:00", description: null, nameCourt: "1"  },
                   {idGame:77, isSingle:false, isPrivate:true, duration: 60, startDate: "2019-04-31T00:00:00.000Z", startTime: "13:00", description: "fgerioh fe", nameCourt: "central"  }, ],
    };
  }

  componentDidMount() {

  }

  showGame (date) {
    //getGameOfThisDateAndMore
    const gameCards = this.state.testGames.map((game, index) =>
      <GameCard game={game} handleJoin={this.handleJoin} key={index} />
    );
    return gameCards;
  }

  handleJoin = (param) => (event) => {
    console.log("joined : "+ param);
  }
  handleChange = (event) => {
    console.log("test");
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log("Test");
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
        <div className={classes.cards}>
          {this.showGame(this.state.date)}
        </div>

      </div>
    );
  }
}


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginLeft :theme.spacing.unit * 3,
    marginTop :theme.spacing.unit * 3,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap'
  },
});

AvailableGame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvailableGame);
