// components/game/ListPlayers.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ListPlayers = (props) => {
  const { classes } = this.props;
  const { username1, username2, username3, username4 } = props;
  const doublePlayer = (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="username3">Username player 3: </InputLabel>
        <Input
          id="username3"
          value={username3}
          name="username3"
          onChange={this.props.handleChange()}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="username4">Username player 4: </InputLabel>
        <Input
          id="username4"
          value={username4}
          name="username4"
          onChange={this.props.handleChange()}
        />
      </FormControl>
    </div>
  );

  return (

    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="username1">Username player 1: </InputLabel>
        <Input
          id="username1"
          value={username1}
          name="username1"
          onChange={this.props.handleChange()}
        />
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="username2">Username player 2: </InputLabel>
          <Input
            id="username2"
            value={username2}
            name="username2"
            onChange={this.props.handleChange()}
          />
        </FormControl>
    </div>
    {this.props.isSingle?"":doublePlayer}
  );

}

const styles = theme => ({
  margin: {
    margin: "normal",
  },
});

  ListPlayers.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(ListPlayers);
