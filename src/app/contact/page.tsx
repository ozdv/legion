import { Container } from "@/components/shared/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact our Legion officers",
};

const Contact = () => {
  // https://tailwindui.com/components/marketing/sections/team-sections
  // Contact team people / praesidiums ^
  // contact curias ?

  // https://tailwindui.com/components/marketing/sections/contact-sections
  // Contact forms ^

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
