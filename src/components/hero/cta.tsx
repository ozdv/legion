import { Button } from "../shared/button";

const CTA = () => {
  return (
    <section
      id="cta"
      aria-label="cta for legion of mary calgary curias"
      className="pt-20"
    >
      <div className="mx-auto max-w-2xl">
        <div className="flex w-full flex-col items-center gap-6">
          <>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
              Ready to get involved?
            </h2>
            <span className="text-2xl font-semibold text-slate-900 dark:text-slate-200">
              Find a Praesidia near you!
            </span>
          </>
          <div className="mt-8 flex w-full justify-center gap-x-6 lg:mt-0">
            {/* // todo bigger buttons for CTA dood */}
            <Button href="/contact">Reach out to us today!</Button>
            <Button href="#description" plain>
              Learn more<span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
