// components/account/DialogEditPwd.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import bcrypt from 'bcryptjs';


import PasswordInput from '../PasswordInput';


class DialogEditPwd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldPwd: '',
      newPwd: '',
      newPwdRpt: '',
      errorMsg: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = prop => event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkOldPassword = (pwd) => {
    let hash =this.props.user.passwordHash;
    if (bcrypt.compareSync(pwd, hash)) {
      return true;
    } else {
      this.setState({errorMsg : 'The old password are not correct'});
      return false;
    }
  };
  checkNewPassword = (pwd, pwdRpt) => {
    if (pwd === pwdRpt) {
      if (pwd.length > 5) { return true; } else {
        this.setState({errorMsg : 'The new password need to have 6 characters at least'});
        return false;
      }
    } else {
      this.setState({errorMsg : 'The new passwords are not the same'});
      return false;
    }
  };

  savePassword = (pwd) => {
    let newUser = {...this.props.user};
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(pwd, salt, (err, hash) => {
          newUser.passwordHash = hash;
          this.props.updateUser(newUser);
        });
    });

  };

  handleSave = () => {
    if ( this.checkOldPassword(this.state.oldPwd) && this.checkNewPassword(this.state.newPwd, this.state.newPwdRpt) ) {
      this.savePassword(this.state.newPwd);
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
        <DialogTitle id="form-dialog-title">Change password</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.error}>
            {this.state.errorMsg}
          </DialogContentText>
          <PasswordInput name="oldPwd" label="Old password" password={this.state.oldPwd} handleChange={this.handleChange} />
          <PasswordInput name="newPwd" label="New password" password={this.state.newPwd} handleChange={this.handleChange} />
          <PasswordInput name="newPwdRpt" label="Repeat new password" password={this.state.newPwdRpt} handleChange={this.handleChange} />
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

  DialogEditPwd.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(DialogEditPwd);
