import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const navLinks = [
  { label: 'Home',      href: '#hero',      section: 'hero' },
  { label: 'About',     href: '#about',     section: 'about' },
  { label: 'Skills',    href: '#skills',    section: 'skills' },
  { label: 'Experience', href: '#resume',    section: 'resume' },
  { label: 'Education', href: '#education', section: 'education' },
  { label: 'Contact',   href: '#contact',   section: 'contact' },
];

function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine which section is currently in view
      const sectionIds = navLinks.map((l) => l.section);
      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 lg:px-[10%]">
          <a href="#hero" className="text-4xl font-bold text-fun-teal">
            DS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map(({ label, href, section }) => (
              <a
                key={section}
                href={href}
                className={`text-lg font-medium transition-colors duration-200 hover:text-fun-teal ${
                  activeSection === section ? 'text-fun-teal' : 'text-light-white'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-4 text-light-white">
            <a
              href="https://github.com/Daswanson22"
              target="_blank"
              rel="noreferrer"
              className="text-2xl transition-colors duration-200 hover:text-fun-teal"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-swanson-018223211"
              target="_blank"
              rel="noreferrer"
              className="text-2xl transition-colors duration-200 hover:text-fun-teal"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-2xl p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-md transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="pt-20 pb-10 flex flex-col items-center gap-8">
            {navLinks.map(({ label, href, section }) => (
              <a
                key={section}
                href={href}
                onClick={handleLinkClick}
                className={`text-2xl font-semibold transition-colors duration-200 hover:text-fun-teal ${
                  activeSection === section ? 'text-fun-teal' : 'text-white'
                }`}
              >
                {label}
              </a>
            ))}
            <div className="flex gap-6 pt-2 text-white">
              <a
                href="https://github.com/Daswanson22"
                target="_blank"
                rel="noreferrer"
                className="text-3xl transition-colors duration-200 hover:text-fun-teal"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/dylan-swanson-018223211"
                target="_blank"
                rel="noreferrer"
                className="text-3xl transition-colors duration-200 hover:text-fun-teal"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
