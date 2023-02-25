import { Navbar } from "flowbite-react";
import { FC } from "react";

const Header: FC<Record<string, never>> = function () {

  return (
    <header className="sticky top-0 z-20">
      <Navbar fluid className="max-w-screen-lg mx-auto">
        <Navbar.Brand>
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            web.developer
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Experience</Navbar.Link>
          <Navbar.Link href="/">Pricing</Navbar.Link>
          <Navbar.Link href="/">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
