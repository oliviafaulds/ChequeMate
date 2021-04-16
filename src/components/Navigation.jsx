import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

export default function Navigation() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography onClick={event =>  window.location.href='/'} variant="h6" className={classes.title}>
            Jo's Test Project
          </Typography>
          <Button onClick={event =>  window.location.href='/'} color="inherit" >
            Home
          </Button>
          <Button onClick={event =>  window.location.href='/about'} color="inherit" >
                About
          </Button>
          <Button onClick={event =>  window.location.href='/contact'} color="inherit" >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { default as Navigation } from "./Navigation";