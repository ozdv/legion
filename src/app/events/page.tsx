import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Events for the Legion of Mary",
};

const Events = () => {
  return (
    <Container className="">
      <div className="flex flex-col">
        <div>Events here</div>
      </div>
    </Container>
  );
};

export default Events;
