import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "../components/Card";
import "./Services.css";

// Icons as components
const Icons = {
  FullStack: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Frontend: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  Backend: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  ThreeD: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  AI: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M12 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
      <path d="M2 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
      <path d="M16 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  SaaS: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
};

export const Services: React.FC = () => {
  const services = [
    {
      id: "full-stack",
      title: "Full Stack Development",
      description:
        "Complete end-to-end web application development from database to user interface. Build scalable, secure, and maintainable applications.",
      timeline: "4-12 weeks",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
      ],
      deliverables: [
        "Responsive web application",
        "REST API / GraphQL",
        "Database schema & migrations",
        "Authentication & authorization",
        "Admin dashboard",
        "Deployment & CI/CD setup",
      ],
      Icon: Icons.FullStack,
    },
    {
      id: "frontend",
      title: "Frontend Development",
      description:
        "Modern, responsive, and performant user interfaces with cutting-edge frameworks. Focus on user experience and accessibility.",
      timeline: "2-8 weeks",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],
      deliverables: [
        "Pixel-perfect UI implementation",
        "Mobile-first responsive design",
        "Component library",
        "State management",
        "SEO optimization",
        "Performance optimization",
      ],
      Icon: Icons.Frontend,
    },
    {
      id: "backend",
      title: "Backend Development",
      description:
        "Robust server-side applications with secure APIs, database design, and scalable architecture. Built for performance and reliability.",
      timeline: "3-10 weeks",
      technologies: [
        "Node.js",
        "NestJS",
        "Express",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      deliverables: [
        "RESTful / GraphQL APIs",
        "Database design & optimization",
        "Authentication systems",
        "Real-time features",
        "API documentation",
        "Microservices architecture",
      ],
      Icon: Icons.Backend,
    },
    {
      id: "3d-web",
      title: "3D Website Development",
      description:
        "Immersive 3D web experiences with Three.js and WebGL. Create stunning interactive visualizations and product showcases.",
      timeline: "6-14 weeks",
      technologies: [
        "Three.js",
        "React Three Fiber",
        "GSAP",
        "WebGL",
        "Blender",
        "GLSL",
      ],
      deliverables: [
        "3D interactive experiences",
        "Product configurators",
        "Animated scenes",
        "Performance optimization",
        "Mobile compatibility",
        "Custom shaders",
      ],
      Icon: Icons.ThreeD,
    },
    {
      id: "ai-ml",
      title: "AI/ML Integration",
      description:
        "Integrate machine learning models and AI capabilities into your applications. From NLP to computer vision and custom models.",
      timeline: "4-16 weeks",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Hugging Face",
        "OpenAI API",
        "FastAPI",
      ],
      deliverables: [
        "Model training & deployment",
        "AI-powered features",
        "Natural language processing",
        "Custom ML pipelines",
        "API integration",
        "Model optimization",
      ],
      Icon: Icons.AI,
    },
    {
      id: "saas",
      title: "SaaS Development",
      description:
        "Complete SaaS platforms with subscription management, multi-tenancy, and scalable infrastructure. Built for growth.",
      timeline: "8-20 weeks",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "AWS",
        "Docker",
      ],
      deliverables: [
        "Multi-tenant architecture",
        "Payment integration",
        "User management",
        "Analytics dashboard",
        "Email & notifications",
        "Cloud infrastructure",
      ],
      Icon: Icons.SaaS,
    },
  ];

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero section">
        <div className="container">
          <h1>Our Services</h1>
          <p className="services-hero__subtitle">
            Comprehensive web development solutions tailored to your business
            needs. From concept to deployment, we deliver excellence.
          </p>
          <p>
            Explore our <Link to="/work">recent work</Link> to see delivery
            quality, or <Link to="/contact">contact us</Link> for a project
            estimate.
          </p>
          <p>
            Typical engagement includes discovery, solution architecture,
            iterative development, QA, and production deployment with ongoing
            improvement support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <Card key={service.id} variant="hover" className="service-card">
                <CardBody>
                  <div className="service-card__icon">
                    <service.Icon />
                  </div>
                  <h2 className="service-card__title">{service.title}</h2>
                  <p className="service-card__description">
                    {service.description}
                  </p>

                  <div className="service-card__timeline">
                    <span className="timeline-label">Timeline:</span>
                    <span className="timeline-value">{service.timeline}</span>
                  </div>

                  <div className="service-card__tech">
                    <h4 className="tech-title">Technologies:</h4>
                    <div className="tech-tags">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-card__deliverables">
                    <h4 className="deliverables-title">What We Provide:</h4>
                    <ul className="deliverables-list">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss your requirements and build something amazing
              together.
            </p>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
