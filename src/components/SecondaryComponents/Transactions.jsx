import React, {useState} from 'react';
import { firestore } from "../../firebase";
import ReactDOM from 'react-dom'
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

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
                <h1>Recent Transactions</h1>
                {
                    this.state.Transactions &&
                    this.state.Transactions.map (Transactions => {
                        return(
                            <div>
                                <p>{Transactions.item} - £{Transactions.cost}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
  
  export { default as Transactions } from "./Transactions";