import { Container } from "@/components/shared/container";
import { Metadata } from "next";
import Link from "next/link";
import { legionResources } from "../../constants/legionResources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources for all Legion of Mary members",
};

const Resources = () => {
  return (
    <Container className="mb-10 md:mb-20">
      <div className="flex flex-col">
        <h2 className="text-left text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Resources
        </h2>
        <ul className="mt-4 space-y-2">
          {legionResources.map((resource, idx) => (
            <li key={resource.title + idx} className="">
              <Link
                target="_blank"
                aria-label={resource.title}
                href={resource.url}
                className="flex flex-col"
              >
                <span className="text-lg font-medium text-slate-700 underline hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400">
                  {resource.title}
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 sm:text-base">
                  {resource.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Resources;
