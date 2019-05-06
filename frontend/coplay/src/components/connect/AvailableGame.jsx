// components/connect/AvailableGame.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJoin } from '../../store/actions/join';
import { fetchGamesConnect } from '../../store/actions/game';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

import GameCard from './GameCard';

class AvailableGame extends Component {

  handleJoin = (idGame) => (event) => {
    let join = {
      fkUserJoin: this.props.activeUser.idUser,
      fkGameJoin: idGame
    }
    this.props.addJoin(join).then(
      this.props.fetchGamesConnect( this.props.activeClubId, this.props.idSport, this.props.date)
    );
    console.log(this.props.activeUser.idUser+ "joined game: "+ idGame);
  }

  render() {
    const { classes } = this.props;
    const gameCards = this.props.connectGames.map((game, index) =>
      <GameCard game={game} handleJoin={this.handleJoin} key={index} />
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
  activeClubId: state.club.activeClubId,
  activeUser: state.account.activeUser,
  connectGames: state.game.connectGames,
});

const mapDispatchToProps = (dispatch) => ({
  addJoin: (join) => dispatch(addJoin(join)),
  fetchGamesConnect: (idClub, idSport, date) => dispatch(fetchGamesConnect(idClub, idSport, date)),
});

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(AvailableGame));
