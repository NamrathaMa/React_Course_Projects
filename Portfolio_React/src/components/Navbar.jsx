import { useEffect } from "react";

import { navLinks, socialLinks } from "../data.js";
import { MoonIcon, SunIcon } from "./Icons.jsx";

const themeHandler = function () {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", document.documentElement.dataset.theme);
};

export default function Navbar() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme:dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        document.documentElement.dataset.theme = e.matches ? "dark" : "light";
      }
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          namratha<span>.</span>
        </a>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.ref}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="links">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                className="icon-btn"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Icon />
              </a>
            );
          })}
          <button
            className="icon-btn"
            id="theme-toggle"
            aria-label="change between light and dark"
            onClick={themeHandler}
          >
            <MoonIcon />
            <SunIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
