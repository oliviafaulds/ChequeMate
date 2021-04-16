import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link as MaterialLink} from '@material-ui/core/Link';
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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Jo's Test Project
          </Typography>
          <MaterialLink component={RouterLink} to='/about'/>
          <Button color="inherit" component={RouterLink} to='/about' >About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { default as Navigation } from "./Navigation";