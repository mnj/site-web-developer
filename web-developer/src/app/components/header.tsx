import { Navbar } from "flowbite-react";
import React, { FC, useCallback, useRef } from "react";

const Header: FC<Record<string, never>> = function () {

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
      }, []);
    

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
          <Navbar.Link onClick={() => scrollToSection("home")} className="navlink">Hjem</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection("about")} className="navlink">Om</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection("competances")} className="navlink">Kompetencer</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection("prices")} className="navlink">Priser</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection("contact")} className="navlink">Kontakt</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
