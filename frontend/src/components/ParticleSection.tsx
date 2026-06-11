import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import "./ParticleSection.css";
import Antigravity from "./Antigravity";

const ParticleSectionComponent: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="particle-section">
      <div
        className="particle-box"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.6s ease-out",
            zIndex: 1,
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <Antigravity
            count={150}
            magnetRadius={20}
            ringRadius={15}
            color="#8c50ff"
            particleSize={1.8}
            autoAnimate={true}
            isHovered={isHovered}
          />
        </div>

        <div
          className="particle-content"
          style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}
        >
          <div className="particle-columns">
            {/* Left Column */}
            <motion.div
              className="particle-column"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="particle-badge">Available for hire</span>
              <h2 className="particle-title">
                For clients
                <br />
                <span className="particle-subtitle">Achieve new heights</span>
              </h2>
              <button
                className="particle-btn particle-btn--dark"
                style={{ pointerEvents: "auto" }}
              >
                Get in touch
              </button>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="particle-column"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="particle-badge">Open to collaborate</span>
              <h2 className="particle-title">
                For teams
                <br />
                <span className="particle-subtitle">
                  Level up your projects
                </span>
              </h2>
              <button
                className="particle-btn particle-btn--light"
                style={{ pointerEvents: "auto" }}
              >
                Let's talk
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const ParticleSection = memo(ParticleSectionComponent);
