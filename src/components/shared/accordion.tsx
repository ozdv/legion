import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { ReactNode } from "react";

type PropsT = {
  index?: number;
  header?: ReactNode;
  body?: ReactNode;
  defaultOpen?: boolean;
  // Styles
  headerStyles?: string;
  wrapperStyles?: string;
};

const Accordion = (props: PropsT) => {
  const {
    index = 0,
    header,
    body,
    defaultOpen = false,
    headerStyles = "",
    wrapperStyles = "",
  } = props;

  const headerStyle = `flex w-full items-center justify-between ${headerStyles}`;
  const wrapperStyle = `${wrapperStyles}`;

  return (
    <Disclosure
      as="div"
      key={index}
      defaultOpen={defaultOpen}
      data-testid="Accordion"
    >
      {({ open }) => (
        <>
          <div className={wrapperStyle}>
            <dt>
              <Disclosure.Button className={headerStyle}>
                {header}

                <ChevronDownIcon
                  className={clsx(
                    "h-6 w-6 flex-shrink-0 transform transition-transform duration-300",
                    { "-rotate-180": open }
                  )}
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </dt>
            {open ? (
              <div className="-mx-4 flex flex-1 border-b pt-4 dark:border-gray-700" />
            ) : null}
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-50 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel as="dd" className="">
                {body}
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
