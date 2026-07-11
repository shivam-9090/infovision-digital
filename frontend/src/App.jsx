import { lazy, Suspense, useEffect } from "react";
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

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const Work = lazy(() => import("./pages/Work").then((m) => ({ default: m.Work })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const CaseStudy = lazy(() => import("./pages/CaseStudy").then((m) => ({ default: m.CaseStudy })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import("./pages/TermsOfService").then((m) => ({ default: m.TermsOfService })));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy").then((m) => ({ default: m.CookiesPolicy })));
const LocationPage = lazy(() => import("./pages/LocationPage").then((m) => ({ default: m.LocationPage })));
const IndustryPage = lazy(() => import("./pages/IndustryPage").then((m) => ({ default: m.IndustryPage })));
const Blog = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));

const ScrollManager = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [location.pathname]);
  return null;
};

const PageLoader = () => (
  <div className="page-loader" role="status" aria-label="Loading page">
    <span>IV</span>
    <i />
  </div>
);

const AppShell = () => (
  <div className="app-shell">
    <SeoManager />
    <ScrollManager />
    <SiteEffects />
    <Navigation />
    <div className="app-main">
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </div>
    <Footer />
  </div>
);

export default function App() {
  return <Router><AppShell /></Router>;
}
