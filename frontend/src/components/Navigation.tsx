import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="nav container" aria-label="Main navigation">
        <Link to="/" className="nav__logo" onClick={closeMenu}>
          <img
            src="/vision_final_logo.svg"
            alt="Vision"
            className="nav__logo-img"
            width={64}
            height={64}
            decoding="async"
          />
        </Link>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="nav__toggle-icon"></span>
          <span className="nav__toggle-icon"></span>
          <span className="nav__toggle-icon"></span>
        </button>

        <ul className={`nav__list ${isOpen ? "nav__list--open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.path} className="nav__item">
              <Link
                to={item.path}
                className={`nav__link ${
                  location.pathname === item.path ? "nav__link--active" : ""
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
