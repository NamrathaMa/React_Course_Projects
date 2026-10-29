import { useState } from "react";

import SectionTag from "./SectionTag";
import { experiences } from "../data";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].buttonData);
  const currentTab = experiences.find((exp) => exp.buttonData === activeTab);
  return (
    <section id="experience">
      <SectionTag>Experience</SectionTag>
      <h2>Where I've worked</h2>
      <div id="experience-grid" className="experience-grid">
        <div className="tabs">
          {experiences.map((button) => (
            <button
              key={button.buttonData}
              className={button.buttonData === activeTab ? "tab active" : "tab"}
              onClick={() => setActiveTab(button.buttonData)}
            >
              {button.name}
            </button>
          ))}
        </div>
        <div>
          <div className="panel">
            <h3>
              {currentTab.title} @
              <a
                href={currentTab.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentTab.name}
              </a>
            </h3>
            <p className="date-location">
              {currentTab.date} · {currentTab.location}
            </p>
            <ul>
              {currentTab.exp.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
