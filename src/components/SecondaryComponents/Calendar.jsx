import { Link, withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
//import interactionPlugin from '@fullcalendar/interaction'

export  function About() {
    return (
        
        <Typography variant="h1" component="h2" gutterBottom>
            Calendar Page
        </Typography>   

    );
  }
  export { default as Calendar } from "./Calendar";
  


export  default class calendar extends React.Component {
    state = {
        weekendsVisible: true
    }
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin]}
        headerToolbar={{
            left: 'today',
            center: 'title',
            right: 'prev,next'
          }}
        eventContent={renderEventContent}
        selectable={true}
       
      />
    )
  }
}
function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }