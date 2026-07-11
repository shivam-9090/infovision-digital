import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const primaryLinks = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Insights" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("iv-menu-open", open);
    return () => document.body.classList.remove("iv-menu-open");
  }, [open]);

  return (
    <header className={`iv-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="iv-nav" aria-label="Main navigation">
        <Link to="/" className="iv-brand" aria-label="InfoVision Digital home">
          <span className="iv-brand__mark"><img src="/vision_final_logo.svg" alt="" /></span>
          <span className="iv-brand__name">InfoVision<span>Digital</span></span>
        </Link>

        <button
          className={`iv-menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>

        <div className={`iv-nav__panel ${open ? "is-open" : ""}`}>
          <div className="iv-nav__links">
            {primaryLinks.map((link) => {
              const active = location.pathname === link.to || location.pathname.startsWith(`${link.to}/`);
              return (
                <Link key={link.to} to={link.to} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined}>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link to="/contact" className="iv-nav__cta">
            <span className="iv-nav__status" /> Start a project <span className="iv-arrow">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
