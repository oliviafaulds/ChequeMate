import React, {useState} from 'react';
import { firestore } from "../../firebase";
import ReactDOM from 'react-dom'
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


export default class Transactions extends React.Component {

    state = {
        Transactions: null
    }

    componentDidMount(){

        firestore.collection('Transactions')
        .get()
        .then( snapshot => {
            const Transactions = []
            snapshot.forEach( doc => {
                const data = doc.data()
                Transactions.push(data)
            })
            this.setState({ Transactions: Transactions})
        })
        .catch (error => console.log(error))
    }
    
    render(){
        return(
            <div className= "Transactions">
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h1" component="h2" gutterBottom>
                                Transactions
                            </Typography> 
                            <Box display="flex" alignItems="center" justifyContent="center" m={4}>
                                <Button variant="contained" color="primary" component={Link} to={'/newtransaction'} startIcon={<AddIcon />}>
                                    New Transaction
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                {
                    this.state.Transactions &&
                    this.state.Transactions.map (Transactions => {
                        return(
                            <div>
                                <GridList cellHeight={160} cols={1}>
                                    <GridListTile key={Transactions.item}>
                                        <Typography align="center" variant="button" component="h2" gutterBottom>
                                            {Transactions.item}
                                        </Typography> 
                                        <Typography align="center" variant="body2" component="h2" gutterBottom>
                                            £{Transactions.cost}
                                        </Typography> 
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <Button color="primary">
                                                Edit
                                            </Button>
                                        </Box>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <Button color="secondary">
                                                Delete
                                            </Button>
                                        </Box>
                                    </GridListTile>
                                </GridList>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
  
  export { default as Transactions } from "./Transactions";