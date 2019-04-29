// components/auth/SignIn.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import PasswordInput from '../PasswordInput';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false,
    showPassword: false,
  };

  handleChange = props => event => {
    this.setState({ [event.target.name]: event.target.value },() => console.log(this.state));
  };
  handleChangeMemorise = () => {
    this.setState(state => ({ rememberMe: !state.rememberMe }));
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl required fullWidth className={classes.margin}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange()}
                autoFocus
                autoComplete="email"
              />
            </FormControl>
            <PasswordInput name="password" password={this.state.password} handleChange={this.handleChange} />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              onChange={this.handleChangeMemorise}
            />
            <Button fullWidth type="submit" variant="contained" color="primary" className={classes.button}>
              Login
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  margin: {
    margin: "normal",
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
});

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
