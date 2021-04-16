import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

export default function Dashboard() {
    return (
        
        <Typography variant="h1" component="h2" gutterBottom>
          Dashboard Page
        </Typography>   

    );
  }
  
  export { default as Dashboard } from "./Dashboard";