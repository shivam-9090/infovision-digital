import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardBody } from "../components/Card";
import { AboutHeroVisual } from "../components/AboutHeroVisual";
import {
  FaArrowRight,
  FaCheck,
  FaTimes,
  FaTerminal,
  FaBrain,
  FaCloud,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaSync,
  FaServer,
  FaUserShield,
} from "react-icons/fa";
import "./About.css";

// 1. Interactive Metric Counter component (runs locally without extra hooks)
const MetricItem = memo(({ value, label }: { value: string; label: string }) => {
  return (
    <div className="about-metric-card">
      <div className="about-metric-val">{value}</div>
      <div className="about-metric-lbl">{label}</div>
    </div>
  );
});

MetricItem.displayName = "MetricItem";

export const About: React.FC = () => {
  const [activeEcosystem, setActiveEcosystem] = useState("all");

  const ecosystemTabs = [
    { id: "all", label: "All Tech" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
    { id: "cloud", label: "Cloud & DevOps" },
  ];

  const technologies = [
    { name: "React / Next.js", category: "frontend", description: "UI library and production framework" },
    { name: "TypeScript", category: "frontend", description: "Static typing for robust code" },
    { name: "Tailwind CSS", category: "frontend", description: "Utility-first design scaling" },
    { name: "Node.js / Express", category: "backend", description: "Asynchronous backend runtimes" },
    { name: "NestJS", category: "backend", description: "Structured enterprise Node framework" },
    { name: "PostgreSQL", category: "backend", description: "Relational structured database system" },
    { name: "Flutter", category: "mobile", description: "Native compile ARM cross-platform" },
    { name: "React Native", category: "mobile", description: "Hybrid JS native viewport bridge" },
    { name: "Docker", category: "cloud", description: "Lightweight containerized microservices" },
    { name: "AWS", category: "cloud", description: "Elastic cloud compute infrastructure" },
    { name: "GitHub Actions", category: "cloud", description: "Continuous integration pipelines" },
  ];

  const filteredTech = activeEcosystem === "all" 
    ? technologies 
    : technologies.filter(t => t.category === activeEcosystem);

  return (
    <main className="about-page">
      {/* SECTION 1: IMMERSIVE HERO */}
      <section className="about-hero">
        <div className="about-hero__canvas-container">
          <AboutHeroVisual />
        </div>
        <div className="container about-hero__wrapper">
          <div className="about-hero__content">
            <h1 className="about-hero__title">
              We Build Digital <br />
              <span className="text-gradient">Products That Matter</span>
            </h1>
            <p className="about-hero__desc">
              An elite team of engineers, designers, and systems architects building high-performance software businesses depend on.
            </p>
            <div className="about-hero__actions">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" size="lg">
                  Explore Selected Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL OUR STORY */}
      <section className="about-story section">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__left">
              <span className="about-section-badge">Our Story</span>
              <h2>We are built to solve business challenges.</h2>
            </div>
            <div className="about-story__right">
              <p className="lead-para">
                InfoVision Digital started with a simple belief: most software development models are broken. Agencies sell hours, prioritize short-term milestones, and deliver fragile codebases that fail under enterprise stress.
              </p>
              <p>
                We do things differently. We treat software engineering as a discipline of systems architecture. We align product thinking, code quality, and cloud operations from day one. Every application we build is designed to scale dynamically, load instantly, and remain maintainable for years to come.
              </p>
              <p>
                Our engineers don’t just write code; they design solutions. Whether it's fine-tuning a custom AI integration, compiling native Flutter mobile apps, or structuring stateless microservice clusters, we focus on driving real, measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION Statement */}
      <section className="about-mission section">
        <div className="container">
          <div className="about-mission__grid">
            <Card variant="bordered" className="about-mission-card">
              <CardBody>
                <span className="mission-label">Our Mission</span>
                <h3>To engineer high-performance systems that convert complex technology into reliable business growth.</h3>
                <p>We eliminate friction between ideas and execution, ensuring your digital infrastructure remains a competitive advantage, not a bottleneck.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="about-mission-card">
              <CardBody>
                <span className="mission-label">Our Vision</span>
                <h3>To set the industry benchmark for software architecture, structural integrity, and clean developer experiences.</h3>
                <p>We work to establish a future where production systems are built for long-term scalability and run at 100% reliability, without technical debt.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRUST METRICS */}
      <section className="about-metrics section">
        <div className="container">
          <div className="about-metrics__grid">
            <MetricItem value="150+" label="Projects Completed" />
            <MetricItem value="20+" label="Core Technologies" />
            <MetricItem value="8+" label="Industries Served" />
            <MetricItem value="8+" label="Years Engineering" />
            <MetricItem value="99.8%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* SECTION 5: TEAM EXPERTISE (Capabilities Instead of Headshots) */}
      <section className="about-expertise section">
        <div className="container">
          <div className="section__header text-center">
            <span className="about-section-badge">Capabilities</span>
            <h2>What We Bring To Every Project</h2>
            <p className="section-desc">
              Clients hire us because of our collective technical capability, engineering rigor, and execution speed.
            </p>
          </div>

          <div className="about-expertise__grid">
            <div className="expertise-card">
              <div className="expertise-icon"><FaCode /></div>
              <h3>Software Engineering</h3>
              <p>Clean, type-safe code written with TypeScript, React, and NestJS. Standardized architectural patterns, zero layout overflows, and continuous performance tuning.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon"><FaMobileAlt /></div>
              <h3>Cross-Platform Mobile</h3>
              <p>Direct native compiling via Flutter. Bypassing slow JS execution bridges to deliver 120Hz smooth animations, offline local cache operations, and solid hardware integration.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon"><FaCloud /></div>
              <h3>Cloud Architecture</h3>
              <p>Containerized Docker platforms, automated GitOps CI/CD pipelines, and cloud hosting configured for high availability, automatic load balancing, and solid security.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon"><FaBrain /></div>
              <h3>AI & Deep Learning</h3>
              <p>Deploying private large language model API routing, custom RAG systems, model fine-tuning (like Sifera V1), and direct database intelligence mappings.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon"><FaPalette /></div>
              <h3>UI/UX Design Systems</h3>
              <p>Design systems structured around typographic hierarchy, consistent spacing, and smooth animations. Ensuring absolute design fidelity from Figma to code.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon"><FaSync /></div>
              <h3>Long-Term Support</h3>
              <p>We don't abandon you after launch. We offer active maintenance SLAs, server log analysis, database query indexing optimization, and version updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TECHNOLOGY ECOSYSTEM MAP */}
      <section className="about-ecosystem section">
        <div className="container">
          <div className="section__header text-center">
            <span className="about-section-badge">Tech Stack</span>
            <h2>Our Technology Ecosystem</h2>
            <p className="section-desc">
              We focus on a modern, robust, and industry-standard stack optimized for high speed and scale.
            </p>
          </div>

          <div className="ecosystem-tabs">
            {ecosystemTabs.map(tab => (
              <button
                key={tab.id}
                className={`ecosystem-tab-btn ${activeEcosystem === tab.id ? "active" : ""}`}
                onClick={() => setActiveEcosystem(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="ecosystem-grid">
            {filteredTech.map((tech, index) => (
              <div key={index} className="ecosystem-item-card">
                <h4>{tech.name}</h4>
                <p>{tech.description}</p>
                <span className="tech-badge">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CORE VALUES */}
      <section className="about-values section">
        <div className="container">
          <div className="section__header text-center">
            <span className="about-section-badge">Core Values</span>
            <h2>The Principles That Guide Us</h2>
          </div>

          <div className="about-values__grid">
            <Card variant="bordered" className="value-card">
              <CardBody>
                <div className="value-num">01</div>
                <h3>Quality First</h3>
                <p>We write clean, well-documented, type-safe code that passes automated testing. No shortcuts, no hacky patches, and zero technical debt.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="value-card">
              <CardBody>
                <div className="value-num">02</div>
                <h3>Transparency</h3>
                <p>You have direct slack communication with your project engineering lead. No sales gatekeepers, no hidden costs, and honest weekly progress updates.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="value-card">
              <CardBody>
                <div className="value-num">03</div>
                <h3>Performance</h3>
                <p>Every millisecond matters. We optimize code bundles, leverage edge caching networks, and index databases to ensure sub-second LCP speeds.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="value-card">
              <CardBody>
                <div className="value-num">04</div>
                <h3>Security</h3>
                <p>We implement secure session tokens, sanitize all inputs to prevent injection, and protect user data using industry-standard encryption protocols.</p>
              </CardBody>
            </Card>

            <Card variant="bordered" className="value-card">
              <CardBody>
                <div className="value-num">05</div>
                <h3>Long-Term Thinking</h3>
                <p>We build products designed for the future. Our architectures allow components to be decoupled, scaled, or replaced without breaking the rest of the application.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW WE WORK (COLLABORATION PROCESS) */}
      <section className="about-process section">
        <div className="container">
          <div className="section__header text-center">
            <span className="about-section-badge">Workflow</span>
            <h2>Our Collaboration Journey</h2>
            <p className="section-desc">
              How we partner with you to turn raw concepts into production software systems.
            </p>
          </div>

          <div className="about-process__timeline">
            <div className="timeline-line"></div>

            <div className="timeline-step">
              <div className="timeline-node">1</div>
              <div className="timeline-content">
                <h4>Discovery & Strategy</h4>
                <p>We hop on an initial call to discuss project scope, business objectives, database design challenges, and product requirements.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node">2</div>
              <div className="timeline-content">
                <h4>Technical Proposal</h4>
                <p>We provide a comprehensive technical specification map detailing our recommended technology stack, architectural charts, and milestone timeline estimates.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node">3</div>
              <div className="timeline-content">
                <h4>Sprint Iterations</h4>
                <p>We launch into active development sprints with weekly updates on a live sandbox staging URL, using GitHub PRs and type-safe commits.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node">4</div>
              <div className="timeline-content">
                <h4>Rigorous QA Testing</h4>
                <p>We perform automated endpoint tests, code coverage analysis, responsiveness validations, and light-house performance checks.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node">5</div>
              <div className="timeline-content">
                <h4>Production Launch</h4>
                <p>We coordinate cloud setup, package components in Docker, establish secure certificates, point DNS registers, and deploy to live servers.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node">6</div>
              <div className="timeline-content">
                <h4>Long-Term SLA Support</h4>
                <p>We monitor systems continuously, patch libraries, scale database resources, and roll out feature updates under clear SLAs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY CLIENTS TRUST US COMPARISON GRID */}
      <section className="about-comparison section">
        <div className="container">
          <div className="section__header text-center">
            <span className="about-section-badge">Comparison</span>
            <h2>Why Businesses Choose InfoVision</h2>
            <p className="section-desc">
              How we compare to typical outsourcing agencies that deliver low-fidelity products.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="highlight-column">InfoVision Digital</th>
                  <th>Typical Outsourcing Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="comp-feature">Communication</td>
                  <td className="highlight-column comp-positive">
                    <FaCheck className="icon-check" /> Direct Slack channels with senior developers. Quick daily syncs.
                  </td>
                  <td className="comp-negative">
                    <FaTimes className="icon-times" /> Trapped behind layers of sales representatives and project managers.
                  </td>
                </tr>
                <tr>
                  <td className="comp-feature">Code Quality</td>
                  <td className="highlight-column comp-positive">
                    <FaCheck className="icon-check" /> Strict TypeScript compiler rules, linting, and automated unit tests.
                  </td>
                  <td className="comp-negative">
                    <FaTimes className="icon-times" /> Copy-pasted legacy code with zero tests, missing comments, and high technical debt.
                  </td>
                </tr>
                <tr>
                  <td className="comp-feature">Performance</td>
                  <td className="highlight-column comp-positive">
                    <FaCheck className="icon-check" /> Web platforms load in sub-second speeds. Mobile builds operate at 60-120 FPS.
                  </td>
                  <td className="comp-negative">
                    <FaTimes className="icon-times" /> Heavy bundle sizes, excessive re-renders, and laggy mobile screen transitions.
                  </td>
                </tr>
                <tr>
                  <td className="comp-feature">Systems Architecture</td>
                  <td className="highlight-column comp-positive">
                    <FaCheck className="icon-check" /> Dockerized microservices, stateless API gateways, and optimized database indexes.
                  </td>
                  <td className="comp-negative">
                    <FaTimes className="icon-times" /> Monolithic servers that crash under traffic spikes, with unindexed slow SQL queries.
                  </td>
                </tr>
                <tr>
                  <td className="comp-feature">SLA Support</td>
                  <td className="highlight-column comp-positive">
                    <FaCheck className="icon-check" /> Active server health monitoring, security audits, and dedicated maintenance agreements.
                  </td>
                  <td className="comp-negative">
                    <FaTimes className="icon-times" /> Project delivered and abandoned. Upgrades require expensive renegotiated budgets.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__box">
            <h2>Let's Build Something Exceptional Together</h2>
            <p>
              Skip the agency layers and work directly with elite engineers to deliver software that scales.
            </p>
            <div className="about-cta__actions">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Review All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
