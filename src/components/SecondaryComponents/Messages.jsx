import React from 'react';
import { useContext } from 'react';
import { firestore } from "../../firebase";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { render } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default class Messages extends React.Component {

    state = { Messages: null}

    componentDidMount(){

        firestore.collection('messages')
        .get()
        .then( snapshot => {
            const Transactions = []
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
            <div>
                <div>
                    <Typography align="center" variant="h1" component="h2" gutterBottom>
                        Messages
                    </Typography> 
                </div>
                {
                    this.state.messages &&
                    this.state.messages.map (messages =>{
                        return(
                            <div>
                                <Card>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Name + {Messages.createdAT}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
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
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
  
export { default as Messages } from "./Messages";