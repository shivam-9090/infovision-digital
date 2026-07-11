import { Link } from "react-router-dom";
import "./About.css";

const principles = [
  ["01", "Clarity over theatre", "Simple communication, visible decisions and honest technical trade-offs."],
  ["02", "Value over volume", "The goal is not more features. It is the smallest complete system that creates meaningful value."],
  ["03", "Production is the product", "Performance, security, monitoring and maintainability are part of the build, not optional polish."],
  ["04", "Stay curious", "The technology changes quickly. The discipline is learning without losing focus on the user."],
];

const disciplines = ["Product strategy", "UI/UX systems", "Full-stack engineering", "Mobile development", "Applied AI", "Computer vision", "Cloud infrastructure", "Technical SEO"];

export const About = () => (
  <main className="iv-about" id="top">
    <section className="iv-about-hero">
      <div className="container iv-about-hero__grid">
        <div><span className="iv-kicker">About InfoVision</span><h1>Small team energy.<br /><em>Serious systems.</em></h1></div>
        <div><p>InfoVision is an independent software engineering studio founded in Surat, India. We combine product judgment, thoughtful interfaces and strong technical execution to build software people can trust.</p><Link to="/contact">Work with the studio <span className="iv-arrow">↗</span></Link></div>
      </div>
      <div className="container iv-about-signal"><span>Independent</span><i/><span>Product-minded</span><i/><span>AI-native</span><i/><span>Global delivery</span></div>
    </section>

    <section className="iv-about-story section">
      <div className="container iv-about-story__grid">
        <span className="iv-kicker">Why we exist</span>
        <div><h2>Software should create leverage, not another layer of <em>friction.</em></h2><p>Too many products are slowed down by fragmented teams, unnecessary complexity and decisions made far away from the people doing the work. InfoVision was built around a simpler model: understand the outcome deeply, keep communication direct, and engineer the whole experience as one connected system.</p><p>That approach works whether the product is an early MVP, a customer-facing platform, an internal workflow or an AI capability being introduced into an existing business.</p></div>
      </div>
    </section>

    <section className="iv-founder">
      <div className="container iv-founder__grid">
        <div className="iv-founder__portrait"><div className="iv-founder__halo"/><img src="https://avatars.githubusercontent.com/u/173567273?v=4" alt="Shivam Vaghani, founder of InfoVision Digital"/><span>Surat, India</span></div>
        <div className="iv-founder__copy"><span className="iv-kicker">Founder-led engineering</span><h2>Built by someone who stays close to the <em>work.</em></h2><p>InfoVision is led by Shivam Vaghani, an AI/ML engineer and full-stack developer working across product design, intelligent systems, mobile platforms and production infrastructure.</p><p>Founder-led does not mean doing everything alone. It means senior technical context stays present from the first conversation through launch, without being filtered through layers of sales and account management.</p><div><a href="https://github.com/shivam-9090" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/shivam-vaghani-024190371" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </div>
    </section>

    <section className="iv-disciplines section">
      <div className="container"><div className="iv-about-heading"><span className="iv-kicker">Capabilities</span><h2>Broad enough to connect the system.<br /><em>Focused enough to ship it.</em></h2></div><div className="iv-disciplines__grid">{disciplines.map((item,index)=><article key={item}><span>{String(index+1).padStart(2,"0")}</span><h3>{item}</h3><i>↗</i></article>)}</div></div>
    </section>

    <section className="iv-values section">
      <div className="container iv-values__layout"><div><span className="iv-kicker">How we think</span><h2>Principles before <em>process.</em></h2></div><div className="iv-values__list">{principles.map(([n,title,copy])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
    </section>

    <section className="iv-about-cta"><div className="container"><span className="iv-kicker">Good fit?</span><h2>Bring the hard problem.<br /><em>We’ll bring the clarity.</em></h2><Link to="/contact" className="iv-btn iv-btn--light">Start a conversation <span className="iv-arrow">↗</span></Link></div></section>
  </main>
);
