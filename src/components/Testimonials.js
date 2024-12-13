import React from "react";
import { FaCircleUser } from "react-icons/fa6";
const testimonials = [
  {
    quote:
      "Maria’s ability to navigate complex stakeholder relationships is unmatched.",
    author: "John Doe, CEO of ExampleCorp",
  },
  {
    quote:
      "Her passion for sustainability shines through every project she leads.",
    author: "Jane Smith, Project Manager at GreenTech",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h3 className="testimonials-title">Testimonials</h3>
        {/* <hr></hr> */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <FaCircleUser className="testimonial-icon" />
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
