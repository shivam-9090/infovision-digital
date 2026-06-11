import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, BlogPost } from "../utils/blogData";
import { Card, CardBody } from "../components/Card";
import { Button } from "../components/Button";
import { BlogHeroVisual } from "../components/BlogHeroVisual";
import { ArticlePlayer } from "../components/ArticlePlayer";
import { FaCalendarAlt, FaClock, FaUser, FaSearch } from "react-icons/fa";
import "./Blog.css";

export const Blog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activePost = slug ? blogPosts.find(p => p.slug === slug) : undefined;

  const categories = ["All", "Web Development", "Mobile Apps", "Flutter", "SEO", "AI", "Business", "Cloud", "Case Studies"];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug);

  // 1. Detailed Blog Post View
  if (activePost) {
    return (
      <main className="blog-page">
        <div className="container" style={{ maxWidth: "800px", padding: "8rem 1.5rem 5rem" }}>
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          
          <article className="blog-post__article" style={{ marginTop: "2rem" }}>
            <span className="blog-card__category" style={{ display: "inline-block", marginBottom: "1rem" }}>{activePost.category}</span>
            <h1 className="blog-post__title">{activePost.title}</h1>
            
            {/* Meta details */}
            <div className="blog-post__meta">
              <div className="meta-author">
                <div className="author-avatar">{activePost.author.name.charAt(0)}</div>
                <div>
                  <span className="author-name">{activePost.author.name}</span>
                  <span className="author-role">{activePost.author.role}</span>
                </div>
              </div>
              <div className="meta-details">
                <span className="meta-item"><FaCalendarAlt /> {activePost.publishDate}</span>
                <span className="meta-item"><FaClock /> {activePost.readTime}</span>
              </div>
            </div>

            {/* Audio Player — Medium/Substack style */}
            <ArticlePlayer slug={activePost.slug} />

            <p className="blog-post__excerpt">{activePost.excerpt}</p>

            <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: activePost.content }} />
          </article>

          {/* CRO / Internal linking banner */}
          <Card variant="bordered" className="blog-cta-card" style={{ marginTop: "4rem" }}>
            <CardBody style={{ textAlign: "center", padding: "2.5rem" }}>
              <h3>Partner with InfoVision</h3>
              <p style={{ color: "var(--svc-text-secondary)", maxWidth: "550px", margin: "0.5rem auto 1.5rem", fontSize: "0.95rem" }}>
                We translate complex product requirements into robust, high-performance software. Discuss your web, mobile, or AI goals with us.
              </p>
              <Link to="/contact">
                <Button variant="primary">Start Project Discussion</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </main>
    );
  }

  // 2. Blog List View
  return (
    <main className="blog-page">
      {/* Blog Hero */}
      <section className="blog-hero section">
        <div className="blog-hero__canvas-container">
          <BlogHeroVisual />
        </div>
        <div className="container">
          <span className="location-badge">InfoVision Insights</span>
          <h1>Blog & <span className="text-gradient">Technical Articles</span></h1>
          <p className="blog-hero__subtitle">
            Exploring scalable architectures, modern frontend paradigms, mobile app optimizations, and technical SEO.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="blog-controls section" style={{ padding: "3rem 0 0" }}>
        <div className="container">
          <div className="blog-controls__layout">
            {/* Category selection */}
            <div className="blog-categories">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? "category-btn--active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="blog-search">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section section">
        <div className="container">
          {/* Featured Post (only shown when 'All' is selected and no search query) */}
          {selectedCategory === "All" && searchQuery === "" && featuredPost && (
            <div className="featured-blog-wrapper" style={{ marginBottom: "4rem" }}>
              <Card variant="hover" className="featured-blog-card">
                <CardBody className="featured-blog__body">
                  <div className="featured-blog__content">
                    <span className="blog-card__category">{featuredPost.category}</span>
                    <h2>
                      <Link to={`/blog/${featuredPost.slug}`} style={{ color: "#ffffff", textDecoration: "none" }}>{featuredPost.title}</Link>
                    </h2>
                    <p className="featured-blog__excerpt">{featuredPost.excerpt}</p>
                    <div className="featured-blog__meta">
                      <span><FaCalendarAlt /> {featuredPost.publishDate}</span>
                      <span><FaClock /> {featuredPost.readTime}</span>
                    </div>
                    <div style={{ marginTop: "1.5rem" }}>
                      <Link to={`/blog/${featuredPost.slug}`}>
                        <Button variant="primary">Read Article</Button>
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}

          {/* Posts Grid */}
          <div className="blog-grid">
            {/* Show other filtered posts */}
            {(selectedCategory === "All" && searchQuery === "" ? otherPosts : filteredPosts).map(post => (
              <Card key={post.slug} variant="hover" className="blog-card">
                <CardBody className="blog-card__body">
                  <span className="blog-card__category">{post.category}</span>
                  <h3 className="blog-card__title">
                    <Link to={`/blog/${post.slug}`} style={{ color: "#ffffff", textDecoration: "none" }}>{post.title}</Link>
                  </h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__footer">
                    <div className="blog-card__meta">
                      <span><FaCalendarAlt /> {post.publishDate}</span>
                      <span><FaClock /> {post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="blog-card__readmore">
                      Read More →
                    </Link>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center" style={{ padding: "4rem 0" }}>
              <h3>No articles found</h3>
              <p style={{ color: "var(--svc-text-secondary)" }}>Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
