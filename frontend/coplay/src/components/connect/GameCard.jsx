import React, { Component } from 'react';
import apiRoot from "../../constants/AppConstants";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

class GameCard extends Component {
  _isMounted = false;
  state = {
    nbPlayer: 0,
  }

  componentDidMount() {
    this._isMounted = true;
    fetch(`${apiRoot}/join/game/${this.props.game.cpGame.idGame}`)
      .then( (resp) => {
          resp.json().then((data) => {
            if (this._isMounted) {
              this.setState({nbPlayer: data.length,});
            }
          });
        }
      ).catch(function(err) {
        console.log(err);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { classes, game } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Created by {game.cpUser.firstname} {game.cpUser.lastname}
          </Typography>
          <Typography variant="h5" className={classes.pos}  component="h2">
            {moment(game.cpGame.startDate).format("DD.MM.YYYY")} - {moment(game.cpGame.startDate).format("HH.mm")}
          </Typography>
          <Typography className={classes.pos} component="p">
            {game.cpGame.description}
          </Typography>
          <Typography  color="textSecondary">
            {this.state.nbPlayer} of {game.cpGame.isSingle?"2":"4"} players have joined
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.props.handleJoin(game.cpGame.idGame)} id={1} name="1" color="primary">
            Join the game!
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 3,
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameCard);
