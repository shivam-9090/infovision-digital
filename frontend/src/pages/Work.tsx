import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";

type Group = "Product" | "AI" | "Experience";
type Project = { id: string; title: string; group: Group; role: string; description: string; tags: string[]; liveUrl: string; tone: string };

const projects: Project[] = [
  { id:"catalstudio", title:"CatalStudio", group:"AI", role:"AI commerce platform", description:"A production studio for generating consistent, multi-angle e-commerce catalog visuals from a single product image.", tags:["React","TypeScript","Generative AI","Cloudflare"], liveUrl:"https://catalstudio.com/", tone:"violet" },
  { id:"nivassetu", title:"NivasSetu", group:"Product", role:"PropTech platform", description:"A zero-brokerage rental product connecting owners and tenants with trusted listings, discovery and direct communication.", tags:["Flutter","NestJS","PostgreSQL","Maps"], liveUrl:"https://nivassetu.com/", tone:"cyan" },
  { id:"crm-infovision", title:"CRM Vision", group:"Product", role:"Business operations", description:"A structured CRM workspace designed around secure access, pipeline visibility and dependable client operations.", tags:["Next.js","NestJS","Postgres","Docker"], liveUrl:"https://crm.infovision.digital/", tone:"lime" },
  { id:"infovision-gpt", title:"InfoVision GPT", group:"AI", role:"Language model research", description:"A transformer model initiative focused on repeatable training checkpoints and structured natural-language workflows.", tags:["PyTorch","Transformers","Python","LLM"], liveUrl:"https://huggingface.co/shivam909067/Infovision-gpt-4.5B", tone:"orange" },
  { id:"image-gen-art", title:"Image Gen Art", group:"AI", role:"Computer vision", description:"A diffusion-based visual model exploring coherent artistic generation and reusable evaluation baselines.", tags:["Diffusion","PyTorch","Vision","Hugging Face"], liveUrl:"https://huggingface.co/shivam909067/Image-gen-art-01", tone:"pink" },
  { id:"trilunafashion", title:"Triluna Fashion", group:"Product", role:"Commerce experience", description:"A responsive fashion storefront focused on fast catalog discovery, product clarity and confident purchase journeys.", tags:["React","Commerce","Responsive UI","Performance"], liveUrl:"https://trilunafashion.com/", tone:"gold" },
  { id:"mclaren-infovision", title:"McLaren Vision", group:"Experience", role:"Interactive 3D web", description:"A cinematic WebGL vehicle experience with camera choreography, responsive controls and real-time materials.", tags:["Three.js","WebGL","GSAP","3D"], liveUrl:"https://mclaren-vision.netlify.app/", tone:"red" },
  { id:"sifera-v1", title:"Sifera V1", group:"AI", role:"Open model baseline", description:"A foundational NLP experiment with structured checkpoints and evaluation workflows for downstream research.", tags:["Deep Learning","NLP","Transformers","Python"], liveUrl:"https://huggingface.co/shivam909067/Sifera-V1", tone:"blue" },
];

const filters: Array<"All" | Group> = ["All", "Product", "AI", "Experience"];

export const Work = () => {
  const [filter, setFilter] = useState<"All" | Group>("All");
  const visible = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.group === filter), [filter]);

  return (
    <main className="iv-work" id="top">
      <section className="iv-work-hero">
        <div className="container iv-work-hero__grid">
          <div><span className="iv-kicker">Selected work · 2024—2026</span><h1>Proof lives in the <em>product.</em></h1></div>
          <div><p>A focused collection of platforms, AI systems, commerce products and interactive experiences built around real technical and business constraints.</p><a href="mailto:vaghanishivam83@gmail.com">Discuss a similar project <span className="iv-arrow">↗</span></a></div>
        </div>
        <div className="iv-work-marquee"><div>{["Strategy","Interface","Systems","Intelligence","Scale","Strategy","Interface","Systems","Intelligence","Scale"].map((item,index)=><span key={`${item}-${index}`}><i>✦</i>{item}</span>)}</div></div>
      </section>

      <section className="iv-work-index section">
        <div className="container">
          <div className="iv-work-toolbar"><span>{String(visible.length).padStart(2,"0")} projects</span><div>{filters.map((item)=><button key={item} className={filter===item?"is-active":""} onClick={()=>setFilter(item)}>{item}</button>)}</div></div>
          <div className="iv-work-grid">
            {visible.map((project,index)=><article className={`iv-work-card iv-work-card--${project.tone}`} key={project.id} data-cursor="view">
              <div className="iv-work-card__meta"><span>{String(index+1).padStart(2,"0")}</span><span>{project.group}</span><span>{project.role}</span></div>
              <div className="iv-work-card__visual"><div className="iv-work-window"><div><i/><i/><i/></div><span/><b/></div></div>
              <div className="iv-work-card__body"><div><small>{project.tags.join(" · ")}</small><h2>{project.title}</h2><p>{project.description}</p></div><div className="iv-work-card__actions"><Link to={`/case-study/${project.id}`}>Case study <span className="iv-arrow">↗</span></Link><a href={project.liveUrl} target="_blank" rel="noreferrer">Live product <span className="iv-arrow">↗</span></a></div></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="iv-work-cta"><div className="container"><span className="iv-kicker">Next case study</span><h2>Your product<br />could be <em>here.</em></h2><Link to="/contact" className="iv-btn iv-btn--light">Build with InfoVision <span className="iv-arrow">↗</span></Link></div></section>
    </main>
  );
};
