import Cards from "@/components/shared/cards";
import { Container } from "@/components/shared/container";
import { formatPhoneNumber } from "@/helpers/formatPhoneNumbers";
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
      email: "",
      phone: "",
    },
    {
      name: "Queen of the Most Holy Rosary Curia",
      description: "This is the curia for South Calgary",
      email: "",
      phone: "",
    },
    {
      name: "Our Lady of Perpetual Help Curia",
      description: "This is the curia for the Korean Community",
      email: "",
      phone: "",
    },
  ];

  const praesidiaList = [
    {
      name: "Mater Misericordiae (Young adults)",
      parish: "St. Francis Xavier Chaplaincy/St. Mary's Cathedral",
      email: "sergioplazas3b@gmail.com",
      phone: "",
    },
    {
      name: "Mary, Queen of Peace",
      parish: "St. Mark's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mary Immaculate",
      parish: "St. Mark's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mother of Divine Grace",
      parish: "St. Anthony's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Immaculate Heart of Mary",
      parish: "Our Lady of Perpetual Help Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mary, Mother of Good Counsel",
      parish: "Ascension Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mystical Rose",
      parish: "St. Patrick's Parish (Medicine Hat)",
      email: "",
      phone: "",
    },

    {
      name: "Mary, Ark of the Covenant",
      parish: "St. Luke's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Seat of Wisdom",
      parish: "St. Luke's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mary, Queen of Angels",
      parish: "St. Bernard's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mary, Queen of Victory",
      parish: "St. Patrick's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Spiritual Vessel",
      parish: "St. Pius X Parish",
      email: "",
      phone: "",
    },
    {
      name: "Our Lady of Visitation",
      parish: "St. Thomas More Parish",
      email: "",
      phone: "",
    },
    {
      name: "Queen of Martyrs",
      parish: "Canadian Martyrs Parish",
      email: "",
      phone: "",
    },
    {
      name: "Virgin of Virgins",
      parish: "St. Vincent of Liem Parish",
      email: "",
      phone: "",
    },
    {
      name: "Our Lady of Assumption",
      parish: "Holy Spirit Church Parish",
      email: "",
      phone: "",
    },

    {
      name: "Immaculate Mary",
      parish: "St. Vincent Liem Church Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mary Help of the Sick",
      parish: "St. Mary's Church (Brooks) Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mother of Divine Grace",
      parish: "St. Patrick's Parish",
      email: "",
      phone: "",
    },
  ];

  const juniorPraesidiumList = [
    {
      name: "Sancta Maria Junior Praesidium",
      parish: "St. Anthony's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mary Cause of Our Joy, Junior Praesidium",
      parish: "Holy Spirit Church Parish",
      email: "",
      phone: "",
    },
    {
      name: "Mother of Our Life Junior Praesidium",
      parish: "St. Luke's Parish",
      email: "",
      phone: "",
    },
    {
      name: "Our Lady of Angels, Junior Praesdium",
      parish: "St. Patrick's Parish",
      email: "",
      phone: "",
    },
  ];

  // https://legionofmaryquincycuria.weebly.com/

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
                phone={formatPhoneNumber(curia?.phone)}
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
                phone={formatPhoneNumber(curia?.phone)}
              />
            ))}
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
