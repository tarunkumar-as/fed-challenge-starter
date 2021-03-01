import React from 'react';
import './App.css';
import Card from './Card'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CardDict } from './imagesDict';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    gridAutoRows: '1fr',
  }
})

export default function App() {

  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.gridContainer}>
      <Grid item xs={12} sm={3}>
        <Card cardObject={CardDict.Card1}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card cardObject={CardDict.Card2}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card cardObject={CardDict.Card3}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card cardObject={CardDict.Card4}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card cardObject={CardDict.Card5}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card cardObject={CardDict.Card6}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card cardObject={CardDict.Card7}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card cardObject={CardDict.Card8}/>
      </Grid>
    </Grid>
  );
}