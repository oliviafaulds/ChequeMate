// Import react
import React from 'react';

// Import material UI components and icon
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

//------------------------------------------------------

// Constant function to assign styles to components
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
}));

// Create and export the Households page as a function
export default function Households() {

    // Constant to use the custom stylings
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h1" component="h2" gutterBottom>
                        Households
                    </Typography> 
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                            Add Household
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="Household Image" src="/static/images/grid/complex.jpg" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6">
                                            Flat 30G
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Emily, 
                                            Hayley,
                                            Jo,
                                            Olivia,
                                            Simran,
                                            Slav
                                        </Typography>
                                        <Grid item xs={12}>
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <Button color="primary">
                                                    Edit
                                                </Button>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <Button color="secondary">
                                                    Delete
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}