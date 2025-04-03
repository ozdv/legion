import React from "react";
import { Button } from "../shared/button";

type Props = {
  href: string;
  children: React.ReactNode;
};

const MobileNavLink = ({ href, children }: Props) => {
  return (
    <Button
      href={href}
      plain
      className="flex items-center whitespace-nowrap rounded !border-transparent px-6 py-2 font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 lg:px-0 lg:py-0 lg:text-sm"
    >
      {children}
    </Button>
  );
};

export default MobileNavLink;
