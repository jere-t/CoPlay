// components/account/Account.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import DialogEditEmail from './DialogEditEmail';
import DialogEditPwd from './DialogEditPwd';



class Account extends Component {
  state = {
    firstname: 'toto',
    lastname: 'titi',
    username: 'tastitoo',
    email: 'toto@gmail.com',
    password: '',
    showPassword: false,
    openE: false,
    openP: false,
  };

  clickChangeEmail = () => {
    this.setState({ openE: true });
  };
  clickChangePwd = () => {
    this.setState({ openP: true });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleClose = () => {
    this.setState({ openE: false, openP: false});
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div className={classes.root}>
        <form className={classes.form} >
          <Typography variant="h6" className={classes.title}>
            Account informations
          </Typography>
          <FormControl className={classes.margin}>
            <InputLabel className={classes.label} htmlFor="firstname">Firstname: </InputLabel>
            <Input
              className={classes.input}
              id="firstname"
              value={this.state.firstname}
              disabled
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="lastname">Lastname: </InputLabel>
            <Input
              id="lastname"
              value={this.state.lastname}
              disabled
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="username">Username: </InputLabel>
            <Input
              id="username"
              value={this.state.username}
              disabled
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="email">Email: </InputLabel>
            <Input
              id="email"
              value={this.state.email}
              disabled
            />
          </FormControl>
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.clickChangeEmail}>
              Change email
            </Button>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.clickChangePwd}>
              Change password
            </Button>
            <DialogEditEmail open={this.state.openE} handleClose={this.handleClose} />
            <DialogEditPwd open={this.state.openP} handleClose={this.handleClose} />

          </div>
        </form>
        <Typography variant="h6" className={classes.title}>
          Next games :
        </Typography>
      </div>
    );
  }
}

const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit *3,
    marginBottom: theme.spacing.unit *3,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
  },
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
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
    'justify-content': 'space-around',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
});

Account.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {        //state.nomfichierreducer.nomdustate
    users: state.account.users
  }
}

export default connect(mapStateToProps) (withStyles(styles)(Account));
