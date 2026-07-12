import React,{useMemo,useState} from "react";
import { Link,useParams } from "react-router-dom";
import { blogPosts } from "../utils/blogData";
import { ArticlePlayer } from "../components/ArticlePlayer";
import { FaArrowLeft,FaArrowRight,FaCalendarAlt,FaClock,FaSearch,FaUser } from "react-icons/fa";
import "./Blog.css";

const categories=["All","Web Development","Mobile Apps","Flutter","SEO","AI","Business","Cloud","Case Studies"];

export const Blog:React.FC=()=>{
 const {slug}=useParams<{slug:string}>();const [category,setCategory]=useState("All");const [query,setQuery]=useState("");
 const active=slug?blogPosts.find(post=>post.slug===slug):undefined;
 const filtered=useMemo(()=>blogPosts.filter(post=>(category==="All"||post.category===category)&&`${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
 if(active){const related=blogPosts.filter(post=>post.slug!==active.slug).slice(0,3);return <main className="iv-article">
  <header className="iv-article__hero"><div className="container"><Link to="/blog" className="iv-article__back"><FaArrowLeft/>Insights</Link><div className="iv-article__heading"><div><span className="iv-article__category">{active.category}</span><h1>{active.title}</h1><p>{active.excerpt}</p></div><div className="iv-article__meta"><span><FaCalendarAlt/>{active.publishDate}</span><span><FaClock/>{active.readTime}</span><span><FaUser/>{active.author.name}</span></div></div></div></header>
  <div className="container iv-article__layout"><article><ArticlePlayer slug={active.slug}/><div className="iv-article__content" dangerouslySetInnerHTML={{__html:active.content}}/></article><aside><div className="iv-article__author"><small>Written by</small><span>{active.author.name.charAt(0)}</span><strong>{active.author.name}</strong><p>{active.author.role}</p></div><div className="iv-article__related"><small>Continue reading</small>{related.map(post=><Link to={`/blog/${post.slug}`} key={post.slug}><span>{post.category}</span><strong>{post.title}</strong><FaArrowRight/></Link>)}</div><div className="iv-article__cta"><small>BUILD WITH US</small><strong>Turn the next complex idea into a working system.</strong><Link to="/contact">Start a project <FaArrowRight/></Link></div></aside></div>
 </main>}
 const featured=filtered[0]||blogPosts[0];const rest=filtered.filter(post=>post.slug!==featured?.slug);
 return <main className="iv-blog"><section className="iv-blog__hero"><div className="container iv-blog__hero-grid"><div><span className="iv-kicker">InfoVision field notes</span><h1>Engineering ideas<br/><em>worth shipping.</em></h1><p>Architecture, AI systems, product engineering and technical growth—written from the workbench, not the sidelines.</p></div><div className="iv-blog__signal" aria-hidden="true"><div className="signal-grid"/><span className="signal-node n1"/><span className="signal-node n2"/><span className="signal-node n3"/><strong>IV / KNOWLEDGE GRAPH</strong><small>Systems · Product · Growth</small></div></div></section>
 <section className="iv-blog__library"><div className="container"><div className="iv-blog__controls"><div>{categories.map(item=><button key={item} className={category===item?"active":""} onClick={()=>setCategory(item)}>{item}</button>)}</div><label><FaSearch/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search field notes"/></label></div>
 {featured&&<Link to={`/blog/${featured.slug}`} className="iv-blog__featured"><div><span>{featured.category}</span><h2>{featured.title}</h2><p>{featured.excerpt}</p><small>{featured.publishDate} · {featured.readTime}</small></div><div className="featured-index"><span>FEATURED / 01</span><FaArrowRight/></div></Link>}
 <div className="iv-blog__grid">{rest.map((post,index)=><Link to={`/blog/${post.slug}`} className="iv-blog__card" key={post.slug}><div className="card-index">{String(index+2).padStart(2,"0")}</div><span>{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><footer><small>{post.publishDate} · {post.readTime}</small><FaArrowRight/></footer></Link>)}</div>{filtered.length===0&&<div className="iv-blog__empty">No field notes match this search.</div>}</div></section></main>
};
