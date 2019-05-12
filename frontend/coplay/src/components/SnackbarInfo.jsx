import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class SnackbarInfo extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.props.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.msg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.props.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
    );
  }
}

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

SnackbarInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SnackbarInfo);
