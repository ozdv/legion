import Cards from "@/components/shared/cards";
import { Container } from "@/components/shared/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact our Legion officers",
};

const Contact = () => {
  const curiaList = [
    {
      name: "Mary Mediatrix of All Graces Curia",
      description: "This is the curia for North Calgary",
      email: "cam@cam.com",
      phone: "+1 (403) 420-6969",
    },
    {
      name: "Queen of the Most Holy Rosary Curia",
      description: "This is the curia for South Calgary",
      email: "cam@cam.com",
      phone: "+1 (403) 420-6969",
    },
    {
      name: "Korean Curia",
      description: "This is the curia for the Korean Community",
      email: "cam@cam.com",
    },
  ];

  const praesidiaList = [
    {
      name: "Mater Misericordiae",
      parish: "St. Francis Xavier Chaplaincy",
      email: "Cam@ozdv.me",
      phone: "",
    },
  ];

  return (
    <Container className="">
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
            Our Curia&apos;s
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
                phone={curia.phone}
              />
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
            Our Praesidia&apos;s
          </h3>

          <p className="mt-1 max-w-xl text-sm text-slate-700 dark:text-slate-200 sm:text-base">
            The basic unit of the Legion of Mary. Where prayer is intermingled
            with reports and discussion at a weekly meeting.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:gap-8">
            {praesidiaList.map((curia, idx) => (
              <Cards
                key={idx}
                title={curia.name}
                description={curia.parish}
                email={curia.email}
                phone={curia?.phone}
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
