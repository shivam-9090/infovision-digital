import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody } from "../components/Card";
import { ProductVisual } from "../components/ProductVisual";
import { WorkHeroVisual } from "../components/WorkHeroVisual";
import {
  FaBrain,
  FaPalette,
  FaBolt,
  FaShoppingCart,
  FaMobileAlt,
  FaCube,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import "./Work.css";

interface Project {
  id: string;
  caseStudyId: string;
  title: string;
  positioning: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: "crm-infovision",
    caseStudyId: "crm-infovision",
    title: "CRM InfoVision",
    positioning: "Enterprise-grade Sales Pipeline & Real-Time Workspace Lifecycle Analytics",
    description:
      "Full-stack client management pipeline built using Next.js 14 and NestJS. Features standardized workspace permissions, multi-tenancy, and automatic Terraform deployment configuration.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Terraform"],
    icon: <FaChartLine size={16} />,
    liveUrl: "https://crm.infovision.digital/",
  },
  {
    id: "infovision-gpt",
    caseStudyId: "infovision-gpt",
    title: "InfoVision GPT 4.5B",
    positioning: "Large Language Model Tuned for Robust Natural Language Processing",
    description:
      "A 4.5 billion parameter transformer model pre-trained and published on Hugging Face. Engineered with stable optimization schedules and repeatable checkpoints for structured NLP workflows.",
    tags: ["PyTorch", "Transformers", "LLM", "Python"],
    icon: <FaBrain size={16} />,
    liveUrl: "https://huggingface.co/shivam909067/Infovision-gpt-4.5B",
  },
  {
    id: "image-gen-art",
    caseStudyId: "image-gen-art",
    title: "Image Gen Art 01",
    positioning: "Custom Diffusion Visual Generation Model for High-Quality Coherent Art",
    description:
      "Generative visual network specialized in producing consistent, artistic styles across dynamic prompts. Published with baseline metrics to support reproducible generation experiments.",
    tags: ["Diffusion", "PyTorch", "Computer Vision", "Hugging Face"],
    icon: <FaPalette size={16} />,
    liveUrl: "https://huggingface.co/shivam909067/Image-gen-art-01",
  },
  {
    id: "sifera-v1",
    caseStudyId: "sifera-v1",
    title: "Sifera V1",
    positioning: "Foundational Open-Source NLP Baseline for Specialized Downstream Tasks",
    description:
      "First generation foundational AI model initiative published in an open ecosystem. Created structured checkpoints and evaluation pipelines to serve as a low-latency model baseline.",
    tags: ["Deep Learning", "Transformers", "NLP", "Python"],
    icon: <FaBolt size={16} />,
    liveUrl: "https://huggingface.co/shivam909067/Sifera-V1",
  },
  {
    id: "catalstudio",
    caseStudyId: "catalstudio",
    title: "CatalStudio",
    positioning: "AI-Powered E-Commerce Catalog Variation & Generative Image Studio",
    description:
      "An advanced creative studio for generating hyper-realistic catalog variation assets. Features dynamic multi-angle catalog synthesis, background swapping, and automated image generation.",
    tags: ["React", "TypeScript", "AI Integration", "Cloudflare Pages"],
    icon: <FaPalette size={16} />,
    liveUrl: "https://catalstudio.com/",
  },
  {
    id: "nivassetu",
    caseStudyId: "nivassetu",
    title: "NivasSetu",
    positioning: "Zero-Brokerage Residential Rental Platform & Direct Listings Engine",
    description:
      "Zero-brokerage rental portal in Gujarat connecting tenants and owners. Optimized with secure Aadhaar KYC verification, Google Maps spatial geocoding, and custom real-time search.",
    tags: ["React", "NestJS", "PostgreSQL", "Google Maps API", "Aadhaar KYC"],
    icon: <FaMobileAlt size={16} />,
    liveUrl: "https://nivassetu.com/",
  },
  {
    id: "trilunafashion",
    caseStudyId: "trilunafashion",
    title: "Triluna Fashion",
    positioning: "Premium E-Commerce Storefront & High-Performance Catalog for Ethnic Wear",
    description:
      "A fast, high-conversion e-commerce platform specializing in premium sarees and ethnic wear. Features a high-fidelity catalog grid, custom filtering systems, and responsive checkout experiences.",
    tags: ["React", "Shopify API", "CSS Modules", "TailwindCSS", "Core Web Vitals"],
    icon: <FaShoppingCart size={16} />,
    liveUrl: "https://trilunafashion.com/",
  },
  {
    id: "mclaren-infovision",
    caseStudyId: "mclaren-infovision",
    title: "McLaren InfoVision",
    positioning: "Cinematic 3D Grand Tourer Interactive Experience with Smooth Camera Paths",
    description:
      "WebGL vehicle simulator rendering a detailed McLaren GT. Guided by 7 custom camera path transitions, responsive touch controls, and color customization shaders via Three.js and GSAP.",
    tags: ["Three.js", "GSAP", "WebGL", "3D Web"],
    icon: <FaCube size={16} />,
    liveUrl: "https://mclaren-vision.netlify.app/",
  },
];

export const Work: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="work-page">
      <section className="work-header section">
        <div className="work-header__canvas-container">
          <WorkHeroVisual />
        </div>
        <div className="container">
          <h1 className="work-title">Project <span className="text-gradient">Portfolio</span></h1>
          <p className="work-header__subtitle">
            A premium showcase of production applications and foundational AI engineering
          </p>
          <p className="work-header__contact-text">
            Looking for business outcomes? Review our{" "}
            <Link to="/services">services</Link> or{" "}
            <Link to="/contact">initiate a project discussion</Link>.
          </p>
          <p className="work-header__desc-text">
            Explore dedicated case study architecture decisions, developmental journeys,
            and actual client metrics across web, mobile, artificial intelligence, and 3D graphics.
          </p>
        </div>
      </section>

      <section className="work-grid-section section">
        <div className="container">
          <div className="work-projects">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card-wrapper"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  // If clicking on an action button, let the default handle it
                  if (target.closest(".action-btn")) {
                    return;
                  }
                  // Otherwise, navigate to the dedicated Case Study page
                  navigate(`/case-study/${project.caseStudyId}`);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/case-study/${project.caseStudyId}`);
                  }
                }}
              >
                <Card variant="bordered" className="project-card">
                  {/* Top Section: Interactive Visual */}
                  <div className="project-card__visual-wrapper">
                    <ProductVisual id={project.id} />
                  </div>

                  <CardBody className="project-card__body">
                    {/* Middle Section: Project Title + Positioning */}
                    <div className="project-card__header">
                      <div className="project-card__title-row">
                        <div className="project-card__icon-wrapper">
                          {project.icon}
                        </div>
                        <h3 className="project-card__title">{project.title}</h3>
                      </div>
                      <p className="project-card__positioning">{project.positioning}</p>
                    </div>

                    <p className="project-card__description">
                      {project.description}
                    </p>

                    {/* Tags Section */}
                    <div className="project-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions Section */}
                    <div className="project-card__actions">
                      <Link
                        to={`/case-study/${project.caseStudyId}`}
                        className="action-btn action-btn--primary"
                      >
                        Read Case Study <FaArrowRight className="btn-arrow" />
                      </Link>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn action-btn--outline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Link
                      </a>
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
