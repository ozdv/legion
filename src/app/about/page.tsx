import { Container } from "@/components/shared/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about the Legion of Mary",
};

const About = () => {
  return (
    <Container className="">
      <div className="flex flex-col">
        <div>About page</div>
        <div>About local praesidiums</div>
        <div>About diocese</div>
        <div>About Curia</div>
        <div>About Comitium</div>
        <div>About ???</div>
      </div>
    </Container>
  );
};

export default About;
