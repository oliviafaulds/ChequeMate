// Import react and useContext
import React from 'react';
import { useContext } from 'react';

// Import material UI components and icon
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

// Import pie chart
import { PieChart } from 'react-minimal-pie-chart';

// Import context regarding the user and their account
import { UserContext } from "../../providers/UserProvider";

//------------------------------------------------------

// Constant function to assign styles to components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
  
// Create and export the dashboard page as a function
export default function Dashboard() {
  
  // Constants
  const classes = useStyles();
  const user = useContext(UserContext);
  const {displayName} = user;
  console.log(user);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            align="left"
            variant="h1"
            component="h2"
            gutterbottom>
            Welcome back, {displayName}!
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
              { title: 'One', value: 10, color: '#ABABFD' }, //all these values can be changed once we link to database
              { title: 'Two', value: 15, color: '#3B5998' },
              { title: 'Three', value: 20, color: '#1C2951' },
            ]}
            radius={40}
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