import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { blogPosts } from "../utils/blogData";

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
  "/blog": {
    title: "InfoVision Blog | Technical SEO, Web & AI Development",
    description: "Latest insights on React, Flutter, Node.js performance, AI model deployment, and enterprise software engineering.",
    index: true,
  }
};

const SERVICE_META = {
  "web-development": {
    title: "Full Stack Web Development Services | InfoVision",
    description: "Enterprise-grade web application development using React, Node.js, and TypeScript. Scalable, performant, and secure solutions.",
    index: true
  },
  "mobile-app-development": {
    title: "Cross-Platform Mobile App Development | InfoVision",
    description: "Build native-performing iOS and Android applications with Expo, React Native, and robust backend integrations.",
    index: true
  },
  "flutter-development": {
    title: "Flutter App Development Company | InfoVision",
    description: "Native Android & iOS apps with Flutter. High-performance, custom animations, Impeller rendering, and fast time-to-market.",
    index: true
  },
  "ui-ux-design": {
    title: "UI/UX Design & Prototyping Services | InfoVision",
    description: "User-centric UI/UX design, interactive wireframes, custom animations, and responsive layouts designed to maximize conversions.",
    index: true
  },
  "ecommerce-development": {
    title: "E-commerce Platform Development | InfoVision",
    description: "Custom e-commerce storefronts, payment integrations, cart optimizations, and responsive designs that grow sales.",
    index: true
  },
  "seo-services": {
    title: "SEO & Web Performance Optimization Services | InfoVision",
    description: "Increase organic rankings, speed up page load speeds, and optimize Core Web Vitals (LCP, FID, CLS, INP) for Google and AI Search Engines.",
    index: true
  },
  "digital-marketing": {
    title: "Digital Marketing & Conversion Funnel Strategy | InfoVision",
    description: "Scale user acquisition with conversion optimization, marketing integration, and SEO campaigns designed for high-intent traffic.",
    index: true
  },
  "custom-software-development": {
    title: "Custom Software Engineering & Architecture | InfoVision",
    description: "Bespoke software solutions built for enterprise stability. Multi-workspace dashboards, role permissions, and scalable API systems.",
    index: true
  },
  "cloud-consulting": {
    title: "Cloud Architecture & DevOps Consulting | InfoVision",
    description: "AWS infrastructure, Docker containerization, CI/CD pipelines, and Terraform configurations for high-availability workloads.",
    index: true
  },
  "ai-development": {
    title: "AI/ML Integration & LLM Engineering Services | InfoVision",
    description: "Integrate PyTorch/TensorFlow models, OpenAI APIs, and custom 4.5B LLM solutions into your business pipelines.",
    index: true
  }
};

const LOCATION_META = {
  "web-development-company-in-surat": {
    title: "Web Development Company in Surat | Custom Web Apps | InfoVision",
    description: "Top web development agency in Surat, Gujarat. We build custom React, Node.js, and full-stack software solutions for local and global businesses.",
    index: true,
    address: {
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN"
    }
  },
  "mobile-app-development-company-in-ahmedabad": {
    title: "Mobile App Development Company in Ahmedabad | InfoVision",
    description: "Top mobile application agency in Ahmedabad. High-performance iOS and Android apps using React Native and Flutter with Firebase backend.",
    index: true,
    address: {
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN"
    }
  },
  "software-development-company-in-gujarat": {
    title: "Software Development Company in Gujarat | Enterprise Apps | InfoVision",
    description: "InfoVision is a premier custom software engineering and IT consulting company in Gujarat, building enterprise applications and AI solutions.",
    index: true,
    address: {
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN"
    }
  },
  "flutter-app-development-company-in-india": {
    title: "Flutter App Development Company in India | InfoVision",
    description: "Offshore Flutter app development services in India. High-performance, cost-effective cross-platform iOS and Android mobile solutions.",
    index: true,
    address: {
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN"
    }
  },
  "website-development-company-in-india": {
    title: "Website Development Company in India | Top React Developers | InfoVision",
    description: "Hire top web development developers in India. High-performance, SEO-optimized business websites and SaaS platforms built to scale.",
    index: true,
    address: {
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN"
    }
  }
};

const INDUSTRY_META = {
  "software-for-real-estate": {
    title: "Real Estate Software Development | Property Portals | InfoVision",
    description: "Custom real estate software solutions. MLS integrations, property search portals, visual mapping, and CRM pipelines for brokers.",
    index: true
  },
  "software-for-healthcare": {
    title: "Healthcare Software Development | HIPAA Compliant Apps | InfoVision",
    description: "Custom healthcare software engineering. HIPAA-compliant patient portals, telehealth integrations, and medical data pipelines.",
    index: true
  },
  "software-for-education": {
    title: "EdTech & Education Software Solutions | LMS Platforms | InfoVision",
    description: "Custom learning management systems (LMS), student tracking dashboards, online quiz engines, and interactive classroom portals.",
    index: true
  },
  "software-for-finance": {
    title: "FinTech & Financial Software Development | InfoVision",
    description: "Secure financial software engineering. PCI-DSS compliant payment gateways, invoice pipelines, and real-time dashboard analytics.",
    index: true
  },
  "software-for-startups": {
    title: "Software Development Services for Startups | MVP Engineering",
    description: "Accelerate your launch with agile MVP software development. Node.js backend, React frontend, fast deployment, and scalable databases.",
    index: true
  }
};

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
  catalstudio: {
    title: "CatalStudio Case Study | AI Catalog Generation",
    description:
      "Case study of CatalStudio, an AI-powered e-commerce catalog variation & generative image studio.",
  },
  nivassetu: {
    title: "NivasSetu Case Study | Zero-Brokerage Rentals",
    description:
      "Case study of NivasSetu zero-brokerage rental platform, KYC verification, and direct listings engine.",
  },
  trilunafashion: {
    title: "Triluna Fashion Case Study | Saree E-Commerce Store",
    description:
      "Case study of Triluna Fashion premium saree e-commerce storefront, catalog performance, and headless Shopify integration.",
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
  "/blog": "Blog",
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

const removeJsonLdScript = (key) => {
  const script = document.querySelector(`script[data-seo="${key}"]`);
  if (script) {
    script.remove();
  }
};

const resolveMeta = (pathname) => {
  const normalizedPath = LEGAL_ALIASES[pathname] ?? pathname;

  // 1. Case Study match
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

  // 2. Services detail match
  if (normalizedPath.startsWith("/services/")) {
    const slug = normalizedPath.replace("/services/", "");
    const serviceMeta = SERVICE_META[slug];
    if (serviceMeta) {
      return serviceMeta;
    }
  }

  // 3. Blog detail match
  if (normalizedPath.startsWith("/blog/")) {
    const slug = normalizedPath.replace("/blog/", "");
    const blogPost = blogPosts.find(p => p.slug === slug);
    if (blogPost) {
      return {
        title: `${blogPost.title} | InfoVision Blog`,
        description: blogPost.excerpt,
        index: true,
        blogPost
      };
    }
  }

  // 4. Location flat URLs match
  const locSlug = normalizedPath.replace("/", "");
  if (LOCATION_META[locSlug]) {
    return LOCATION_META[locSlug];
  }

  // 5. Industry flat URLs match
  const indSlug = normalizedPath.replace("/", "");
  if (INDUSTRY_META[indSlug]) {
    return INDUSTRY_META[indSlug];
  }

  // 6. Direct static route mapping
  if (routeMeta[normalizedPath]) {
    return routeMeta[normalizedPath];
  }

  if (routeMeta[pathname]) {
    return routeMeta[pathname];
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

    ensurePropertyMetaTag("og:type").setAttribute("content", pathname.startsWith("/blog/") ? "article" : "website");
    ensurePropertyMetaTag("og:title").setAttribute("content", meta.title);
    ensurePropertyMetaTag("og:description").setAttribute("content", meta.description);
    ensurePropertyMetaTag("og:url").setAttribute("content", canonicalUrl);
    ensurePropertyMetaTag("og:site_name").setAttribute("content", SITE_NAME);
    ensurePropertyMetaTag("og:image").setAttribute("content", DEFAULT_IMAGE);

    ensureMetaTag("twitter:card").setAttribute("content", "summary_large_image");
    ensureMetaTag("twitter:title").setAttribute("content", meta.title);
    ensureMetaTag("twitter:description").setAttribute("content", meta.description);
    ensureMetaTag("twitter:image").setAttribute("content", DEFAULT_IMAGE);

    ensureCanonicalLink().setAttribute("href", canonicalUrl);

    // Standard website and organization schemas
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
          email: "vaghanishivam83@gmail.com",
          availableLanguage: ["English"],
        },
      ],
    };

    ensureJsonLdScript("website").textContent = JSON.stringify(websiteSchema);
    ensureJsonLdScript("organization").textContent = JSON.stringify(organizationSchema);
    ensureJsonLdScript("breadcrumb").textContent = JSON.stringify(buildBreadcrumbList(canonicalPath));

    // Dynamic Schema Injection

    // 1. LocalBusiness Schema for Location Pages
    const locSlug = pathname.replace("/", "");
    if (LOCATION_META[locSlug]) {
      const locData = LOCATION_META[locSlug];
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `InfoVision - ${toTitleCase(locSlug.split("-in-")[1] || "Gujarat")}`,
        url: canonicalUrl,
        logo: DEFAULT_IMAGE,
        image: DEFAULT_IMAGE,
        address: {
          "@type": "PostalAddress",
          ...locData.address
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00"
        }
      };
      ensureJsonLdScript("localBusiness").textContent = JSON.stringify(localBusinessSchema);
    } else {
      removeJsonLdScript("localBusiness");
    }

    // 2. BlogPosting Schema for Blog Detail Page
    if (pathname.startsWith("/blog/") && meta.blogPost) {
      const post = meta.blogPost;
      const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishDate,
        dateModified: post.publishDate,
        image: DEFAULT_IMAGE,
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role
        },
        publisher: {
          "@type": "Organization",
          name: "InfoVision",
          logo: {
            "@type": "ImageObject",
            url: DEFAULT_IMAGE
          }
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      };
      ensureJsonLdScript("blogPosting").textContent = JSON.stringify(blogPostingSchema);
    } else {
      removeJsonLdScript("blogPosting");
    }

    // 3. Service Schema for Services Detail Pages
    if (pathname.startsWith("/services/") && pathname !== "/services") {
      const serviceSlug = pathname.replace("/services/", "");
      const svcData = SERVICE_META[serviceSlug];
      if (svcData) {
        const serviceSchema = {
          "@context": "https://schema.org",
          "@type": "Service",
          name: svcData.title,
          description: svcData.description,
          provider: {
            "@type": "Organization",
            name: "InfoVision",
            url: SITE_URL
          }
        };
        ensureJsonLdScript("service").textContent = JSON.stringify(serviceSchema);
      }
    } else {
      removeJsonLdScript("service");
    }

    // 4. FAQ Schema for Homepage and Service Pages
    if (pathname === "/" || pathname.startsWith("/services")) {
      let faqs = [];
      if (pathname === "/") {
        faqs = [
          { q: "What services does InfoVision provide?", a: "InfoVision offers enterprise-level software engineering including Full Stack Web Development, mobile applications (Flutter/React Native), WebGL/3D interfaces, and custom AI/LLM deployment." },
          { q: "What is your typical project timeline?", a: "Most website builds take 4-8 weeks, while complex full-stack portals and mobile apps range from 3-6 months depending on requirements." },
          { q: "Where is InfoVision located?", a: "Our main development center is located in Surat, Gujarat, India, and we service clients globally." }
        ];
      } else if (pathname.startsWith("/services/")) {
        // Service specific FAQs will be rendered by the Service detail page and schema is fed here
        const serviceSlug = pathname.replace("/services/", "");
        if (serviceSlug === "web-development") {
          faqs = [
            { q: "Do you use templates or custom code?", a: "We build all full-stack applications from scratch using React, Next.js, and Node.js for maximum performance and security." },
            { q: "Is database design included in the full-stack package?", a: "Yes, we handle complete database schema design, migrations, and optimization using PostgreSQL and MongoDB." }
          ];
        } else if (serviceSlug === "flutter-development" || serviceSlug === "mobile-app-development") {
          faqs = [
            { q: "Why do you recommend Flutter?", a: "Flutter offers 60-120 FPS performance, identical UI across iOS/Android, and cuts development costs by compiling from a single codebase." }
          ];
        } else {
          faqs = [
            { q: "Do you support post-launch maintenance?", a: "Yes, we provide ongoing support, Core Web Vitals maintenance, and scaling improvements on monthly SLA terms." }
          ];
        }
      }

      if (faqs.length > 0) {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a
            }
          }))
        };
        ensureJsonLdScript("faq").textContent = JSON.stringify(faqSchema);
      } else {
        removeJsonLdScript("faq");
      }
    } else {
      removeJsonLdScript("faq");
    }

  }, [location]);

  return null;
};
