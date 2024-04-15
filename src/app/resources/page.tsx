import { Container } from "@/components/shared/container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources for all Legion of Mary members",
};

const Resources = () => {
  const resources = [
    {
      title: "Official Handbook",
      url: "https://www.legionofmarytidewater.com/docs/hb05.pdf",
    },
    {
      title: "Calgary Diocese",
      url: "https://www.catholicyyc.ca/",
    },
    {
      title: "Concilium Legionis Mariae",
      url: "https://www.legionofmary.ie/",
    },
    {
      title: "Maria Legionis",
      url: "https://www.legionofmary.ie/news",
    },
    {
      title: "",
      url: "",
    },
    {
      title: "",
      url: "",
    },
    {
      title: "",
      url: "",
    },
    {
      title: "",
      url: "",
    },
    {
      title: "",
      url: "",
    },
    {
      title: "",
      url: "",
    },
  ];

  return (
    <Container className="mb-10 md:mb-20">
      <div className="flex flex-col">
        <h2 className="text-left text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Resources
        </h2>
        <ul className="mt-4 space-y-2">
          {resources.map((resource, idx) => (
            <li key={resource.title + idx} className="">
              <Link
                target="_blank"
                aria-label={resource.title}
                href={resource.url}
                className="text-lg font-medium text-slate-700 underline hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
              >
                {resource.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Resources;
