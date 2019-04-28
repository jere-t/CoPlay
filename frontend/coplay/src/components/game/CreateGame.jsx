// components/game/CreateGame.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../store/actions/game'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';




class CreateGame extends Component {
  state = {
    //only and all the field of game
    fkPlayground: null,
		isSingle: true,
		isPrivate: true,
		duration: 60,
		startDate: '',
		startTime: '',
  }

  handleChange = prop => event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    e.preventDefault();

    this.props.createGame(this.state)
  }



}

CreateGame.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: (game) => dispatch(createGame(game))
  }
}

export default connect(null, mapDispatchToProps) (withStyles(styles)(CreateGame));
