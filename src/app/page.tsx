import { Banner, CTA, Description, FAQ } from "@/components/hero";
import { Container } from "@/components/shared/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legion of Mary | Calgary Diocese",
  description: "Prayers for the Legion of Mary",
};

export default function Home() {
  return (
    <Container className="mb-16 flex flex-col lg:space-y-12 xl:space-y-20">
      <Banner />

      {/* // TODO: Pending actual announcements lol  */}
      {/* <Announcements /> */}

      <Description />
      <FAQ />

      {/* // TODO: Pending testimonies lol  */}
      {/* <Testimonies /> */}

      <CTA />
    </Container>
  );
}
