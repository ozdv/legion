import { Link } from "./link";

type Props = {
  title: string;
  description: string;
  email: string;
  phone?: string;
};

const Cards = (props: Props) => {
  const { title, description, email, phone } = props;

  return (
    <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:leading-7">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
        {description}
      </p>
      <dl className="mt-2 flex flex-row items-center justify-between text-sm leading-6">
        <div>
          <dt className="sr-only">Email</dt>
          <dd>
            <Link
              className="font-bold tracking-wide text-sky-600 hover:underline"
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </dd>
        </div>
        {phone && (
          <div className="mt-1">
            <dt className="sr-only">Phone number</dt>
            <dd className="text-slate-700 dark:text-slate-200">{phone}</dd>
          </div>
        )}
      </dl>
    </div>
  );
};

export default Cards;
