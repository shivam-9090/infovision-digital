import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="iv-footer">
      <div className="iv-footer__inner">
        <div className="iv-footer__top">
          <span className="iv-kicker">Have a serious idea?</span>
          <h2>Let’s turn it into a<br /><em>working system.</em></h2>
          <a className="iv-footer__email" href="mailto:vaghanishivam83@gmail.com">
            vaghanishivam83@gmail.com <span>↗</span>
          </a>
        </div>

        <div className="iv-footer__grid">
          <div className="iv-footer__brand">
            <Link to="/" className="iv-brand">
              <span className="iv-brand__mark"><img src="/vision_final_logo.svg" alt="" /></span>
              <span className="iv-brand__name">InfoVision<span>Digital</span></span>
            </Link>
            <p>AI systems, software products, web platforms and mobile experiences engineered in Surat for ambitious teams everywhere.</p>
          </div>
          <div className="iv-footer__links">
            <div><span>Explore</span><Link to="/services">Services</Link><Link to="/work">Work</Link><Link to="/about">About</Link><Link to="/blog">Insights</Link></div>
            <div><span>Connect</span><a href="https://github.com/shivam-9090" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/shivam-vaghani-024190371" target="_blank" rel="noreferrer">LinkedIn</a><Link to="/contact">Contact</Link></div>
            <div><span>Legal</span><Link to="/privacy-policy">Privacy</Link><Link to="/terms-of-service">Terms</Link><Link to="/cookies">Cookies</Link></div>
          </div>
        </div>

        <div className="iv-footer__bottom">
          <span>© {year} InfoVision Digital</span>
          <span>Surat, Gujarat · India</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};
