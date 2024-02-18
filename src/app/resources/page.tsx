import { Container } from "@/components/shared/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources for all Legion of Mary members",
};

const Resources = () => {
  const resources = [
    { title: "", url: "https://www.legionofmarytidewater.com/docs/hb05.pdf" },
  ];

  return (
    <Container className="">
      <div className="flex flex-col">
        <div>Resources here</div>
        <ul>
          {resources.map((resource) => (
            <li key={resource.title} className="">
              {resource.title}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Resources;
