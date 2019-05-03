// components/account/DialogEditEmail.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DialogEditEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMsg: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  checkEmail = (email) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
       return true;
     } else {
        this.setState({errorMsg : 'The new email is not correct'});
        return false;
    }
  };
  saveEmail = (email) => {
    let newUser = {...this.props.user};
    newUser.email = email;
    this.props.updateUser(newUser);
  };

  handleSave = () => {
    if ( this.checkEmail(this.state.email) ) {
      this.saveEmail(this.state.email);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change email</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.error}>
            {this.state.errorMsg}
          </DialogContentText>
          <FormControl required fullWidth className={classes.margin}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              autoFocus
              autoComplete="email"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSave} color="primary">
            Save
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

  DialogEditEmail.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(DialogEditEmail);
