import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

export default function Contact() {
    return (
        
        <Typography variant="h1" component="h2" gutterBottom>
        Contact Page
      </Typography>   

    );
  }
  
export { default as Contact } from "./Contact";