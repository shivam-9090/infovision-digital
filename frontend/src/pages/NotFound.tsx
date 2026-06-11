import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import "./NotFound.css";

export const NotFound: React.FC = () => {
  return (
    <main className="not-found-page">
      <section className="not-found-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="not-found__content"
          >
            <div className="not-found__code">
              <h1>404</h1>
            </div>

            <h2 className="not-found__title">Page Not Found</h2>

            <p className="not-found__subtitle">
              Oops! It seems like the page you're looking for has drifted into
              the void. Let's get you back on track.
            </p>

            <div className="not-found__actions">
              <Link to="/">
                <Button variant="primary" size="lg">
                  Back to Home
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" size="lg">
                  View My Work
                </Button>
              </Link>
            </div>

            <div className="not-found__suggestions">
              <p className="not-found__suggestions-title">Quick Links:</p>
              <div className="not-found__links">
                <Link to="/" className="not-found__link">
                  Home
                </Link>
                <Link to="/work" className="not-found__link">
                  Portfolio
                </Link>
                <Link to="/about" className="not-found__link">
                  About
                </Link>
                <Link to="/contact" className="not-found__link">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
