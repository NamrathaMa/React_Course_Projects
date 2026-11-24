import { footerSection } from "../data";
import logo from "../assets/logo.png";
import { WaveTop } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer--section">
      <div className="wave wave--top">
        <WaveTop />
      </div>
      <div className="footer__inner container">
        <div className="footer__brand">
          <img src={logo} alt="Traditional Yoga Studio" />
          <address className="footer__address">{footerSection.address}</address>
        </div>
        <div className="footer__links">
          {footerSection.columns.map((column) => {
            return (
              <div className="footer__column" key={column.heading}>
                <p className="footer__heading">{column.heading}</p>
                {column.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <a
                      href={link.href}
                      key={link.label}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="footer__bottom">
          <p>{footerSection.copyright}</p>
          <div className="footer__legal">
            {footerSection.legalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
