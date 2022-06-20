import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../helpers/apiUtil";

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
  };
}

export default HomePage;
