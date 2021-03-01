import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    transition: "transform 0.15s ease-in-out"
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

  return (
    <Card className={classes.root} 
    onMouseOver={()=>setState({ raised: true, shadow:3})} 
    onMouseOut={()=>setState({ raised:false, shadow:1 })} 
    raised={state.raised} zdepth={state.shadow}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="140"
          image={props.img}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.caption}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};