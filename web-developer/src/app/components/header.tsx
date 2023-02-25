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
          <Navbar.Link href="/" active>Hjem</Navbar.Link>
          <Navbar.Link href="/">Om</Navbar.Link>
          <Navbar.Link href="/">Kompetencer</Navbar.Link>
          <Navbar.Link href="/">Priser</Navbar.Link>
          <Navbar.Link href="/">Kontakt</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
