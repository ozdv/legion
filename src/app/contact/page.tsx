import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact our Legion officers",
};

const Contact = () => {
  return (
    <Container className="">
      <div className="flex flex-col">
        <div>Contact here</div>
      </div>
    </Container>
  );
};

export default Contact;

// https://tailwindui.com/components/application-ui/lists/grid-lists
