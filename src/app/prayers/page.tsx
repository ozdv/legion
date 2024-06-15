import FrankDuff from "@/components/prayers/frankDuff";
import LegionPrayer from "@/components/prayers/legionPrayer";
import { Container } from "@/components/shared/container";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import catena from "../../assets/catena.jpg";

export const metadata: Metadata = {
  title: "Prayers",
  description: "Prayers for the Legion of Mary",
};

// "The first prayers ever said by legionaries were the invocation and
// prayer of the Holy Spirit, followed by the Rosary. The same prayers
// have opened each Legion meeting ever since" - pg.92

const Prayers = () => {
  return (
    <Container className="mb-10 sm:mb-20">
      <div className="relative isolate mb-4 overflow-hidden sm:mb-6">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl md:mx-0 md:grid md:max-w-none md:grid-cols-2 md:gap-x-16 md:gap-y-6 lg:grid-cols-1 lg:grid-rows-1 lg:gap-x-8">
            <h2 className="max-w-2xl text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:col-span-2 md:text-left lg:col-auto">
              Prayers of the Legion of Mary
            </h2>
            <div className="mx-auto mt-4 max-w-sm md:mt-0 md:max-w-2xl lg:col-end-1 lg:row-start-1">
              <div className="text-center text-base md:text-left">
                <p className="text-slate-700 dark:text-slate-200">
                  The first prayers ever said by legionaries were the invocation
                  and prayer of the Holy Spirit, followed by the Rosary. The
                  same prayers have opened each Legion meeting ever since.
                </p>
                <p className="pt-2 not-italic text-slate-700 dark:text-slate-200">
                  - Frank Duff
                </p>
              </div>
              <p className="mt-4 text-center text-base text-slate-700 dark:text-slate-200 sm:mt-6 md:text-left">
                For more info, see:{" "}
                <Link
                  className="font-medium text-slate-700 underline hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                  href="/resources"
                >
                  Chapter 22 in the Legion Handbook
                </Link>
              </p>
            </div>
            <Image
              src={catena}
              alt="Vexillum"
              className="mx-auto mt-4 aspect-[5/8] w-fit max-w-[300px] object-cover sm:mt-6 md:mt-0 lg:row-span-2 lg:row-end-2"
            />
          </div>
        </div>
      </div>

      <LegionPrayer />
      <FrankDuff />
    </Container>
  );
};

export default Prayers;
