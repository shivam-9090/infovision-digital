import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { ParticleSection } from "../components/ParticleSection";
import LogoLoop from "../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { FaArrowRight, FaCode, FaMobileAlt, FaBrain } from "react-icons/fa";
import "./Home.css";

const techLogos = [
  { node: <SiReact size={80} />, title: "React", href: "https://react.dev" },
  {
    node: <SiNextdotjs size={80} />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript size={80} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss size={80} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNodedotjs size={80} />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiGraphql size={80} />,
    title: "GraphQL",
    href: "https://graphql.org",
  },
  {
    node: <SiMongodb size={80} />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiPostgresql size={80} />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
];

const HeroSection = memo(() => (
  <section className="hero">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero__content"
      >
        <h1 className="hero__title">
          We Build Software <br />
          <span className="text-gradient">That Businesses Depend On</span>
        </h1>
        <p className="hero__subtitle">
          We engineer high-performance web systems, cross-platform mobile apps, and custom AI integrations with a focus on clean design, flawless user experiences, and scalable architecture.
        </p>
        <div className="hero__actions">
          <Link to="/work">
            <Button variant="primary" size="lg">
              View Work
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection";

const SkillsSection = memo(() => (
  <section className="skills-section section">
    <div className="container">
      <div className="section__header text-center">
        <h2>Skills</h2>
      </div>

      <div className="skills__grid">
        <span className="skill-tag">Frontend</span>
        <span className="skill-tag">Backend</span>
        <span className="skill-tag">DevOps</span>
        <span className="skill-tag">ML Engineer</span>
        <span className="skill-tag">DL Engineer</span>
        <span className="skill-tag">3D Websites</span>
        <span className="skill-tag">SaaS Projects</span>
        <span className="skill-tag">Database Management</span>
      </div>
    </div>
  </section>
));

SkillsSection.displayName = "SkillsSection";

// Partner SVG Logos
const McLarenLogo = () => (
  <svg viewBox="0 0 140 30" fill="currentColor" className="partner-logo-svg" aria-label="McLaren">
    <text x="5" y="22" fontFamily="var(--font-display), 'Outfit', sans-serif" fontWeight="800" fontStyle="italic" fontSize="19" letterSpacing="-0.03em">MCLAREN</text>
    <path d="M112,8 C118,8 131,14 131,16 C131,18 118,24 112,24 C109,24 121,18 121,16 C121,14 109,8 112,8 Z" fill="#ff1a1a" />
  </svg>
);

const CrmVisionLogo = () => (
  <svg viewBox="0 0 140 30" fill="currentColor" className="partner-logo-svg" aria-label="CRM Vision">
    <circle cx="15" cy="15" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <polygon points="15,10 19,18 11,18" fill="currentColor" />
    <text x="30" y="20" fontFamily="var(--font-display), 'Outfit', sans-serif" fontWeight="700" fontSize="13" letterSpacing="0.05em">CRM VISION</text>
  </svg>
);

const NivasSetuLogo = () => (
  <svg viewBox="0 0 150 30" fill="currentColor" className="partner-logo-svg" aria-label="NivasSetu">
    <path d="M15,6 L26,15 L23,15 L23,24 L17,24 L17,19 L13,19 L13,24 L7,24 L7,15 L4,15 Z" fill="currentColor" />
    <text x="35" y="21" fontFamily="var(--font-display), 'Outfit', sans-serif" fontWeight="600" fontSize="15" letterSpacing="-0.02em">NivasSetu</text>
  </svg>
);

const SiferaLogo = () => (
  <svg viewBox="0 0 120 30" fill="currentColor" className="partner-logo-svg" aria-label="Sifera AI">
    <polygon points="15,6 25,11 25,21 15,26 5,21 5,11" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="15" cy="16" r="3" fill="currentColor" />
    <text x="35" y="20" fontFamily="var(--font-display), 'Outfit', sans-serif" fontWeight="700" fontSize="14" letterSpacing="0.05em">SIFERA</text>
  </svg>
);

const AchyutamLogo = () => (
  <svg viewBox="0 0 140 30" fill="currentColor" className="partner-logo-svg" aria-label="Achyutam">
    <path d="M15,5 L25,23 L5,23 Z M15,10 L10,20 L20,20 Z" fill="currentColor" />
    <text x="32" y="20" fontFamily="var(--font-display), 'Outfit', sans-serif" fontWeight="700" fontSize="13" letterSpacing="0.02em">ACHYUTAM</text>
  </svg>
);

const TrilunaFashionLogo = () => (
  <svg viewBox="0 0 160 30" fill="currentColor" className="partner-logo-svg" aria-label="Triluna Fashion">
    <path d="M15,6 Q20,12 25,6 Q20,20 15,6" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="12" r="2" fill="currentColor" />
    <text x="35" y="21" fontFamily="var(--font-display), 'Outfit', sans-serif" fontWeight="700" fontSize="14" letterSpacing="0.05em">TRILUNA</text>
  </svg>
);

const ClientsSection = memo(() => (
  <section className="clients-section section">
    <div className="container">
      <div className="section__header text-center">
        <h2>Trusted By</h2>
        <p style={{ color: "var(--svc-text-secondary)", marginTop: "1rem", fontSize: "1.1rem" }}>
          Powering digital experiences and cloud ecosystems for high-growth teams.
        </p>
      </div>
      <div className="partner-logos-container">
        <div className="partner-logo-card">
          <McLarenLogo />
        </div>
        <div className="partner-logo-card">
          <CrmVisionLogo />
        </div>
        <div className="partner-logo-card">
          <NivasSetuLogo />
        </div>
        <div className="partner-logo-card">
          <SiferaLogo />
        </div>
        <div className="partner-logo-card">
          <AchyutamLogo />
        </div>
        <div className="partner-logo-card">
          <TrilunaFashionLogo />
        </div>
      </div>
    </div>
  </section>
));

ClientsSection.displayName = "ClientsSection";

const BigTextSection = memo(() => (
  <section
    className="section"
    style={{
      padding: "4rem 0 4rem",
      textAlign: "center",
      overflow: "hidden",
      background: "transparent",
    }}
  >
    <div className="container">
      <h2
        style={{
          fontSize: "clamp(3rem, 15vw, 12rem)",
          fontWeight: 900,
          color: "white",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          margin: 0,
          opacity: 0.9,
        }}
      >
        INFOVISION
      </h2>
    </div>
  </section>
));

BigTextSection.displayName = "BigTextSection";

// 1. Services Preview Component
const ServicesPreviewSection = memo(() => (
  <section className="home-services-preview section">
    <div className="container">
      <div className="section__header text-center">
        <h2>Featured Services</h2>
        <p style={{ color: "var(--svc-text-secondary)", marginTop: "1rem" }}>
          Explore our core capabilities built for enterprise performance and visibility.
        </p>
      </div>
      <div className="services-preview__grid">
        <div className="services-preview__card">
          <div className="services-preview__icon">
            <FaCode />
          </div>
          <h3 className="services-preview__title">Web Development</h3>
          <p className="services-preview__desc">
            Custom client-side and server-side web platforms built with React, Next.js, and Node.js. Optimized for performance and search crawlers.
          </p>
          <Link to="/services/web-development" className="services-preview__link">
            Learn More <FaArrowRight />
          </Link>
        </div>

        <div className="services-preview__card">
          <div className="services-preview__icon">
            <FaMobileAlt />
          </div>
          <h3 className="services-preview__title">Flutter Mobile Apps</h3>
          <p className="services-preview__desc">
            High-performance cross-platform iOS and Android mobile solutions compile directly to ARM code. Feature-rich, fluid, and robust.
          </p>
          <Link to="/services/flutter-development" className="services-preview__link">
            Learn More <FaArrowRight />
          </Link>
        </div>

        <div className="services-preview__card">
          <div className="services-preview__icon">
            <FaBrain />
          </div>
          <h3 className="services-preview__title">AI & ML Integration</h3>
          <p className="services-preview__desc">
            Integrate smart machine learning, neural networks, OpenAI API, and specialized LLM deployment directly into your current databases.
          </p>
          <Link to="/services/ai-development" className="services-preview__link">
            Learn More <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="text-center" style={{ marginTop: "3rem" }}>
        <Link to="/services">
          <Button variant="outline">View All Services</Button>
        </Link>
      </div>
    </div>
  </section>
));

ServicesPreviewSection.displayName = "ServicesPreviewSection";

// 2. Testimonials Component
const TestimonialsSection = memo(() => (
  <section className="testimonials-section section">
    <div className="container">
      <div className="section__header text-center">
        <h2>Client Testimonials</h2>
        <p style={{ color: "var(--svc-text-secondary)", marginTop: "1rem" }}>
          What our partners say about delivering projects on time with premium quality.
        </p>
      </div>
      <div className="testimonials__grid">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "InfoVision delivered our enterprise CRM platform ahead of schedule. The Docker setup and NestJS backend scale seamlessly under heavy workloads. Shivam's technical expertise is outstanding."
          </p>
          <div className="testimonial-client">
            <div className="testimonial-avatar">A</div>
            <div className="testimonial-info">
              <span className="testimonial-name">Alex Rivera</span>
              <span className="testimonial-company">Operations Director, CRM Vision</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-quote">
            "InfoVision built our premium saree store with headless commerce integration. The page speed and seamless catalog filtering are spectacular. Highly recommend their work!"
          </p>
          <div className="testimonial-client">
            <div className="testimonial-avatar">Y</div>
            <div className="testimonial-info">
              <span className="testimonial-name">Yogesh Vaghani</span>
              <span className="testimonial-company">Founder, Triluna Fashion</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Shivam developed our zero-brokerage listing portal using NestJS and React. The Aadhaar KYC verification flows and spatial geocoding search work perfectly. Maintenance is incredibly clean."
          </p>
          <div className="testimonial-client">
            <div className="testimonial-avatar">S</div>
            <div className="testimonial-info">
              <span className="testimonial-name">Sophia Patel</span>
              <span className="testimonial-company">Co-Founder, NivasSetu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

TestimonialsSection.displayName = "TestimonialsSection";

// 3. FAQ Accordion Component
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services does InfoVision provide?",
      a: "InfoVision specializes in enterprise software solutions, custom full-stack web applications (React/Node.js/TypeScript), cross-platform mobile apps (Flutter/React Native), immersive 3D/WebGL experiences (Three.js), and custom AI model fine-tuning & LLM integrations."
    },
    {
      q: "How do you ensure site performance and SEO?",
      a: "We engineer sites for maximum performance under Core Web Vitals guidelines (LCP, FID, CLS, INP). We implement dynamic schema.org JSON-LD scripts, optimize code bundles with code-splitting, serve compressed WebP media, and maintain structured internal link frameworks to boost crawlability for standard search and AI-GEO."
    },
    {
      q: "What is your typical software development lifecycle?",
      a: "Our typical engagement includes four primary phases: 1) Discovery & Solution Architecture, 2) Agile UI/UX Design & Prototyping, 3) Iterative Sprint Development with full type safety, and 4) Automated testing, Docker packaging, CI/CD pipeline set up, and production deployment."
    },
    {
      q: "Where are you located and do you support remote clients?",
      a: "Our core development center is located in Surat, Gujarat, India, with remote teams servicing clients globally. We coordinate schedules to ensure seamless daily communication across all timezones."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section">
      <div className="container">
        <div className="section__header text-center">
          <h2>Frequently Asked Questions</h2>
          <p style={{ color: "var(--svc-text-secondary)", marginTop: "1rem" }}>
            Got questions? We have compiled responses to common software engagement topics.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.q}</span>
                <span className="faq-toggle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" className="vertical-bar" />
                    <line x1="5" y1="12" x2="19" y2="12" />
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
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <main className="home">
      <HeroSection />
      <SkillsSection />
      <ParticleSection />

      {/* Horizontal Logo Loop */}
      <div style={{ padding: "0", opacity: 0.8 }}>
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={80}
          gap={100}
          hoverSpeed={0}
          scaleOnHover
          fadeOut={true}
          fadeOutColor="transparent"
          ariaLabel="Technology stack"
        />
      </div>

      {/* New SEO Optimized Sections */}
      <ServicesPreviewSection />
      <TestimonialsSection />
      <FaqSection />

      <ClientsSection />
      <BigTextSection />
    </main>
  );
};
