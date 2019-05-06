// components/game/ListPlayers.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ListPlayers = (props) => {

  const { username1, username2, username3, username4, isSingle, handleChange, classes } = props;
  const doublePlayer = (
    <div className={classes.margin}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="username3">Username player 3: </InputLabel>
        <Input
          id="username3"
          value={username3}
          name="username3"
          onChange={handleChange}
          error={props.errorU3}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="username4">Username player 4: </InputLabel>
        <Input
          id="username4"
          value={username4}
          name="username4"
          onChange={handleChange}
          error={props.errorU4}
        />
      </FormControl>
    </div>
  );

  return (

    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="username1">Username player 1: </InputLabel>
        <Input
          value={username1}
          disabled
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="username2">Username player 2: </InputLabel>
        <Input
          id="username2"
          value={username2}
          name="username2"
          onChange={handleChange}
          error={props.errorU2}
        />
      </FormControl>
      {isSingle==="1"?"":doublePlayer}
    </div>

  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  formControl: {

  },
  group: {

  },
  margin: {
    margin: "normal",
  },
  error: {
    color: "red",
  },
  textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
   width: 200,
  },
});

  ListPlayers.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(ListPlayers);
