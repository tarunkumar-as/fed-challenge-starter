import React, { useState } from 'react';
import './App.css';
import Card from './Card'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CardDict } from './imagesDict';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },});

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    gridAutoRows: '1fr',
  },
  button: {
    height: '100%'
  }
})

export default function App() {

  const classes = useStyles();
  const [state, setState] = useState({
    selectedButton: 0
  })

  return (
    <ThemeProvider theme={theme}>
    <Grid container spacing={4} className={classes.gridContainer}>
      <Grid item xs={12} sm={3}>
        <ButtonBase className={classes.button} onClick={() => { setState({ selectedButton: 1 }) }}>
          <Card cardObject={CardDict.Card1} isSelected={state.selectedButton === 1} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ButtonBase className={classes.button} onClick={() => { setState({ selectedButton: 2 }) }}>
          <Card cardObject={CardDict.Card2} isSelected={state.selectedButton === 2} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ButtonBase className={classes.button} onClick={() => { setState({ selectedButton: 3 }) }}>
          <Card cardObject={CardDict.Card3} isSelected={state.selectedButton === 3} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ButtonBase className={classes.button} onClick={() => { setState({ selectedButton:  4}) }}>
          <Card cardObject={CardDict.Card4} isSelected={state.selectedButton === 4} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ButtonBase className={classes.button} onClick={() => { setState({ selectedButton: 5 }) }}>
          <Card cardObject={CardDict.Card5} isSelected={state.selectedButton === 5} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ButtonBase className={classes.button} onClick={() => { setState({ selectedButton: 6 }) }}>
          <Card cardObject={CardDict.Card6} isSelected={state.selectedButton === 6} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ButtonBase className={classes.button} onClick={() => { setState({ selectedButton: 7 }) }}>
          <Card cardObject={CardDict.Card7} isSelected={state.selectedButton === 7} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ButtonBase className={classes.button} onClick={() => { setState({ selectedButton: 8 }) }}>
          <Card cardObject={CardDict.Card8} isSelected={state.selectedButton === 8} />
        </ButtonBase>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}