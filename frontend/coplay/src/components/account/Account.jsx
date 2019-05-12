// components/account/Account.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserById, updateUser } from '../../store/actions/account';
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
    showPassword: false,
    openE: false,
    openP: false,
  };

  componentDidMount() {
    //this.props.getUserById(this.props.activeUser.idUser);
  }

  clickChangeEmail = () => {
    this.setState({ openE: true });
  };
  clickChangePwd = () => {
    this.setState({ openP: true });
  };

  updateUser = async (user) => {
    this.props.updateUser(user);
    this.handleClose();
  }

  handleClose = async () => {
   this.setState({ openE: false, openP: false,});
  };

  render() {
    const { classes, activeUser} = this.props;
    const email = this.props.activeUser.email;
    if (activeUser) {
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
                value={activeUser.firstname}
                disabled
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="lastname">Lastname: </InputLabel>
              <Input
                id="lastname"
                value={activeUser.lastname}
                disabled
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="username">Username: </InputLabel>
              <Input
                id="username"
                value={activeUser.username}
                disabled
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="email">Email: </InputLabel>
              <Input
                id="email"
                value={email}
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
              <DialogEditEmail open={this.state.openE} handleClose={this.handleClose} user={activeUser} updateUser={this.updateUser}/>
              <DialogEditPwd open={this.state.openP} handleClose={this.handleClose} user={activeUser} updateUser={this.updateUser}/>
            </div>
          </form>
          <Typography variant="h6" className={classes.title}>
            {/*Next games :*/}
          </Typography>
        </div>
      )
    } else {
      return (
        <div className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Loading ...
          </Typography>
        </div>
      )
    }

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

const mapStateToProps = state => ({
    activeUser: state.account.activeUser
});

const mapDispatchToProps = (dispatch) => ({
    getUserById: async (id) => await dispatch(getUserById(id)),
    updateUser: async (user) => await dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(Account));
