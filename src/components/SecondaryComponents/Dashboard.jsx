import React from 'react';
import { auth, firestore } from "../../firebase";
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import { UserContext } from "../providers/UserProvider";
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { PieChart } from 'react-minimal-pie-chart';

/*const user = useContext(UserContext);
const {photoURL, displayName, email} = user;
console.log(user);
const userEmail = email;*/

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

const greetingName = firestore.collection('users')
  .doc()
  //.where('email', '==', email)
  .get('displayName')
  .then(doc => {
    const data = doc.data();
    console.log(data); 
  });
  
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
            Welcome back, !
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
  
  export { default as Dashboard } from "./Dashboard";