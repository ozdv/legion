import { Container } from "@/components/container";
import FrankDuff from "@/components/prayers/frankDuff";
import LegionPrayer from "@/components/prayers/legionPrayer";
import { Metadata } from "next";
import Image from "next/image";
import catena from "../../assets/catena.jpg";

export const metadata: Metadata = {
  title: "Prayers",
  description: "Prayers for the Legion of Mary",
};

const Prayers = () => {
  return (
    <Container className="flex flex-col items-center space-y-4 pt-4">
      <div className="header">
        <title className="text-center font-bold text-slate-700 dark:text-slate-200 md:text-2xl lg:text-3xl">
          Legion of Mary Prayers
        </title>
        <p className="max-w-lg py-2 text-center italic text-slate-700 dark:text-slate-200">
          The first prayers ever said by legionaries were the invocation and
          prayer of the Holy Spirit, followed by the Rosary. The same prayers
          have opened each Legion meeting ever since.
          <br />
          <span className="not-italic">- Frank Duff</span>
        </p>
      </div>
      <Image
        src={catena}
        alt="Vexillum"
        className="w-1/3"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <LegionPrayer />
      <FrankDuff />
    </Container>
  );
};

export default Prayers;

// "The first prayers ever said by legionaries were the invocation and
// prayer of the Holy Spirit, followed by the Rosary. The same prayers
// have opened each Legion meeting ever since" - pg.92
