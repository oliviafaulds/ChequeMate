// Import react and use context
import React from 'react';
import { useContext } from 'react';

// Import the user context and the firebase information from project files
import { UserContext } from "../../providers/UserProvider";
import {auth} from "../../firebase";

// Import material UI components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//------------------------------------------------------

// Constant to assign styles to components
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}));

// Function to create and export the profile page
export default function ProfilePage() {

  // Constants
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" variant="h1" component="h2" gutterBottom>
            Profile Page
          </Typography> 
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <div
              style={{
                background:
                  `url(${photoURL || 'https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg'})  no-repeat center center`,
                backgroundSize: "cover",
                height: "200px",
                width: "200px"
              }}
            ></div>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography align="right" variant="h5" component="h2" gutterBottom>
            Username:
          </Typography> 
        </Grid>
        <Grid item xs={3}>
          <Typography align="center" variant="h5" component="h2" gutterBottom>
            {displayName}
          </Typography> 
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button variant="contained" color="primary">
              Change Username
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography align="right" variant="h5" component="h2" gutterBottom>
            Email:
          </Typography> 
        </Grid>
        <Grid item xs={3}>
          <Typography align="center" variant="h5" component="h2" gutterBottom>
            {email}
          </Typography> 
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button variant="contained" color="primary">
              Change Email
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography align="right" variant="h5" component="h2" gutterBottom>
            Password:
          </Typography> 
        </Grid>
        <Grid item xs={3}>
          <Typography align="center" variant="h5" component="h2" gutterBottom>
            ********
          </Typography> 
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button variant="contained" color="primary">
              Change Password
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button variant="contained">
              Delete Account
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button variant="contained" color="secondary" onClick = {() => {auth.signOut()}}>
               Logout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}