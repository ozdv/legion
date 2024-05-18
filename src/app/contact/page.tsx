import Cards from "@/components/shared/cards";
import { Container } from "@/components/shared/container";
import { formatPhoneNumber } from "@/helpers/formatPhoneNumbers";
import { Metadata } from "next";
import {
  curiaList,
  juniorPraesidiumList,
  northPraesidiaList,
  southPraesidiaList,
} from "../constants/praesidiaLists";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact our Legion officers",
};

const Contact = () => {
  // https://legionofmaryquincycuria.weebly.com/

  // todo: maybe make the cards buttons that open up a modal with more info/location/contact etc

  return (
    <Container className="mb-10">
      <section className="space-y-8 sm:space-y-12">
        <div className="">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            The Diocese of Calgary is blessed with three different Curia&apos;s,
            with over 30 active Praesidia. Persons who wish to join the Legion
            must apply for membership in a Praesidium.
          </p>
        </div>

        <div className="">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
            Curia&apos;s
          </h3>
          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            Curia&apos;s are the governing body of two or more praesidia in a
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
            Praesidia&apos;s
          </h3>

          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            The basic unit of the Legion of Mary. Where prayer is intermingled
            with reports and discussion at a weekly meeting.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:gap-8">
            {[...southPraesidiaList, ...northPraesidiaList].map(
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
            Our Junior Praesidia&apos;s
          </h3>

          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            Same as a regular Praesidium, but for those that are younger than 18
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

export default Contact;

// https://tailwindui.com/components/application-ui/lists/grid-lists
