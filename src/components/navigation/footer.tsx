import Image from "next/image";
import Link from "next/link";
import vexillium from "../../assets/vexillium.png";
import { Container } from "../shared/container";
import NavLink from "./navLink";

const Footer = () => {
  return (
    <footer className="bg-blue-100">
      <Container>
        <div className="py-16">
          <Link
            href="/"
            aria-label="Home"
            scroll={false}
            className="group flex flex-row items-center space-x-4"
          >
            <Image src={vexillium} alt="vexillium" className="h-8 w-auto" />

            <span className="whitespace-nowrap text-xl font-bold text-slate-700 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400">
              Legion of Mary
            </span>
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
