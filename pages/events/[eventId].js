import { getEventById, getAllEvents } from "../../helpers/apiUtil";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const EventDetailPage = ({ selectedEvent }) => {
  const event = selectedEvent;
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>;
      </ErrorAlert>
    );
  }
  const { title, date, location, image } = event;
  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps({ params }) {
  const eventId = params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: false,
  };
}

export default EventDetailPage;
