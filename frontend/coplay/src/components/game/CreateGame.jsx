// components/game/CreateGame.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../store/actions/game'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //only and all the field of gamei
      fkPlayground: this.props.idPg,
  		isSingle: true,
  		isPrivate: true,
  		duration: 60,
  		startDate: this.props.date,
  		startTime: this.props.time,
    };
  }

  handleChange = props => event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreate = () => {

    //get usernames and need check pruvate
    this.props.createGame(this.state)
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
        <DialogContent>
          <DialogContentText className={classes.error}>
            {this.state.errorMsg}
          </DialogContentText>
          <Typography variant="h4" className={classes.title}>
            Reservation:  {this.props.sport} - Court {this.props.court} - {this.props.date} - {this.props.time}
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="isSingle"></FormLabel>
            <RadioGroup
              name="isSingle"
              className={classes.group}
              value={this.state.isSingle}
              onChange={this.handleChange()}
            >
              <FormControlLabel value={true} control={<Radio />} label="2 players" />
              <FormControlLabel value={false} control={<Radio />} label="4 players" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="isPrivate"></FormLabel>
            <RadioGroup
              name="isPrivate"
              className={classes.group}
              value={this.state.isPrivate}
              onChange={this.handleChange()}
            >
              <FormControlLabel value={true} control={<Radio />} label="private game" />
              <FormControlLabel value={false} control={<Radio />} label="public game (I am looking for player(s))" />
            </RadioGroup>
          </FormControl>
          {this.state.isPrivate?<ListPlayers
                                    username1={this.state.username1}
                                    username2={this.state.username2}
                                    username1={this.state.username1}
                                    username1={this.state.username1}
                                    isSingle={this.state.isSingle}
                                    handleChange={this.handleChange}
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
  margin: {
    margin: "normal",
  },
  error: {
    color: "red",
  },
  });

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
