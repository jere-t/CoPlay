// components/PasswordInput.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


class PasswordInput extends Component {
  state = {
    showPassword: false,
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
    const { classes } = this.props;
    return (
      <FormControl required fullWidth className={classes.margin}>
        <InputLabel htmlFor="password">{this.props.label?this.props.label:"Password"}</InputLabel>
        <Input
          id="password"
          type={this.state.showPassword ? 'text' : 'password'}
          value={this.props.password}
          name={this.props.name}
          onChange={this.props.handleChange()}
          autoComplete="current-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}

const styles = theme => ({
  margin: {
    margin: "normal",
  },
});


PasswordInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasswordInput);
