import { Container } from "@/components/shared/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOM -",
  description: "Prayers for the Legion of Mary",
};
export default function Home() {
  return (
    <Container className="">
      <div className="flex flex-col">
        <div>announcements</div>
        <div>about here</div>
        <div className="flex flex-col">
          <p className="">description about LOM here</p>
          <p className="">description about Diocese LOM here</p>
        </div>
      </div>
    </Container>
  );
}
