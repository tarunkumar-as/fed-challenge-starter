import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faList } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    height: '100%',
    transition: "transform 0.15s ease-in-out"
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
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
  },
  detailsSectionContainer: {
    height: '15px'
  },
  detailsSection: {
    position: 'absolute',
    left: '25px',
    bottom: '10px',
  }
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);
const BlueTextTypography = withStyles({
  root: {
    color: "#4677BF"
  }
})(Typography);

function OverlayView(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.display_inline}>
        <CardMedia component="img" image={props.cardObject.image} />
        <div className={classes.overlay}>
          <Box className={classes.overlayBox} display="flex" flexDirection="column" justifyContent="center">
            <Box className={classes.overlayContent}>
              <WhiteTextTypography className={classes.overlayContent} variant="h6" align="center">
                {props.cardObject.videosCount}
              </WhiteTextTypography>
            </Box>
            <Box className={classes.overlayContent}>
              <WhiteTextTypography className={classes.overlayContent} variant="caption" align="center">
                WORKOUTS
            </WhiteTextTypography>
            </Box>
            <Box className={classes.overlayContent}>
              <FontAwesomeIcon className={classes.subImage} icon={faList} color='#FFFFFF' align="center" width="100%" />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}

function MainView(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.display_inline}>
        <CardMedia component="img" image={props.cardObject.image} />
      </div>
    </div>
  )
}

function CardView(props) {
  const classes = useStyles();
  const clockIcon = <FontAwesomeIcon className={classes.subImage} icon={faClock} color='lightgrey' />
  const viewsIcon = <FontAwesomeIcon className={classes.subImage} icon={faEye} color='lightgrey' />
  return (
    <div>
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
        : null}
        <div className={classes.detailsSectionContainer} />
        <div className={classes.detailsSection}>
        {props.isSelected ? 
        <BlueTextTypography>
          VIEW DETAILS
        </BlueTextTypography> : null}
        </div>
    </div>
  )
}

export default function CardLayout(props) {

  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  })

  return (
    <Card className={classes.root}
      classes={{ root: state.raised || props.isSelected ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={props.isSelected ? true : state.raised} zdepth={props.isSelected ? 3 : state.shadow}>
      <CardView cardObject={props.cardObject} isSelected={props.isSelected}/>
    </Card>
  );
}