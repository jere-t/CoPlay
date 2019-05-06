// components/connect/AvailableGame.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

import GameCard from './GameCard';

class AvailableGame extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
  };

  handleJoin = (param) => (event) => {
    console.log("joined : "+ param);
  }

  render() {
    const { classes } = this.props;
    const gameCards = this.props.connectGames.map((game) =>
      <GameCard game={game} handleJoin={this.handleJoin} />
    );
    return (
      <div className={classes.cards}>
        {gameCards}
      </div>
    );
  }
}

const styles = theme => ({
  cards: {
    display: 'flex',
    flexWrap: 'wrap'
  },
});

AvailableGame.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  connectGames: state.game.connectGames,
});

export default connect(mapStateToProps) (withStyles(styles)(AvailableGame));
