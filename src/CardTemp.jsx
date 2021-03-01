import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  display_inline: {
    display: 'inline-block'
  }
}));

export default function CardLayout(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.cardObject.image}
        title="Paella dish"
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
            title="Live from space album cover"
          />
        </Box>
      </Box>
    </Card>
  );
}