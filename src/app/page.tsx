import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <Container className="" nopadding>
      <div className="flex flex-col">
        {/* <PrayerSection /> */}
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
