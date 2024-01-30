import { Container } from "./container";

type Props = {};
// todo
const Hero = (props: Props) => {
  return (
    <Container className="">
      <div className="flex flex-col">
        <div>hero page</div>
        <div>logo here</div>
        <div>announcements</div>
        <div>about here</div>
      </div>
    </Container>
  );
};

export default Hero;
