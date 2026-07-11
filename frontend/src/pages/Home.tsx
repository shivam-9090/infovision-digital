import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const services = [
  { number: "01", title: "Web platforms", copy: "Fast, search-ready digital products engineered with modern React, TypeScript and robust backend systems.", tags: ["React", "Next.js", "Node.js"] },
  { number: "02", title: "Mobile products", copy: "Cross-platform applications with native-feeling performance, reliable state and production-grade release workflows.", tags: ["Flutter", "Firebase", "APIs"] },
  { number: "03", title: "AI systems", copy: "Applied AI, computer vision, intelligent automation and LLM workflows connected to real business operations.", tags: ["Python", "PyTorch", "LLMs"] },
  { number: "04", title: "Cloud & scale", copy: "Containerized infrastructure, data architecture, observability and deployment systems designed to stay dependable.", tags: ["Docker", "Postgres", "Cloud"] },
];

const projects = [
  { number: "01", name: "CatalStudio", category: "AI Commerce", copy: "Generative catalog production for fashion and e-commerce teams.", className: "iv-project--violet", to: "/case-study/catalstudio", tech: "React · AI · Cloudflare" },
  { number: "02", name: "NivasSetu", category: "PropTech", copy: "A broker-free rental platform connecting owners and tenants directly.", className: "iv-project--cyan", to: "/case-study/nivassetu", tech: "Flutter · NestJS · PostgreSQL" },
  { number: "03", name: "CRM Vision", category: "Business Systems", copy: "A secure workspace for client operations and sales visibility.", className: "iv-project--lime", to: "/case-study/crm-infovision", tech: "Next.js · Docker · Postgres" },
];

const faqs = [
  ["What does InfoVision build?", "We design and engineer web platforms, mobile applications, applied AI systems and the infrastructure behind them. Engagements can start from an early concept or an existing product that needs a serious upgrade."],
  ["Can you work with an existing codebase?", "Yes. We begin with a focused technical and product audit, identify the highest-impact improvements, and work in reviewable milestones without risking live data or production stability."],
  ["Do you work outside India?", "Yes. InfoVision is based in Surat, Gujarat and works remotely with teams across time zones using clear written updates, demos and milestone-based delivery."],
  ["How do we start?", "Send a short description of the product, current stage and desired outcome. You will receive a practical response covering fit, next steps and the information needed for an accurate proposal."],
];

export const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="iv-home" id="top">
      <section className="iv-home-hero">
        <div className="container iv-home-hero__grid">
          <motion.div className="iv-home-hero__copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <span className="iv-kicker">Software engineering studio · Surat</span>
            <h1>We turn ambitious ideas into <em>dependable products.</em></h1>
            <p>InfoVision designs and engineers high-performance web platforms, mobile applications, AI systems and the infrastructure that keeps them moving.</p>
            <div className="iv-home-hero__actions">
              <Link to="/contact" className="iv-btn iv-btn--light">Start a project <span className="iv-arrow">↗</span></Link>
              <Link to="/work" className="iv-btn iv-btn--ghost">Explore selected work <span className="iv-arrow">↗</span></Link>
            </div>
          </motion.div>

          <motion.div className="iv-system-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .2 }} aria-hidden="true">
            <div className="iv-system-grid" />
            <div className="iv-system-hud"><span>Product operating system</span><b><i /> Live</b></div>
            <div className="iv-system-axis iv-system-axis--x" />
            <div className="iv-system-axis iv-system-axis--y" />
            <div className="iv-system-visual__orbit iv-system-visual__orbit--one" />
            <div className="iv-system-visual__orbit iv-system-visual__orbit--two" />
            <div className="iv-system-core"><div className="iv-system-core__scan" /><span>IV</span><small>System online</small></div>
            <div className="iv-system-node iv-system-node--ai"><i />AI layer</div>
            <div className="iv-system-node iv-system-node--data"><i />Data</div>
            <div className="iv-system-node iv-system-node--ship"><i />Ship</div>
            <div className="iv-system-console"><span>Production health</span><b>99.9%</b><small>All systems operational</small><i><em /></i></div>
          </motion.div>
        </div>
        <div className="iv-home-hero__foot container">
          <span>Scroll to explore</span><i />
          <span>Strategy · Design · Engineering · Scale</span>
        </div>
      </section>

      <section className="iv-capability-ticker" aria-label="Capabilities">
        <div>{["Product engineering", "Artificial intelligence", "Mobile applications", "Cloud systems", "Product engineering", "Artificial intelligence", "Mobile applications", "Cloud systems"].map((item, index) => <span key={`${item}-${index}`}><i>✦</i>{item}</span>)}</div>
      </section>

      <section className="iv-intro section">
        <div className="container iv-intro__grid">
          <span className="iv-kicker">What we do</span>
          <h2>One engineering partner from first decision to <em>production.</em></h2>
          <p>We bring product thinking, interface design and dependable technical execution into the same room. That means fewer hand-offs, clearer decisions and software built around the outcome, not the trend.</p>
        </div>
      </section>

      <section className="iv-services-home">
        <div className="container iv-services-home__grid">
          {services.map((service) => (
            <Link key={service.number} to="/services" className="iv-service-card" data-cursor="view">
              <div className="iv-service-card__top"><span>{service.number}</span><span className="iv-arrow">↗</span></div>
              <div><h3>{service.title}</h3><p>{service.copy}</p></div>
              <div className="iv-service-card__tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="iv-work-home section">
        <div className="container">
          <div className="iv-section-heading"><span className="iv-kicker">Selected work</span><h2>Products built to create <em>real movement.</em></h2><Link to="/work">View every project <span className="iv-arrow">↗</span></Link></div>
          <div className="iv-projects-home">
            {projects.map((project) => (
              <Link key={project.number} to={project.to} className={`iv-project-card ${project.className}`} data-cursor="view">
                <div className="iv-project-card__meta"><span>{project.number}</span><span>{project.category}</span></div>
                <div className="iv-project-card__visual"><div className="iv-project-ui"><i /><i /><i /><span /></div></div>
                <div className="iv-project-card__copy"><small>{project.tech}</small><h3>{project.name}</h3><p>{project.copy}</p><b>Open case study ↗</b></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="iv-process section">
        <div className="container iv-process__layout">
          <div className="iv-process__heading"><span className="iv-kicker">How we work</span><h2>Clear enough to move <em>fast.</em></h2><p>No black box. Every engagement is split into visible decisions, reviewable work and measurable milestones.</p></div>
          <div className="iv-process__steps">
            {[["01","Frame","Clarify the business goal, users, constraints and definition of success."],["02","Design","Shape the experience and technical plan before expensive implementation."],["03","Engineer","Build in focused milestones with tests, review and regular working demos."],["04","Launch","Harden, deploy, monitor and improve the product using real usage signals."]].map(([n,title,copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="iv-principle">
        <div className="container iv-principle__inner"><span>Our operating principle</span><blockquote>“The best software feels simple because the hard decisions were made <em>before</em> they reached the user.”</blockquote><p>InfoVision Digital · Product engineering studio</p></div>
      </section>

      <section className="iv-faq section">
        <div className="container iv-faq__layout">
          <div><span className="iv-kicker">Common questions</span><h2>Before we build.</h2><a href="mailto:vaghanishivam83@gmail.com">Ask something else ↗</a></div>
          <div className="iv-faq__list">
            {faqs.map(([question, answer], index) => <article key={question} className={openFaq === index ? "is-open" : ""}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><i>{openFaq === index ? "−" : "+"}</i></button><div><p>{answer}</p></div></article>)}
          </div>
        </div>
      </section>
    </main>
  );
};
