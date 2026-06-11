import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { path: "/services/web-development", label: "Web Development" },
    { path: "/services/mobile-app-development", label: "Mobile Apps" },
    { path: "/services/flutter-development", label: "Flutter Apps" },
    { path: "/services/ui-ux-design", label: "UI/UX Design" },
    { path: "/services/ai-development", label: "AI & ML Integration" },
    { path: "/services", label: "All Services" }
  ];

  const solutions = [
    { path: "/software-for-startups", label: "Startups" },
    { path: "/software-for-healthcare", label: "Healthcare" },
    { path: "/software-for-finance", label: "Finance" },
    { path: "/software-for-education", label: "Education" },
    { path: "/software-for-real-estate", label: "Real Estate" }
  ];

  const locations = [
    { path: "/web-development-company-in-surat", label: "Surat, India" },
    { path: "/mobile-app-development-company-in-ahmedabad", label: "Ahmedabad, India" },
    { path: "/software-development-company-in-gujarat", label: "Gujarat, India" },
    { path: "/website-development-company-in-india", label: "India (National)" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Info */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <img
                src="/vision_final_logo.svg"
                alt="InfoVision"
                className="footer__logo-img"
                width={50}
                height={50}
              />
              <span className="footer__brand-name">InfoVision</span>
            </Link>
            <p className="footer__desc">
              Custom software engineering, high-performance web applications, mobile apps, and custom generative AI integrations built for business growth.
            </p>
            <div className="footer__socials">
              <a href="https://github.com/shivam-9090" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/shivam-vaghani-024190371" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/achyutam_infotech" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://youtube.com/@achyutam_infotech?si=3GVGjq_wClrcNVgC" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__col-links">
              {services.map(s => (
                <li key={s.path}><Link to={s.path}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Solutions</h4>
            <ul className="footer__col-links">
              {solutions.map(s => (
                <li key={s.path}><Link to={s.path}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Locations</h4>
            <ul className="footer__col-links">
              {locations.map(s => (
                <li key={s.path}><Link to={s.path}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/work">Our Work</Link></li>
              <li><Link to="/blog">Blog & Insights</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__legal">
            <span className="footer__copyright">© {currentYear} InfoVision. All rights reserved.</span>
            <span className="footer__legal-links">
              <Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
              <span className="footer__legal-divider">•</span>
              <Link to="/terms-of-service" className="footer__legal-link">Terms of Service</Link>
              <span className="footer__legal-divider">•</span>
              <Link to="/cookies" className="footer__legal-link">Cookies Policy</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
