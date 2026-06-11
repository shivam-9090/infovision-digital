import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardBody } from "../components/Card";
import { Button } from "../components/Button";
import { FaCheckCircle, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import "./IndustryPage.css";

interface IndustryData {
  name: string;
  tagline: string;
  overview: string;
  complianceText: string;
  features: string[];
  caseStudy: { id: string; title: string; desc: string };
  faqs: { q: string; a: string }[];
}

const industryConfig: Record<string, IndustryData> = {
  "software-for-real-estate": {
    name: "Real Estate",
    tagline: "Custom property portals, MLS indexing, and visual mapping interfaces.",
    overview: "We construct reliable software systems for the real estate industry, enabling brokers and property managers to catalog, filter, and map listings. From integrating Multiple Listing Services (MLS) to structuring user-friendly interactive maps, we build software that keeps listings in sync and drives tenant inquiries.",
    complianceText: "Fully compliant with local property listing standards, geographical metadata structures, and secure client profile databases.",
    features: [
      "MLS / IDX API data integration frameworks",
      "Interactive map overlays and geospatial search parameters",
      "Customer tenant inquiry routing and custom CRM pipeline links",
      "Dynamic catalog filtering for purchase, lease, and commercial items"
    ],
    caseStudy: {
      id: "crm-infovision",
      title: "CRM InfoVision Integration",
      desc: "An enterprise-grade CRM pipeline capable of routing incoming real estate inquiries, capturing notes, and scoring hot buyer leads."
    },
    faqs: [
      { q: "Can the real estate portal sync listings automatically?", a: "Yes, we structure scheduled cron sync pipelines to pull data from MLS servers hourly, ensuring listing accuracy." }
    ]
  },
  "software-for-healthcare": {
    name: "Healthcare",
    tagline: "Patient management systems and telehealth pipeline engineering.",
    overview: "InfoVision engineers custom patient management portals, appointment booking flows, and secure communication channels for healthcare providers. We prioritize clean, responsive design so patients can access records quickly on any device, while maintaining strict server-side encryption.",
    complianceText: "Designed around HIPAA compatibility guidelines, end-to-end data encryption, and role-based doctor/patient access levels.",
    features: [
      "Secure patient intake forms and document upload modules",
      "Doctor appointment booking systems with calendar sync hooks",
      "Telehealth video channel connection interfaces",
      "Patient health metrics recording dashboards"
    ],
    caseStudy: {
      id: "nivassetu",
      title: "NivasSetu Platform",
      desc: "Zero-brokerage rental platform incorporating secure user Aadhaar KYC verification API flows and direct landlord contact interfaces."
    },
    faqs: [
      { q: "How do you manage patient data security?", a: "All sensitive health databases are encrypted at rest and in transit. We strictly implement RBAC so only authorized clinical profiles can view medical records." }
    ]
  },
  "software-for-education": {
    name: "Education (EdTech)",
    tagline: "Learning management systems, quiz engines, and student dashboard pipelines.",
    overview: "We build intuitive student portals, online quiz engines, course syllabus managers, and teacher analytics dashboards. Our systems load fast and run smoothly on lower-bandwidth mobile networks, keeping students engaged and progress tracking accurate.",
    complianceText: "Compliant with educational accessibility standards (WCAG) and student data privacy acts.",
    features: [
      "Course catalog video listing and structured text materials",
      "Interactive multiple-choice quiz engines with score tracking",
      "Teacher review dashboards and student progress charts",
      "Secure student grading and homework upload fields"
    ],
    caseStudy: {
      id: "nivassetu",
      title: "NivasSetu Direct Listings",
      desc: "Highly interactive map search and direct listing portal optimized for fast queries using Google Maps and spatial indexes."
    },
    faqs: [
      { q: "Can we embed video lessons directly?", a: "Yes, we integrate video players (Vimeo, YouTube, AWS CloudFront) with custom access limits so only enrolled students can view course files." }
    ]
  },
  "software-for-finance": {
    name: "FinTech & Finance",
    tagline: "Secure transaction pipelines, invoice management, and reporting dashboards.",
    overview: "InfoVision structures financial technology software designed for absolute security and database reliability. We build custom business invoices systems, payment logs, multi-tenant billing models, and interactive analytical accounting dashboards with strict audit trails.",
    complianceText: "Engineered to support PCI-DSS payment compliance standards, transaction hashing, and database schema rollbacks.",
    features: [
      "Secure Stripe and payment gate APIs integrations",
      "PDF invoice generation and automated email dispatch tasks",
      "Multi-tenant subscription invoice dashboards",
      "Comprehensive transactional log audits"
    ],
    caseStudy: {
      id: "crm-infovision",
      title: "CRM InfoVision Deal Analytics",
      desc: "Full-stack dashboard tracking leads values, converting revenue metrics, and plotting sales cycles over custom date intervals."
    },
    faqs: [
      { q: "How are payment transaction failures resolved?", a: "We write robust transaction codeblocks. If a charge or db write fails, PostgreSQL automatically rolls back all intermediate steps, preventing inconsistent states." }
    ]
  },
  "software-for-startups": {
    name: "Startups (MVP Launch)",
    tagline: "Rapid prototype engineering, Node.js API backbones, and Next.js MVPs.",
    overview: "Time-to-market is the primary metric for startups. We build clean, lightweight MVPs designed to launch fast while remaining easy to scale. By utilizing Docker, containerized Node.js REST APIs, and React/Next.js client templates, we help you launch your product to users in weeks, not months.",
    complianceText: "Built on clean, decoupled architectures ready for venture-backed technical audits.",
    features: [
      "Stateless Node.js backend templates with database migration setups",
      "Responsive React client-side boilerplate layouts",
      "Quick email notification integrations (EmailJS / SendGrid)",
      "Docker Compose configuration files for one-command server launches"
    ],
    caseStudy: {
      id: "catalstudio",
      title: "CatalStudio AI Studio",
      desc: "AI-powered catalog variation dashboard generating high-fidelity product marketing assets in under 6 seconds."
    },
    faqs: [
      { q: "Can we scale the MVP backend after launching?", a: "Yes. By containerizing the Node.js API in Docker, you can deploy it to AWS ECS or Kubernetes in the future to scale horizontally under traffic peaks." }
    ]
  }
};

export const IndustryPage: React.FC = () => {
  const location = useLocation();
  const pathKey = location.pathname.replace("/", "");
  const data = industryConfig[pathKey];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!data) {
    return (
      <main className="container section">
        <div style={{ textAlign: "center", padding: "5rem 0" }}>
          <h1>Solutions Page Not Found</h1>
          <p>The targeted industry solutions page could not be located.</p>
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
    <main className="industry-page">
      {/* Industry Hero */}
      <section className="industry-hero section">
        <div className="container">
          <span className="industry-badge">Industry Solution</span>
          <h1>Software for {data.name}</h1>
          <p className="industry-hero__subtitle">{data.tagline}</p>
          <div style={{ marginTop: "2rem" }}>
            <a href="#quote-form">
              <Button variant="primary" size="lg">Get {data.name} Demo</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="industry-content-section section">
        <div className="container">
          <div className="industry-layout">
            {/* Left Column */}
            <div className="industry-main">
              <h2>Architecting {data.name} Platforms</h2>
              <p className="industry-overview-text">{data.overview}</p>

              {/* Features List */}
              <div className="industry-features" style={{ marginTop: "3rem" }}>
                <h3>Core Platform Features</h3>
                <ul className="features-checklist">
                  {data.features.map((f, idx) => (
                    <li key={idx} className="feature-item">
                      <FaCheckCircle className="feature-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance / Security banner */}
              <div className="compliance-banner" style={{ marginTop: "3rem" }}>
                <div className="compliance-icon-wrapper">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4>Compliance & Security Standards</h4>
                  <p>{data.complianceText}</p>
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <aside className="industry-sidebar">
              {/* Featured Case Study */}
              <Card variant="bordered" style={{ marginBottom: "2rem" }}>
                <CardBody>
                  <h3>Proven Experience</h3>
                  <div className="industry-cs-preview" style={{ marginTop: "1rem" }}>
                    <span className="cs-tag">Case Study Highlight</span>
                    <h4 style={{ margin: "0.5rem 0" }}>
                      <Link to={`/case-study/${data.caseStudy.id}`} style={{ color: "#ffffff", textDecoration: "none" }}>{data.caseStudy.title} →</Link>
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--svc-text-secondary)", lineHeight: "1.5", margin: 0 }}>
                      {data.caseStudy.desc}
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* Quote Form */}
              <Card variant="bordered" id="quote-form">
                <CardBody>
                  <h3>Discuss Your Requirements</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--svc-text-secondary)", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                    Request a live software demo or get a custom blueprint evaluation for your {data.name} project.
                  </p>
                  {submitted ? (
                    <div className="form-success text-center" style={{ padding: "1.5rem 0" }}>
                      <span style={{ fontSize: "2.5rem" }}>✓</span>
                      <h4>Proposal Requested!</h4>
                      <p style={{ fontSize: "0.8rem", color: "var(--svc-text-secondary)" }}>We will coordinate a demo with your team within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "var(--svc-text-tertiary)" }}>Your Name</label>
                        <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: "100%", padding: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", color: "#fff" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "var(--svc-text-tertiary)" }}>Your Email</label>
                        <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: "100%", padding: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", color: "#fff" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.25rem", fontSize: "0.75rem", textTransform: "uppercase", color: "var(--svc-text-tertiary)" }}>Target Features</label>
                        <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} placeholder={`E.g., Customer portals, security concerns for ${data.name} platform...`} style={{ width: "100%", padding: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", color: "#fff", resize: "vertical" }} />
                      </div>
                      <Button type="submit" variant="primary" style={{ width: "100%", marginTop: "0.5rem" }}>Schedule Demo Call</Button>
                    </form>
                  )}
                </CardBody>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};
