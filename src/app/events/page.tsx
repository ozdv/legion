import { Container } from "@/components/shared/container";
import { Link } from "@/components/shared/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Events for the Calgary Legion of Mary",
};

const allEvents = [
  {
    eventName: "The Acies",
    description: "St. Thomas Moore parish basement",
    date: new Date("March 23 2024"),
    range: {
      from: "Pending",
      until: "Pending",
    },
    allDay: false,
  },
  {
    eventName: "The Annual General Reunion",
    description: "Pending",
    date: new Date(""),
    range: {
      from: "Pending",
      until: "Pending",
    },
    allDay: false,
  },
  {
    eventName: "An Outdoor Function",
    description: "Edworthy Park, Site # pending",
    date: new Date("July 20 2024"),
    range: {
      from: "8:45AM",
      until: "2:45PM",
    },
    allDay: false,
  },
  {
    eventName: "The Retreat",
    description: "FCJ Center",
    date: new Date("February 17 2024"),
    range: {
      from: "8:30AM",
      until: "3:30PM",
    },
    allDay: false,
  },
  {
    eventName: "The Praesidium Function",
    description: "Different for each Praesidium.",
    date: new Date("December 31 2024"),
    range: {
      from: "",
      until: "",
    },
    allDay: true,
  },
  // {
  //   eventName: "The Congress",
  //   description: "",
  //   date: new Date(),
  //   range: {
  //     from: "2022-01-17T10:00",
  //     until: "2022-01-17T10:15",
  //   },
  //   allDay: false,
  // },
];

const todaysDate = new Date();

const futureEvents = allEvents.filter(
  (e) => todaysDate.getTime() < e.date.getTime()
);

const pastEvents = allEvents.filter(
  (e) => todaysDate.getTime() > e.date.getTime()
);

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    weekday: "short",
    day: "numeric",
  };

  if (date) return new Date(date).toLocaleDateString("en-CA", options);
  return "Pending";
};

const Events = () => {
  return (
    <Container className="mt-4 md:mt-6">
      <section>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Legion Functions
        </h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          The duty of periodically bringing together the members of the Legion
          in any district in order that they may know each other and that the
          spirit of unity may be fostered, is imposed upon each Curia. The
          following are the functions of the Legion.
        </p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          For more info, see:{" "}
          <Link
            className="font-medium text-slate-700 underline hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
            href="/resources"
          >
            Chapter 30 in the Legion Handbook
          </Link>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Upcoming events
        </h2>
        <ol className="divide-y divide-slate-200 text-sm leading-6 text-slate-700 dark:divide-slate-700 dark:text-slate-200">
          {futureEvents.map((e, i) => (
            <li
              className="w-full py-4 sm:flex sm:justify-between"
              key={e.eventName}
            >
              <div className="sm:flex sm:flex-row sm:justify-between">
                <div className="flex justify-between">
                  <time className="w-28 flex-none">{formatDate(e.date)}</time>
                  <p className="w-32 flex-none sm:hidden">
                    {e.allDay ? (
                      "All day"
                    ) : (
                      <>
                        <time>{e.range.from}</time> -{" "}
                        <time>{e.range.until}</time>
                      </>
                    )}
                  </p>
                </div>

                <p className="mt-2 w-52 whitespace-nowrap font-semibold text-slate-900 sm:mt-0">
                  {e.eventName}
                </p>
                <p className="mt-0 whitespace-nowrap text-slate-900 sm:font-semibold">
                  {e.description}
                </p>
              </div>
              <p className="mt-2 hidden w-32 sm:ml-6 sm:mt-0 sm:flex-none">
                {e.allDay ? (
                  "All day"
                ) : (
                  <>
                    <time>{e.range.from}</time> - <time>{e.range.until}</time>
                  </>
                )}
              </p>
            </li>
          ))}
        </ol>

        <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
          Previous Events
        </h2>
        <ol className="divide-y divide-slate-200 text-sm leading-6 text-slate-700 dark:divide-slate-700 dark:text-slate-200">
          {pastEvents.map((e, i) => (
            <li
              className="w-full py-4 line-through sm:flex sm:justify-between"
              key={e.eventName}
            >
              <div className="sm:flex sm:flex-row sm:justify-between">
                <div className="flex justify-between">
                  <time className="w-28 flex-none">{formatDate(e.date)}</time>
                  <p className="w-32 flex-none sm:hidden">
                    {e.allDay ? (
                      "All day"
                    ) : (
                      <>
                        <time>{e.range.from}</time> -{" "}
                        <time>{e.range.until}</time>
                      </>
                    )}
                  </p>
                </div>

                <p className="mt-2 w-52 whitespace-nowrap font-semibold text-slate-900 sm:mt-0">
                  {e.eventName}
                </p>
                <p className="mt-0 whitespace-nowrap text-slate-900 sm:font-semibold">
                  {e.description}
                </p>
              </div>
              <p className="mt-2 hidden w-32 sm:ml-6 sm:mt-0 sm:flex-none">
                {e.allDay ? (
                  "All day"
                ) : (
                  <>
                    <time>{e.range.from}</time> - <time>{e.range.until}</time>
                  </>
                )}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
};

export default Events;
