type Props = {};

const FAQ = (props: Props) => {
  return (
    <section
      id="faq"
      aria-label="faq for legion of mary calgary curias"
      className="py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Now is the time to build your portfolio.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
