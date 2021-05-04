import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
//import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { PieChart } from 'react-minimal-pie-chart';

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

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            align="left"
            variant="h1"
            component="h2"
            gutterbottom>
            Welcome back, *user*!
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            align="centre"
            variant="h4"
            component="h2"
            gutterbottom>
            Spending breakdown:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            align="centre"
            variant="h3"
            component="h2"
            gutterbottom>
            Notifications:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <PieChart
            data={[
              { title: 'One', value: 10, color: '#5A86D5' }, //all these values can be changed once we link to database
              { title: 'Two', value: 15, color: '#283C5F' },
              { title: 'Three', value: 20, color: '#141E2F' },
            ]}
          />;
        </Grid>
        <Grid item xs={0.75}>
          <Badge 
            align="right"
            color="secondary" 
            badgeContent={0} //change this value to unread message variable number
            showZero>
            <MailIcon />
          </Badge>
        </Grid>
        <Grid item xs={2.25}>
          <Typography
            align="left"
            variant="h6"
            component="h2"
            gutterbottom>
            new messages
          </Typography>
        </Grid>
      </Grid>  
    </div>
  );
  }
  
  export { default as Dashboard } from "./Dashboard";