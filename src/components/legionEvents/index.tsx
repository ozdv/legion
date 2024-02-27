import { formatDate, futureEvents, pastEvents } from "./events";

const LegionEvents = () => {
  return (
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
                      <time>{e.range.from}</time> - <time>{e.range.until}</time>
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
            <p className="mt-2 hidden w-32 sm:ml-6 sm:mt-0 sm:flex">
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
                      <time>{e.range.from}</time> - <time>{e.range.until}</time>
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
            <p className="mt-2 hidden w-32 flex-none sm:ml-6 sm:mt-0 sm:flex ">
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
  );
};

export default LegionEvents;
