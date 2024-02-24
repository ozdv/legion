type Props = {};

const Announcements = (props: Props) => {
  return (
    <section
      id="announcements"
      aria-label="announcements from legion of mary calgary curias"
      className="py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
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
