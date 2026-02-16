import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <span className="footer__brand">Infovision</span>
            <span className="footer__divider">•</span>
            <span className="footer__copyright">© {currentYear}</span>
          </div>

          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__social">
            <a
              href="https://github.com/shivam-9090"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shivam-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <Link to="/privacy-policy" className="footer__legal-link">
              Privacy Policy
            </Link>
            <span className="footer__legal-divider">•</span>
            <Link to="/terms-of-service" className="footer__legal-link">
              Terms of Service
            </Link>
            <span className="footer__legal-divider">•</span>
            <Link to="/cookies" className="footer__legal-link">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
