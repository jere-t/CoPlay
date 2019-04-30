// components/connect/Connect.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


class Connect extends Component {
  state = {

  };


  render() {

    return (
      <div>

      </div>
    );
  }
}


const styles = {
  root: {
    flexGrow: 1,
  },
};

Connect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Connect);
