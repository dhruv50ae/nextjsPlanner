import { getAllEvents } from "../../data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/eventsSearch";

const AllEventsPage = () => {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
