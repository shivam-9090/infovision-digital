import React, { lazy, Suspense, memo, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Eager load critical components
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { SeoManager } from "./components/SeoManager";

const SpaceBackground = lazy(() =>
  import("./components/SpaceBackground").then((module) => ({
    default: module.SpaceBackground,
  })),
);

// Lazy load route components for code splitting
const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home })),
);
const Services = lazy(() =>
  import("./pages/Services").then((module) => ({ default: module.Services })),
);
const Work = lazy(() =>
  import("./pages/Work").then((module) => ({ default: module.Work })),
);
const About = lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About })),
);
const Contact = lazy(() =>
  import("./pages/Contact").then((module) => ({ default: module.Contact })),
);
const CaseStudy = lazy(() =>
  import("./pages/CaseStudy").then((module) => ({ default: module.CaseStudy })),
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound })),
);
const PrivacyPolicy = lazy(() =>
  import("./pages/PrivacyPolicy").then((module) => ({
    default: module.PrivacyPolicy,
  })),
);
const TermsOfService = lazy(() =>
  import("./pages/TermsOfService").then((module) => ({
    default: module.TermsOfService,
  })),
);
const CookiesPolicy = lazy(() =>
  import("./pages/CookiesPolicy").then((module) => ({
    default: module.CookiesPolicy,
  })),
);

// Minimal loading component
const PageLoader = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div className="loader"></div>
    </div>
  </div>
);

const StaticBackdrop = memo(() => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      background: "#050505",
    }}
    aria-hidden="true"
  />
));

StaticBackdrop.displayName = "StaticBackdrop";

const BackgroundLayer = memo(() => {
  const location = useLocation();
  const [showThreeScene, setShowThreeScene] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowThreeScene(false);
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hasSaveDataPreference =
      typeof navigator !== "undefined" &&
      navigator.connection &&
      navigator.connection.saveData;

    if (prefersReducedMotion || hasSaveDataPreference) {
      setShowThreeScene(false);
      return;
    }

    let isCancelled = false;

    const startThreeScene = () => {
      if (!isCancelled) {
        setShowThreeScene(true);
      }
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(startThreeScene, {
        timeout: 1500,
      });

      return () => {
        isCancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = window.setTimeout(startThreeScene, 1200);

    return () => {
      isCancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  if (location.pathname !== "/") {
    return <StaticBackdrop />;
  }

  if (!showThreeScene) {
    return <StaticBackdrop />;
  }

  return (
    <Suspense fallback={<StaticBackdrop />}>
      <SpaceBackground />
    </Suspense>
  );
});

BackgroundLayer.displayName = "BackgroundLayer";

const AppContent = memo(() => {
  return (
    <Router>
      <div className="app">
        <SeoManager />
        <BackgroundLayer />
        <Navigation />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/case-study/:id" element={<CaseStudy />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsOfService />}
              />
              <Route path="/terms-and-condition" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiesPolicy />} />
              <Route path="/cookie-policy" element={<CookiesPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
});

AppContent.displayName = "AppContent";

function App() {
  return <AppContent />;
}

export default App;
