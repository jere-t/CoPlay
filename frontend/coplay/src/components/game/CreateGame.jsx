// components/game/CreateGame.jsx

import React, { Component } from 'react';
import apiRoot from "../../constants/AppConstants";
import { connect } from 'react-redux';
import { createGame } from '../../store/actions/game';
import { fetchGames } from '../../store/actions/game';
import { addJoin } from '../../store/actions/join';
import { getUserByUsername } from '../../store/actions/account';
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
  constructor (props) {
    super(props);
    this.state = {
  		isSingle: "1",
  		isPrivate: "1",
  		duration: 60,
      errorMsg: '',
      description: ' ',
      username2: '',
      username3: '',
      username4: '',
      username2Error: true,
      username3Error: true,
      username4Error: true,
      username2Id: null,
      username3Id: null,
      username4Id: null,
    };
    this.addUsers = this.addUsers.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeUsername = async (event) => {
    this.setState({ [event.target.name]: event.target.value });
    const e = event.target.name+"Error"; const id = event.target.name+"Id";
    const resp = await fetch(`${apiRoot}/user/username/${event.target.value}`);
    if (resp.ok) {
      const data = await resp.json();
      this.setState({ [e]: false, [id]: data.idUser});
    } else { this.setState({ [e]: true }) }
  };

  handleCreate = () => {
    if (this.state.isPrivate==="0" || (this.state.isSingle && !this.state.username2Error) || (!this.state.username2Error && !this.state.username3Error && !this.state.username4Error ) ) {
      let game = {
          fkPlayground: this.props.idPg,
          fkUserCreator: this.props.activeUser.idUser,
          isSingle: this.state.isSingle==="1",
          isPrivate: this.state.isPrivate==="1",
          duration: this.state.duration,
          startDate: this.props.date+" "+this.props.time,
          description: this.state.description,
      }
      console.log(game);
      this.props.createGame(game).then(this.addUsers);
      this.props.handleClose();
    } else {
      this.setState({errorMsg : "The usernames are not correct"});
    }
  }

  addUsers = () => {
    this.props.fetchGames( this.props.activeClubId, this.props.date);
    //console.log(this.props.idLastGame + "flkjrghbfgjk");
    let join = {
      fkUserJoin: this.props.activeUser.idUser,
      fkGameJoin: this.props.idLastGame
    }
    this.props.addJoin(join)
    if (this.state.isPrivate === "1") {
      if (this.state.isSingle === "1") {
        console.log(this.state.username2Id);
        join.fkUserJoin=this.state.username2Id;
        this.props.addJoin(join)
      } else {
        join.fkUserJoin=this.state.username3Id;
        this.props.addJoin(join)
        join.fkUserJoin=this.state.username4Id;
        this.props.addJoin(join)
      }
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
                                    username1={this.props.activeUser?this.props.activeUser.username:"error"}
                                    username2={this.state.username2}
                                    username3={this.state.username3}
                                    username4={this.state.username4}
                                    errorU2={this.state.username2Error}
                                    errorU3={this.state.username3Error}
                                    errorU4={this.state.username4Error}
                                    isSingle={this.state.isSingle}
                                    handleChange={this.handleChangeUsername}
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
  idLastGame: state.game.idLastGame,

});

const mapDispatchToProps = (dispatch) => ({
  createGame: (game) => dispatch(createGame(game)),
  fetchGames: (idClub, date) => dispatch(fetchGames(idClub, date)),
  addJoin: (join) => dispatch(addJoin(join)),
  getUserByUsername: (username) => dispatch(getUserByUsername(username)),
});

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(CreateGame));
