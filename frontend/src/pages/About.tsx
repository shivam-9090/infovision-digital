import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardBody } from "../components/Card";
import "./About.css";

export const About: React.FC = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <h1>About Me</h1>
          <p className="about-hero__subtitle">
            Full Stack Developer passionate about building scalable web
            applications
          </p>
          <p className="about-hero__subtitle">
            Focused on performance, SEO, and maintainable product engineering
            for modern business websites and software platforms.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro section">
        <div className="container">
          <div className="about-intro__content">
            <div className="about-intro__text">
              <h2>InfoVision</h2>
              <p>
                A full-stack development company specializing in building modern
                web applications with React, TypeScript, and Node.js. We focus
                on creating performant, accessible, and maintainable solutions
                that solve real-world problems.
              </p>
              <p>
                With experience across the entire development lifecycle—from
                initial concept and design through deployment and maintenance—we
                bring a comprehensive approach to every project.
              </p>
              <p>
                Our work includes educational platforms, CRM systems, and
                production-ready applications, all built with modern best
                practices and a focus on user experience.
              </p>
            </div>
            <div className="about-intro__image">
              <img
                src="/vision_final_logo.svg"
                alt="InfoVision Logo"
                className="about-logo"
                width={280}
                height={280}
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills section section--dark">
        <div className="container">
          <h2 className="text-center">Technical Skills</h2>
          <div className="skills-grid grid grid--3">
            <Card variant="bordered">
              <CardBody>
                <div className="skill-category">
                  <h3 className="skill-category__title">Frontend</h3>
                  <ul className="skill-list">
                    <li>React & React Hooks</li>
                    <li>TypeScript & JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                    <li>State Management (Redux, Context)</li>
                    <li>Vite & Webpack</li>
                  </ul>
                </div>
              </CardBody>
            </Card>

            <Card variant="bordered">
              <CardBody>
                <div className="skill-category">
                  <h3 className="skill-category__title">Backend</h3>
                  <ul className="skill-list">
                    <li>Node.js & Express</li>
                    <li>RESTful API Design</li>
                    <li>MongoDB & Mongoose</li>
                    <li>Authentication (JWT, OAuth)</li>
                    <li>Server-side Architecture</li>
                    <li>API Security</li>
                  </ul>
                </div>
              </CardBody>
            </Card>

            <Card variant="bordered">
              <CardBody>
                <div className="skill-category">
                  <h3 className="skill-category__title">DevOps & Tools</h3>
                  <ul className="skill-list">
                    <li>Git & GitHub</li>
                    <li>Docker & Containerization</li>
                    <li>CI/CD Pipelines</li>
                    <li>Cloud Deployment</li>
                    <li>Linux/Unix Systems</li>
                    <li>Monitoring & Logging</li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Highlight */}
      <section className="about-projects section">
        <div className="container">
          <h2 className="text-center">Featured Projects</h2>
          <p className="section-subtitle text-center">
            Recent work showcasing diverse technical capabilities
          </p>
          <div className="project-highlights grid grid--2">
            <div className="project-highlight">
              <div className="project-highlight__icon"></div>
              <h3>Lunar Web 0.1</h3>
              <p>
                Modern web application with sleek UI/UX and optimized
                performance
              </p>
            </div>
            <div className="project-highlight">
              <div className="project-highlight__icon"></div>
              <h3>Study Helper</h3>
              <p>Educational platform with smart tools and progress tracking</p>
            </div>
            <div className="project-highlight">
              <div className="project-highlight__icon"></div>
              <h3>CRM InfoVision</h3>
              <p>Enterprise CRM with analytics and automated workflows</p>
            </div>
            <div className="project-highlight">
              <div className="project-highlight__icon"></div>
              <h3>Production App</h3>
              <p>Production-ready deployment with CI/CD pipelines</p>
            </div>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "var(--space-2xl)" }}
          >
            <Link to="/work">
              <Button variant="primary" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section section--dark">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Let's Build Something Amazing</h2>
            <p className="cta-subtitle">
              Interested in partnering with InfoVision or have a project in
              mind?
            </p>
            <div className="cta-actions">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Start a Project
                </Button>
              </Link>
              <a
                href="https://github.com/infovision"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
