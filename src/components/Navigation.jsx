// Importing React
import React from 'react';

// Importing the ability to create custom styles
import {makeStyles} from '@material-ui/core/styles';

// Importing the navigation features
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Importing basic features
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Importing icons
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Constant for the navigation bar stylisation
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// Function to control and design the features of the navigation bar and drawer
export default function Navigation() {

  // Declaring constants
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  // Returning the content
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            ChequeMate
          </Typography>

          <Button component={Link} to={'/'} color="inherit" >
              Home
          </Button>
          <Button component={Link} to={'/about'} color="inherit" >
              About
          </Button>
          <Button component={Link} to={'/contact'} color="inherit" >
              Contact
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

// Export navigation bar for App.js use
export { default as Navigation } from "./Navigation";