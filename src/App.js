// Importing React and clsx (utility for constructing className shorthand)
import React from 'react';
import clsx from 'clsx';

// Import components
import {Dashboard, Spending, Transactions, Calendar, Households, Messages, Settings, ProfilePage} from "./components";
import './App.css';

// Importing router tools
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Importing the ability to create custom styles
import {makeStyles, useTheme} from '@material-ui/core/styles';

// Importing the navigation features
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';

// Importing basic features
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

// Importing list features
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Importing icons
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import DashboardIcon from '@material-ui/icons/Dashboard';

//------------------------------------------------------

// Constant for the width of the drawer
const drawerWidth = 240;

// Constant for the navigation bar stylisation
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {

  // Declaring constants for theme and styling
  const classes = useStyles();
  const theme = useTheme();

  // Declaring constants for opening and closing the drawer
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">

      <Router>

        <div className={classes.root}>

          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}>

            <Toolbar>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}>
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                ChequeMate
              </Typography>

              <Button color="inherit" startIcon={<AddIcon />} >
                  New Transaction
              </Button>

            </Toolbar>

          </AppBar>

          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>

            <Divider />

            <List>

              <ListItem button component={Link} to={'/profilepage'}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary='Username' />
              </ListItem>

            </List>

            <Divider />

            <List>

            <ListItem button component={Link} to={'/'}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItem>

              <ListItem button component={Link} to={'/spending'}>
                <ListItemIcon>
                  <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText primary='Spending' />
              </ListItem>

              <ListItem button component={Link} to={'/transactions'}>
                <ListItemIcon>
                  <SwapHorizIcon />
                </ListItemIcon>
                <ListItemText primary='Transactions' />
              </ListItem>

              <ListItem button component={Link} to={'/calendar'}>
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText primary='Calendar' />
              </ListItem>

              <ListItem button component={Link} to={'/households'}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Households' />
              </ListItem>

              <ListItem button component={Link} to={'/messages'}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary='Messages' />
              </ListItem>

              <ListItem button component={Link} to={'/settings'}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItem>

            </List>

            <Divider />

            <List>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </ListItem>
            </List>

          </Drawer>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Container maxWidth="xl">
              <Switch>
                  <Route path="/" exact component={() => <Dashboard />} />
                  <Route path="/spending" exact component={() => <Spending />} />
                  <Route path="/transactions" exact component={() => <Transactions />} />
                  <Route path="/calendar" exact component={() => <Calendar />} />
                  <Route path="/households" exact component={() => <Households />} />
                  <Route path="/messages" exact component={() => <Messages />} />
                  <Route path="/settings" exact component={() => <Settings />} />
                  <Route path="/profilepage" exact component={() => <ProfilePage />} />
                </Switch>
            </Container>
          </main>

        </div>

      </Router>

    </div>
  );
}

export default App;