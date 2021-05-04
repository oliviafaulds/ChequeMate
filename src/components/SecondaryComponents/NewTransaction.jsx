import React, {useState} from 'react';
import { firestore } from "../../firebase";
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from "react-router-dom";
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

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
  }));

export default function About() {
    const [item, setItem] = useState("");
    const [cost, setCost] = useState();
    
    const classes = useStyles();
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
                        <MenuItem>HouseholdA</MenuItem>
                        <MenuItem>HouseholdB</MenuItem>
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
                        <MenuItem>CatagoryA</MenuItem>
                        <MenuItem>CatagoryB</MenuItem>
                        <MenuItem>New Catagory</MenuItem>
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
                        <MenuItem>Fortnitely</MenuItem>
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
  
  export { default as NewTransaction } from "./NewTransaction";