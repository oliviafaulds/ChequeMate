// Import react
import React from 'react';

// Import react router
import { Link } from "react-router-dom";

// Import material UI components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//------------------------------------------------------

// Constant function to assign styles to components
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
}));

// Function to create and export the spending page
export default function Spending() {

  // Constant for styling
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
              £57.79
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            align="right"
            variant="subtitle1"
            component="h2"
            gutterBottom>
              Today's spending total:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            £14.03
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Box 
            display="flex" 
            alignItems="left" 
            justifyContent="left">
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