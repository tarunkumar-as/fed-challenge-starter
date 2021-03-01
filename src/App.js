import React from 'react';
import './App.css';
import Card from './Card'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CardDict } from './imagesDict';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px'
  }
})

export default function App() {

  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.gridContainer}>
      <Grid item xs={12} sm={3}>
        <Card header={CardDict.Card1.title} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card header={CardDict.Card2.title} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card header={CardDict.Card3.title} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card header={CardDict.Card4.title} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card header={CardDict.Card5.title} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card header={CardDict.Card6.title} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card header={CardDict.Card7.title} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card header={CardDict.Card8.title} />
      </Grid>
    </Grid>
  );
}