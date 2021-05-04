// Import react
import React from 'react';

// Import firestore information from project
import { firestore } from "../../firebase";

// Import material UI components and icon
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//--------------------------------------------------------------------------------


// Create and export the page to show Messages
export default class Messages extends React.Component {

    state = { 
        Messages: null
    }

    componentDidMount(){
        firestore.collection('messages')
        .get()
        .then( snapshot => {
            const Messages = []
            snapshot.forEach( doc => {
                const data = doc.data()
                Messages.push(data)
            })
            this.setState({ Messages: Messages})
        })
        .catch (error => console.log(error))
    }

    render(){
        return (
            <div className= "Messages">
                <div>
                    <Typography align="center" variant="h1" component="h2" gutterBottom>
                        Messages
                    </Typography> 
                </div>
                {
                    this.state.Messages &&
                    this.state.Messages.map (Messages => {
                        return(
                            <div>
                                <Grid 
                                    container spacing={3}>
                                    <Grid 
                                        item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Typography 
                                                    color="textSecondary" 
                                                    gutterBottom>
                                                    {Messages.senderName} at {Messages.createdAT}
                                                </Typography>
                                                <Typography 
                                                    variant="h5" 
                                                    component="h2">
                                                    {Messages.text}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button 
                                                    size="small">
                                                    REPLY
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    })
                }
                <div>
                    <Box display="flex" alignItems="left" justifyContent="left" m={4}>
                        <Button variant="contained" color="primary">
                            Create New Message
                        </Button>
                    </Box>
                </div>
            </div>
        );
    }
}
  
export { default as Messages } from "./Messages";