import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase/app';

const MessageChannel = ({user=null, db = null}) => {
    const[messages, setMessages] = useState([]);

    useEffect((db) => {
        if(db) {
            const unsubscribe = db
            .collection('messages')
            .orderBy('createdAT')
            .limit(100)
            .onSnapshot(querySnapshot=>{
                //get all document data from collection with IDs
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setMessages(data);
            })

            //detach listener
            return unsubscribe;
        }
    }, [db]);

    return null;
}
  
  export default MessageChannel;