import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

// Extract Hero Section to prevent full page re-render
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
          Crafting <span className="text-gradient">Digital Experiences</span>
          <br /> for the Future
        </h1>
        <p className="hero__subtitle">
          Specialized in high-performance web applications with a focus on
          immersive user interfaces and scalable architecture.
        </p>
        <p className="hero__subtitle">
          Helping startups and businesses launch fast, SEO-friendly websites,
          full-stack products, and AI-enabled platforms that improve real user
          outcomes.
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

// Extract Skills Section
const SkillsSection = memo(() => (
  <section className="skills-section section">
    <div className="container">
      <div className="section__header text-center">
        <h2>Skills</h2>
      </div>

      <div className="skills__grid">
        <button className="skill-btn">Frontend</button>
        <button className="skill-btn">Backend</button>
        <button className="skill-btn">DevOps</button>
        <button className="skill-btn">ML Engineer</button>
        <button className="skill-btn">DL Engineer</button>
        <button className="skill-btn">3D Website</button>
        <button className="skill-btn">SaaS Projects</button>
        <button className="skill-btn">Database Management</button>
      </div>
    </div>
  </section>
));

SkillsSection.displayName = "SkillsSection";

// Extract Clients Section
const ClientsSection = memo(() => (
  <section className="clients-section section">
    <div className="container">
      <div className="section__header text-center">
        <h2>Trusted By</h2>
      </div>
      <div className="clients__grid">
        <div className="client-card">
          <p className="client-name">Production Web Platforms</p>
        </div>
        <div className="client-card">
          <p className="client-name">AI Model Releases</p>
        </div>
        <div className="client-card">
          <p className="client-name">3D Interactive Experiences</p>
        </div>
      </div>
    </div>
  </section>
));

ClientsSection.displayName = "ClientsSection";

// Big Text Section Static
const BigTextSection = memo(() => (
  <section
    className="section"
    style={{
      padding: "4rem 0 8rem",
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

      <ClientsSection />
      <BigTextSection />
    </main>
  );
};
