import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;

    return (
      <>
        {events.map((event) => (
          <EventListItem
            deleteEvent={deleteEvent}
            key={event.id}
            event={event}
            selectEvent={selectEvent}
          />
        ))}
      </>
    );
  }
}

export default EventList;
