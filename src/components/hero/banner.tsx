import Image from "next/image";
import maryMediatrix from "../../assets/mary-mediatrix.jpg";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section
      id="banner"
      aria-label="Main banner for legion of mary calgary curias"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:grid sm:grid-cols-12 sm:gap-x-4 lg:gap-x-8">
          <div className="relative z-10 mx-auto max-w-2xl md:col-span-7 lg:col-span-7 lg:max-w-none xl:col-span-6">
            <h1 className="font-display text-center text-5xl font-semibold tracking-tighter text-blue-600 dark:text-blue-400 sm:text-7xl ">
              Legion of Mary
            </h1>
            <p className="mt-2 flex flex-col text-center text-base italic text-slate-700">
              {
                "Who is she that comes forth as the morning rising, fair as the moon, bright as the sun, terrible as an army set in battle array"
              }
              <span className="">Song 6:10</span>
            </p>
          </div>
          <div className="relative mt-10 sm:col-span-5 sm:mt-0 lg:row-span-2 xl:col-span-6">
            <Image
              src={maryMediatrix}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
