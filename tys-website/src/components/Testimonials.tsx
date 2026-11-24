import { useState } from "react";

import { testimonialSection, testimonials } from "../data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  function showNext() {
    setCurrent((prev) => (prev + 1) % total);
  }

  function showPrevious() {
    setCurrent((prev) => (prev - 1 + total) % total);
  }
  return (
    <section className="testimonial--section">
      <div className="testimonial__inner container">
        <div className="testimonial__description__container">
          <p className="testimonial__label">{testimonialSection.label}</p>
          <h2 className="testimonial__description">
            {testimonialSection.description}
          </h2>
          <div className="testimonial__navigation">
            <button
              className="testimonial__arrow"
              type="button"
              aria-label="Previous testimonial"
              onClick={showPrevious}
            >
              ←
            </button>
            <button
              className="testimonial__arrow"
              type="button"
              aria-label="Next testimonial"
              onClick={showNext}
            >
              →
            </button>
          </div>
        </div>
        <div className="testimonial__container">
          <span className="testimonial__mark" aria-hidden="true">
            “
          </span>
          <div className="testimonial__slides">
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className={`testimonial__slide ${index === current ? "is-active" : ""}`}
                aria-hidden={index !== current}
              >
                <blockquote className="testimonial__review">
                  {item.review}
                </blockquote>
                <div className="testimonial__contact">
                  <div className="testimonial__contact__img">
                    {getInitials(item.name)}
                  </div>
                  <div className="testimonial__contact__details">
                    <p className="testimonial__contact__name">{item.name}</p>
                    <p className="testimonial__contact__occupation">
                      {item.occupation} · {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
