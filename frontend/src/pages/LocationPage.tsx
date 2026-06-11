import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardBody } from "../components/Card";
import { Button } from "../components/Button";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";
import "./LocationPage.css";

interface LocationData {
  city: string;
  serviceType: string;
  heroTitle: string;
  heroSubtitle: string;
  introText: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const locationConfig: Record<string, LocationData> = {
  "web-development-company-in-surat": {
    city: "Surat",
    serviceType: "Web Development",
    heroTitle: "Web Development Company in Surat",
    heroSubtitle: "Engineering high-performance React & Node.js web systems for Surat's growing enterprises.",
    introText: "InfoVision is Surat's premier web development agency. We deliver bespoke, type-safe full-stack software and high-speed corporate storefronts. From our offices in Sumeru City Mall, we help local diamond, textile, and retail businesses scale their operations globally using clean, search-optimized code.",
    address: "C-41, Sumeru City Mall, Near Sudama Chowk, Surat, Gujarat 395009",
    phone: "+91 78618 86462",
    email: "surat@infovision.digital",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    benefits: [
      "Local team available for in-person alignment workshops in Surat",
      "Specialized in high-speed e-commerce systems for Surat retail brands",
      "100/100 Core Web Vitals performance tuning for top local search rankings",
      "Full monorepo setups utilizing Next.js and NestJS backends"
    ],
    faqs: [
      { q: "Can we meet at your Surat office to discuss our project?", a: "Absolutely! We welcome local business owners to our office in Sumeru City Mall, Surat. Please contact us to schedule a meeting." },
      { q: "Do you design custom billing systems for Surat textile merchants?", a: "Yes, we build custom full-stack ERP and billing portals with PostgreSQL databases, tailored to textile warehouse inventories." }
    ]
  },
  "mobile-app-development-company-in-ahmedabad": {
    city: "Ahmedabad",
    serviceType: "Mobile App Development",
    heroTitle: "Mobile App Development Company in Ahmedabad",
    heroSubtitle: "Build fluid, native-performing iOS & Android mobile apps using React Native & Flutter.",
    introText: "InfoVision delivers production-ready mobile app development in Ahmedabad. We leverage React Native and Flutter to compile cross-platform mobile apps that scroll at a stable 60-120 FPS. With integrated Firestore indexing and secure local token syncs, we engineer apps that perform on any device.",
    address: "S.G. Highway, Bodakdev, Ahmedabad, Gujarat 380054",
    phone: "+91 87805 46982",
    email: "ahmedabad@infovision.digital",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    benefits: [
      "Agile mobile sprints with Expo EAS build systems",
      "Clean Material Design 3 UI and platform-specific navigation guidelines",
      "Offline database support and robust push notification pipelines",
      "Full API integrations to connect apps to existing CRM databases"
    ],
    faqs: [
      { q: "How long does a mobile app build take in Ahmedabad?", a: "Most MVP mobile applications compile in 8-12 weeks, including design, Firebase sync, and App Store approval." },
      { q: "Do you provide APKs for manual verification?", a: "Yes, we set up EAS release channels so you can download the latest dev APKs directly to your testing device at any time." }
    ]
  },
  "software-development-company-in-gujarat": {
    city: "Gujarat",
    serviceType: "Software Development",
    heroTitle: "Software Development Company in Gujarat",
    heroSubtitle: "Enterprise software engineering, custom CRM design, and AI model deployments in Gujarat.",
    introText: "As a premier software engineering firm in Gujarat, InfoVision designs, packages, and deploys high-availability web products. We help startups and enterprises across Gujarat build multi-tenant SaaS dashboards, secure internal CRM systems, and GPU-accelerated generative AI models.",
    address: "C-41, Sumeru City Mall, Surat, Gujarat 395009",
    phone: "+91 78618 86462",
    email: "gujarat@infovision.digital",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    benefits: [
      "Complete monorepo architectures with Docker compose configurations",
      "Infrastructure-as-code deployments utilizing Terraform scripts on AWS",
      "Proven AI engineering (including 4.5B LLM publishing on Hugging Face)",
      "Strict data isolation and Role-Based Access Control (RBAC) security"
    ],
    faqs: [
      { q: "What types of custom databases do you support?", a: "We work extensively with PostgreSQL, MongoDB, Redis, and Firestore, utilizing TypeORM and Mongoose for clean type safety." },
      { q: "Can you help migrate our Gujarat business from a single VPS to AWS?", a: "Yes, we script cloud migrations using Terraform and containerize applications in Docker, enabling horizontal scaling." }
    ]
  },
  "flutter-app-development-company-in-india": {
    city: "India",
    serviceType: "Flutter Development",
    heroTitle: "Flutter App Development Company in India",
    heroSubtitle: "Offshore Flutter application engineering delivering 120 FPS cross-platform mobile apps.",
    introText: "InfoVision is a leading Flutter app development company in India. We build highly custom-animated mobile systems compiling directly to ARM machine code. Leveraging Flutter's Impeller renderer and Riverpod state management, we build native-performing iOS and Android solutions at a fraction of double-native costs.",
    address: "C-41, Sumeru City Mall, Surat, Gujarat 395009",
    phone: "+91 78618 86462",
    email: "india@infovision.digital",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    benefits: [
      "Top-tier Indian Flutter developers with strict TypeScript and Dart guidelines",
      "Seamless integration with REST and GraphQL backend services",
      "Custom shaders and GPU-accelerated UI transitions",
      "Cost-effective offshore development with daily timezone syncs"
    ],
    faqs: [
      { q: "What are the benefits of hiring a Flutter agency from India?", a: "Hiring InfoVision from India gives you access to enterprise-grade mobile engineers, faster delivery timelines, and significant cost savings without compromising code quality." },
      { q: "Do you sign NDAs for offshore mobile projects?", a: "Yes, we protect all intellectual properties and sign mutual NDAs before reviewing any system blueprints." }
    ]
  },
  "website-development-company-in-india": {
    city: "India",
    serviceType: "Website Development",
    heroTitle: "Website Development Company in India",
    heroSubtitle: "Premium React & Next.js business websites optimized for Google & AI search engines.",
    introText: "InfoVision is a premier website development company in India. We construct responsive, accessible, and fast-loading web platforms. Every page is built with semantic markup and structured JSON-LD schema blocks, ensuring your brand achieves search visibility on Google and LLM summary engines.",
    address: "C-41, Sumeru City Mall, Surat, Gujarat 395009",
    phone: "+91 78618 86462",
    email: "india@infovision.digital",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    benefits: [
      "Pixel-perfect translation of designs into fully accessible HTML5/CSS3",
      "Static site generation (SSG) for instantaneous page loads",
      "Comprehensive breadcrumbs and schema.org JSON-LD scripts",
      "Ongoing Core Web Vitals maintenance support"
    ],
    faqs: [
      { q: "How does site performance impact our search rankings in India?", a: "Google uses page loading speeds as a core ranking metric. A 1-second delay can drop conversions by 20%. We optimize bundles to load in under 2 seconds." },
      { q: "Do you integrate third-party analytics?", a: "Yes, we configure GA4 events, email notifications (EmailJS), and CRM endpoints to log visitor leads automatically." }
    ]
  }
};

export const LocationPage: React.FC = () => {
  const location = useLocation();
  const pathKey = location.pathname.replace("/", "");
  const data = locationConfig[pathKey];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <main className="container section">
        <div style={{ textAlign: "center", padding: "5rem 0" }}>
          <h1>Location Page Not Found</h1>
          <p>The location landing page could not be located.</p>
          <Link to="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        </div>
      </main>
    );
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <main className="location-page">
      {/* Hero Section */}
      <section className="location-hero section">
        <div className="container">
          <span className="location-badge">{data.city}, India</span>
          <h1>{data.heroTitle}</h1>
          <p className="location-hero__subtitle">{data.heroSubtitle}</p>
          <div style={{ marginTop: "2rem" }}>
            <a href="#contact-form">
              <Button variant="primary" size="lg">Consult with our local team</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Intro & Benefits Grid */}
      <section className="location-details-section section">
        <div className="container">
          <div className="location-grid">
            <div className="location-main-content">
              <h2>Expert {data.serviceType} in {data.city}</h2>
              <p className="location-intro-text">{data.introText}</p>
              
              <div className="benefits-checklist" style={{ marginTop: "3rem" }}>
                <h3>Why Work With InfoVision?</h3>
                <ul className="checklist-items">
                  {data.benefits.map((b, idx) => (
                    <li key={idx} className="checklist-item">
                      <FaCheckCircle className="checklist-icon" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Contact Info */}
            <aside className="location-sidebar">
              <Card variant="bordered">
                <CardBody>
                  <h3>Office Details</h3>
                  <div className="office-info-list">
                    <div className="office-info-item">
                      <FaMapMarkerAlt className="office-icon" />
                      <div>
                        <strong>Address</strong>
                        <p>{data.address}</p>
                      </div>
                    </div>
                    <div className="office-info-item">
                      <FaPhoneAlt className="office-icon" />
                      <div>
                        <strong>Phone</strong>
                        <p>{data.phone}</p>
                      </div>
                    </div>
                    <div className="office-info-item">
                      <FaEnvelope className="office-icon" />
                      <div>
                        <strong>Email</strong>
                        <p>{data.email}</p>
                      </div>
                    </div>
                    <div className="office-info-item">
                      <FaClock className="office-icon" />
                      <div>
                        <strong>Hours</strong>
                        <p>{data.hours}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="location-faq-section section section--alt" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="container">
          <h2 className="text-center">{data.city} Service FAQ</h2>
          <div className="faq-list" style={{ maxWidth: "800px", margin: "3rem auto 0" }}>
            {data.faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? "faq-item--open" : ""}`} style={{ background: "rgba(255, 255, 255, 0.02)" }}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span>{faq.q}</span>
                  <span>▼</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized Lead Form */}
      <section id="contact-form" className="location-form-section section">
        <div className="container" style={{ maxWidth: "600px" }}>
          <Card variant="bordered">
            <CardBody>
              <h2 className="text-center" style={{ marginBottom: "0.5rem" }}>Start your project in {data.city}</h2>
              <p className="text-center" style={{ color: "var(--svc-text-secondary)", marginBottom: "2rem", fontSize: "0.95rem" }}>
                Send us a message and our local consulting team will reach out with a technical proposal.
              </p>
              {submitted ? (
                <div className="form-success text-center" style={{ padding: "2rem 0" }}>
                  <span style={{ fontSize: "3rem" }}>✓</span>
                  <h3>Proposal Request Sent!</h3>
                  <p style={{ color: "var(--svc-text-secondary)" }}>We will contact you shortly to align on credentials and project goals.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--svc-text-tertiary)" }}>Your Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: "100%", padding: "0.85rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", color: "#fff" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--svc-text-tertiary)" }}>Your Email</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: "100%", padding: "0.85rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", color: "#fff" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--svc-text-tertiary)" }}>Project Summary</label>
                    <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} placeholder={`Describe the ${data.serviceType} solutions you need in ${data.city}...`} style={{ width: "100%", padding: "0.85rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", color: "#fff", resize: "vertical" }} />
                  </div>
                  <Button type="submit" variant="primary" style={{ width: "100%", marginTop: "1rem" }}>Request Free Assessment</Button>
                </form>
              )}
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
  );
};
