import { Container } from "@/components/container";

type Props = {};
// todo
const About = (props: Props) => {
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
