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
import TextField from '@material-ui/core/TextField';
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
    description: '',
    username2: '',
    username3: '',
    username4: '',
    value: 'female',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleCreate = () => {

    //get usernames and need check private
    let game = {
        fkPlayground: this.props.idPg,
        fkUserCreator: this.props.activeUser.idUser,
        isSingle: this.state.isSingle==="1",
        isPrivate: this.state.isPrivate==="1",
        duration: this.state.duration,
        startDate: this.props.date+" "+this.props.time,
        startTime: '22:00',
        description: this.state.description,
    }
    console.log(game);

    //this.props.createGame(game);
    console.log("create join owner : "+this.props.activeUser.username);
    if (this.state.isPrivate === "1") {
      console.log("create join for all other username");
    }
  }

  render() {
    const { classes } = this.props;

    const description = (
      <TextField
        id="description"
        label="Specify the sport level you want"
        placeholder="Description"
        multiline
        className={classes.textField}
        margin="normal"
        value={this.state.description}
        name="description"
        onChange={this.handleChange}
      />
    );
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
                                    username1={ " mareeeet"}
                                    username2={this.state.username2}
                                    username3={this.state.username3}
                                    username4={this.state.username4}
                                    isSingle={this.state.isSingle}
                                    handleChange={this.handleChange}
                                    classes={classes}
                                />:description}
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
  margin: {

  },
  textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
   width: '100%',
  },
});

CreateGame.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  activeUser: state.account.activeUser,
  activeClubId: state.club.activeClubId,
  activeSportId: state.sport.activeSportId,

});

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: (game) => dispatch(createGame(game))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(CreateGame));
