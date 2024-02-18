"use client";

import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { Container } from "../container";
import { ThemeToggle } from "../themeToggle";
import MobileNavIcon from "./mobileNavIcon";
import MobileNavLink from "./mobileNavLink";
import NavLink from "./navLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Prayers", href: "prayers" },
  { label: "Events", href: "events" },
  { label: "Contact", href: "contact" },
  { label: "Resources", href: "resources" },
  { label: "About", href: "about" },
];

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-gray-900/50 opacity-100 backdrop-blur backdrop-filter" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full flex origin-top flex-col rounded-2xl border border-white/10 bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 backdrop-blur backdrop-filter dark:bg-gray-900"
          >
            {navItems.map((navItem) => (
              <MobileNavLink href={navItem.href} key={navItem.href}>
                {navItem.label}
              </MobileNavLink>
            ))}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/75 dark:bg-gray-900/50 sm:backdrop-blur sm:backdrop-filter">
      <Container>
        <div className="relative z-50 flex w-full flex-1 justify-between py-3">
          <nav className="flex items-center md:gap-x-12">
            <Link
              href="/"
              aria-label="Home"
              scroll={false}
              className="text-xl font-bold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
            >
              Legion of Mary
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              {navItems.map((navItem) => (
                <NavLink href={navItem.href} key={navItem.href}>
                  {navItem.label}
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="flex items-center gap-x-5">
            <ThemeToggle />
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
