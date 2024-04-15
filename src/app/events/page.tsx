import LegionEvents from "@/components/legionEvents";
import { Container } from "@/components/shared/container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description: "Events for the Calgary Legion of Mary",
};

const Events = () => {
  return (
    <Container className="mb-10 sm:mb-20">
      <section>
        <h2 className="text-left text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Legion Functions
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          The duty of periodically bringing together the members of the Legion
          in any district in order that they may know each other and that the
          spirit of unity may be fostered, is imposed upon each Curia. The
          following are the functions of the Legion.
        </p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
          For more info, see:{" "}
          <Link
            className="font-medium text-slate-700 underline hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
            href="/resources"
          >
            Chapter 30 in the Legion Handbook
          </Link>
        </p>
      </section>
      <LegionEvents />
    </Container>
  );
};

export default Events;
