import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importa la librería EmailJS
import { FaEnvelope, FaFilePdf, FaLinkedin } from "react-icons/fa";

const ContactMB = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  // Maneja los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Envia el correo a través de EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    // Usa el servicio de EmailJS para enviar el correo
    emailjs
      .send(
        "service_kjk04p6",
        "template_msistns",
        formData,
        "G4xIQngJXvDpfq_B5"
      )
      .then(
        (response) => {
          setFormStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setFormStatus("Failed to send message. Please try again.");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact-mobile" className="contact-section-mobile">
      <hr />
      <div className="container">
        <h3 className="contact-title">Contact</h3>

        <div className="contact-content">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <hr />
            <div className="contact-item">
              <span className="contact-label">
                <FaEnvelope style={{ marginBottom: "0.2rem" }} /> Email:{" "}
              </span>
              <a
                href="mailto:marialuiscarrion@gmail.com"
                className="contact-link"
                aria-label="Send an email to Maria Luis Carrion"
              >
                marialuiscarrion@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">
                <FaLinkedin style={{ marginBottom: "0.2rem" }} /> LinkedIn:{" "}
              </span>
              <a
                href="https://www.linkedin.com/in/marialuisacarrion/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit LinkedIn profile of Maria Luis Carrion"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">
                <FaFilePdf style={{ marginBottom: "0.2rem" }} /> Download CV:{" "}
              </span>
              <a
                href="/path/to/your-cv.pdf"
                download
                className="contact-link"
                aria-label="Download Maria Luis Carrion's CV"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h3 className="form-title">Send a Message</h3>
            <hr></hr>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {formStatus && <p className="form-status">{formStatus}</p>}
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMB;
