import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "InfoVision Portfolio";
const SITE_URL = "https://infovision.digital";
const DEFAULT_IMAGE = `${SITE_URL}/vision_final_logo.svg`;

const routeMeta = {
  "/": {
    title: "Web Developer Portfolio | React, Node.js & Full Stack | Shivam",
    description:
      "Professional web developer building fast, SEO-friendly websites for businesses. Specializing in React, Node.js, and AI solutions.",
    index: true,
  },
  "/services": {
    title: "Web Development Services | React, Node.js & AI | Shivam",
    description:
      "Explore web development services including modern frontend, scalable backend, and SEO-focused business websites.",
    index: true,
  },
  "/work": {
    title: "Portfolio Work & Case Studies | Shivam",
    description:
      "View selected web development projects and case studies focused on performance, UX, and real business outcomes.",
    index: true,
  },
  "/about": {
    title: "About Shivam | Full Stack Web Developer",
    description:
      "Learn about Shivam, a full stack web developer focused on building fast, reliable, and SEO-friendly digital experiences.",
    index: true,
  },
  "/contact": {
    title: "Contact | Hire Web Developer Shivam",
    description:
      "Get in touch for website development, portfolio projects, and custom web solutions for your business.",
    index: true,
  },
  "/privacy-policy": {
    title: "Privacy Policy | InfoVision",
    description: "Privacy policy for InfoVision portfolio website.",
    index: false,
  },
  "/terms-of-service": {
    title: "Terms of Service | InfoVision",
    description: "Terms of service for InfoVision portfolio website.",
    index: false,
  },
  "/cookies": {
    title: "Cookie Policy | InfoVision",
    description: "Cookie policy for InfoVision portfolio website.",
    index: false,
  },
};

const startsWithMeta = [
  {
    startsWith: "/case-study/",
    title: "Case Study | InfoVision",
    description:
      "Detailed case study covering project goals, technical execution, and measurable outcomes.",
    index: true,
  },
  {
    startsWith: "/services/",
    title: "Service Details | InfoVision",
    description:
      "Detailed web development service information, technology stack, and delivery process.",
    index: true,
  },
];

const CASE_STUDY_META = {
  "crm-infovision": {
    title: "CRM InfoVision Case Study | Full Stack CRM Delivery",
    description:
      "Case study of CRM InfoVision: architecture, pipeline features, fixes, and deployment outcomes.",
  },
  "infovision-gpt": {
    title: "InfoVision GPT 4.5B Case Study | LLM Engineering",
    description:
      "Case study for a 4.5B parameter language model covering workflow, publishing, and outcomes.",
  },
  "image-gen-art": {
    title: "Image Gen Art 01 Case Study | Generative AI",
    description:
      "Case study of an art-focused image generation model including tuning strategy and quality workflow.",
  },
  "sifera-v1": {
    title: "Sifera V1 Case Study | Foundation Model Release",
    description:
      "Case study for Sifera V1 foundational model release process, baseline setup, and lessons.",
  },
  exora: {
    title: "Exora Case Study | E-commerce Web Platform",
    description:
      "Case study of Exora e-commerce platform with product flows, UX, and deployment highlights.",
  },
  appexorbit: {
    title: "Appexorbit Case Study | React Native + Firebase",
    description:
      "Case study of Appexorbit mobile app architecture, Firebase integration, and production readiness.",
  },
  "mclaren-infovision": {
    title: "McLaren InfoVision Case Study | 3D Web Experience",
    description:
      "Case study covering cinematic 3D web interaction, performance strategy, and delivery outcomes.",
  },
};

const PATH_LABELS = {
  "/": "Home",
  "/services": "Services",
  "/work": "Work",
  "/about": "About",
  "/contact": "Contact",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
  "/cookies": "Cookies Policy",
};

const LEGAL_ALIASES = {
  "/privacy": "/privacy-policy",
  "/terms": "/terms-of-service",
  "/terms-and-conditions": "/terms-of-service",
  "/terms-and-condition": "/terms-of-service",
  "/cookie-policy": "/cookies",
};

const ensureMetaTag = (name) => {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  return tag;
};

const ensurePropertyMetaTag = (property) => {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  return tag;
};

const ensureCanonicalLink = () => {
  let link = document.querySelector("link[rel='canonical']");

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  return link;
};

const ensureJsonLdScript = (key) => {
  let script = document.querySelector(`script[data-seo="${key}"]`);

  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-seo", key);
    document.head.appendChild(script);
  }

  return script;
};

const resolveMeta = (pathname) => {
  const normalizedPath = LEGAL_ALIASES[pathname] ?? pathname;

  if (normalizedPath.startsWith("/case-study/")) {
    const slug = normalizedPath.replace("/case-study/", "");
    const caseStudyMeta = CASE_STUDY_META[slug];

    if (caseStudyMeta) {
      return {
        ...caseStudyMeta,
        index: true,
      };
    }
  }

  if (routeMeta[normalizedPath]) {
    return routeMeta[normalizedPath];
  }

  if (routeMeta[pathname]) {
    return routeMeta[pathname];
  }

  const prefixMatch = startsWithMeta.find((item) =>
    pathname.startsWith(item.startsWith),
  );

  if (prefixMatch) {
    return prefixMatch;
  }

  return {
    title: "Page Not Found | InfoVision",
    description: "The page you are looking for could not be found.",
    index: false,
  };
};

const resolveCanonicalPath = (pathname) => {
  if (LEGAL_ALIASES[pathname]) {
    return LEGAL_ALIASES[pathname];
  }

  if (pathname.startsWith("/services/")) {
    return "/services";
  }

  return pathname;
};

const toTitleCase = (value) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const buildBreadcrumbList = (canonicalPath) => {
  const segments = canonicalPath.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
  ];

  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: PATH_LABELS[currentPath] ?? toTitleCase(segment),
      item: `${SITE_URL}${currentPath}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};

export const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const meta = resolveMeta(pathname);
    const canonicalPath = resolveCanonicalPath(pathname);
    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;

    document.title = meta.title;

    ensureMetaTag("description").setAttribute("content", meta.description);
    ensureMetaTag("robots").setAttribute(
      "content",
      meta.index
        ? "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        : "noindex, nofollow",
    );

    ensurePropertyMetaTag("og:type").setAttribute("content", "website");
    ensurePropertyMetaTag("og:title").setAttribute("content", meta.title);
    ensurePropertyMetaTag("og:description").setAttribute(
      "content",
      meta.description,
    );
    ensurePropertyMetaTag("og:url").setAttribute("content", canonicalUrl);
    ensurePropertyMetaTag("og:site_name").setAttribute("content", SITE_NAME);
    ensurePropertyMetaTag("og:image").setAttribute("content", DEFAULT_IMAGE);

    ensureMetaTag("twitter:card").setAttribute(
      "content",
      "summary_large_image",
    );
    ensureMetaTag("twitter:title").setAttribute("content", meta.title);
    ensureMetaTag("twitter:description").setAttribute(
      "content",
      meta.description,
    );
    ensureMetaTag("twitter:image").setAttribute("content", DEFAULT_IMAGE);

    ensureCanonicalLink().setAttribute("href", canonicalUrl);

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "InfoVision",
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      sameAs: [
        "https://github.com/shivam-9090",
        "https://linkedin.com/in/shivam-dev",
        "https://huggingface.co/shivam909067",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "infovision@gmail.com",
          telephone: "+91-8780546982",
          availableLanguage: ["English"],
        },
      ],
    };

    ensureJsonLdScript("website").textContent = JSON.stringify(websiteSchema);
    ensureJsonLdScript("organization").textContent =
      JSON.stringify(organizationSchema);
    ensureJsonLdScript("breadcrumb").textContent = JSON.stringify(
      buildBreadcrumbList(canonicalPath),
    );
  }, [location]);

  return null;
};
