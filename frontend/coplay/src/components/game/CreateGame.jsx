// components/game/CreateGame.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../store/actions/game';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ListPlayers from './ListPlayers';

class CreateGame extends Component {
  state = {
    fkPlayground: this.props.idPg,
		isSingle: "1",
		isPrivate: "1",
		duration: 60,
		startDate: this.props.date,
		startTime: this.props.time,
    username1: '',
    username2: '',
    username3: '',
    username4: '',
    value: 'female',
  };

  handleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value }, console.log(this.state));
  };


  handleCreate = () => {

    //get usernames and need check pruvate
    let game = {
        fkPlayground: 3,
        fkUserCreator: 3,
        isSingle: true,
        isPrivate: false,
        duration: this.state.duration,
        startDate: '2019-05-30',
        startTime: '22:00',
        description: "For a serious match. R5 to R3 level",
    }


    this.props.createGame(game);
  }

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a game</DialogTitle>
        <DialogContent className={classes.root}>
          <DialogContentText className={classes.error}>
            {this.state.errorMsg}
          </DialogContentText>
          <Typography variant="h6" className={classes.title}>
            Reservation:  {this.props.sport} - Court {this.props.court} - {this.props.date} - {this.props.time}
          </Typography>
          <FormControl className={classes.formControl}>
            <FormLabel ></FormLabel>
            <RadioGroup
              name="isPrivate"
              className={classes.group}
              value={this.state.isPrivate}
              onChange={this.handleChange}
              row
            >
              <FormControlLabel value="1" control={<Radio />} label="private game" />
              <FormControlLabel value="0" control={<Radio />} label="public game (I am looking for player(s))" />
            </RadioGroup>
          </FormControl>
          <FormControl className={classes.formControl}>
            <FormLabel></FormLabel>
            <RadioGroup
              name="isSingle"
              className={classes.group}
              value={this.state.isSingle}
              onChange={this.handleChange}
              row
            >
              <FormControlLabel value="1" control={<Radio />} label="2 players" />
              <FormControlLabel value="0" control={<Radio />} label="4 players" />
            </RadioGroup>
          </FormControl>
          {this.state.isPrivate==="1"?<ListPlayers
                                    username1={this.state.username1}
                                    username2={this.state.username2}
                                    username3={this.state.username3}
                                    username4={this.state.username4}
                                    isSingle={this.state.isSingle}
                                    handleChange={this.handleChange}
                                    classes={classes}
                                />:""}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {

  },
  group: {

  },
  error: {
    color: "red",
  },
});

CreateGame.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: (game) => dispatch(createGame(game))
  }
}

export default connect(null, mapDispatchToProps) (withStyles(styles)(CreateGame));
