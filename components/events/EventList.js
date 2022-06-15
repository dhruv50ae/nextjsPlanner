import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = ({ items }) => {
  const eventItems = items.map((event) => (
    <EventItem key={event.id} event={event} />
  ));
  return <ul className={classes.list}>{eventItems}</ul>;
};

export default EventList;
