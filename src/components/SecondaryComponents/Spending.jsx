import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function Spending() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography 
                align="center"
                variant="h2"
                component="h2"
                gutterBottom>
                Spending Overview
            </Typography>     
        </Grid>
        <Grid item xs={6}>
                <Typography
                align="right"
                variant="h4"
                component="h2"
                gutterBottom>
                Balance:
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography
                align="left"
                variant="h4"
                component="h2"
                gutterBottom>
                *£X.00*
            </Typography>
        </Grid>
        <Grid item xs={3}>
            <Typography
                align="left"
                variant="subtitle1"
                component="h2"
                gutterBottom>
                Today's spending:
            </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>*£X.00*</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export { default as Spending } from "./Spending";