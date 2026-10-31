import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const text = 'Business growth, operations, and systems under one expert roof';
const words = text.split(' ');

const services = [
  'business strategy',
  'digital marketing',
  'social media management',
  'HR and payroll',
  'GST, ITR and TDS compliance',
  'financial advisory',
  'custom software development',
  'process and operations improvement',
];

// Endless typewriter: types a service, holds, deletes it, moves to the next
function ServiceTyper({ start }) {
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [i, setI] = useState(0);
  const [len, setLen] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!start || reduced) return;
    const word = services[i];
    let t;
    if (typing) {
      t = len < word.length
        ? setTimeout(() => setLen(len + 1), 55)
        : setTimeout(() => setTyping(false), 1700);
    } else {
      t = len > 0
        ? setTimeout(() => setLen(len - 1), 28)
        : setTimeout(() => { setI((i + 1) % services.length); setTyping(true); }, 250);
    }
    return () => clearTimeout(t);
  }, [start, reduced, i, len, typing]);

  return (
    <p className={`typer${start ? ' show' : ''}`}>
      <span className="sr-only">Panthak helps with {services.join(', ')}.</span>
      <span aria-hidden="true">
        We help with{' '}
        <b>{reduced ? 'strategy, marketing, HR, finance, and software' : services[i].slice(0, len)}</b>
        <i className="caret" />
      </span>
    </p>
  );
}

export default function Hero() {
  const total = text.length;
  const [n, setN] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? total : 0
  );

  // Typing effect: one character at a time, a short pause after commas
  useEffect(() => {
    if (n >= total) return;
    const delay = n === 0 ? 450 : text[n - 1] === ',' ? 280 : 48;
    const id = setTimeout(() => setN(n + 1), delay);
    return () => clearTimeout(id);
  }, [n, total]);

  let k = 0;
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 aria-label={text} className={n >= total ? 'typed done' : 'typed'}>
            {words.map((w, wi) => {
              const chars = [...w].map((ch) => {
                const i = k++;
                const last = i === n - 1 || (i === n - 2 && text[n - 1] === ' ');
                return (
                  <span key={i} className={`c${i < n ? ' on' : ''}${last ? ' last' : ''}`}>{ch}</span>
                );
              });
              k++; // the space after the word
              return (
                <span key={wi}>
                  <span className="w" aria-hidden="true">{chars}</span>
                  {wi < words.length - 1 && ' '}
                </span>
              );
            })}
          </h1>
          <ServiceTyper start={n >= total} />
          <p className="lead">
            <strong className="pn">Panthak</strong> is a business consulting firm in Pune with a growing presence in Ahmedabad,
            delivering strategy, digital marketing, HR, finance, and custom software to businesses
            across India and worldwide.
          </p>
          <p>
            We plug in as your extended team, fix what is broken, build what is missing, and step
            back once your own team can run everything independently. From social media management
            to GST and payroll, the goal stays the same: measurable growth without added headcount.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-solid" to="/services">Services</Link>
            <Link className="btn btn-ghost" to="/contact">Contact Us</Link>
          </div>
        </div>

        <figure className="hero-media">
          <svg className="rings" viewBox="0 0 400 400" aria-hidden="true">
            <circle cx="200" cy="200" r="192" pathLength="1" />
            <circle cx="200" cy="200" r="150" pathLength="1" />
            <circle cx="200" cy="200" r="108" pathLength="1" />
          </svg>
          <div className="frame">
            <img
              src="/images/hero.jpg"
              alt="Colleagues collaborating around a table in a glass-walled meeting room"
              width="612"
              height="357"
              fetchPriority="high"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <figcaption className="places">
            <span><i />Pune</span>
            <span><i />Ahmedabad</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
