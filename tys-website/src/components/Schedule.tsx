import { scheduleSection } from "../data";

export default function Schedule() {
  return (
    <section className="schedule--section">
      <div className="schedule__inner container">
        <div className="breath" aria-hidden="true">
          <div className="breath__ring"></div>
          <div className="breath__circle"></div>
          <div className="breath__words">
            <span className="breath__in">Breathe in…</span>
            <span className="breath__out">Breathe out…</span>
          </div>
        </div>
        <div className="schedule__div">
          <p className="schedule__label">{scheduleSection.label}</p>
          <h2 className="schedule__heading">{scheduleSection.heading}</h2>
          <p className="schedule__description">{scheduleSection.description}</p>
          <div className="schedule__box">
            {scheduleSection.schedule.map((entry) => (
              <div className="schedule__entry" key={entry.range}>
                <div className="schedule__box__days">{entry.range}</div>
                <div className="schedule__box__time">
                  {entry.timings.join(" · ")}
                </div>
              </div>
            ))}
          </div>
          <a className="btn navbtn" href="#">
            {scheduleSection.btnTxt}
          </a>
        </div>
      </div>
    </section>
  );
}
