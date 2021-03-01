import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: '100%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  trainer_image: {
    width: 25,
    height: 25,
  },
  subImage: {
    width: 25,
    height: 25,
    paddingBottom: 10
  },
  display_inline: {
    display: 'inline-block'
  },
  subIcon: {

  }
}));

export default function CardLayout(props) {

  const classes = useStyles();
  const clockIcon = <FontAwesomeIcon className={classes.subImage} icon={faClock} color='lightgrey'/>
  const viewsIcon = <FontAwesomeIcon className={classes.subImage} icon={faEye} color='lightgrey'/>

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.cardObject.image}
      />
      <Box display="flex" p={1} justifyContent="space-between" alignItems="center">
        <Box flexShrink={1}>
          <CardContent>
            <Typography>
              {props.cardObject.title}
            </Typography>
          </CardContent>
        </Box>
        <Box width="25px" justify="flex-end">
          <CardMedia
            className={classes.trainer_image}
            image={props.cardObject.trainer_image}
          />
        </Box>
      </Box>

      {!props.cardObject.isPlaylist ?
      <Box display="flex" alignItems="center" paddingLeft="25px" height="25px" paddingBottom="15px">
        <Box>
          {clockIcon}
        </Box>
        <Box>
        <CardContent>
            <Typography>
              {props.cardObject.duration}
            </Typography>
          </CardContent>
        </Box>
        <Box>
          {viewsIcon}
        </Box>
        <Box>
        <CardContent>
            <Typography>
              {props.cardObject.views}
            </Typography>
          </CardContent>
        </Box>
      </Box>
      : null }
    </Card>
  );
}