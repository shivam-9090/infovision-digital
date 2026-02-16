import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardBody } from "../components/Card";
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
  exora: {
    id: "exora",
    title: "Exora",
    tagline: "Modern e-commerce platform for handmade botanicals",
    description:
      "Full-featured e-commerce website for handmade flowers and botanical products.",
    heroImage: "",
    liveUrl: "https://exorav.netlify.app",
    category: "E-commerce Platform",
    role: "Full Stack Developer",
    timeline: "2+ months",
    techStack: [
      "React",
      "JavaScript",
      "CSS3",
      "E-commerce",
      "Netlify",
      "Responsive Design",
    ],
    overview:
      "Exora is a modern e-commerce platform specializing in handmade flowers and botanical products. The website features a comprehensive product catalog, shopping cart functionality, category filtering, and a seamless checkout experience. Built with React and deployed on Netlify, the platform offers a beautiful, responsive design that showcases handcrafted botanicals designed to bring everlasting beauty to any space. The site includes product pages, collection browsing, about section, FAQ, and contact information with physical store details in Surat.",
    challenges: [
      {
        title: "Product Catalog Management",
        description:
          "Building an intuitive product browsing experience with filtering, categories, and sale items.",
        solution:
          "Implemented dynamic product catalog with category navigation, sale filters, and responsive grid layouts for optimal product showcase.",
      },
      {
        title: "Shopping Cart Experience",
        description:
          "Creating a smooth add-to-cart and checkout flow with proper state management.",
        solution:
          "Built cart functionality with React state management, persistent storage, and clear visual feedback for user actions.",
      },
      {
        title: "Responsive E-commerce Design",
        description:
          "Ensuring product images and layouts work perfectly across all device sizes.",
        solution:
          "Developed mobile-first responsive design with optimized images, touch-friendly controls, and adaptive layouts for tablets and desktops.",
      },
    ],
    features: [
      {
        title: "Product Catalog",
        description:
          "Browse extensive collection of handmade flowers and botanical products with detailed descriptions and pricing.",
      },
      {
        title: "Category Navigation",
        description:
          "Organized product categories for easy browsing and discovery of specific botanical items.",
      },
      {
        title: "Shopping Cart",
        description:
          "Add products to cart, manage quantities, and proceed to checkout with a smooth user flow.",
      },
      {
        title: "Sale Section",
        description:
          "Dedicated sale page showcasing discounted items with clear pricing and promotions.",
      },
      {
        title: "Store Information",
        description:
          "Physical store location (C-41, Sumeru City Mall, Surat), hours (Mon-Sat: 9am-6pm), and contact details (+91 78618 86462).",
      },
      {
        title: "Responsive Design",
        description:
          "Fully responsive layout optimized for mobile, tablet, and desktop shopping experiences.",
      },
    ],
    metrics: [
      { label: "Type", value: "E-commerce" },
      { label: "Status", value: "Live" },
      { label: "Platform", value: "Netlify" },
    ],
    outcomes: [
      "Launched full-featured e-commerce platform for handmade botanical products",
      "Implemented product catalog with categories, filtering, and sale functionality",
      "Created seamless shopping cart and checkout experience",
      "Deployed responsive design optimized for all devices",
      "Integrated store location and contact information for customer engagement",
    ],
    learnings: [
      "E-commerce UX requires careful attention to product browsing and cart flows",
      "Responsive design critical for mobile shopping experiences",
      "Clear product imagery and descriptions drive customer engagement",
      "Netlify deployment excellent for static e-commerce frontends",
      "Category organization improves product discoverability",
    ],
  },
  appexorbit: {
    id: "appexorbit",
    title: "Appexorbit",
    tagline: "Cross-platform mobile app with Expo & Firebase",
    description:
      "Production-ready mobile application built with React Native and TypeScript.",
    heroImage: "",
    liveUrl: "#apk",
    category: "Mobile Application",
    role: "Mobile Developer",
    timeline: "2+ months (7 commits)",
    techStack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Firebase Storage",
      "Material Design 3",
      "EAS Build",
    ],
    overview:
      "Appexorbit is a cross-platform mobile application built with Expo and React Native, featuring 97.3% TypeScript coverage. The app leverages Firebase ecosystem for authentication, real-time database with Firestore, and cloud storage for media files. Built with Material Design 3 principles, it provides a modern, native-feeling UI across Android and iOS platforms. The project includes custom hooks for state management, service layers for Firebase operations, and comprehensive documentation for features like saved login, global image system, and Firebase index optimization.",
    challenges: [
      {
        title: "Firebase Integration",
        description:
          "Integrating multiple Firebase services (Auth, Firestore, Storage) while maintaining type safety and handling real-time updates.",
        solution:
          "Created dedicated service layers (services/) with TypeScript interfaces, implemented custom hooks (hooks/) for Firebase operations, and documented index optimization strategies in FIREBASE_INDEX_FIX.md.",
      },
      {
        title: "Cross-Platform Consistency",
        description:
          "Ensuring consistent user experience and native performance across Android and iOS with different screen sizes and platform conventions.",
        solution:
          "Used Expo's platform-specific extensions, Material Design 3 adaptive components, and EAS Build for platform-optimized builds. Implemented responsive layouts with React Native's Dimensions API.",
      },
      {
        title: "Persistent Authentication",
        description:
          "Implementing secure saved login feature with token refresh and session management.",
        solution:
          "Built custom saved login system (documented in SAVED_LOGIN_FEATURE.md) using secure storage, Firebase token refresh, and automatic session restoration on app launch.",
      },
    ],
    features: [
      {
        title: "Firebase Authentication",
        description:
          "Complete auth system with email/password, Google Sign-In, saved login feature, and automatic token refresh for seamless user experience.",
      },
      {
        title: "Real-time Database",
        description:
          "Firestore integration with live data synchronization, optimized queries with compound indexes, and offline persistence support.",
      },
      {
        title: "Cloud Storage",
        description:
          "Global image system for uploading, storing, and retrieving media files from Firebase Storage with progress tracking and error handling.",
      },
      {
        title: "Material Design 3",
        description:
          "Modern UI with Material You components, dynamic color theming, adaptive layouts, and smooth animations for native app feel.",
      },
      {
        title: "TypeScript Architecture",
        description:
          "97.3% TypeScript coverage with strict type checking, custom hooks, service patterns, and comprehensive interfaces for all data models.",
      },
      {
        title: "EAS Build System",
        description:
          "Expo Application Services for cloud-based builds, OTA updates, and production-ready APK/IPA generation with custom build profiles.",
      },
    ],
    metrics: [
      { label: "TypeScript", value: "97.3%" },
      { label: "Platform", value: "Android" },
      { label: "Commits", value: "7+" },
    ],
    outcomes: [
      "Built production-ready mobile app with 97.3% TypeScript coverage",
      "Integrated complete Firebase ecosystem (Auth, Firestore, Storage)",
      "Implemented Material Design 3 with adaptive UI for both platforms",
      "Created comprehensive documentation for key features and optimizations",
      "Generated APK builds using EAS Build with platform-specific configurations",
    ],
    learnings: [
      "Expo dramatically simplifies React Native development and deployment",
      "Firebase services provide excellent backend infrastructure for mobile apps",
      "TypeScript type safety crucial for maintaining large React Native codebases",
      "Material Design 3 guidelines ensure consistent cross-platform UX",
      "Documentation essential for complex features like auth and storage",
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
    // For CRM Vision and Appexorbit: reveal journey steps as they scroll into view
    if ((id !== "crm-vision" && id !== "appexorbit") || !journeyRef.current)
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
          <div className="case-study-hero__content">
            <div className="case-study-hero__icon">{study.heroImage}</div>
            <span className="case-study-hero__category">{study.category}</span>
            <h1 className="case-study-hero__title">{study.title}</h1>
            <p className="case-study-hero__tagline">{study.tagline}</p>
            <div className="case-study-hero__actions">
              {study.liveUrl === "#apk" ? (
                <a href="/app-release.apk" download="appexorbit.apk">
                  <Button variant="primary" size="lg">
                    Download APK
                  </Button>
                </a>
              ) : study.liveUrl !== "#" ? (
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

      {/* CRM Journey Path - Only for CRM Vision */}
      {id === "crm-vision" && (
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

      {/* Appexorbit Journey Path - Only for Appexorbit */}
      {id === "appexorbit" && (
        <section className="crm-journey-section" ref={journeyRef}>
          <div className="container">
            <h2 className="text-center">Development Journey</h2>
            <p className="crm-journey-subtitle text-center">
              Building a cross-platform mobile app with Expo and Firebase
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
                  <h3>Expo Setup</h3>
                  <p>
                    Initialized Expo project with TypeScript template.
                    Configured EAS Build, set up directory structure with
                    components, services, and hooks folders.
                  </p>
                  <div className="journey-tags">
                    <span>TypeScript 97.3%</span>
                    <span>Expo SDK</span>
                    <span>EAS Build</span>
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
                  <h3>Firebase Integration</h3>
                  <p>
                    Integrated Firebase SDK with Authentication, Firestore, and
                    Storage. Created firebase.ts with TypeScript interfaces and
                    initialized Firebase services.
                  </p>
                  <div className="journey-tags">
                    <span>Firebase Auth</span>
                    <span>Firestore</span>
                    <span>Storage</span>
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
                  <h3>Authentication System</h3>
                  <p>
                    Built complete auth with email/password, Google Sign-In, and
                    saved login feature. Implemented secure token storage and
                    automatic session restoration.
                  </p>
                  <div className="journey-tags">
                    <span>Email Auth</span>
                    <span>Google OAuth</span>
                    <span>Saved Login</span>
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
                  <h3>Firestore Database</h3>
                  <p>
                    Designed Firestore schema with collections and documents.
                    Implemented real-time listeners, optimized compound indexes,
                    and offline persistence.
                  </p>
                  <div className="journey-tags">
                    <span>Real-time</span>
                    <span>Indexes</span>
                    <span>Offline</span>
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
                  <h3>Global Image System</h3>
                  <p>
                    Created universal image upload/download system with Firebase
                    Storage. Features progress tracking, error handling, and
                    optimized image compression.
                  </p>
                  <div className="journey-tags">
                    <span>Upload</span>
                    <span>Download</span>
                    <span>Compression</span>
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
                  <h3>Material Design 3</h3>
                  <p>
                    Implemented Material You components with dynamic color
                    theming, adaptive layouts, and platform-specific navigation
                    patterns for iOS and Android.
                  </p>
                  <div className="journey-tags">
                    <span>Material You</span>
                    <span>Theming</span>
                    <span>Adaptive</span>
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
                  <h3>Custom Hooks</h3>
                  <p>
                    Built reusable hooks for Firebase operations, auth state,
                    and data fetching. Created custom hooks directory with
                    TypeScript generics for type safety.
                  </p>
                  <div className="journey-tags">
                    <span>React Hooks</span>
                    <span>TypeScript</span>
                    <span>Reusable</span>
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
                  <h3>Android Build</h3>
                  <p>
                    Configured Android-specific settings in android/ directory
                    with Kotlin 1.5%. Set up build.gradle, AndroidManifest.xml,
                    and native module integration.
                  </p>
                  <div className="journey-tags">
                    <span>Android</span>
                    <span>Kotlin 1.5%</span>
                    <span>Native</span>
                  </div>
                </div>
              </div>

              {/* Step 9 */}
              <div className="journey-step journey-step--left">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">09</span>
                    <div className="journey-icon">📝</div>
                  </div>
                  <h3>Documentation</h3>
                  <p>
                    Created comprehensive docs: SAVED_LOGIN_FEATURE.md,
                    GLOBAL_IMAGE_SYSTEM.md, and FIREBASE_INDEX_FIX.md for
                    feature implementation and optimization.
                  </p>
                  <div className="journey-tags">
                    <span>Markdown</span>
                    <span>Features</span>
                    <span>Guides</span>
                  </div>
                </div>
              </div>

              {/* Step 10 */}
              <div className="journey-step journey-step--right">
                <div className="journey-connector"></div>
                <div className="journey-card">
                  <div className="journey-header">
                    <span className="journey-number">10</span>
                    <div className="journey-icon">✨</div>
                  </div>
                  <h3>Production Build</h3>
                  <p>
                    Generated production APK using EAS Build with
                    platform-specific configurations. Completed with 7+ commits
                    and full Firebase integration.
                  </p>
                  <div className="journey-tags">
                    <span>EAS Build</span>
                    <span>APK</span>
                    <span>Production</span>
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
