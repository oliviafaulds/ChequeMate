// Import react and the use state
import React, {useState} from 'react';

// Import firestore from the project files
import { firestore } from "../../firebase";

// Import react router linking
import { Link } from "react-router-dom";

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

//------------------------------------------------------

// Constant function to assign styles to components
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

// Create and export new transaction page
export default function NewTransaction() {

    // Constants
    const [item, setItem] = useState("");
    const [cost, setCost] = useState();
    const classes = useStyles();

    // Constant to handle actions when submit button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();

        firestore.collection('Transactions').add({
            item:item,
            cost:cost,
        })
        .then(() => {
            alert("Transaction added!");
        })
        .catch((error) => {
            alert("Error");
        });

        setItem("");
        setCost("");
    }
   
    return (
        <form className = "New Transaction" onSubmit ={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h1" component="h2" gutterBottom>
                        Create a New Transaction
                    </Typography> 
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Item Name" variant="outlined" value={item} onChange={(e) => setItem(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <TextField id="outlined-basic" label="Price (£)" variant="outlined" value={cost} onChange={(e) => setCost(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="whose-transaction">Personal/Household</InputLabel>
                        <Select width={12}
                        labelId="whose-transaction"
                        id="whose-transaction"
                        >
                            <MenuItem>Personal</MenuItem>
                            <MenuItem>Flat 30G</MenuItem>
                        </Select>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="onCalendar"
                                color="primary"
                            />
                            }
                            label="On Calendar?"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="category">Category</InputLabel>
                        <Select width={12}
                        labelId="category"
                        id="category"
                        >
                            <MenuItem>Bills</MenuItem>
                            <MenuItem>Entertainment</MenuItem>
                            <MenuItem>Expenses</MenuItem>
                            <MenuItem>Gifts</MenuItem>
                            <MenuItem>General</MenuItem>
                            <MenuItem>Groceries</MenuItem>
                            <MenuItem>Holidays</MenuItem>
                            <MenuItem>Transport</MenuItem>
                            <MenuItem>Pets</MenuItem>
                            <MenuItem>Rent</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="date"
                            label="Transaction Date"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="reoccurance">Reoccurance</InputLabel>
                        <Select width={12}
                        labelId="reoccurance"
                        id="reoccurance"
                        >
                            <MenuItem>Once Only</MenuItem>
                            <MenuItem>Daily</MenuItem>
                            <MenuItem>Weekly</MenuItem>
                            <MenuItem>Fortnightly</MenuItem>
                            <MenuItem>Monthly</MenuItem>
                            <MenuItem>Yearly</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <Box display="flex" alignItems="left" justifyContent="left" m={2}>
                            <Button variant="contained" type="submit" color="primary">
                                Submit
                            </Button>
                            <Button variant="contained" component={Link} to={'/'}>
                                Cancel
                            </Button>
                        </Box>
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    );
}