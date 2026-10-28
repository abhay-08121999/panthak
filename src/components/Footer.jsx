import { Link } from 'react-router-dom';

const quick = [['Services', '/services'], ['Case Studies', '/case-studies'], ['Contact', '/contact'], ['Careers', '/careers'], ['Blogs', '/blogs'], ['Industries', '/services'], ['Privacy Policy', '/contact'], ['Terms & Conditions', '/contact']];
const social = [['LinkedIn', 'in'], ['Instagram', 'ig'], ['Facebook', 'fb'], ['X', 'x']];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <Link to="/" className="foot-brand"><img src="/logo.svg" alt="" width="52" height="52" />PANTHAK</Link>
          <p className="tag">Business Strategy. Digital Strategy. Delivered globally.</p>
          <Link className="foot-link" to="/about">Explore Our Story &raquo;</Link>
        </div>
        <nav aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul>{quick.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul>
        </nav>
        <div>
          <h4>Get in Touch</h4>
          <p>Email:<br /><a href="mailto:info@panthak.com">info@panthak.com</a></p>
          <p>Phone:<br /><a href="tel:+919362064513">+91 93620 64513</a></p>
          <Link className="foot-link" to="/contact">Book a Strategy Call &raquo;</Link>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul className="social">{social.map(([l, s]) => <li key={l}><a href="#" aria-label={l}>{s}</a></li>)}</ul>
          <p className="tag">Let&rsquo;s shape the future of your business together</p>
        </div>
      </div>
      <p className="copy">&copy; 2026 Panthak Business Solutions (PBS). All rights reserved.</p>
    </footer>
  );
}