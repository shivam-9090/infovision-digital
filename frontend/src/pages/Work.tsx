import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "../components/Card";
import {
  FaBrain,
  FaPalette,
  FaBolt,
  FaShoppingCart,
  FaMobileAlt,
  FaCube,
  FaChartLine,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";
import "./Work.css";

const projects = [
  {
    id: "crm-infovision",
    caseStudyId: "crm-infovision",
    title: "CRM InfoVision",
    description:
      "Complete Customer Relationship Management system built with Next.js frontend and NestJS backend. Features authentication, workspace management, deals pipeline, and real-time analytics.",
    tags: ["Next.js", "NestJS", "TypeScript", "Docker"],
    icon: <FaChartLine size={24} />,
    liveUrl: "https://crm.infovision.digital/",
    metrics: [
      { label: "Stack", value: "Full Stack" },
      { label: "TypeScript", value: "95%" },
    ],
  },
  {
    id: "infovision-gpt",
    caseStudyId: "infovision-gpt",
    title: "InfoVision GPT 4.5B",
    description:
      "Large language model with 4.5 billion parameters trained for advanced natural language understanding and generation. Published on Hugging Face with full model weights and documentation.",
    tags: ["AI", "LLM", "Transformers", "PyTorch"],
    icon: <FaBrain size={24} />,
    liveUrl: "https://huggingface.co/shivam909067/Infovision-gpt-4.5B",
    metrics: [
      { label: "Parameters", value: "4.5B" },
      { label: "Type", value: "LLM" },
    ],
  },
  {
    id: "image-gen-art",
    caseStudyId: "image-gen-art",
    title: "Image Gen Art 01",
    description:
      "Advanced AI image generation model specialized in creating artistic and creative visuals. Fine-tuned diffusion model for high-quality image synthesis with diverse artistic styles.",
    tags: ["AI", "Image Generation", "Diffusion", "Computer Vision"],
    icon: <FaPalette size={24} />,
    liveUrl: "https://huggingface.co/shivam909067/Image-gen-art-01",
    metrics: [
      { label: "Type", value: "Gen AI" },
      { label: "Domain", value: "Art" },
    ],
  },
  {
    id: "sifera-v1",
    caseStudyId: "sifera-v1",
    title: "Sifera V1",
    description:
      "First generation foundational AI model focused on specialized language tasks. Open-source contribution to the Hugging Face community with comprehensive model card.",
    tags: ["AI", "Deep Learning", "Open Source", "NLP"],
    icon: <FaBolt size={24} />,
    liveUrl: "https://huggingface.co/shivam909067/Sifera-V1",
    metrics: [
      { label: "Version", value: "V1" },
      { label: "Status", value: "Open" },
    ],
  },
  {
    id: "exora",
    caseStudyId: "exora",
    title: "Exora",
    description:
      "Modern e-commerce platform for handmade flowers and botanical products. Features product catalog, shopping cart, responsive design, and seamless checkout experience.",
    tags: ["E-commerce", "React", "Netlify", "Web"],
    icon: <FaShoppingCart size={24} />,
    liveUrl: "https://exorav.netlify.app",
    metrics: [
      { label: "Type", value: "E-commerce" },
      { label: "Status", value: "Live" },
    ],
  },
  {
    id: "appexorbit",
    caseStudyId: "appexorbit",
    title: "Appexorbit",
    description:
      "Cross-platform mobile application built with Expo React Native and TypeScript. Features Firebase authentication, real-time database, cloud storage, and Material Design 3 UI.",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    icon: <FaMobileAlt size={24} />,
    liveUrl: "#apk",
    metrics: [
      { label: "TypeScript", value: "97.3%" },
      { label: "Platforms", value: "Multi" },
    ],
  },
  {
    id: "mclaren-infovision",
    caseStudyId: "mclaren-infovision",
    title: "McLaren InfoVision",
    description:
      "Interactive 3D McLaren GT experience with Three.js and GSAP. Features cinematic camera animations, 7 interactive positions, touch gestures, color customization, and adaptive quality controls.",
    tags: ["Three.js", "GSAP", "3D", "WebGL"],
    icon: <FaCube size={24} />,
    liveUrl: "https://mclaren-vision.netlify.app/",
    metrics: [
      { label: "Positions", value: "7" },
      { label: "Type", value: "3D Web" },
    ],
  },
];

export const Work: React.FC = () => {
  return (
    <main className="work-page">
      <section className="work-header section">
        <div className="container">
          <h1>Project Portfolio</h1>
          <p className="work-header__subtitle">
            A collection of production applications showcasing full-stack
            development expertise
          </p>
          <p className="work-header__contact-text">
            Need similar results? Review our{" "}
            <Link to="/services">services</Link> and{" "}
            <Link to="/contact">start a project discussion</Link>.
          </p>
          <p className="work-header__desc-text">
            Explore detailed case studies for architecture decisions,
            implementation approach, and measurable delivery outcomes across
            web, mobile, AI, and 3D projects.
          </p>
        </div>
      </section>

      <section className="work-grid-section section">
        <div className="container">
          <div className="work-projects grid grid--2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card-wrapper"
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  // Prevent navigation if clicking on a button or link inside the card
                  if (
                    (e.target as HTMLElement).closest("a") ||
                    (e.target as HTMLElement).closest("button")
                  ) {
                    return;
                  }
                  if (project.liveUrl !== "#apk") {
                    window.open(
                      project.liveUrl,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (project.liveUrl !== "#apk") {
                      window.open(
                        project.liveUrl,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }
                }}
              >
                <Card variant="bordered" className="project-card">
                  <CardBody className="project-card__body">
                    <div className="project-card__header">
                      <div className="project-card__icon-wrapper">
                        {project.icon}
                      </div>
                      <div className="project-card__title-row">
                        <h3 className="project-card__title">{project.title}</h3>
                      </div>
                    </div>

                    <p className="project-card__description">
                      {project.description}
                    </p>

                    <div className="project-card__metrics">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="metric-item">
                          <span className="metric-label">{metric.label}</span>
                          <span className="metric-value">{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="project-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-card__actions">
                      {project.caseStudyId && (
                        <Link
                          to={`/case-study/${project.caseStudyId}`}
                          className="action-btn action-btn--primary"
                        >
                          Case Study <FaArrowRight />
                        </Link>
                      )}

                      {project.liveUrl === "#apk" ? (
                        <a
                          href="/app-release.apk"
                          download="appexorbit.apk"
                          className="action-btn action-btn--outline"
                        >
                          Download APK
                        </a>
                      ) : null}
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
