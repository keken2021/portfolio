import { House, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Projects", to: "/projects" },
  // { label: "Certifications", to: "/certifications" },
  // { label: "Tech Stack", to: "/tech-stack" },
  { label: "Experience", to: "/experience" },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <House className="w-5 h-5 mr-2" />
          Home
        </Link>

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-link ${location.pathname === link.to ? "navbar-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://drive.google.com/file/d/1x9Lb7zgAi__9goMm7IS5JrAssOL0Sjaw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-mobile-link ${location.pathname === link.to ? "navbar-mobile-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1x9Lb7zgAi__9goMm7IS5JrAssOL0Sjaw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-mobile-link navbar-mobile-cta"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}