import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helpers/apiUtil";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";

const FilteredEventsPage = ({ hasError, date, events }) => {
  const router = useRouter();
  // const filterData = router.query.slug;
  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }
  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>;
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date1 = new Date(date.year, date.month - 1);
  return (
    <>
      <Head>
        <title>Filtered Events</title>
        <meta
          name="description"
          content={`All events for ${numMonth}/${numYear}`}
        />
      </Head>
      <ResultsTitle date={date1} />
      <EventList items={filteredEvents} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: { events: filteredEvents, date: { year: numYear, month: numMonth } },
  };
}

export default FilteredEventsPage;
