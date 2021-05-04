import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
      <Grid container spacing={4}>
        <Grid item xs={12}>
            <Typography 
                align="center"
                variant="h1"
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
                align="centre"
                variant="h4"
                component="h2"
                gutterBottom>
                *£X.00*
            </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography
                align="right"
                variant="subtitle1"
                component="h2"
                gutterBottom>
                Today's spending total:
            </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>*£X.00*</Paper>
        </Grid>
        <Grid item xs={6}>
            <Box 
                display="flex" 
                alignItems="right" 
                justifyContent="center">
                <Button component={Link} to={'/transactions'}
                    variant="contained" 
                    color="primary">
                    View spending breakdown
                </Button>
            </Box>
          </Grid>
      </Grid>
    </div>
  );
}

export { default as Spending } from "./Spending";