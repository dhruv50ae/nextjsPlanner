import React from "react";
import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => {
        <EventItem event={event} />;
      })}
    </ul>
  );
};

export default EventList;
