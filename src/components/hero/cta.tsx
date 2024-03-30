import { Button } from "../shared/button";

const CTA = () => {
  return (
    <section id="cta" aria-label="cta for legion of mary calgary curias">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="gap-6 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
            Ready to get involved?
            <br />
            Find a Praesidia near you
          </h2>

          <div className="mt-8 flex items-center gap-x-6 lg:mt-0">
            {/* // todo bigger buttons for CTA dood */}
            <Button>Get involved today</Button>
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
