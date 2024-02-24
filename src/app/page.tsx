import { Announcements, Banner, Description, FAQ } from "@/components/hero";
import { Container } from "@/components/shared/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOM -",
  description: "Prayers for the Legion of Mary",
};
export default function Home() {
  return (
    <Container className="" nopadding horizontalOnly>
      <div className="flex flex-col">
        <Banner />
        <Announcements />
        <FAQ />
        <Description />
      </div>
    </Container>
  );
}
