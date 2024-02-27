type Props = {};

const Announcements = (props: Props) => {
  // https://tailwindui.com/components/marketing/sections/blog-sections
  // announcement stuff ?  ^

  return (
    <section
      id="announcements"
      aria-label="announcements from legion of mary calgary curias"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
            Announcements
          </h2>
          <ul>
            <li>announcements here</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
