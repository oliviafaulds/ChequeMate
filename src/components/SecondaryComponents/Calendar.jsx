// Import react and fullCalendar components
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

//------------------------------------------------------

// Create and export the calendar page itself
export default class calendar extends React.Component {
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

// Function to show the name and time of an event
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}