// components/connect/AvailableGame.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJoin } from '../../store/actions/join';
import { fetchGamesConnect } from '../../store/actions/game';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GameCard from './GameCard';
import Snackbar from '../SnackbarInfo';

class AvailableGame extends Component {
  state = {
    open: false,
    msg: '',
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleJoin =  (idGame) => async (event) => {
    let join = {
      fkUserJoin: this.props.activeUser.idUser,
      fkGameJoin: idGame
    }
    await this.props.addJoin(join);
    if (this.props.isSucceed) {
      this.setState({ open: true, msg: "Game joined!" });
    } else {this.setState({ open: true, msg: "Error when you try to join this game!" });}
    this.props.fetchGamesConnect( this.props.activeClubId, this.props.idSport, this.props.date);
  }

  render() {
    const { classes } = this.props;
    const gameCards = this.props.connectGames.map((game, index) =>
      <GameCard game={game} handleJoin={this.handleJoin} key={index} />
    );
    return (
      <div className={classes.cards}>
        {gameCards}
        <Snackbar open={this.state.open} msg={this.state.msg} handleClose={this.handleClose} />
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
  isSucceed: state.join.isSucceed,
});

const mapDispatchToProps = (dispatch) => ({
  addJoin: (join) => dispatch(addJoin(join)),
  fetchGamesConnect: (idClub, idSport, date) => dispatch(fetchGamesConnect(idClub, idSport, date)),
});

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(AvailableGame));
