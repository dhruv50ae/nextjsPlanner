import React from "react";
import EventItem from "./EventItem";

const EventList = ({ items }) => {
  const eventItems = items.map((event) => (
    <EventItem key={event.id} event={event} />
  ));
  return <ul>{eventItems}</ul>;
};

export default EventList;
