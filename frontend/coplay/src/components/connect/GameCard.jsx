import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class GameCard extends Component {

  render() {
    const { classes, game } = this.props;
    console.log(game);
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Created by {game.cpUser.firstname} {game.cpUser.lastname}
          </Typography>
          <Typography variant="h5" className={classes.pos}  component="h2">
            30.12.1993 - 10:00
          </Typography>
          <Typography className={classes.pos} component="p">
            Looking for medium-level player
          </Typography>
          <Typography  color="textSecondary">
            2 of 4 players have joined
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.props.handleJoin(1)} id={1} name="1" color="primary">
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
