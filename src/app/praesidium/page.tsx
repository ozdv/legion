import Cards from "@/components/shared/cards";
import { Container } from "@/components/shared/container";
import { formatPhoneNumber } from "@/helpers/formatPhoneNumbers";
import { Metadata } from "next";
import {
  curiaList,
  juniorPraesidiumList,
  northPraesidiumList,
  southPraesidiumList,
} from "../../constants/praesidiaLists";

export const metadata: Metadata = {
  title: "Calgary Praesidium",
  description: "Contact our Legion officers",
};

const PraesidiumPage = () => {
  // https://legionofmaryquincycuria.weebly.com/
  // https://tailwindui.com/components/application-ui/lists/grid-lists

  // todo: maybe make the cards buttons that open up a modal with more info/location/contact etc

  return (
    <Container className="mb-10">
      <section className="space-y-8 sm:space-y-12">
        <div className="">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Our Legionaries
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            The Diocese of Calgary is blessed with three different Curiae with
            over 30 active Praesidium. Persons who wish to join the Legion must
            apply for membership in a Praesidia.
          </p>
        </div>

        <div className="">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
            Curiae
          </h3>
          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            Curiae are the governing body of two or more praesidia in a
            district.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:gap-8">
            {curiaList.map((curia, idx) => (
              <Cards
                key={idx}
                title={curia.name}
                description={curia.description}
                email={curia.email}
                phone={formatPhoneNumber(curia?.phone)}
              />
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
            Praesidium
          </h3>

          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            The basic unit of the Legion of Mary. Where prayer is intermingled
            with reports and discussion at a weekly meeting.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:gap-8">
            {[...southPraesidiumList, ...northPraesidiumList].map(
              (curia, idx) => (
                <Cards
                  key={idx}
                  title={curia.name}
                  description={curia.parish}
                  email={curia.email}
                  phone={formatPhoneNumber(curia?.phone)}
                />
              )
            )}
          </div>
        </div>

        <div className="">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
            Our Junior Praesidium
          </h3>

          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            Same as a regular Praesidia, but for those that are younger than 18
            years of age.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:gap-8">
            {juniorPraesidiumList.map((curia, idx) => (
              <Cards
                key={idx}
                title={curia.name}
                description={curia.parish}
                email={curia.email}
                phone={formatPhoneNumber(curia?.phone)}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PraesidiumPage;
