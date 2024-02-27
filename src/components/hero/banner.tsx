import Image from "next/image";
import maryMediatrix from "../../assets/mary-mediatrix.jpg";
import { Button } from "../shared/button";

const Banner = () => {
  return (
    <div className="relative isolate overflow-hidden pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl lg:col-span-2 xl:col-auto">
            Legion of Mary in the Diocese of Calgary
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              The Legion of Mary is an international Catholic apostolic
              association with the sanction of the Church, and under the
              powerful leadership of Mary Immaculate, Mediatrix of All Graces.
              {/* https://www.legionofmarydurham.ca/ */}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              {/* // todo bigger buttons for CTA dood */}
              <Button>Get involved today</Button>
              <Button href="#description" plain>
                Learn more<span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
          <Image
            src={maryMediatrix}
            alt="Mary Mediatrix"
            className="mt-10 aspect-[8/10] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
