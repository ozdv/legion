import Image from "next/image";
import maryMediatrix from "../../assets/mary-mediatrix.jpg";
import { Button } from "../shared/button";

type Props = {};

const Banner = (props: Props) => {
  // return (
  //   <section
  //     id="banner"
  //     aria-label="Main banner for legion of mary calgary curias"
  //   >
  //     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  //       <div className="sm:grid sm:grid-cols-12 sm:gap-x-4 lg:gap-x-8">
  //         <div className="relative z-10 mx-auto max-w-2xl md:col-span-7 lg:col-span-7 lg:max-w-none xl:col-span-6">
  // <h1 className="font-display text-center text-5xl font-semibold tracking-tighter text-blue-600 dark:text-blue-400 sm:text-7xl ">
  //   Legion of Mary
  // </h1>
  //           <p className="mt-2 flex flex-col text-center text-base italic text-slate-700">
  //             {
  //               "Who is she that comes forth as the morning rising, fair as the moon, bright as the sun, terrible as an army set in battle array"
  //             }
  //             <span className="">Song 6:10</span>
  //           </p>
  //         </div>
  //         <div className="relative mt-10 sm:col-span-5 sm:mt-0 lg:row-span-2 xl:col-span-6">
  //           <Image
  //             src={maryMediatrix}
  //             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  //             alt={""}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <>
      {true ? (
        <div className="relative isolate overflow-hidden pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Legion of Mary in the Diocese of Calgary
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  The Legion of Mary is an international Catholic apostolic
                  association with the sanction of the Church, and under the
                  powerful leadership of Mary Immaculate, Mediatrix of All
                  Graces.
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
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      ) : (
        <div className="relative isolate">
          {/* https://tailwindui.com/components/marketing/sections/heroes */}
          {/* todo: maybe just switch to last example ? */}
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-12 sm:pt-16 lg:px-8">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="Text/CTAButtons relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-semibold tracking-tighter text-slate-700 dark:text-slate-200 sm:text-6xl">
                    Legion of Mary in the Diocese of Calgary
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-200 sm:max-w-md lg:max-w-none">
                    The Legion of Mary is an international Catholic apostolic
                    association with the sanction of the Church, and under the
                    powerful leadership of Mary Immaculate, Mediatrix of All
                    Graces.
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

                <div className="Images/grid mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 bg-blue-300 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>

                  <div className="mr-auto w-44 flex-none space-y-8 bg-green-300 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>

                  <div className="w-44 flex-none space-y-8 bg-pink-300 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
