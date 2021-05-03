import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

export default function About() {
    return (
        
        <Typography variant="h1" component="h2" gutterBottom>
            Households Page
        </Typography>   

    );
  }
  
  export { default as Households } from "./Households";