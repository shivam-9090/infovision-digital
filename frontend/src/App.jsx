import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { SeoManager } from "./components/SeoManager";
import { SiteEffects } from "./components/SiteEffects";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Work } from "./pages/Work";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { CaseStudy } from "./pages/CaseStudy";
import { NotFound } from "./pages/NotFound";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { CookiesPolicy } from "./pages/CookiesPolicy";
import { LocationPage } from "./pages/LocationPage";
import { IndustryPage } from "./pages/IndustryPage";
import { Blog } from "./pages/Blog";

const ScrollManager = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [location.pathname]);
  return null;
};

const AppShell = () => (
  <div className="app-shell">
    <SeoManager />
    <ScrollManager />
    <SiteEffects />
    <Navigation />
    <div className="app-main">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/web-development-company-in-surat" element={<LocationPage />} />
          <Route path="/mobile-app-development-company-in-ahmedabad" element={<LocationPage />} />
          <Route path="/software-development-company-in-gujarat" element={<LocationPage />} />
          <Route path="/flutter-app-development-company-in-india" element={<LocationPage />} />
          <Route path="/website-development-company-in-india" element={<LocationPage />} />
          <Route path="/software-for-real-estate" element={<IndustryPage />} />
          <Route path="/software-for-healthcare" element={<IndustryPage />} />
          <Route path="/software-for-education" element={<IndustryPage />} />
          <Route path="/software-for-finance" element={<IndustryPage />} />
          <Route path="/software-for-startups" element={<IndustryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/terms-and-conditions" element={<TermsOfService />} />
          <Route path="/terms-and-condition" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/cookie-policy" element={<CookiesPolicy />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default function App() {
  return <Router><AppShell /></Router>;
}
