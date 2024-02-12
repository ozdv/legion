"use client";
import { Container } from "@/components/container";
import { Link } from "@/components/link";
import Image from "next/image";
import catena from "../assets/catena.jpg";

const PrayerSection = () => {
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
          href="/prayers"
        >
          Find out more here
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Container className="" nopadding>
      <div className="flex flex-col">
        <PrayerSection />
        <div>announcements</div>
        <div>about here</div>
        <div className="flex flex-col">
          <p className="">description about LOM here</p>
          <p className="">description about Diocese LOM here</p>
        </div>
      </div>
      {/* <Footer /> */}
    </Container>
  );
}
