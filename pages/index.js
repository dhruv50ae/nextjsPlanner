import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../data";

const featuredEvents = getFeaturedEvents();

const HomePage = () => {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
