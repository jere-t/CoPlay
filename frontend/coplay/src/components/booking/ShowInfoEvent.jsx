import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ShowInfoEvent extends Component {

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;
    const info = this.props.event.title==="OpenParty"?", you can connect with this game on the Connect page.":"";

    return (
      <Dialog
        fullScreen={fullScreen}
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="event information"
      >
        <DialogTitle id="event-information">{"Event information"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a {this.props.event.title} {info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ShowInfoEvent.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ShowInfoEvent);
