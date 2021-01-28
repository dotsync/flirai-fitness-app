/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import './ExerciseCard.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { CardHeader, CardContent, CardActions } from '@material-ui/core';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function ExerciseCard({ exerciseCard }) {
  const useStyles = makeStyles(() => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: blue[500],
    },
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return !exerciseCard ? <div className="loading">loading exercise card</div> : (
    <div className="exercise-card-container">
      <Card className="exercise-card">
        <CardHeader
          avatar={(
            <Avatar
              onClick={() => { console.log('This will go to a page of swimming techniques'); }}
              aria-label="recipe"
              className={classes.avatar}
            >
              S
            </Avatar>
          )}
          action={(
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )}
          title={exerciseCard.title}
          subheader={exerciseCard.description}
        />
        {/* <CardMedia
          className={classes.media}
          image={exerciseCard.cardImage}
          title={exerciseCard.cardImageTitle}
        /> */}
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {exerciseCard.mainset.type}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="like">
            <StarIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Drills
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
