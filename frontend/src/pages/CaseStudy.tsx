import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardBody } from "../components/Card";
import { ProductVisual } from "../components/ProductVisual";
import "./CaseStudy.css";

interface Challenge {
  title: string;
  description: string;
  solution: string;
}

interface Feature {
  title: string;
  description: string;
}

interface Metric {
  label: string;
  value: string;
}

interface CaseStudyData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  liveUrl: string;
  category: string;
  role: string;
  timeline: string;
  techStack: string[];
  overview: string;
  challenges: Challenge[];
  features: Feature[];
  metrics: Metric[];
  outcomes: string[];
  learnings: string[];
}

const caseStudies: Record<string, CaseStudyData> = {
  "crm-infovision": {
    id: "crm-infovision",
    title: "CRM InfoVision",
    tagline: "Enterprise CRM built with Next.js & NestJS",
    description:
      "Complete Customer Relationship Management system for modern businesses.",
    heroImage: "",
    liveUrl: "https://vision-crm.netlify.app/",
    category: "Enterprise Software",
    role: "Full Stack Developer",
    timeline: "3+ months (33+ commits)",
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "Terraform",
      "GitHub Actions",
    ],
    overview:
      "CRM InfoVision is a comprehensive customer relationship management system built with modern enterprise technologies. The frontend uses Next.js with TypeScript (95.1%), while the backend is powered by NestJS. Key features include JWT authentication, workspace management with role-based permissions, deals pipeline with stages (LEAD, MEETING, NEGOTIATION, CLOSED), contact management with notes and history, and real-time analytics dashboards. The project demonstrates enterprise-grade architecture with complete Docker containerization for frontend, backend, and PostgreSQL, CI/CD pipelines using GitHub Actions, infrastructure as code with Terraform (HCL 0.8%), and production-ready deployment configurations.",
    challenges: [
      {
        title: "Docker Build Optimization",
        description:
          "Initial Docker builds were slow and image sizes were too large for production.",
        solution:
          "Fixed critical Docker build issues, implemented multi-stage builds, and optimized layer caching, reducing build times by 60%.",
      },
      {
        title: "Deals Pipeline Bug Fixes",
        description:
          "Race conditions in lead score calculations and UI inconsistencies in deal cards.",
        solution:
          "Removed PROPOSAL stage causing conflicts, fixed lead score race conditions, and improved deal card UX with colored list rows and editable notes.",
      },
    ],
    features: [
      {
        title: "Workspace Management",
        description:
          "Multi-workspace support with role-based permissions for teams and organizations.",
      },
      {
        title: "Deals Pipeline",
        description:
          "Visual pipeline with LEAD, MEETING, NEGOTIATION, and CLOSED stages. Drag-and-drop interface with inline editing.",
      },
    ],
    metrics: [
      { label: "TypeScript", value: "95.1%" },
      { label: "Commits", value: "33+" },
      { label: "Docker", value: "Full Stack" },
    ],
    outcomes: [
      "Completed full CRM system with authentication and workspace cleanup",
      "Fixed critical bugs and improved UI/UX based on production feedback",
      "Implemented production deployment with Docker Compose and Terraform",
    ],
    learnings: [
      "Docker multi-stage builds crucial for production optimization",
      "TypeScript provides excellent type safety across full stack",
      "Infrastructure as code (Terraform) simplifies deployment management",
    ],
  },
  "infovision-gpt": {
    id: "infovision-gpt",
    title: "InfoVision GPT 4.5B",
    tagline: "4.5B-parameter large language model",
    description:
      "A large language model focused on robust text understanding and generation, published with model artifacts.",
    heroImage: "",
    liveUrl: "https://huggingface.co/shivam909067/Infovision-gpt-4.5B",
    category: "AI / NLP",
    role: "ML Engineer",
    timeline: "Research + training cycle",
    techStack: [
      "PyTorch",
      "Transformers",
      "Python",
      "Tokenization",
      "Hugging Face",
      "Evaluation Pipelines",
    ],
    overview:
      "InfoVision GPT 4.5B is a large language model project focused on practical text generation and understanding tasks. The work includes training/evaluation workflow design, model packaging, and publishing artifacts for reproducible usage. The project emphasizes deployment-ready model documentation and consistent inference behavior across NLP tasks.",
    challenges: [
      {
        title: "Training Stability",
        description:
          "Maintaining consistent convergence while scaling model size and sequence lengths.",
        solution:
          "Used staged training schedules, validated checkpoints frequently, and tuned optimizer/lr settings to improve stability.",
      },
      {
        title: "Inference Efficiency",
        description:
          "Serving larger models can introduce higher latency and memory pressure.",
        solution:
          "Applied practical inference configurations and publishing guidance to balance quality with usable runtime performance.",
      },
    ],
    features: [
      {
        title: "Model Publishing",
        description:
          "Released model artifacts and documentation for transparent usage on Hugging Face.",
      },
      {
        title: "Task Coverage",
        description:
          "Supports broad text understanding/generation workflows including summarization and response generation.",
      },
      {
        title: "Reproducible Workflow",
        description:
          "Structured training and evaluation process with repeatable checkpoints and metrics tracking.",
      },
    ],
    metrics: [
      { label: "Parameters", value: "4.5B" },
      { label: "Domain", value: "NLP" },
      { label: "Platform", value: "Hugging Face" },
    ],
    outcomes: [
      "Published a 4.5B LLM with accessible model card and artifacts",
      "Built a repeatable experimentation pipeline for model quality iteration",
      "Created practical deployment guidance for downstream usage",
    ],
    learnings: [
      "Checkpoint discipline is critical for larger-model iteration",
      "Model documentation significantly improves usability and adoption",
      "Inference constraints should be planned alongside training goals",
    ],
  },
  "image-gen-art": {
    id: "image-gen-art",
    title: "Image Gen Art 01",
    tagline: "Creative image-generation model for artistic outputs",
    description:
      "An AI image-generation project focused on stylized and creative visual synthesis.",
    heroImage: "",
    liveUrl: "https://huggingface.co/shivam909067/Image-gen-art-01",
    category: "Generative AI",
    role: "ML Engineer",
    timeline: "Model fine-tuning cycle",
    techStack: [
      "Diffusion Models",
      "PyTorch",
      "Computer Vision",
      "Dataset Curation",
      "Hugging Face",
    ],
    overview:
      "Image Gen Art 01 is a generative AI project aimed at producing artistic and visually rich imagery. The project centers on data curation, tuning for style consistency, and practical quality checks for generated outputs. It is published with accessible artifacts to support experimentation and reuse.",
    challenges: [
      {
        title: "Style Consistency",
        description:
          "Generated outputs can vary significantly in visual style and detail.",
        solution:
          "Improved dataset selection and fine-tuning strategy to achieve more stable artistic direction.",
      },
      {
        title: "Output Quality Control",
        description:
          "Balancing diversity with coherence across multiple generation prompts.",
        solution:
          "Established prompt-based evaluation routines and iterative quality review loops.",
      },
    ],
    features: [
      {
        title: "Art-focused Generation",
        description:
          "Designed for creative, stylized image outputs suitable for concept and visual exploration.",
      },
      {
        title: "Prompt-driven Workflow",
        description:
          "Supports flexible prompt conditioning for different styles and visual themes.",
      },
      {
        title: "Public Model Access",
        description:
          "Published model entry for reproducible trials and community feedback.",
      },
    ],
    metrics: [
      { label: "Type", value: "Gen AI" },
      { label: "Focus", value: "Art" },
      { label: "Platform", value: "Hugging Face" },
    ],
    outcomes: [
      "Built and published an art-oriented image generation model",
      "Improved output consistency through iterative fine-tuning",
      "Created a reusable evaluation flow for visual quality improvements",
    ],
    learnings: [
      "Data quality directly drives style consistency",
      "Prompt evaluation frameworks speed up iteration cycles",
      "Clear publishing docs improve reproducibility",
    ],
  },
  "sifera-v1": {
    id: "sifera-v1",
    title: "Sifera V1",
    tagline: "Foundational AI model release (V1)",
    description:
      "An open foundational model release focused on practical NLP experimentation.",
    heroImage: "",
    liveUrl: "https://huggingface.co/shivam909067/Sifera-V1",
    category: "AI Foundation Model",
    role: "ML Engineer",
    timeline: "Initial V1 release cycle",
    techStack: [
      "Python",
      "Deep Learning",
      "Transformers",
      "NLP",
      "Open-source Publishing",
    ],
    overview:
      "Sifera V1 is a foundational AI model initiative focused on open experimentation and reproducible model release workflows. The project packages model assets, usage guidance, and baseline performance considerations for community exploration and future model iterations.",
    challenges: [
      {
        title: "Versioned Model Baseline",
        description:
          "Creating a reliable V1 baseline that can support subsequent iterative versions.",
        solution:
          "Defined stable training/evaluation checkpoints and a structured release process.",
      },
      {
        title: "Open-source Usability",
        description: "Ensuring others can test and evaluate the model quickly.",
        solution:
          "Provided practical model card guidance and predictable usage paths for experimentation.",
      },
    ],
    features: [
      {
        title: "Versioned Release",
        description:
          "Clear V1 milestone with foundations for future model improvements.",
      },
      {
        title: "NLP-focused Capability",
        description:
          "Designed for language-oriented tasks and iterative experimentation.",
      },
      {
        title: "Open Contribution Path",
        description:
          "Published in an open ecosystem to enable testing and feedback loops.",
      },
    ],
    metrics: [
      { label: "Version", value: "V1" },
      { label: "Type", value: "Foundation" },
      { label: "Status", value: "Open" },
    ],
    outcomes: [
      "Released an initial foundational model with practical documentation",
      "Established a repeatable baseline for future model versions",
      "Enabled external testing and feedback through open publication",
    ],
    learnings: [
      "Versioned release discipline helps long-term model quality",
      "Open artifacts improve collaboration and trust",
      "Baseline reproducibility is essential for meaningful iteration",
    ],
  },
  "ai-model": {
    id: "ai-model",
    title: "AI Model",
    tagline: "Custom machine learning model implementation",
    description:
      "Python-based AI model for neural network training and deployment.",
    heroImage: "",
    liveUrl: "#",
    category: "Machine Learning",
    role: "ML Engineer",
    timeline: "2 months",
    techStack: ["Python", "PyTorch", "TensorFlow", "NumPy", "Pandas"],
    overview:
      "AI Model is a custom machine learning project focused on training and deploying neural networks using Python. The project includes implementation of various ML algorithms, data preprocessing pipelines, and model optimization techniques.",
    challenges: [
      {
        title: "Model Optimization",
        description:
          "Achieving high accuracy while maintaining reasonable training times and resource usage.",
        solution:
          "Implemented transfer learning and model pruning techniques to reduce complexity without sacrificing performance.",
      },
      {
        title: "Data Pipeline",
        description:
          "Processing large datasets efficiently for training and validation.",
        solution:
          "Built custom data loaders with batching and caching mechanisms using NumPy and Pandas.",
      },
    ],
    features: [
      {
        title: "Neural Network Implementation",
        description:
          "Custom implementations of CNN, RNN, and transformer architectures using PyTorch.",
      },
      {
        title: "Data Preprocessing",
        description:
          "Automated pipelines for data cleaning, normalization, and augmentation.",
      },
      {
        title: "Model Training",
        description:
          "GPU-accelerated training with checkpointing and early stopping mechanisms.",
      },
      {
        title: "Evaluation Metrics",
        description:
          "Comprehensive metrics including accuracy, precision, recall, F1-score, and confusion matrices.",
      },
    ],
    metrics: [
      { label: "Language", value: "Python" },
      { label: "Framework", value: "PyTorch" },
      { label: "Accuracy", value: "92%+" },
    ],
    outcomes: [
      "Successfully trained and deployed custom neural network models",
      "Achieved competitive accuracy on benchmark datasets",
      "Built reusable ML pipeline components for future projects",
    ],
    learnings: [
      "Importance of data quality over quantity",
      "Transfer learning dramatically reduces training time",
      "Regular model validation prevents overfitting",
    ],
  },
  catalstudio: {
    id: "catalstudio",
    title: "CatalStudio",
    tagline: "AI-Powered E-Commerce Catalog Variation & Generative Image Studio",
    description:
      "An advanced creative studio for generating hyper-realistic catalog variation assets.",
    heroImage: "",
    liveUrl: "https://catalstudio.com/",
    category: "Generative AI / E-Commerce",
    role: "Lead AI Engineer & Frontend Developer",
    timeline: "3+ months",
    techStack: [
      "React",
      "TypeScript",
      "AI Integration",
      "Cloudflare Pages",
      "Canvas API",
      "Webhooks",
    ],
    overview:
      "CatalStudio is a live production-grade application designed for catalog generation. It helps retail brands swap backgrounds, generate hyper-realistic models, and perform multi-angle catalog synthesis. Built with React and TypeScript, it incorporates advanced image processing and AI service integrations to produce studio-quality marketing assets from simple product photos.",
    challenges: [
      {
        title: "Multi-Angle Catalog Consistency",
        description:
          "Ensuring AI-generated variation images preserve details of the original product (e.g., stitching, brand tags, shape) across different backgrounds.",
        solution:
          "Developed customized edge-detection and feature masking pipelines using Canvas API alongside custom ControlNet configurations, achieving stable product rendering across 95% of variations.",
      },
      {
        title: "High Resolution Rendering Performance",
        description:
          "Generating high-res images in real time could cause UI freezing or latency issues during synthesis.",
        solution:
          "Implemented a robust asynchronous queue worker using Webhooks and optimized state management to load lower-resolution previews first, improving interactive responsiveness by 70%.",
      },
    ],
    features: [
      {
        title: "Background Swapping",
        description:
          "Instantly swap backgrounds using custom style presets (e.g., Studio Light, Outdoor Sunset, Minimalist).",
      },
      {
        title: "ControlNet Edge Detection",
        description:
          "Leverage edge detection algorithms to preserve precise outlines of complex product geometries.",
      },
      {
        title: "Asset Management Workspace",
        description:
          "Complete dashboard showing history, download options, and project folders for easy asset control.",
      },
    ],
    metrics: [
      { label: "Resolution", value: "4K Synthesis" },
      { label: "Inference", value: "< 6s" },
      { label: "Ecosystem", value: "Cloudflare Pages" },
    ],
    outcomes: [
      "Built a fully functional e-commerce catalog studio operating in production",
      "Decreased catalog generation costs for brands by over 80%",
      "Achieved sub-6-second generation speeds with high fidelity",
    ],
    learnings: [
      "Preserving product details in generative models requires precise image mask controls",
      "Async processing queues are essential for blocking, long-running AI API calls",
      "Simple, flat styling leads to cleaner layouts compared to complex tool panels",
    ],
  },
  nivassetu: {
    id: "nivassetu",
    title: "NivasSetu",
    tagline: "Zero-Brokerage Residential Rental Platform & Direct Listings Engine",
    description:
      "Zero-brokerage rental portal in Gujarat connecting tenants and owners.",
    heroImage: "",
    liveUrl: "https://nivassetu.com/",
    category: "Real Estate / Web Platform",
    role: "Full Stack Developer",
    timeline: "4 months",
    techStack: [
      "React",
      "NestJS",
      "PostgreSQL",
      "Google Maps API",
      "Aadhaar KYC",
      "JWT",
      "TailwindCSS",
    ],
    overview:
      "NivasSetu is a live zero-brokerage rental platform designed specifically for properties in Gujarat, India. It connects landlords directly with tenants, eliminating intermediary fees. The platform includes a direct listings engine, interactive Google Maps search, secured Aadhaar-based KYC verification to prevent fraudulent listings, and real-time tenant-owner chat.",
    challenges: [
      {
        title: "Spam and Fraudulent Listings",
        description:
          "Ensuring listings are genuine and owners are verified was a major trust issue in the local market.",
        solution:
          "Integrated Aadhaar KYC API verification for all owners posting listings, reducing spam listings to near-zero.",
      },
      {
        title: "Map-Based Spatial Queries",
        description:
          "Querying and rendering hundreds of coordinates on an interactive map can degrade client rendering performance.",
        solution:
          "Used spatial PostgreSQL indexes alongside Google Maps Marker Clustering, leading to sub-100ms loading speeds for map queries.",
      },
    ],
    features: [
      {
        title: "Zero-Brokerage Direct Listings",
        description:
          "Direct connection with landlords via phone/chat, saving thousands in brokerage fees.",
      },
      {
        title: "Aadhaar KYC Owner Verification",
        description:
          "Mandatory verification process ensuring every listing is backed by a verified individual.",
      },
      {
        title: "Interactive Map Search",
        description:
          "Visual search displaying rental properties in real-time on Google Maps with filters.",
      },
    ],
    metrics: [
      { label: "Spam", value: "Near-Zero" },
      { label: "Query Load", value: "< 100ms" },
      { label: "Brokerage", value: "0% Fees" },
    ],
    outcomes: [
      "Successfully launched zero-brokerage portal serving users in Gujarat",
      "Verified hundreds of properties through secure KYC verification",
      "Built highly interactive, low-latency spatial search using Google Maps API",
    ],
    learnings: [
      "Trust verification (like Aadhaar KYC) is a massive differentiator in real estate platforms",
      "Spatial database indexes (like PostGIS or B-Tree indexes) are critical for map searches",
      "Direct tenant-to-owner messaging improves user retention and booking conversion rates",
    ],
  },
  trilunafashion: {
    id: "trilunafashion",
    title: "Triluna Fashion",
    tagline: "Premium Saree E-Commerce Storefront & High-Performance Catalog",
    description:
      "A high-conversion e-commerce platform specializing in premium sarees and ethnic wear.",
    heroImage: "",
    liveUrl: "https://trilunafashion.com/",
    category: "E-Commerce / Retail",
    role: "Lead Full-Stack Developer",
    timeline: "3 months",
    techStack: [
      "React",
      "Shopify API",
      "CSS Modules",
      "TailwindCSS",
      "Node.js",
      "Core Web Vitals",
    ],
    overview:
      "Triluna Fashion is a premium saree and ethnic wear e-commerce store designed for Yogesh Vaghani. The portal showcases high-quality traditional sarees, with advanced filters, seamless cart caches, and robust checkout mechanisms. Built on a headless commerce structure linking a React frontend to Shopify APIs, it ensures excellent page loading speeds and sub-second catalog transitions.",
    challenges: [
      {
        title: "High-Resolution Image Loading",
        description:
          "Saree catalogs require extremely detailed, high-resolution zoom views, which initially degraded PageSpeed metrics.",
        solution:
          "Implemented next-generation image format processing (WebP/AVIF), progressive loading, and responsive srcsets, elevating Google PageSpeed scores to 94+ on mobile.",
      },
      {
        title: "Fluid Filtering Options",
        description:
          "Combining category, fabric, color, and price filters without page reloads or layout shifts.",
        solution:
          "Designed a lightweight in-memory filtering engine on React state, combined with optimized debounced index queries.",
      },
    ],
    features: [
      {
        title: "Headless E-Commerce Catalog",
        description:
          "Sub-second listing loading and browsing using decoupled API feeds.",
      },
      {
        title: "Fabric & Style Filtering",
        description:
          "Custom filtering grids to easily sort by Banarasi Silk, Georgette, Cotton, and specific embroidery styles.",
      },
      {
        title: "Sleek Translucent UI",
        description:
          "Elegant dark mode design emphasizing luxury branding, subtle gold gradients, and typography.",
      },
    ],
    metrics: [
      { label: "Page Load", value: "< 1.8s" },
      { label: "Mobile Score", value: "94+" },
      { label: "Checkout CTR", value: "+28%" },
    ],
    outcomes: [
      "Successfully launched live, high-performance saree storefront for Triluna Fashion",
      "Reduced shopping cart drop-offs by 22% through simplified steps",
      "Delivered state-of-the-art catalog image rendering with AVIF optimization",
    ],
    learnings: [
      "Headless Shopify architectures significantly improve page speed compared to standard templates",
      "Premium styling variables (colors, fonts) dramatically influence customer trust in high-ticket ethnic items",
      "Optimizing Web Vitals directly impacts conversion rates and organic SEO rankings",
    ],
  },
  "mclaren-infovision": {
    id: "mclaren-infovision",
    title: "McLaren InfoVision",
    tagline: "Interactive 3D grand tourer experience",
    description:
      "Immersive 3D web experience showcasing the McLaren GT with cinematic animations.",
    heroImage: "",
    liveUrl: "https://mclaren-vision.netlify.app/",
    category: "3D Web Experience",
    role: "3D Web Developer",
    timeline: "1+ month",
    techStack: [
      "Three.js",
      "GSAP",
      "WebGL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Netlify",
    ],
    overview:
      "McLaren InfoVision is an interactive 3D web experience that brings the McLaren GT grand tourer to life through cutting-edge web technologies. Built with Three.js for 3D rendering and GSAP for smooth animations, the project features 7 cinematic camera positions that guide users through an immersive journey. The experience includes touch gesture support for mobile devices (swipe navigation, pinch-to-zoom), keyboard controls (arrow keys, spacebar), dynamic color customization, adaptive quality settings for optimal performance across devices, and a comprehensive loading system with progress indicators. The project demonstrates advanced WebGL techniques, responsive 3D design, and production-ready deployment on Netlify.",
    challenges: [
      {
        title: "3D Model Optimization",
        description:
          "Loading and rendering high-quality 3D car models while maintaining smooth 60fps performance across devices.",
        solution:
          "Implemented adaptive quality controls, progressive model loading, and LOD (Level of Detail) techniques. Optimized textures and geometry for web delivery.",
      },
      {
        title: "Cross-Device Experience",
        description:
          "Creating seamless interaction across desktop (mouse/keyboard) and mobile (touch gestures) with consistent UX.",
        solution:
          "Built unified gesture system supporting mouse drag, keyboard arrows, and touch swipes. Implemented responsive camera controls and adaptive UI based on device capabilities.",
      },
      {
        title: "Cinematic Camera Animation",
        description:
          "Orchestrating smooth camera transitions between 7 positions while maintaining orientation and focus on the car.",
        solution:
          "Used GSAP timeline animations with custom easing curves. Implemented automatic camera path calculations and look-at constraints for natural movement.",
      },
    ],
    features: [
      {
        title: "7 Cinematic Positions",
        description:
          "Guided tour through carefully choreographed camera angles showcasing different aspects of the McLaren GT design.",
      },
      {
        title: "Interactive Controls",
        description:
          "Multi-input support: mouse drag, keyboard arrows, touch gestures (swipe/pinch), and skip-to-end functionality.",
      },
      {
        title: "Color Customization",
        description:
          "Real-time car color changes using arrow keys, demonstrating material system and shader manipulation.",
      },
      {
        title: "Adaptive Quality",
        description:
          "Manual quality controls and automatic device detection for optimal performance vs visual fidelity balance.",
      },
      {
        title: "Loading System",
        description:
          "Progressive loading with detailed progress indicators, asset preloading, and graceful fallbacks for slow connections.",
      },
      {
        title: "Responsive 3D Design",
        description:
          "Fully responsive layout adapting camera FOV, lighting, and UI elements for mobile, tablet, and desktop viewports.",
      },
    ],
    metrics: [
      { label: "Positions", value: "7" },
      { label: "Performance", value: "60 FPS" },
      { label: "Load Time", value: "< 3s" },
    ],
    outcomes: [
      "Created immersive 3D web experience with 7 cinematic camera positions",
      "Achieved 60fps performance across desktop and mobile devices",
      "Implemented comprehensive gesture and keyboard control systems",
      "Deployed production-ready experience on Netlify with fast load times",
      "Demonstrated advanced Three.js, WebGL, and GSAP animation techniques",
    ],
    learnings: [
      "Three.js provides powerful 3D capabilities for web experiences",
      "GSAP timeline animations essential for complex camera choreography",
      "Progressive loading and LOD critical for 3D web performance",
      "Cross-device gesture systems require unified abstraction layer",
      "Adaptive quality controls improve accessibility across hardware tiers",
    ],
  },
};

export const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudies[id] : undefined;
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For CRM InfoVision and NivasSetu: reveal journey steps as they scroll into view
    if ((id !== "crm-infovision" && id !== "nivassetu") || !journeyRef.current)
      return;

    const steps = journeyRef.current.querySelectorAll(".journey-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("journey-step--visible");
          }
        });
      },
      { threshold: 0.25 },
    );

    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, [id]);

  if (!study) {
    return (
      <main className="container section">
        <div className="case-study-error">
          <h1>Case Study Not Found</h1>
          <p>The case study you're looking for doesn't exist.</p>
          <Link to="/work">
            <Button variant="primary">View All Projects</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="case-study">
      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="container">
          <div className="case-study-hero__grid">
            <div className="case-study-hero__content">
              <span className="case-study-hero__category">{study.category}</span>
              <h1 className="case-study-hero__title">{study.title}</h1>
              <p className="case-study-hero__tagline">{study.tagline}</p>
              <div className="case-study-hero__actions">
                {study.liveUrl !== "#" ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg">
                      View Live Site
                    </Button>
                  </a>
                ) : null}
                <Link to="/work">
                  <Button variant="outline" size="lg">
                    Back to Projects
                  </Button>
                </Link>
              </div>
            </div>
            <div className="case-study-hero__visual-wrapper">
              <div className="case-study-hero__visual">
                <ProductVisual id={study.id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="case-study-section">
        <div className="container">
          <div className="case-study-grid">
            <div className="case-study-main">
              <h2>Project Overview</h2>
              <p className="case-study-overview">{study.overview}</p>

              {/* Metrics */}
              <div className="case-study-metrics">
                {study.metrics.map((metric, index) => (
                  <div key={index} className="metric-card">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="case-study-sidebar">
              <Card variant="bordered">
                <CardBody>
                  <h3>Project Details</h3>
                  <dl className="project-details">
                    <dt>Role</dt>
                    <dd>{study.role}</dd>
                    <dt>Timeline</dt>
                    <dd>{study.timeline}</dd>
                    <dt>Category</dt>
                    <dd>{study.category}</dd>
                  </dl>

                  <h4>Tech Stack</h4>
                  <div className="tech-tags">
                    {study.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="case-study-section case-study-section--alt">
        <div className="container">
          <h2>Challenges & Solutions</h2>
          <div className="challenges-grid">
            {study.challenges.map((challenge, index) => (
              <Card key={index} variant="hover">
                <CardBody>
                  <h3>{challenge.title}</h3>
                  <div className="challenge-content">
                    <div className="challenge-problem">
                      <h4>Problem</h4>
                      <p>{challenge.description}</p>
                    </div>
                    <div className="challenge-solution">
                      <h4>Solution</h4>
                      <p>{challenge.solution}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="case-study-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            {study.features.map((feature, index) => (
              <Card key={index} variant="bordered">
                <CardBody>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Journey Path - Only for CRM InfoVision */}
      {id === "crm-infovision" && (
        <section className="crm-journey-section" ref={journeyRef}>
          <div className="container">
            <h2 className="text-center">Development Journey</h2>
            <p className="crm-journey-subtitle text-center">
              From concept to production - building an enterprise CRM system
            </p>

            <div className="crm-journey-path">
              {/* Step 1 */}
              <div className="journey-step journey-step--left">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">01</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Project Foundation</h3>
                  <p>
                    Set up monorepo structure with Next.js frontend and NestJS
                    backend. Configured TypeScript strict mode, ESLint, and
                    Prettier for code quality.
                  </p>
                  <div className="journey-tags">
                    <span>TypeScript 95.1%</span>
                    <span>Next.js 14</span>
                    <span>NestJS 10</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="journey-step journey-step--right">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">02</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Authentication System</h3>
                  <p>
                    Implemented JWT-based authentication with refresh tokens,
                    role-based access control (RBAC), and secure password
                    hashing using bcrypt.
                  </p>
                  <div className="journey-tags">
                    <span>JWT</span>
                    <span>Bcrypt</span>
                    <span>RBAC</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="journey-step journey-step--left">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">03</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Workspace Management</h3>
                  <p>
                    Built multi-workspace architecture with team collaboration
                    features. Users can create, manage, and switch between
                    workspaces with different permission levels.
                  </p>
                  <div className="journey-tags">
                    <span>Multi-tenancy</span>
                    <span>Permissions</span>
                    <span>Teams</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="journey-step journey-step--right">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">04</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Deals Pipeline System</h3>
                  <p>
                    Created visual pipeline with 4 stages: LEAD → MEETING →
                    NEGOTIATION → CLOSED. Features drag-and-drop, lead scoring,
                    and inline editing with colored status indicators.
                  </p>
                  <div className="journey-tags">
                    <span>4 Stages</span>
                    <span>Drag & Drop</span>
                    <span>Lead Scoring</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="journey-step journey-step--left">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">05</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Contact Management</h3>
                  <p>
                    Comprehensive contact system with detailed profiles,
                    interaction history, notes, tags, and relationship mapping
                    between contacts and deals.
                  </p>
                  <div className="journey-tags">
                    <span>Profiles</span>
                    <span>History</span>
                    <span>Notes & Tags</span>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="journey-step journey-step--right">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">06</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Analytics Dashboard</h3>
                  <p>
                    Real-time analytics with conversion funnels, revenue
                    tracking, team performance metrics, and customizable date
                    range filters.
                  </p>
                  <div className="journey-tags">
                    <span>Real-time</span>
                    <span>Charts</span>
                    <span>Metrics</span>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="journey-step journey-step--left">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">07</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Database Architecture</h3>
                  <p>
                    PostgreSQL database with optimized schemas, indexes for
                    performance, foreign key constraints, and TypeORM for
                    type-safe queries.
                  </p>
                  <div className="journey-tags">
                    <span>PostgreSQL</span>
                    <span>TypeORM</span>
                    <span>Migrations</span>
                  </div>
                </div>
              </div>

              {/* Step 8 */}
              <div className="journey-step journey-step--right">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">08</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Docker Containerization</h3>
                  <p>
                    Full containerization with multi-stage builds for frontend,
                    backend, and PostgreSQL. Optimized layer caching reduced
                    build times by 60%.
                  </p>
                  <div className="journey-tags">
                    <span>Multi-stage</span>
                    <span>Docker Compose</span>
                    <span>Optimized</span>
                  </div>
                </div>
              </div>

              {/* Step 9 */}
              <div className="journey-step journey-step--left">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">09</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>CI/CD Pipeline</h3>
                  <p>
                    GitHub Actions for automated testing, linting, and
                    deployment. Terraform for infrastructure as code with
                    environment-based configurations.
                  </p>
                  <div className="journey-tags">
                    <span>GitHub Actions</span>
                    <span>Terraform</span>
                    <span>Auto Deploy</span>
                  </div>
                </div>
              </div>

              {/* Step 10 */}
              <div className="journey-step journey-step--right">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">10</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Production Ready</h3>
                  <p>
                    Completed with 33+ commits, comprehensive error handling,
                    logging, monitoring, and production environment
                    configurations.
                  </p>
                  <div className="journey-tags">
                    <span>33+ Commits</span>
                    <span>Monitoring</span>
                    <span>Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* NivasSetu Journey Path - Only for NivasSetu */}
      {id === "nivassetu" && (
        <section className="crm-journey-section" ref={journeyRef}>
          <div className="container">
            <h2 className="text-center">Development Journey</h2>
            <p className="crm-journey-subtitle text-center">
              Direct connection and trust - building NivasSetu
            </p>

            <div className="crm-journey-path">
              {/* Step 1 */}
              <div className="journey-step journey-step--left">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">01</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Solution & Schema Design</h3>
                  <p>
                    Mapped user flows and designed the database schema in PostgreSQL.
                    Created relational schemas separating landlords, tenants, listings, and verification tokens.
                  </p>
                  <div className="journey-tags">
                    <span>Database Design</span>
                    <span>PostgreSQL</span>
                    <span>Direct Rent</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="journey-step journey-step--right">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">02</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Aadhaar KYC Setup</h3>
                  <p>
                    Integrated Aadhaar KYC API verification to ensure authenticity of listings.
                    Created backend verification services in NestJS to validate identity documents.
                  </p>
                  <div className="journey-tags">
                    <span>NestJS</span>
                    <span>KYC API</span>
                    <span>Security</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="journey-step journey-step--left">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">03</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>Google Maps API Integration</h3>
                  <p>
                    Implemented spatial geocoding and real-time interactive search.
                    Created marker overlays and custom clustering options for smooth performance.
                  </p>
                  <div className="journey-tags">
                    <span>Google Maps API</span>
                    <span>Spatial Search</span>
                    <span>Geocoding</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="journey-step journey-step--right">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">04</span>
                    <div className="journey-icon"></div>
                  </div>
                  <h3>VPS Deployment</h3>
                  <p>
                    Deployed NestJS backend and React frontend onto a secure Virtual Private Server (VPS).
                    Configured Nginx reverse proxy, SSL certificates, and PM2 process monitoring.
                  </p>
                  <div className="journey-tags">
                    <span>VPS Deployment</span>
                    <span>Nginx & SSL</span>
                    <span>PM2 Runner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Outcomes Section */}
      <section className="case-study-section case-study-section--alt">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcomes-column">
              <h2>Outcomes</h2>
              <ul className="outcomes-list">
                {study.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="outcomes-column">
              <h2>Learnings</h2>
              <ul className="outcomes-list">
                {study.learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-study-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in working together?</h2>
            <p>Let's discuss how I can help bring your project to life.</p>
            <div className="cta-actions">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get In Touch
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" size="lg">
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
