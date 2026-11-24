import { useState } from "react";

import { navLinks } from "../data";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = function () {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="navbar--section container">
        <a className="logo" href="#">
          <img src={logo} alt="Traditional Yoga Studio" />
        </a>
        <nav id="main-nav" className={`navbar ${isOpen ? "is-open" : ""}`}>
          {navLinks.map((linkName) => {
            return (
              <a key={linkName} href="#" onClick={() => setIsOpen(false)}>
                {linkName}
              </a>
            );
          })}
        </nav>
        <a className="btn navbtn" href="#">
          Try a free class
        </a>
        <button
          className="navbar__toggle"
          type="button"
          onClick={menuToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="main-nav"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
