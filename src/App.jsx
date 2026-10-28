import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Effects from './components/Effects.jsx';
import Footer from './components/Footer.jsx';
import ChatBubble from './components/ChatBubble.jsx';
import Home from './pages/Home.jsx';
import Placeholder from './pages/Placeholder.jsx';

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Effects />
      <Header />
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="/services" element={<Placeholder title="Services" />} />
          <Route path="/careers" element={<Placeholder title="Careers" />} />
          <Route path="/blogs" element={<Placeholder title="Blogs" />} />
          <Route path="/case-studies" element={<Placeholder title="Case Studies" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
      <ChatBubble />
    </>
  );
}