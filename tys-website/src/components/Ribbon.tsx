import { ribbonText } from "../data";
import { Lotus } from "./Icons";

export default function Ribbon() {
  return (
    <section className="ribbon--section" aria-hidden="true">
      <div className="ribbon__track">
        {[...ribbonText, ...ribbonText].map((text, index) => (
          <span key={text + index} className="ribbon__item">
            {text}
            <Lotus />
          </span>
        ))}
      </div>
    </section>
  );
}
