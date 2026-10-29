import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const links = [
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/contact' },
  { label: 'Terms & Conditions', to: '/contact' },
];

// Replace href="#" with real profile URLs before publishing.
const socials = [
  { label: 'LinkedIn', Icon: Linkedin, href: '#' },
  { label: 'Instagram', Icon: Instagram, href: '#' },
  { label: 'Facebook', Icon: Facebook, href: '#' },
  { label: 'X (Twitter)', Icon: Twitter, href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap foot-inner">
        <Link to="/" className="foot-logo-link" aria-label="Panthak home">
          <img className="foot-logo" src="/images/panthak-logo.png" alt="Panthak" width="180" height="103" />
        </Link>

        <p className="foot-title">
          PANTHAK <span>BUSINESS</span>
        </p>
        <p className="foot-tag">Business strategy. Digital strategy. Delivered globally.</p>

        <ul className="foot-contact">
          <li>
            <Mail size={16} aria-hidden="true" />
            <a href="mailto:info@panthak.com">info@panthak.com</a>
          </li>
          <li>
            <Phone size={16} aria-hidden="true" />
            <a href="tel:+919362064513">+91 93620 64513</a>
          </li>
        </ul>

        <ul className="social">
          {socials.map(({ label, Icon, href }) => (
            <li key={label}>
              <a href={href} aria-label={label}>
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <Link className="foot-pill" to="/contact">Book a Strategy Call</Link>

        <p className="foot-copy">&copy; {year} Panthak Business Solutions (PBS). All rights reserved.</p>
      </div>

      <div className="foot-bottom">
        <nav className="wrap" aria-label="Footer">
          <ul className="foot-links">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}