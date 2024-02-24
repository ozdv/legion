import Image from "next/image";
import vexillium from "../../assets/vexillium.png";
import { Container } from "../shared/container";
import { navItems } from "./navItems";
import NavLink from "./navLink";

const Footer = () => {
  return (
    <footer className="border-t">
      <Container horizontalOnly>
        <div className="flex flex-row-reverse justify-between py-8 sm:flex-col">
          <div className="flex w-full justify-end sm:justify-center">
            <Image
              src={vexillium}
              alt="vexillium"
              className="h-32 w-16 sm:h-16 sm:w-8"
            />
          </div>

          <nav className="flex justify-center sm:mt-6" aria-label="quick links">
            <div className="flex flex-col justify-center gap-x-6 sm:flex-row">
              {navItems.map((navItem) => (
                <NavLink href={navItem.href} key={navItem.href}>
                  {navItem.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
