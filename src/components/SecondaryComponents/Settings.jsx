// Import react
import React from 'react';

// Import material UI components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    },
    table: {
        minWidth: 650,
    },
}));
  
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

export default function Settings() {

    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography align="center" variant="h1" component="h2" gutterBottom>
                Budget Settings
            </Typography> 
          </Grid>
          <Grid item xs={3}>
            <Typography align="right" variant="h5" component="h2" gutterBottom>
                Current Balance:
            </Typography> 
          </Grid>
          <Grid item xs={3}>
            <Typography align="center" variant="h5" component="h2" gutterBottom>
                *Balance*
            </Typography> 
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button variant="contained" color="primary">
                    Change Balance
                </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Budget</TableCell>
                    <TableCell align="right">Start Date</TableCell>
                    <TableCell align="right">End Date</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                </TableBody>
            </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    );
}

export { default as Settings } from "./Settings";