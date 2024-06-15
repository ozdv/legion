import { legionStats } from "@/constants/legionStats";
import { Button } from "../shared/button";

const Description = () => {
  // https://tailwindui.com/components/marketing/sections/header
  // https://tailwindui.com/components/marketing/sections/stats-sections
  // could do stats like countries, aux, active, parishes, curia, etc.

  // https://en.wikipedia.org/wiki/Frank_Duff

  return (
    <section
      id="description"
      aria-label="description for legion of mary calgary curias"
      className="pt-20"
    >
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mx-auto max-w-3xl lg:mx-0 lg:grid lg:max-w-none ">
          <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            What is the <span className="sm:underline">Legion of Mary?</span>
          </h2>

          <div className="mx-auto my-6 max-w-4xl">
            <p className="text-center text-base leading-8 text-slate-700 dark:text-slate-200 md:text-lg">
              Founded by The Servant of God Frank Duff (1889-1980), the Legion
              of Mary is a lay apostolic association of Catholics who, with the
              sanction of the Church and under the powerful leadership of Mary
              Immaculate, Mediatrix of All Graces, serve the Church and their
              neighbour on a voluntary basis in almost 200 countries.
            </p>
            <p className="mt-6 text-center text-base leading-8 text-slate-700 dark:text-slate-200 md:text-lg">
              With the approval and support of the Popes and a great many
              Bishops, Priests and Religious, as well as the prayers and efforts
              of legionaries, the Legion, by the grace of God, has grown into a
              worldwide organisation with several million members.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/about" plain className="sm:text-lg">
                Learn more<span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
          {/* https://www.legionofmary.ie/about */}
          {/* in the footer at bottom ^  */}
          <dl className="Stats mt-10 grid grid-cols-1 gap-x-8 gap-y-8 text-center lg:grid-cols-3">
            {legionStats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-2 sm:gap-y-4"
              >
                <dt className="text-base leading-7 text-slate-700 dark:text-slate-200">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Description;
