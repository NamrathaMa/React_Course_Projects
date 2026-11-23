import { introSection } from "../data";
import { SunIcon, CurvyLine, Mandala } from "./Icons";
import IntroPhoto from "../assets/intro__img.png";

export default function Intro() {
  return (
    <section className="intro--section container">
      <div className="intro__description">
        <p className="intro__title">
          <span className="intro__icon">
            <SunIcon />
          </span>
          {introSection.name} · {introSection.location}, {introSection.city}
        </p>
        <h1 className="intro__heading">
          {introSection.heading}
          <span className="highlighted">
            {introSection.highlighted}
            <CurvyLine />
          </span>
        </h1>
        <p className="intro__text">{introSection.subtext}</p>
        <div className="intro__links">
          <a className="btn introbtn" href="#">
            Try a free class
          </a>
          <a href="#">Book a free consultation →</a>
        </div>
      </div>
      <div className="intro__visual">
        <div className="intro__mandala">
          <Mandala />
        </div>
        <div className="intro__img">
          <img
            src={IntroPhoto}
            alt="Dharmendra Soni meditating in lotus pose"
          />
        </div>
      </div>
    </section>
  );
}
