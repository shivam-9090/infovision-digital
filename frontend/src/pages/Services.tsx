import React, { useState, memo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody } from "../components/Card";
import { Button } from "../components/Button";
import { ServicesHeroVisual } from "../components/ServicesHeroVisual";
import "./Services.css";

// Premium Custom Inline SVG Icons
const Icons = {
  FullStack: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Mobile: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  Flutter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <path d="M14.5 13.5l-4-4 4-4M9.5 13.5h7M7 17.5l5.5-5.5L7 6.5" />
    </svg>
  ),
  Design: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  ),
  AI: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M12 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
      <path d="M2 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
      <path d="M16 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  SaaS: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  DevOps: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Chart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Healthcare: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  RealEstate: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Fintech: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
      <line x1="5" y1="15" x2="9" y2="15" />
    </svg>
  ),
  SaaSStartups: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
};

interface DetailedService {
  title: string;
  subtitle: string;
  overview: string;
  timeline: string;
  technologies: string[];
  deliverables: string[];
  Icon: React.ComponentType;
  faqs: { q: string; a: string }[];
  caseStudies: { title: string; id: string; desc: string }[];
}

const detailedServices: Record<string, DetailedService> = {
  "web-development": {
    title: "Full Stack Web Development",
    subtitle: "End-to-end, high-performance web systems engineered with React, Node.js, and TypeScript.",
    overview: "We construct enterprise-grade web applications designed for maximum scalability, data isolation, and user conversion. Our solutions leverage React & Next.js for fluid frontends, coupled with NestJS/Express backends running optimized PostgreSQL schemas. Every site undergoes performance tuning to exceed Google Core Web Vitals targets, ensuring premium rankings and seamless user transitions.",
    timeline: "4 - 12 weeks",
    technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "Docker", "TailwindCSS"],
    deliverables: [
      "Robust client-side web application interface",
      "Type-safe REST API or GraphQL integration layers",
      "Fully optimized PostgreSQL / MongoDB schema layout",
      "Secure JWT auth with refresh cycles and RBAC permissions",
      "Interactive data reporting dashboards",
      "Production-ready Docker Compose & CI/CD deployment configurations"
    ],
    Icon: Icons.FullStack,
    faqs: [
      { q: "Do you utilize templates or write custom code?", a: "We develop all full-stack applications from scratch to align strictly with your business objectives, ensuring no bloat and optimal load times." },
      { q: "How is database security and scale managed?", a: "We apply connection pooling (e.g. pg-pool, Redis caching) and structure tables with appropriate indexes. Security is reinforced through strict SQL validation and row-level context filters." }
    ],
    caseStudies: [
      { id: "crm-infovision", title: "CRM InfoVision", desc: "A Next.js & NestJS CRM system with deals pipeline, real-time analytics, and optimized Docker builds." },
      { id: "nivassetu", title: "NivasSetu Rentals", desc: "A zero-brokerage rental platform with spatial search, Aadhaar verification, and PostgreSQL spatial indices." }
    ]
  },
  "mobile-app-development": {
    title: "Cross-Platform Mobile App Development",
    subtitle: "Native-performing mobile applications built with React Native for iOS and Android.",
    overview: "We engineer cross-platform mobile apps that combine native performance with single-codebase velocity. Utilizing Expo and React Native, we implement Material Design 3 guidelines, secure offline token caching, and automated Firebase Firestore query optimization, delivering a flawless user experience across all devices.",
    timeline: "6 - 12 weeks",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Firestore", "Cloud Storage", "Material UI 3", "EAS Build"],
    deliverables: [
      "Cross-platform iOS and Android builds",
      "Expo EAS configuration files and native hooks",
      "Optimized Firebase Firestore queries and compound indexes",
      "Local secure storage with token refresh configurations",
      "Native animations and responsive layouts",
      "Automated play store / app store ready deployment profiles"
    ],
    Icon: Icons.Mobile,
    faqs: [
      { q: "Will the app look and feel native?", a: "Yes, we use platform-specific components and native compiling threads so the user interface scrolls and responds at 60-120 FPS, identical to fully native Swift or Kotlin code." },
      { q: "How are app updates managed?", a: "We configure Expo OTA (Over-The-Air) updates, allowing you to push small fixes and content updates directly to users without waiting for App Store approval." }
    ],
    caseStudies: [
      { id: "nivassetu", title: "NivasSetu Mobile Web", desc: "Mobile-first direct listing platform with responsive Google Maps overlays and optimized touch search." }
    ]
  },
  "flutter-development": {
    title: "Flutter Application Development",
    subtitle: "Vibrant cross-platform apps compiling directly to native machine code.",
    overview: "Flutter compiles directly to native ARM and x86 machine code, bypassing Javascript bridges. We build high-fidelity, custom-animated interfaces utilizing Flutter's Impeller rendering pipeline. This architecture ensures stable 120Hz scrolling, fast initial loads, and complete design parity across iOS, Android, and web screens.",
    timeline: "5 - 14 weeks",
    technologies: ["Flutter", "Dart", "BLoC / Riverpod", "SQLite", "Firebase", "REST Integrations", "Custom Shaders"],
    deliverables: [
      "Optimized Dart codebase utilizing feature-first folder architecture",
      "State separation with Riverpod / BLoC patterns",
      "Highly responsive layouts tailored for mobile, tablet, and foldable viewports",
      "Local database configuration (SQLite / Hive)",
      "High-fidelity custom animations and gesture bindings",
      "EAS or native gradle compilations"
    ],
    Icon: Icons.Flutter,
    faqs: [
      { q: "Why choose Flutter over React Native?", a: "Flutter is ideal when you require pixel-perfect, custom-designed UI elements, heavy client-side calculations, or complex visual transitions that must run smoothly at 60-120 FPS." },
      { q: "How do you handle backend integrations?", a: "We write clean, type-safe API request hooks using repositories, enabling the Flutter app to talk to any RESTful or GraphQL server seamlessly." }
    ],
    caseStudies: [
      { id: "nivassetu", title: "NivasSetu Rentals", desc: "High-performance direct-to-owner portal optimized for low-latency search on mobile device views." }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design & Prototyping",
    subtitle: "User-centric layout architectures crafted to maximize visitor conversion rates.",
    overview: "We structure interfaces that look premium and guide users directly to your core call-to-action. By analyzing layout flows, typographic hierarchies, and micro-interaction behaviors, we design clean prototypes that load fast and feel intuitive. Spacing, typography, and color palettes are structured via standard CSS custom variables.",
    timeline: "2 - 6 weeks",
    technologies: ["Figma", "CSS Modules", "Typography System", "Responsive Grids", "Design Tokens", "Wireframing"],
    deliverables: [
      "Detailed wireframes and interactive user journeys",
      "Harmonious custom color palettes and type hierarchy specifications",
      "Component library design tokens",
      "High-fidelity mobile and desktop visual prototypes",
      "Design systems optimized for developer implementation"
    ],
    Icon: Icons.Design,
    faqs: [
      { q: "What is your approach to responsive layouts?", a: "We design mobile-first. Every component is structured to collapse and reflow naturally from a 360px mobile screen up to 4K ultra-wide monitors." }
    ],
    caseStudies: [
      { id: "mclaren-infovision", title: "McLaren InfoVision 3D", desc: "WebGL-driven 3D showcase highlighting interactive touch gestures, camera path controls, and adaptive desktop/mobile UI." }
    ]
  },
  "ecommerce-development": {
    title: "E-Commerce Platform Development",
    subtitle: "High-speed storefronts with shopping flows and secure payment gateways.",
    overview: "E-commerce success is directly tied to page speeds. We build custom React storefronts that load instantly, preventing drop-offs during product browsing. We integrate robust inventory databases, shopping cart caching, automated tax estimators, and secure Stripe payment gates.",
    timeline: "6 - 12 weeks",
    technologies: ["React", "Stripe API", "Node.js", "PostgreSQL", "Redis Caching", "Tailwind CSS", "Netlify"],
    deliverables: [
      "Fast product catalog grids with filters",
      "Persistent cart state caching using local storage",
      "Secure Stripe/Razorpay payment integrations",
      "Automated confirmation email triggers",
      "Store management dashboard for listing items",
      "Deployment pipeline with static HTML generation"
    ],
    Icon: Icons.SaaS,
    faqs: [
      { q: "How do you optimize checkout speeds?", a: "By caching catalog data on the client side, using static site generation (SSG) for product pages, and keeping checkout forms down to minimal essential inputs." }
    ],
    caseStudies: [
      { id: "catalstudio", title: "CatalStudio AI", desc: "AI-powered catalog variation studio built to automate background and model rendering for online stores." }
    ]
  },
  "custom-software-development": {
    title: "Custom Software Engineering",
    subtitle: "Tailored software systems built to solve complex organizational challenges.",
    overview: "When standard SaaS tools fail to match your workflow, we construct bespoke software. We engineer workspace management structures, deal pipelines, customer portals, and real-time reporting dashboards with role-based access control, keeping your team efficient and your data secure.",
    timeline: "8 - 20 weeks",
    technologies: ["Node.js", "NestJS", "TypeScript", "React", "PostgreSQL", "TypeORM", "Docker compose"],
    deliverables: [
      "Multi-tenant application architecture",
      "Role-Based Access Control (RBAC) user permission layers",
      "Custom deals pipelines and Kanban visual interfaces",
      "Transactional logging and system action audits",
      "Scalable RESTful API backbones with documentation",
      "Infrastructure-as-code scripts (Terraform / Docker)"
    ],
    Icon: Icons.FullStack,
    faqs: [
      { q: "Can the software integrate with existing legacy systems?", a: "Yes, we construct dedicated API adapters and middleware layers to sync data with standard CRM, ERP, and payment databases." }
    ],
    caseStudies: [
      { id: "crm-infovision", title: "CRM InfoVision", desc: "Enterprise CRM platform showcasing full Docker setups, workspace cleanups, and deal pipelines." }
    ]
  },
  "cloud-consulting": {
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Stateless container deployments running on AWS with zero downtime CI/CD.",
    overview: "We architect reliable cloud systems that scale automatically under load. Utilizing Docker, GitHub Actions, and Terraform, we script your infrastructure as code. We isolate databases, configure SSL/DNS, structure failovers, and set up load balancers for highly available production workloads.",
    timeline: "4 - 10 weeks",
    technologies: ["AWS", "Terraform", "Docker", "Nginx", "GitHub Actions", "Shell Scripting", "SSL/TLS"],
    deliverables: [
      "Stateless Docker configurations for web/api servers",
      "Terraform HCL infrastructure declaration scripts",
      "Automated testing and linting CI/CD pipelines",
      "Nginx reverse proxy configurations with caching",
      "Automated database backup cron tasks",
      "System logs and resource monitoring configurations"
    ],
    Icon: Icons.DevOps,
    faqs: [
      { q: "How does Terraform simplify cloud costs?", a: "Terraform documents all resources explicitly, allowing you to spin down testing environments when not in use and prevent unused resource bills." }
    ],
    caseStudies: [
      { id: "crm-infovision", title: "CRM InfoVision", desc: "Configured with Docker compose, GitHub Actions deployments, and full Terraform configurations." }
    ]
  },
  "ai-development": {
    title: "AI & Machine Learning Integrations",
    subtitle: "Integrate custom NLP, neural network models, and advanced LLMs into your pipeline.",
    overview: "We help companies leverage AI to automate workflows and extract intelligence. From fine-tuning 4.5B-parameter language models to structuring prompt-based image generation routines and implementing RAG pipelines, we construct robust python backends that deliver predictions fast.",
    timeline: "6 - 16 weeks",
    technologies: ["Python", "PyTorch", "Transformers", "OpenAI API", "Hugging Face", "FastAPI", "Vector Databases"],
    deliverables: [
      "Fine-tuned transformer models for text generation",
      "Prompt validation and image diffusion pipelines",
      "Vector search index structures (Pinecone / PGVector)",
      "High-speed API wrappers using FastAPI",
      "Comprehensive evaluation pipelines",
      "Model cards and detailed deployment documentation"
    ],
    Icon: Icons.AI,
    faqs: [
      { q: "How do you prevent AI model hallucinations?", a: "We utilize Retrieval-Augmented Generation (RAG) to ground LLM responses with facts retrieved directly from your verified business database." },
      { q: "Where are the models deployed?", a: "We deploy models using serverless GPU clusters (like RunPod or AWS SageMaker) or wrap them inside scalable APIs for local server hosting." }
    ],
    caseStudies: [
      { id: "infovision-gpt", title: "InfoVision GPT 4.5B", desc: "4.5B parameter language model published on Hugging Face with evaluation flows." },
      { id: "image-gen-art", title: "Image Gen Art 01", desc: "Art-focused image generation diffusion model tuned for style consistency." },
      { id: "sifera-v1", title: "Sifera V1 Model", desc: "Foundational AI model release process and NLP experimentation." }
    ]
  }
};

export const Services: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Main Page Interactive States
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);
  const [techFilter, setTechFilter] = useState("all");

  const activeService = slug ? detailedServices[slug] : undefined;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLeadForm({ ...leadForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadForm.name && leadForm.email) {
      setFormSubmitted(true);
      setLeadForm({ name: "", email: "", message: "" });
    }
  };

  // 1. Detailed Service view
  if (activeService) {
    const ServiceIcon = activeService.Icon;
    return (
      <main className="services-page">
        {/* Service Hero */}
        <section className="services-hero section">
          <div className="container">
            <div className="breadcrumb-nav">
              <Link to="/services" className="back-link">Services</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-active">{activeService.title}</span>
            </div>
            <div className="services-hero__content-detailed" style={{ marginTop: "2.5rem" }}>
              <div className="detailed-hero__icon">
                <ServiceIcon />
              </div>
              <h1 className="detailed-hero__title">{activeService.title}</h1>
              <p className="services-hero__subtitle">{activeService.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Detailed Grid */}
        <section className="services-grid-section section">
          <div className="container">
            <div className="detailed-service__layout">
              {/* Main Content Column */}
              <div className="detailed-service__main">
                <div className="card-glass-panel overview-panel">
                  <h2>Service Overview</h2>
                  <p className="detailed-overview-text">{activeService.overview}</p>
                </div>

                {/* Deliverables Checklist */}
                <div className="card-glass-panel detailed-deliverables" style={{ marginTop: "2rem" }}>
                  <h3>Key Deliverables</h3>
                  <ul className="deliverables-checklist">
                    {activeService.deliverables.map((item, idx) => (
                      <li key={idx} className="deliverable-item">
                        <span className="checklist-bullet">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="checklist-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ Section */}
                <div className="card-glass-panel detailed-faqs" style={{ marginTop: "2rem" }}>
                  <h3>Frequently Asked Questions</h3>
                  <div className="faq-list" style={{ marginTop: "1.5rem" }}>
                    {activeService.faqs.map((faq, idx) => (
                      <div key={idx} className={`faq-item ${openFaq === idx ? "faq-item--open" : ""}`}>
                        <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                          <span>{faq.q}</span>
                          <span className="faq-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </button>
                        <div className="faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Column */}
              <aside className="detailed-service__sidebar">
                <Card variant="bordered" className="sidebar-card details-widget" style={{ marginBottom: "2rem" }}>
                  <CardBody>
                    <div className="widget-header">
                      <Icons.Code />
                      <h3>Project Details</h3>
                    </div>
                    
                    <div className="sidebar-meta-item">
                      <span className="meta-label">Typical Timeline</span>
                      <div className="timeline-badge-inline">
                        <Icons.Clock />
                        <span className="meta-value">{activeService.timeline}</span>
                      </div>
                    </div>

                    <div className="sidebar-meta-item no-border">
                      <span className="meta-label">Technologies</span>
                      <div className="tech-tags" style={{ marginTop: "0.75rem" }}>
                        {activeService.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Related Case Studies */}
                {activeService.caseStudies && activeService.caseStudies.length > 0 && (
                  <Card variant="bordered" className="sidebar-card case-studies-widget" style={{ marginBottom: "2rem" }}>
                    <CardBody>
                      <div className="widget-header">
                        <Icons.Chart />
                        <h3>Recent Case Studies</h3>
                      </div>
                      <div className="related-case-studies" style={{ marginTop: "1.25rem" }}>
                        {activeService.caseStudies.map((cs, idx) => (
                          <div key={idx} className="related-cs-item">
                            <h4>
                              <Link to={`/case-study/${cs.id}`} className="cs-link">
                                <span>{cs.title}</span>
                                <span className="arrow">→</span>
                              </Link>
                            </h4>
                            <p>{cs.desc}</p>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                )}

                {/* Lead Form Widget */}
                <Card variant="bordered" className="sidebar-card sidebar-lead-form">
                  <CardBody>
                    <h3>Hire InfoVision</h3>
                    <p className="form-widget-intro">
                      Get a detailed timeframe and pricing estimate for {activeService.title}.
                    </p>
                    {formSubmitted ? (
                      <div className="form-success-message text-center">
                        <div className="success-icon-badge">✓</div>
                        <h4>Message Sent!</h4>
                        <p>We will contact you within 24 hours.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="sidebar-form-fields">
                        <div className="form-field-group">
                          <label>Your Name</label>
                          <input type="text" name="name" value={leadForm.name} onChange={handleFormChange} required placeholder="John Doe" />
                        </div>
                        <div className="form-field-group">
                          <label>Your Email</label>
                          <input type="email" name="email" value={leadForm.email} onChange={handleFormChange} required placeholder="john@example.com" />
                        </div>
                        <div className="form-field-group">
                          <label>Project Overview</label>
                          <textarea name="message" value={leadForm.message} onChange={handleFormChange} rows={3} placeholder="Describe your project needs..." />
                        </div>
                        <Button type="submit" variant="primary" style={{ width: "100%", marginTop: "0.5rem" }}>Request Free Quote</Button>
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
  }

  // 2. Services List view (Main Services Page Redesign)
  const servicesList = [
    { id: "web-development", title: "Web Development", timeline: "4-12 weeks", desc: "Enterprise-grade web systems, fast next-generation static sites, and complex transactional tools built using React, Next.js, and Node.js.", technologies: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"], Icon: Icons.FullStack, category: "frontend" },
    { id: "mobile-app-development", title: "Mobile App Development", timeline: "6-12 weeks", desc: "Cross-platform mobile apps for iOS and Android built on React Native. Custom transitions, secure local storage, and cloud synchronizations.", technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Material 3"], Icon: Icons.Mobile, category: "mobile" },
    { id: "flutter-development", title: "Flutter App Development", timeline: "5-14 weeks", desc: "High-performance cross-platform apps compiling directly to native machine code. Immersive custom animations and gesture bindings.", technologies: ["Flutter", "Dart", "Riverpod", "SQLite", "Custom Shaders"], Icon: Icons.Flutter, category: "mobile" },
    { id: "ui-ux-design", title: "UI/UX Design", timeline: "2-6 weeks", desc: "Modern interfaces structured for high conversion rates. Component designs, user journeys, and prototypes utilizing Figma design tokens.", technologies: ["Figma", "Design Tokens", "Wireframing", "Prototypes"], Icon: Icons.Design, category: "frontend" },
    { id: "ecommerce-development", title: "E-Commerce Solutions", timeline: "6-12 weeks", desc: "High-speed custom storefronts with persistent cart caching, Stripe checkout systems, and secure client transactional flows.", technologies: ["React", "Stripe API", "Node.js", "Redis Caching", "PostgreSQL"], Icon: Icons.SaaS, category: "frontend" },
    { id: "custom-software-development", title: "Custom Software", timeline: "8-20 weeks", desc: "Bespoke SaaS applications, multi-tenant databases, customer dashboards, and internal business control panels tailored to your workflow.", technologies: ["Node.js", "NestJS", "React", "PostgreSQL", "TypeORM", "Docker"], Icon: Icons.FullStack, category: "backend" },
    { id: "cloud-consulting", title: "Cloud & DevOps", timeline: "4-10 weeks", desc: "Containerized deployments using Docker and Kubernetes. Infrastructure-as-code scripting on AWS with zero-downtime CI/CD workflows.", technologies: ["AWS", "Docker", "Terraform", "Nginx", "GitHub Actions"], Icon: Icons.DevOps, category: "backend" },
    { id: "ai-development", title: "AI & ML Integration", timeline: "6-16 weeks", desc: "Integrating large language models, prompt image diffusions, custom NLP, and Retrieval-Augmented Generation (RAG) indices.", technologies: ["Python", "PyTorch", "Transformers", "OpenAI", "Pinecone"], Icon: Icons.AI, category: "cloud" }
  ];

  const processSteps = [
    { title: "Discover", number: "01", desc: "We map out strategic business goals, create wireframe concepts, and establish a thinned scope definition document." },
    { title: "Design", number: "02", desc: "High-fidelity layouts and design tokens are built in Figma, ensuring a modern, accessible, and responsive visual style." },
    { title: "Develop", number: "03", desc: "Codebases are written in type-safe languages with clean folder hierarchies, strict linting, and automated unit testing." },
    { title: "Test", number: "04", desc: "Every flow undergoes rigorous manual and automated testing, auditing page speed scores, SEO markup, and edge states." },
    { title: "Launch", number: "05", desc: "We deploy containerized nodes to reliable server networks (like AWS) backed by static cache distributions." },
    { title: "Support", number: "06", desc: "We provide maintenance, log audits, security updates, and performance checks to adapt to scaling demand." }
  ];

  const compData = [
    { metric: "Code Architecture", us: "Type-safe TypeScript, strict modularity, clean architecture", typical: "Untyped scripts, messy spaghetti codes, zero documentation" },
    { metric: "Core Web Vitals", us: "100/100 Lighthouse scores, fast LCP, zero layout shifts", typical: "Heavy template builders, slow load times, poor mobile UX" },
    { metric: "Client Interaction", us: "Direct communication with lead systems engineer", typical: "Layered project managers, slow ticket pipelines" },
    { metric: "Deployment Infrastructure", us: "Stateless container builds, automated CI/CD releases", typical: "Manual FTP transfers, lack of version control" }
  ];

  const industryVerticals = [
    { title: "Healthcare & MedTech", desc: "Secure portal workspaces, clinical record trackers, and telemedicine mobile solutions.", icon: Icons.Healthcare },
    { title: "Real Estate Platforms", desc: "Interactive mapping search, client booking databases, and agent pipelines.", icon: Icons.RealEstate },
    { title: "FinTech & Payments", desc: "Stripe recurring subscriptions, transaction ledgers, and secure wallet balances.", icon: Icons.Fintech },
    { title: "SaaS & Startups", desc: "Multi-tenant dashboards, telemetry charts, and automated team provisioning.", icon: Icons.SaaSStartups }
  ];

  const mainFaqs = [
    { q: "How is the pricing structure determined?", a: "We charge on a fixed-scope or monthly retainer model depending on the complexity of your roadmap. Every quote is itemized so you know exactly where resources are allocated." },
    { q: "Do we retain full ownership of the source code?", a: "Yes, once final milestones are cleared, 100% of IP rights and the Git repositories are handed over to your team. We compile clean codebases that any senior developer can take over." },
    { q: "What backend databases do you prefer for scaling?", a: "We primarily utilize PostgreSQL for relational datasets, MongoDB for document schemas, and PGVector or Pinecone for AI semantic retrievals. We manage cache layers using Redis." },
    { q: "How do you guarantee Core Web Vitals performance?", a: "We build using modern compilers, code-split heavy JavaScript libraries dynamically, compress all images to WebP/AVIF formats, and configure Edge CDN caches to guarantee instant LCP." }
  ];

  const filteredServices = techFilter === "all" 
    ? servicesList 
    : servicesList.filter(s => s.category === techFilter || (techFilter === "cloud" && s.category === "backend"));

  return (
    <main className="services-page main-services-view">
      {/* SECTION 1: HERO */}
      <section className="services-hero main-hero section">
        <div className="services-hero__canvas-container">
          <ServicesHeroVisual />
          <div className="services-hero__visual-head"><span>System architecture</span><b><i /> Live</b></div>
          <div className="services-hero__visual-foot"><span>Interface</span><span>Intelligence</span><span>Infrastructure</span></div>
        </div>
        <div className="container">
          <div className="services-hero__content-container">
            <span className="hero-eyebrow">Enterprise Engineering</span>
            <h1 className="hero__title">
              Software Solutions <br />
              <span className="text-gradient">Built for Scale</span>
            </h1>
            <p className="services-hero__subtitle">
              We design and build premium web applications, native-performance mobile systems, and custom AI integrations that drive conversions and scale seamlessly.
            </p>
            <div className="hero__ctas" style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
              <Link to="/contact">
                <Button variant="primary" size="lg">Start Project</Button>
              </Link>
              <a href="#services-overview">
                <Button variant="outline" size="lg">Explore Services</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR / METRICS */}
      <section className="trust-metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card">
              <span className="metric-number">150+</span>
              <span className="metric-label">Projects Completed</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">8+</span>
              <span className="metric-label">Years Engineering</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">99.8%</span>
              <span className="metric-label">Client Satisfaction</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">20+</span>
              <span className="metric-label">Core Tech Stacks</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICE OVERVIEW GRID */}
      <section id="services-overview" className="services-grid-section section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Capabilities Ecosystem</h2>
            <p className="section-subtitle-centered">
              We specialize in full-stack engineering, native mobile platforms, and database architecture built to perform.
            </p>
            
            {/* Tech Category Filters */}
            <div className="tech-filter-bar">
              <button className={`filter-btn ${techFilter === "all" ? "active" : ""}`} onClick={() => setTechFilter("all")}>All Systems</button>
              <button className={`filter-btn ${techFilter === "frontend" ? "active" : ""}`} onClick={() => setTechFilter("frontend")}>Frontend & UI</button>
              <button className={`filter-btn ${techFilter === "mobile" ? "active" : ""}`} onClick={() => setTechFilter("mobile")}>Mobile Apps</button>
              <button className={`filter-btn ${techFilter === "backend" ? "active" : ""}`} onClick={() => setTechFilter("backend")}>Backend & Cloud</button>
            </div>
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => {
              const ServiceIcon = service.Icon;
              return (
                <Card key={service.id} variant="hover" className="service-card-premium">
                  <CardBody>
                    <div className="service-card-header">
                      <div className="service-card-icon-container">
                        <ServiceIcon />
                      </div>
                      <div className="service-card-title-meta">
                        <h3>{service.title}</h3>
                        <div className="timeline-badge-inline">
                          <Icons.Clock />
                          <span>{service.timeline}</span>
                        </div>
                      </div>
                    </div>

                    <p className="service-card-desc-premium">{service.desc}</p>

                    <div className="service-card-tech-group">
                      <span className="tech-title-small">Technologies</span>
                      <div className="tech-tags">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="service-card-action-bottom">
                      <Link to={`/services/${service.id}`} className="explore-details-link">
                        <span>Explore details</span>
                        <span className="arrow">→</span>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: DEVELOPMENT PROCESS TIMELINE */}
      <section className="process-section section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Our Engineering Process</h2>
            <p className="section-subtitle-centered">
              From business roadmap mapping to final containerized deployment, we follow strict staging phases.
            </p>
          </div>

          <div className="process-timeline-v2">
            <div className="timeline-center-line"></div>
            {processSteps.map((step, idx) => (
              <div key={idx} className={`timeline-step-card ${idx % 2 === 0 ? "left" : "right"}`}>
                <div className="step-glow-dot"></div>
                <div className="step-card-content">
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US COMPARISON BOARD */}
      <section className="comparison-section section">
        <div className="container">
          <div className="section__header text-center">
            <h2>The Engineering Standard</h2>
            <p className="section-subtitle-centered">
              Why leading software businesses partner with InfoVision Digital rather than generic outsourcing agencies.
            </p>
          </div>

          <div className="comparison-board-panel">
            <div className="comparison-grid-header">
              <div className="grid-header-col">Capability</div>
              <div className="grid-header-col infovision-col">InfoVision Digital</div>
              <div className="grid-header-col">Typical Agency</div>
            </div>
            <div className="comparison-grid-rows">
              {compData.map((row, idx) => (
                <div key={idx} className="comparison-grid-row">
                  <div className="grid-cell metric-cell">{row.metric}</div>
                  <div className="grid-cell us-cell">
                    <span className="check-badge">✓</span>
                    <span className="cell-text">{row.us}</span>
                  </div>
                  <div className="grid-cell typical-cell">
                    <span className="cross-badge">✕</span>
                    <span className="cell-text">{row.typical}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES SERVED */}
      <section className="industries-section section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Industries We Serve</h2>
            <p className="section-subtitle-centered">
              We build specialized workflows tailored to the functional compliance and security needs of each sector.
            </p>
          </div>

          <div className="industries-grid">
            {industryVerticals.map((vert, idx) => {
              const IndustryIcon = vert.icon;
              return (
                <div key={idx} className="industry-glass-card">
                  <div className="industry-icon-badge">
                    <IndustryIcon />
                  </div>
                  <h3>{vert.title}</h3>
                  <p>{vert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="faq-section section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle-centered">
              Answers to technical integrations, development rates, and source code handovers.
            </p>
          </div>

          <div className="faq-accordion-group">
            {mainFaqs.map((faq, idx) => {
              const isOpen = activeFaqId === idx;
              return (
                <div key={idx} className={`faq-accordion-item ${isOpen ? "open" : ""}`}>
                  <button className="faq-accordion-trigger" onClick={() => setActiveFaqId(isOpen ? null : idx)}>
                    <span>{faq.q}</span>
                    <span className="accordion-indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" className="vertical-bar" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-accordion-content">
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="services-final-cta section">
        <div className="container">
          <div className="final-cta-panel">
            <span className="cta-eyebrow">Get Started</span>
            <h2>Let's Build Your Next Digital Product</h2>
            <p>
              Whether you need to launch a high-speed web application, compile a native Flutter mobile app, or integrate smart LLM features, we are ready.
            </p>
            <div className="final-cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="lg">Start Project</Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" size="lg">Explore Our Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
