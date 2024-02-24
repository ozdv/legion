import { Popover } from "@headlessui/react";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

const MobileNavLink = ({ href, children }: Props) => {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="flex items-center whitespace-nowrap rounded px-6 py-2 font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 lg:px-0 lg:py-0 lg:text-sm"
    >
      {children}
    </Popover.Button>
  );
};

export default MobileNavLink;
