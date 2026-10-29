import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoCycle from './LogoCycle.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' },
];

const insights = [
  { to: '/blogs', label: 'Blogs' },
  { to: '/case-studies', label: 'Case Studies' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Compact header after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setNavOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setNavOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap header-inner">
        <Link className="brand" to="/" aria-label="Panthak home">
          <LogoCycle />
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={navOpen}
          aria-controls="primary-nav"
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <nav id="primary-nav" className={`nav${navOpen ? ' open' : ''}`} aria-label="Primary">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end}>{l.label}</NavLink>
              </li>
            ))}
            <li className={`has-menu${menuOpen ? ' open' : ''}`} ref={menuRef}>
              <button
                className="menu-btn"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                onClick={() => setMenuOpen((o) => !o)}
              >
                Insights
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <ul className="submenu">
                {insights.map((l) => (
                  <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </li>
          </ul>
          <Link className="btn btn-solid nav-cta" to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}