import Image from "next/image";
import Link from "next/link";
import catena from "../assets/catena.jpg";

type Props = {
  href?: string;
};

const PrayerSection = (props: Props) => {
  const { href } = props;
  return (
    <div className="flex flex-row bg-blue-200">
      <Image
        src={catena}
        alt="Vexillum"
        className="w-1/3"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="flex flex-col p-2 md:p-4">
        <h2 className="font-bold text-slate-700 dark:text-slate-200 md:text-2xl lg:text-3xl">
          Legion of Mary Prayers
        </h2>
        <p className="py-2 text-slate-700 dark:text-slate-200">
          something about how legion prayers are based
        </p>
        <Link
          className="text-base font-semibold leading-6 text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          href={href ? href : "/prayers"}
        >
          Find out more here
        </Link>
      </div>
    </div>
  );
};

export default PrayerSection;
