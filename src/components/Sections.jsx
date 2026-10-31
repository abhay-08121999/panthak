import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { stats, services, steps, benefits, industries, numbers, faqs } from '../data/content.js';

function Counter({ n, s }) {
  const ref = useRef(null);
  const [v, setV] = useState(n);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setV(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min((t - t0) / 1400, 1);
        setV(Math.round(n * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [n]);
  return <strong ref={ref}>{v}{s}</strong>;
}

export function Intro() {
  return (
    <section className="intro">
      <div className="wrap intro-grid">
        <div>
          <p>Whether you need hands-on support in Ahmedabad, or a technology partner anywhere in India, the team stays accountable from strategy through execution.</p>
          <p>Our commitment to excellence and a customer-centric approach has made us a trusted consulting partner for businesses across India and worldwide.</p>
          <Link className="btn btn-ghost" to="/about">Find Out More</Link>
        </div>
        <dl className="stats">
          {stats.map((x) => (<div key={x.l}><dt><Counter n={x.n} s={x.s} /></dt><dd>{x.l}</dd></div>))}
        </dl>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="split-head">
          <h2>Professional Services That Solve Real Business Problems</h2>
          <p>From social media management and digital marketing to HR, GST compliance, and custom software, here is where Pune and Ahmedabad businesses lean on us most. Clear solutions for complex, everyday challenges.</p>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <article className="svc" key={s.t}>
              <i className="mark" aria-hidden="true" />
              <h3>{s.t}</h3>
              <p>{s.p}</p>
              <Link className="text-link" to={s.to}>{s.cta}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <h2>The PBS Business Consulting Process</h2>
        <ol className="steps">
          {steps.map((s) => (<li key={s.t}><h3>{s.t}</h3><p>{s.p}</p></li>))}
        </ol>
        <div className="process-cta">
          <h3>Ready to Start Your PBS Journey?</h3>
          <p>Book a free strategy call and discover how our proven PBS process can transform your business.</p>
          <Link className="btn btn-light" to="/contact">Book Your Strategy Call</Link>
        </div>
      </div>
    </section>
  );
}

export function Transformation() {
  return (
    <section className="section">
      <div className="wrap trans">
        <div>
          <h2>Digital Transformation &amp; Innovation Enablement</h2>
          <p>Our digital transformation services modernize how your business runs, from the tools your team uses daily to the systems behind the scenes. We combine emerging technology with deep operational experience so your operations become faster, easier, and easier to scale, whether you need a consulting engagement alongside us or coming to us purely for the technology.</p>
          <p>From legacy system upgrades to intelligent automation, we deliver digital solutions built around measurable outcomes, not buzzwords.</p>
          <Link className="btn btn-solid" to="/services">Find Out More</Link>
        </div>
        <aside className="benefits">
          <img className="photo" src="/images/workspace.jpg" alt="Two colleagues talking in a modern office with city views" width="780" height="492" loading="lazy" />
          <h3>Key Benefits of Our Digital Transformation Services</h3>
          <ul>{benefits.map((b) => <li key={b}>{b}</li>)}</ul>
        </aside>
      </div>
    </section>
  );
}

export function Banner() {
  return (
    <section className="banner">
      <div className="wrap banner-in">
        <div>
          <h2>Ready to Build What Comes Next?</h2>
          <p>Let&rsquo;s work together to turn your ideas into successful, profitable solutions. Whether you need strategy, technology, or operational improvements, we&rsquo;re here to make it happen. Start the conversation today and see how we can accelerate your growth.</p>
        </div>
        <div className="banner-side">
          <div className="banner-btns">
            <Link className="btn btn-light" to="/services">View Our Services</Link>
            <Link className="btn btn-accent" to="/contact">Let&rsquo;s Get Started</Link>
          </div>
          <p>Join 20+ years of proven expertise &bull; Trusted by businesses across 10+ industries</p>
        </div>
      </div>
    </section>
  );
}

const founders = [
  { img: '/images/founder-atul.jpg', name: 'Atul Pandey', role: 'Founder and CEO' },
  { img: '/images/founder-jyoti.jpg', name: 'Dr. Jyoti Pathak', role: 'Co-Founder and COO' },
];

export function Founders() {
  const hide = (e) => { e.currentTarget.style.display = 'none'; };
  return (
    <section className="section founders">
      <div className="wrap">
        <span className="badge">Our Story</span>
        <h2>From the Desk of the Founders</h2>
        <div className="founders-in">
          <div className="portraits">
            {founders.map((f) => (
              <figure key={f.name}>
                <img src={f.img} alt={f.name} width="320" height="400" loading="lazy" onError={hide} />
                <figcaption><strong>{f.name}</strong><span>{f.role}</span></figcaption>
              </figure>
            ))}
          </div>
          <blockquote>
            <p>We started <strong className="pn">Panthak</strong> Business Solutions with a simple belief: businesses deserve better than cookie-cutter consulting. Too many companies get lost in jargon and theoretical frameworks that look great on slides but fall flat in practice. We&rsquo;re here to change that. Our approach is straightforward: understand your actual challenges, build practical solutions, and stick around to make sure they work. Real expertise applied to real problems. We built this firm in Ahmedabad, grew it into Pune, and designed it to work just as well for a business anywhere else in India or the world.</p>
            <footer><strong>Atul Pandey &amp; Dr. Jyoti Pathak</strong><span>Founders, Panthak</span></footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section why">
      <div className="wrap">
        <span className="badge">Why Panthak</span>
        <h2>Why Businesses in Pune and Ahmedabad Choose Panthak</h2>
        <div className="prose">
          <p>Most companies do not need ten different vendors for ten different problems. They need one accountable partner who understands how marketing, finance, HR, and technology actually connect. That is the gap <strong className="pn">Panthak</strong> fills for businesses in Pune, Ahmedabad, and beyond.</p>
          <p>A single consulting engagement removes the coordination burden: your digital marketing plan, financial compliance calendar, and software roadmap sit with one team instead of four separate ones that need to be briefed from scratch every time.</p>
        </div>
        <div className="two">
          <article className="svc">
            <h3>Industries We Serve</h3>
            <p><strong className="pn">Panthak</strong> works with founders and leadership teams across more than 10 industries, including healthcare and wellness, manufacturing, real estate, financial services, education, hospitality, logistics, retail, professional services, and technology startups.</p>
            <ul className="tags">{industries.map((i) => <li key={i}>{i}</li>)}</ul>
          </article>
          <article className="svc">
            <img className="photo" src="/images/office.jpg" alt="Modern office building at sunset" width="612" height="407" loading="lazy" />
            <h3>Where We Work: Pune, Ahmedabad, and Beyond</h3>
            <p><strong className="pn">Panthak</strong> is headquartered in Pune and operates a second base in Ahmedabad, two of western India&rsquo;s most active business hubs for manufacturing, trading, and professional services.</p>
            <p>That said, the firm works with clients well outside these two cities. Engagements run entirely over video calls, shared documents, and structured check-ins, with the same accountability as in person.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Numbers() {
  return (
    <section className="numbers">
      <div className="wrap">
        <h2>What Those Numbers Actually Mean</h2>
        <div className="num-grid">
          {numbers.map((x) => (<div key={x.n}><Counter n={parseInt(x.n, 10)} s={x.n.replace(/\d/g, '')} /><p>{x.p}</p></div>))}
        </div>
      </div>
    </section>
  );
}

export function Ways() {
  return (
    <section className="section">
      <div className="wrap two">
        <article className="svc">
          <h3>Ways to Work With Us</h3>
          <p>Not every business needs the same commitment. Some come to us for a single project, such as a financial audit, a website rebuild, or a hiring sprint. Others prefer a retainer that covers digital marketing, HR, and financial compliance together on an ongoing basis.</p>
          <p>We also offer business consulting on an hourly, weekly, or monthly basis for founders who mainly need an experienced sounding board rather than a full engagement.</p>
        </article>
        <article className="svc">
          <h3>Led by People Who Have Done the Work</h3>
          <p><strong className="pn">Panthak</strong> is led by Atul Pandey, Founder and CEO, and Dr. Jyoti Pathak, Co-Founder and COO, alongside a team built specifically around the services the firm offers.</p>
          <p>That structure is part of why a business consulting engagement here tends to move faster than with larger firms: the person advising you on digital marketing actually specializes in digital marketing.</p>
        </article>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="wrap narrow">
        <span className="badge">FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <p className="sub">Straight answers to what founders usually ask before their first call with us.</p>
        {faqs.map(([q, a], i) => (
          <div className={`qa${open === i ? ' open' : ''}`} key={q}>
            <button aria-expanded={open === i} aria-controls={`a${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
              {q}<span aria-hidden="true" />
            </button>
            <div className="ans" id={`a${i}`}><div><p>{a}</p></div></div>
          </div>
        ))}
        <div className="faq-cta">
          <p>Still have a question that&rsquo;s specific to your business?</p>
          <Link className="btn btn-light" to="/contact">Book a Strategy Call</Link>
        </div>
      </div>
    </section>
  );
}
