import React, { useState, FormEvent, useRef, memo } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "../components/Button";
import { Card, CardBody } from "../components/Card";
import { ContactHeroVisual } from "../components/ContactHeroVisual";
import {
  FaCheck,
  FaChevronRight,
  FaChevronLeft,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaCode,
  FaMobileAlt,
  FaBrain,
  FaCloud,
  FaPalette,
  FaSync,
  FaAngleDown,
  FaArrowRight,
  FaUserShield,
} from "react-icons/fa";
import "./Contact.css";

// FAQ Item Accordion component
const FaqItem = memo(({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`contact-faq-item ${isOpen ? "faq-open" : ""}`}>
      <button className="contact-faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <FaAngleDown className="faq-arrow" />
      </button>
      <div className="contact-faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
});

FaqItem.displayName = "FaqItem";

export const Contact: React.FC = () => {
  // 5-step Wizard Form State
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextStep = () => {
    if (step === 1 && !projectType) {
      alert("Please select a project type.");
      return;
    }
    if (step === 2 && !budget) {
      alert("Please select a budget range.");
      return;
    }
    if (step === 3 && !timeline) {
      alert("Please select a target timeline.");
      return;
    }
    setStep(prev => Math.min(prev + 1, 5));
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !description) {
      alert("Please fill out all remaining contact fields.");
      return;
    }

    setFormStatus("loading");
    setStatusMsg("Sending your request...");

    try {
      // Preserve original EmailJS service parameters
      const serviceId = "service_upoxiee";
      const templateId = "template_ydpyjkw";
      const publicKey = "7kPrqmm-5HFYB6nCx";

      const compiledMessage = `
Project Type: ${projectType}
Estimated Budget: ${budget}
Target Timeline: ${timeline}

Project Description:
${description}

Company Name: ${company || "Not provided"}
      `;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          subject: `New Lead - ${projectType} (${budget})`,
          message: compiledMessage,
          to_name: "InfoVision",
        },
        publicKey
      );

      setFormStatus("success");
      setStatusMsg("Thank you! Your project request was sent successfully. We will follow up in under 12 hours.");
      
      // Reset form fields
      setStep(1);
      setProjectType("");
      setBudget("");
      setTimeline("");
      setDescription("");
      setName("");
      setEmail("");
      setCompany("");
    } catch (err) {
      console.error("Email send failed:", err);
      setFormStatus("error");
      setStatusMsg("Oops! Something went wrong while submitting. Please try again or email us directly at infovision@gmail.com.");
    }
  };

  return (
    <main className="contact-page">
      {/* SECTION 1: IMMERSIVE HERO */}
      <section className="contact-hero">
        <div className="contact-hero__canvas-container">
          <ContactHeroVisual />
        </div>
        <div className="container contact-hero__wrapper">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">
              Let's Build Something <br />
              <span className="text-gradient">Exceptional</span>
            </h1>
            <p className="contact-hero__desc">
              We are ready to turn your concept into a production-grade software system. Fill out our smart planner below to initiate a discussion.
            </p>
            <div className="contact-hero__actions">
              <Button variant="primary" size="lg" onClick={scrollToForm}>
                Start Project Planner
              </Button>
              <a href="#consultation">
                <Button variant="outline" size="lg">
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT OPTIONS */}
      <section className="contact-options section">
        <div className="container">
          <div className="section__header text-center">
            <span className="contact-section-badge">Inquiry Paths</span>
            <h2>Select Your Path</h2>
            <p className="section-desc">Different ways to partner with us, structured for efficiency.</p>
          </div>

          <div className="contact-options__grid">
            <Card variant="bordered" className="option-card" onClick={scrollToForm}>
              <CardBody>
                <div className="option-icon"><FaCode /></div>
                <h3>Start a Project</h3>
                <p>Launch custom product development. Define your scope and get a full quote estimation.</p>
                <span className="option-link">Launch Planner <FaArrowRight /></span>
              </CardBody>
            </Card>

            <a href="#consultation" className="option-card-link">
              <Card variant="bordered" className="option-card">
                <CardBody>
                  <div className="option-icon"><FaClock /></div>
                  <h3>Book a Consultation</h3>
                  <p>Schedule a 30-minute system architecture review call with our engineering lead.</p>
                  <span className="option-link">Select Time <FaArrowRight /></span>
                </CardBody>
              </Card>
            </a>

            <a href="mailto:infovision@gmail.com" className="option-card-link">
              <Card variant="bordered" className="option-card">
                <CardBody>
                  <div className="option-icon"><FaCloud /></div>
                  <h3>Technical Partnership</h3>
                  <p>Establish dedicated long-term product teams to support scaling and operations.</p>
                  <span className="option-link">Email Us <FaArrowRight /></span>
                </CardBody>
              </Card>
            </a>

            <Card variant="bordered" className="option-card" onClick={scrollToForm}>
              <CardBody>
                <div className="option-icon"><FaUserShield /></div>
                <h3>Enterprise Solutions</h3>
                <p>Discuss strict SLAs, high-availability setups, custom AI integrations, and infrastructure audits.</p>
                <span className="option-link">Contact Sales <FaArrowRight /></span>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: SMART PROJECT FORM & SIDE PANEL */}
      <section ref={formSectionRef} className="contact-form-section section">
        <div className="container">
          <div className="contact-form-grid">
            {/* Form Side Panel */}
            <div className="form-info-panel">
              <span className="contact-section-badge">Onboarding</span>
              <h2>What Happens Next?</h2>
              
              <div className="info-flow-step">
                <div className="info-flow-num">1</div>
                <div>
                  <h4>Planner Submission</h4>
                  <p>Submit your project specifics via our multi-step planner. It takes less than 2 minutes.</p>
                </div>
              </div>

              <div className="info-flow-step">
                <div className="info-flow-num">2</div>
                <div>
                  <h4>Technical Analysis</h4>
                  <p>We review your request, estimate budget constraints, and map out a stack recommendation.</p>
                </div>
              </div>

              <div className="info-flow-step">
                <div className="info-flow-num">3</div>
                <div>
                  <h4>Discovery Call</h4>
                  <p>We host a 30-minute technical session to align objectives and review the system blueprint.</p>
                </div>
              </div>

              <div className="response-time-box">
                <div className="response-pulse"></div>
                <span>Average response time: <strong>Under 12 Hours</strong></span>
              </div>
            </div>

            {/* Smart Multi-Step Form */}
            <div className="smart-form-wrapper">
              <div className="form-progress-bar">
                <div 
                  className="form-progress-fill" 
                  style={{ width: `${(step / 5) * 100}%` }}
                ></div>
                <span className="progress-text">Step {step} of 5</span>
              </div>

              <form onSubmit={handleSubmit} className="smart-form">
                {/* Step 1: Project Type */}
                {step === 1 && (
                  <div className="form-step-container">
                    <h3>What are you looking to build?</h3>
                    <p className="step-subtitle">Select the primary platform for your product.</p>
                    <div className="step-selection-grid">
                      {["Website", "Mobile App", "SaaS Platform", "AI Product", "Custom Software"].map(type => (
                        <button
                          key={type}
                          type="button"
                          className={`selection-btn ${projectType === type ? "selected" : ""}`}
                          onClick={() => setProjectType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Estimated Budget */}
                {step === 2 && (
                  <div className="form-step-container">
                    <h3>Estimated Project Budget?</h3>
                    <p className="step-subtitle">Helps us recommend the most appropriate architecture scope.</p>
                    <div className="step-selection-grid">
                      {["Under $5k", "$5k - $15k", "$15k - $50k", "$50k+"].map(range => (
                        <button
                          key={range}
                          type="button"
                          className={`selection-btn ${budget === range ? "selected" : ""}`}
                          onClick={() => setBudget(range)}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Timeline */}
                {step === 3 && (
                  <div className="form-step-container">
                    <h3>What is your target timeline?</h3>
                    <p className="step-subtitle">We coordinate launch windows based on engineering milestones.</p>
                    <div className="step-selection-grid">
                      {["Urgent (< 1 month)", "1 - 3 months", "3 - 6 months", "Flexible"].map(time => (
                        <button
                          key={time}
                          type="button"
                          className={`selection-btn ${timeline === time ? "selected" : ""}`}
                          onClick={() => setTimeline(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Description */}
                {step === 4 && (
                  <div className="form-step-container">
                    <h3>Tell us about your project</h3>
                    <p className="step-subtitle">Provide details on features, business goals, and tech stack requirements.</p>
                    <div className="form-group-full">
                      <textarea
                        className="form-textarea-premium"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="We are building a web-based client portal with real-time sync, auth integrations, and a Stripe payment gateway..."
                        required
                        rows={6}
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* Step 5: Contact Details */}
                {step === 5 && (
                  <div className="form-step-container">
                    <h3>Who should we contact?</h3>
                    <p className="step-subtitle">Provide your business details to receive our follow-up proposal.</p>
                    <div className="form-input-column">
                      <div className="form-group-premium">
                        <label>Name *</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div className="form-group-premium">
                        <label>Business Email *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                        />
                      </div>

                      <div className="form-group-premium">
                        <label>Company Name (Optional)</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Acme Corp"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {formStatus !== "idle" && (
                  <div className={`form-status-msg status-${formStatus}`}>
                    {statusMsg}
                  </div>
                )}

                {/* Wizard Controls */}
                <div className="form-controls">
                  {step > 1 && (
                    <button 
                      type="button" 
                      className="control-btn prev-btn" 
                      onClick={handlePrevStep}
                    >
                      <FaChevronLeft /> Back
                    </button>
                  )}
                  
                  {step < 5 ? (
                    <button 
                      type="button" 
                      className="control-btn next-btn" 
                      onClick={handleNextStep}
                      style={{ marginLeft: step === 1 ? "auto" : "0" }}
                    >
                      Next Step <FaChevronRight />
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      className="submit-btn-premium"
                      disabled={formStatus === "loading"}
                    >
                      {formStatus === "loading" ? "Submitting..." : "Submit Planner Request"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY WORK WITH US */}
      <section className="contact-pillars section">
        <div className="container">
          <div className="section__header text-center">
            <span className="contact-section-badge">Rigor</span>
            <h2>Our Core Engineering Commitments</h2>
            <p className="section-desc">We build digital products following production-grade engineering principles.</p>
          </div>

          <div className="contact-pillars__grid">
            <Card variant="bordered" className="pillar-card">
              <CardBody>
                <h4>Quality First</h4>
                <p>Every codebase is built with strict type safety, modular structures, clean abstractions, and full automated testing coverage.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="pillar-card">
              <CardBody>
                <h4>Performance</h4>
                <p>We target sub-second page loads using optimal server-side rendering, code split bundles, and fine-tuned database queries.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="pillar-card">
              <CardBody>
                <h4>Security</h4>
                <p>We follow solid industry guidelines, sanitizing user inputs, structuring secure session parameters, and protecting sensitive endpoints.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="pillar-card">
              <CardBody>
                <h4>Scalability</h4>
                <p>Architectures compiled in stateless Docker environments. Prepared to handle traffic growth smoothly, without service breaks.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="pillar-card">
              <CardBody>
                <h4>Long-Term Support</h4>
                <p>Active support options, database indexing optimizations, package upgrades, and direct engineer communication.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROJECT EXPECTATIONS TIMELINE */}
      <section className="contact-timeline section">
        <div className="container">
          <div className="section__header text-center">
            <span className="contact-section-badge">Expectations</span>
            <h2>Our Delivery Framework</h2>
            <p className="section-desc">What the journey looks like from our initial consultation to live launch.</p>
          </div>

          <div className="contact-timeline__grid">
            <div className="timeline-card">
              <div className="timeline-num">01</div>
              <h4>Discovery Call</h4>
              <p>We review your planner submission, clarify business objectives, and structure scope charts.</p>
            </div>
            
            <div className="timeline-card">
              <div className="timeline-num">02</div>
              <h4>Technical Spec Sheet</h4>
              <p>We supply a custom layout mapping the database design, tech stack choices, and project milestones.</p>
            </div>

            <div className="timeline-card">
              <div className="timeline-num">03</div>
              <h4>Sprint Milestones</h4>
              <p>We execute development in active weekly sprints, with progress reviews hosted on a live sandbox URL.</p>
            </div>

            <div className="timeline-card">
              <div className="timeline-num">04</div>
              <h4>Launch Checklist</h4>
              <p>We perform server validation, verify responsive screens, setup certificates, and go live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRUST METRICS */}
      <section className="contact-metrics section">
        <div className="container">
          <div className="contact-metrics__grid">
            <div className="metric-box">
              <div className="metric-num">150+</div>
              <div className="metric-lbl">Projects Delivered</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">20+</div>
              <div className="metric-lbl">Technologies Supported</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">8+</div>
              <div className="metric-lbl">Industries Served</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">24/7</div>
              <div className="metric-lbl">Monitoring Availability</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">99.8%</div>
              <div className="metric-lbl">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="contact-faqs section">
        <div className="container">
          <div className="section__header text-center">
            <span className="contact-section-badge">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p className="section-desc">Quick responses to common project onboarding topics.</p>
          </div>

          <div className="contact-faq-list">
            <FaqItem 
              question="How long does a project typically take?" 
              answer="Timeline depends entirely on the product complexity. Simple custom web portals or website conversions take 3 to 6 weeks. Complex enterprise CRM structures or native Flutter applications can span 3 to 6 months. We break down milestones in our spec proposals."
            />
            <FaqItem 
              question="What technologies do you specialize in?" 
              answer="Our core engineering stack is TypeScript, React, Next.js, Node.js, NestJS, and PostgreSQL. For mobile development, we specialize in native compiled Flutter apps. We configure containerized pipelines using Docker and host compute services on AWS or Vercel."
            />
            <FaqItem 
              question="How much does product development cost?" 
              answer="Every project is priced dynamically based on its structural requirements and estimated milestones. Simple solutions start at $3,000, while complex enterprise platforms or custom AI integrations with custom models range from $15,000 to $50,000. All specs receive detailed transparent line-item quotes."
            />
            <FaqItem 
              question="Do you provide post-launch support and SLAs?" 
              answer="Yes, we support our launches with active monthly SLAs covering server health, security patches, system upgrades, database tuning, and direct developer communication channels."
            />
            <FaqItem 
              question="Can you work with and scale our existing codebase?" 
              answer="Absolutely. We start by auditing your current repository structure, analyzing database query indexing, and identifying bottlenecks. We then build refactoring charts to scale the system with zero down-time."
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT INFORMATION CARDS */}
      <section className="contact-details-section section">
        <div className="container">
          <div className="section__header text-center">
            <span className="contact-section-badge">Details</span>
            <h2>Contact Information</h2>
          </div>

          <div className="contact-details__grid">
            <Card variant="bordered" className="details-card">
              <CardBody>
                <div className="details-item">
                  <FaEnvelope className="details-icon" />
                  <div>
                    <h4>Email Address</h4>
                    <a href="mailto:infovision@gmail.com">infovision@gmail.com</a>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card variant="bordered" className="details-card">
              <CardBody>
                <div className="details-item">
                  <FaPhoneAlt className="details-icon" />
                  <div>
                    <h4>Mobile Number</h4>
                    <a href="tel:+918780546982">+91 8780546982</a>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card variant="bordered" className="details-card">
              <CardBody>
                <div className="details-item">
                  <FaClock className="details-icon" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card variant="bordered" className="details-card">
              <CardBody>
                <div className="details-item">
                  <FaMapMarkerAlt className="details-icon" />
                  <div>
                    <h4>Office Location</h4>
                    <p>Surat, Gujarat, India</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="contact-social-bar">
            <a href="https://www.linkedin.com/in/shivam-vaghani-024190371" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/achyutam_infotech" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com/@achyutam_infotech?si=3GVGjq_wClrcNVgC" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://github.com/shivam-9090" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </section>

      {/* SECTION 9: BOOK A CONSULTATION SCHEDULER */}
      <section id="consultation" className="contact-consultation section">
        <div className="container">
          <div className="about-cta__box">
            <span className="contact-section-badge">Calendly</span>
            <h2>Book a Consultation</h2>
            <p>
              Schedule a direct 30-minute technical session with our engineering lead to discuss your product requirements and spec options.
            </p>
            <div className="calendly-mock-container">
              <div className="calendly-header">
                <h4>System Architecture Discovery Call</h4>
                <span>30 Min • Video Call</span>
              </div>
              <div className="calendly-days">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, idx) => (
                  <div key={idx} className="calendly-day-card">
                    <h5>{day}</h5>
                    <button className="time-select-btn" onClick={scrollToForm}>10:00 AM IST</button>
                    <button className="time-select-btn" onClick={scrollToForm}>2:00 PM IST</button>
                    <button className="time-select-btn" onClick={scrollToForm}>4:30 PM IST</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="contact-final-cta section">
        <div className="container">
          <div className="final-cta__box text-center">
            <h2>Have an Idea? Let's Bring It to Life.</h2>
            <p>Skip the middle agency layers and speak directly with engineers who construct systems.</p>
            <Button variant="primary" size="lg" onClick={scrollToForm}>
              Launch Project Planner
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
