import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "../components/Button";
import { Card, CardBody } from "../components/Card";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      // EmailJS configuration
      const serviceId = "service_upoxiee";
      const templateId = "template_ydpyjkw";
      const publicKey = "7kPrqmm-5HFYB6nCx";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "InfoVision",
        },
        publicKey,
      );

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus({
        type: "error",
        message:
          "Oops! Something went wrong. Please try again or email me directly.",
      });
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="contact-hero__subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
          <p>
            You can also browse our{" "}
            <Link to="/services">service offerings</Link> and{" "}
            <Link to="/work">project portfolio</Link> before reaching out.
          </p>
          <p>
            Share your goals, timelines, and current stack details—project
            responses are typically provided within one business day.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status.type !== "idle" && (
                  <div className={`form-status form-status--${status.type}`}>
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <Card variant="bordered">
                <CardBody>
                  <h3>Contact Information</h3>
                  <div className="contact-item">
                    <div className="contact-item__icon"></div>
                    <div className="contact-item__content">
                      <h4>Email</h4>
                      <a href="mailto:infovision@gmail.com">
                        infovision@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item__icon"></div>
                    <div className="contact-item__content">
                      <h4>Mobile</h4>
                      <a href="tel:+918780546982">+91 8780546982</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item__icon">🐙</div>
                    <div className="contact-item__content">
                      <h4>GitHub</h4>
                      <a
                        href="https://github.com/shivam-9090"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/shivam-9090
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item__icon">🐦</div>
                    <div className="contact-item__content">
                      <h4>Twitter</h4>
                      <a
                        href="https://twitter.com/shivam_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @shivam_dev
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card variant="bordered" className="availability-card">
                <CardBody>
                  <h3>Availability</h3>
                  <p className="availability-text">
                    Currently available for freelance projects and full-time
                    opportunities.
                  </p>
                  <div className="availability-status">
                    <span className="status-indicator"></span>
                    <span>Available for work</span>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
