import { navLinks } from "../data";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <div className="navbar--section container">
        <a className="logo" href="#home">
          <img src={logo} alt="Traditional Yoga Studio" />
        </a>
        <nav className="navbar">
          {navLinks.map((linkName) => {
            return (
              <a key={linkName} href="#">
                {linkName}
              </a>
            );
          })}
        </nav>
        <a className="btn navbtn" href="#">
          Try a free class
        </a>
      </div>
    </header>
  );
}
