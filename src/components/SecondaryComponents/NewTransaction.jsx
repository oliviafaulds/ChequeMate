import React, {useState} from 'react';
import { firestore } from "../../firebase";
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

export default function About() {
    const [item, setItem] = useState("");
    const [cost, setCost] = useState();
    
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
            <h1>New Transaction</h1>
            
            <label>Item</label>
            <input 
                placeholder="Item name"
                value = {item}
                onChange={(e) => setItem(e.target.value)}
            />

            <label>Cost</label>
            <input
                placeholder="£ab.cd"
                value = {cost}
                onChange={(e) => setCost(e.target.value)}
            />

            <button type="submit">Submit</button>

        </form>

    );
  }
  
  export { default as NewTransaction } from "./NewTransaction";