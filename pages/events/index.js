import { getAllEvents } from "../../helpers/apiUtil";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/eventsSearch";
import { useRouter } from "next/router";
import Head from "next/head";

const AllEventsPage = ({ fetchedEvents }) => {
  const router = useRouter();
  const events = fetchedEvents;
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      fetchedEvents: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
