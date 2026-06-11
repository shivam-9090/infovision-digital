import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
  };

  const services = [
    { path: "/services/web-development", label: "Web Development" },
    { path: "/services/mobile-app-development", label: "Mobile Apps" },
    { path: "/services/flutter-development", label: "Flutter Apps" },
    { path: "/services/ui-ux-design", label: "UI/UX Design" },
    { path: "/services/ai-development", label: "AI & ML" },
    { path: "/services", label: "All Services" },
  ];

  const solutions = [
    { path: "/software-for-startups", label: "Startups" },
    { path: "/software-for-healthcare", label: "Healthcare" },
    { path: "/software-for-finance", label: "Finance" },
    { path: "/software-for-education", label: "Education" },
    { path: "/software-for-real-estate", label: "Real Estate" },
  ];

  const isRouteActive = (path: string) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return location.pathname.startsWith("/services");
  };

  const isSolutionsActive = () => {
    const activePaths = [
      "/software-for-startups",
      "/software-for-healthcare",
      "/software-for-finance",
      "/software-for-education",
      "/software-for-real-estate"
    ];
    return activePaths.includes(location.pathname);
  };

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
          <li className="nav__item">
            <Link
              to="/"
              className={`nav__link ${isRouteActive("/") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className={`nav__item nav__dropdown ${servicesOpen ? "nav__dropdown--open" : ""} ${isServicesActive() ? "nav__link--active" : ""}`}>
            <Link
              to="/services"
              className="nav__link nav__dropdown-toggle"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                } else {
                  closeMenu();
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    setServicesOpen(!servicesOpen);
                  }
                }
              }}
            >
              Services{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="5"
                viewBox="0 0 10 6"
                fill="currentColor"
                className="dropdown-arrow-svg"
              >
                <path d="M0,0 L10,0 L5,6 Z" />
              </svg>
            </Link>
            <ul className="nav__dropdown-menu">
              {services.map((item) => (
                <li key={item.path} className="nav__dropdown-item">
                  <Link to={item.path} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Solutions Dropdown */}
          <li className={`nav__item nav__dropdown ${solutionsOpen ? "nav__dropdown--open" : ""} ${isSolutionsActive() ? "nav__link--active" : ""}`}>
            <span
              className="nav__link nav__dropdown-toggle"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSolutionsOpen(!solutionsOpen);
                }
              }}
            >
              Solutions{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="5"
                viewBox="0 0 10 6"
                fill="currentColor"
                className="dropdown-arrow-svg"
              >
                <path d="M0,0 L10,0 L5,6 Z" />
              </svg>
            </span>
            <ul className="nav__dropdown-menu">
              {solutions.map((item) => (
                <li key={item.path} className="nav__dropdown-item">
                  <Link to={item.path} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav__item">
            <Link
              to="/work"
              className={`nav__link ${isRouteActive("/work") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              Work
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/blog"
              className={`nav__link ${isRouteActive("/blog") || location.pathname.startsWith("/blog/") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/about"
              className={`nav__link ${isRouteActive("/about") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/contact"
              className={`nav__link ${isRouteActive("/contact") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
