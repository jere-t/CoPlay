// components/connect/Connect.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AvailableGame from './AvailableGame';

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //When sport is create need to config this state
      sports: [],
      activeSport: 1,
      testSports: [{idSport:1, nameSport:"Tennis"},{idSport:2, nameSport:"Padel"},{idSport:77, nameSport:"Squash"}],
    };
  }

  componentDidMount() {
    this._loadSport();
  }


  _loadSport = () => {
    let sports = this.state.testSports.map((sport, index) =>
      <Tab label={sport.nameSport} value={sport.idSport} key={index} />
    );
    this.setState({sports : sports, activeSport: sports[0].props.value});
  }

  handleChange = (event, activeSport) => {
    console.log(activeSport);
    this.setState({ activeSport });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.activeSport}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {this.state.sports}
          </Tabs>
        </Paper>
        <AvailableGame idSport={this.state.activeSport}/>
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
