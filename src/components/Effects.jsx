import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Elements that glide in as they enter the viewport (staggered by position in their parent)
const REVEAL = [
  '.split-head > *', '.svc', '.steps li', '.process h2', '.process-cta', '.intro-grid > *',
  '.trans > *', '.banner-in > *', '.founders h2', '.portraits figure', 'blockquote',
  '.why .badge', '.why h2', '.prose', '.two > *', '.numbers h2', '.num-grid > div',
  '.faq .badge', '.faq h2', '.faq .sub', '.qa', '.faq-cta', '.foot-grid > *',
].join(',');

// Sections that get a photo band: it fades in and drifts upward as you scroll
const BANDS = '.hero, .banner, .numbers, .process';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useReveal(path) {
  useEffect(() => {
    if (reduced()) return;
    const els = [...document.querySelectorAll(REVEAL)];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        io.unobserve(el);
        el.classList.add('in');
        // Hand control back to normal hover styles once the entrance is done
        el.addEventListener('transitionend', function done(ev) {
          if (ev.target !== el || ev.propertyName !== 'opacity') return;
          el.classList.remove('reveal', 'in');
          el.style.removeProperty('--d');
          el.removeEventListener('transitionend', done);
        });
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => {
      const i = [...el.parentElement.children].indexOf(el);
      el.style.setProperty('--d', `${Math.min(i, 5) * 90}ms`);
      el.classList.add('reveal');
    });
    const raf = requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [path]);
}

// Photo bands: fade in on entry, then move upward with scroll (parallax)
function useBands(path) {
  useEffect(() => {
    const els = [...document.querySelectorAll(BANDS)];
    if (!els.length) return;
    els.forEach((el) => el.classList.add('band'));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('bg-in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.1 });
    els.forEach((el) => io.observe(el));

    if (reduced()) {
      els.forEach((el) => el.classList.add('bg-in'));
      return () => io.disconnect();
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        // 0 when the section is centred in the viewport; negative as it scrolls up,
        // so the photo drifts upward faster than the page
        const centre = r.top + r.height / 2 - vh / 2;
        const max = r.height * 0.2;
        const py = Math.max(-max, Math.min(max, centre * 0.12));
        el.style.setProperty('--py', `${py.toFixed(1)}px`);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [path]);
}

// Cursor-following glow on cards
function useSpotlight() {
  useEffect(() => {
    const move = (e) => {
      const c = e.target.closest && e.target.closest('.svc, .benefits, .faq-cta');
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`);
      c.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', move, { passive: true });
    return () => document.removeEventListener('pointermove', move);
  }, []);
}

export default function Effects() {
  const { pathname } = useLocation();
  const bar = useRef(null);
  const [top, setTop] = useState(false);

  useReveal(pathname);
  useBands(pathname);
  useSpotlight();

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
      setTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <button
        className={`to-top${top ? ' show' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </>
  );
}