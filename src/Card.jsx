import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faList } from '@fortawesome/free-solid-svg-icons'

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
    display: 'inline-block',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: '40%',
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  overlayBox: {
    height: '100%'
  },
  overlayContent: {
    textAlign: "center"
  }
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function OverlayView(props) {
  return (
    <div>
      <div className={useStyles().display_inline}>
        <CardMedia component="img" image={props.cardObject.image} />
        <div className={useStyles().overlay}>
          <Box className={useStyles().overlayBox} display="flex" flexDirection="column" justifyContent="center">
            <Box className={useStyles().overlayContent}>
              <WhiteTextTypography className={useStyles().overlayContent} variant="h6" align="center">
                {props.cardObject.videosCount}
              </WhiteTextTypography>
            </Box>
            <Box className={useStyles().overlayContent}>
              <WhiteTextTypography className={useStyles().overlayContent} variant="caption" align="center">
                WORKOUTS
            </WhiteTextTypography>
            </Box>
            <Box className={useStyles().overlayContent}>
              <FontAwesomeIcon className={useStyles().subImage} icon={faList} color='#FFFFFF' align="center" width="100%" />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}

function MainView(props) {
  return (
    <div>
      <div className={useStyles().display_inline}>
        <CardMedia component="img" image={props.cardObject.image} />
      </div>
    </div>
  )
}

export default function CardLayout(props) {

  const clockIcon = <FontAwesomeIcon className={useStyles().subImage} icon={faClock} color='lightgrey' />
  const viewsIcon = <FontAwesomeIcon className={useStyles().subImage} icon={faEye} color='lightgrey' />

  return (
    <Card className={useStyles().root}>
      {props.cardObject.isPlaylist ? <OverlayView cardObject={props.cardObject} /> : <MainView cardObject={props.cardObject} />}
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
            className={useStyles().trainer_image}
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
        : null}
    </Card>
  );
}