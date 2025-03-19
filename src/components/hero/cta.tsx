import { Button } from "../shared/button";

// todo: should use scroll-mt-8 or something when clicking header links.

const CTA = () => {
  return (
    <section
      id="cta"
      aria-label="cta for legion of mary calgary curiae"
      className="pt-20"
    >
      <div className="mx-auto max-w-2xl">
        <div className="flex w-full flex-col items-center gap-6">
          <>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Ready to get involved?
            </h2>
            <span className="text-2xl font-semibold text-slate-900 dark:text-slate-200">
              Find a Praesidium near you!
            </span>
          </>
          <div className="flex w-full flex-col justify-center gap-6 sm:flex-row lg:mt-0">
            <Button
              className="sm:px-8 sm:text-lg"
              href="/praesidium"
              color="primary"
            >
              Reach out today!
            </Button>
            <Button className="sm:text-lg" href="/about" plain>
              Learn more<span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
