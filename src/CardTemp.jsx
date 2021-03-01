import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardDict } from './imagesDict';

const styles = makeStyles(() => ({
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
    marginRight: 25
  },
}));

class CardLayout extends React.Component {

  render() {
    return (
      <Card className={styles().root}>
        <CardMedia
          className={styles().media}
          image={CardDict.Card1.image}
          title="Paella dish"
        />
        <div className={styles().header}>
          <div>
            <CardContent>
              <Typography>
                {this.props.header}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={styles().trainer_image}
            image={CardDict.Card1.trainer_image}
            title="Live from space album cover"
          />
        </div>
      </Card>
    );
  }
}

export default CardLayout;