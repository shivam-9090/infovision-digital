import { FormEvent, useState } from "react";
import "./Contact.css";

const emailAddress = "vaghanishivam83@gmail.com";

export const Contact = () => {
  const [form, setForm] = useState({ name:"", email:"", company:"", service:"Web platform", brief:"" });
  const [opened, setOpened] = useState(false);

  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}${form.company ? ` · ${form.company}` : ""}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "Not provided"}\nProject type: ${form.service}\n\nProject brief:\n${form.brief}`);
    setOpened(true);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="iv-contact" id="top">
      <section className="iv-contact-hero">
        <div className="container iv-contact-hero__grid">
          <div><span className="iv-kicker">Start a conversation</span><h1>Let’s build what<br /><em>should exist next.</em></h1></div>
          <div><p>Tell us what you are trying to change, where the product stands today and what a successful outcome looks like. We will respond with clear next steps, not a generic sales sequence.</p><a href={`mailto:${emailAddress}`}>{emailAddress} <span className="iv-arrow">↗</span></a></div>
        </div>
        <div className="container iv-contact-hero__status"><span><i/> Open for selected projects</span><span>Typical response · within one working day</span><span>Surat · India · Remote worldwide</span></div>
      </section>

      <section className="iv-contact-main section">
        <div className="container iv-contact-main__grid">
          <aside>
            <span className="iv-kicker">A useful first message</span>
            <h2>Give us enough context to start <em>thinking.</em></h2>
            <div className="iv-contact-notes">
              <article><span>01</span><div><h3>The problem</h3><p>What is slow, unclear, expensive or currently impossible?</p></div></article>
              <article><span>02</span><div><h3>The current stage</h3><p>Idea, design, existing product, live users or a system that needs repair?</p></div></article>
              <article><span>03</span><div><h3>The desired outcome</h3><p>What should be measurably better after we work together?</p></div></article>
            </div>
          </aside>

          <form className="iv-contact-form" onSubmit={submit}>
            <div className="iv-contact-form__top"><span>Project inquiry</span><span>Required fields *</span></div>
            <div className="iv-field-row"><label><span>Your name *</span><input required value={form.name} onChange={(event)=>update("name",event.target.value)} placeholder="Shivam Vaghani" /></label><label><span>Email address *</span><input type="email" required value={form.email} onChange={(event)=>update("email",event.target.value)} placeholder="you@company.com" /></label></div>
            <div className="iv-field-row"><label><span>Company</span><input value={form.company} onChange={(event)=>update("company",event.target.value)} placeholder="Company or product name" /></label><label><span>What are we building? *</span><select required value={form.service} onChange={(event)=>update("service",event.target.value)}><option>Web platform</option><option>Mobile application</option><option>AI or automation system</option><option>Product redesign</option><option>Cloud or backend system</option><option>Something else</option></select></label></div>
            <label className="iv-field-full"><span>Tell us about the project *</span><textarea required minLength={20} value={form.brief} onChange={(event)=>update("brief",event.target.value)} placeholder="The problem, current stage, important features, timeline or anything else that gives useful context." /></label>
            <div className="iv-contact-form__bottom"><p>This frontend form opens your email application with the project information prepared. Nothing is stored on this website.</p><button type="submit">Prepare email <span className="iv-arrow">↗</span></button></div>
            {opened && <div className="iv-contact-form__notice" role="status">Your email application should now be open. If it did not open, email us directly at <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.</div>}
          </form>
        </div>
      </section>

      <section className="iv-contact-details">
        <div className="container iv-contact-details__grid">
          <article><span>Email</span><a href={`mailto:${emailAddress}`}>{emailAddress} ↗</a><p>Best for project inquiries, partnerships and support.</p></article>
          <article><span>Location</span><h3>Surat, Gujarat</h3><p>Working remotely with teams across India and worldwide.</p></article>
          <article><span>Good fit</span><h3>Products with purpose</h3><p>We do our best work where thoughtful engineering creates real business leverage.</p></article>
        </div>
      </section>

      <section className="iv-contact-close"><div className="container"><p>No pitch deck required.</p><h2>A clear problem is<br />a good place to <em>start.</em></h2><a href={`mailto:${emailAddress}`} className="iv-btn iv-btn--light">Email InfoVision <span className="iv-arrow">↗</span></a></div></section>
    </main>
  );
};
