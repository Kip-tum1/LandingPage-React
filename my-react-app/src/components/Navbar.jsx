import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{
        backgroundColor: '#f4f3f2',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }} className="md-nav-padding">
        <div style={{
          maxWidth: '1400px',           // reasonable container max-width
          margin: '0 auto',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            fontSize: '1.5rem',         // text-2xl
            color: 'black',
            fontWeight: 'bold',
          }}>
            DUNCAN
          </div>

          {/* Desktop menu */}
          <div style={{
            display: 'none',            // hidden by default
          }} className="desktop-menu">
            <a href="#home" style={{
              color: 'black',
              textDecoration: 'none',
              marginRight: '2rem',      // space-x-8 ≈ 2rem
              transition: 'color 0.2s',
            }} className="nav-link">
              Home
            </a>
            <a href="#about" style={{
              color: 'black',
              textDecoration: 'none',
              marginRight: '2rem',
              transition: 'color 0.2s',
            }} className="nav-link">
              About Me
            </a>
            <a href="#service" style={{
              color: 'black',
              textDecoration: 'none',
              marginRight: '2rem',
              transition: 'color 0.2s',
            }} className="nav-link">
              Services
            </a>
            <a href="#projects" style={{
              color: 'black',
              textDecoration: 'none',
              marginRight: '2rem',
              transition: 'color 0.2s',
            }} className="nav-link">
              Projects
            </a>
            <a href="#contact" style={{
              display: 'inline-block',
              backgroundColor: 'black',
              color: 'white',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.75rem',    // rounded-xl
              textDecoration: 'none',
              transition: 'all 0.3s',
              transform: 'scale(1)',
            }} className="contact-btn">
              Contact Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            style={{
              backgroundColor: 'white',
              padding: '4px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1f2937"           // gray-800
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div style={{
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        maxHeight: isOpen ? '24rem' : '0',   // max-h-96 ≈ 24rem
        paddingTop: isOpen ? '1rem' : '0',
        paddingBottom: isOpen ? '1rem' : '0',
        backgroundColor: '#1f2937',          // gray-800
      }} className="mobile-menu">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',                      // space-y-4
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          textAlign: 'center',
          color: 'white',
        }}>
          <a href="#home" style={{
            color: 'inherit',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }} onClick={() => setIsOpen(false)} className="mobile-link">
            Home
          </a>
          <a href="#about" style={{
            color: 'inherit',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }} onClick={() => setIsOpen(false)} className="mobile-link">
            About Me
          </a>
          <a href="#service" style={{
            color: 'inherit',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }} onClick={() => setIsOpen(false)} className="mobile-link">
            Services
          </a>
          <a href="#projects" style={{
            color: 'inherit',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }} onClick={() => setIsOpen(false)} className="mobile-link">
            Projects
          </a>
          <a href="#contact" style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',         // rounded-full
            textDecoration: 'none',
            transition: 'transform 0.3s',
            transform: 'scale(1)',
            width: 'fit-content',
            margin: '0 auto',
          }} onClick={() => setIsOpen(false)} className="mobile-contact">
            Contact Me
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-nav-padding {
            padding-left: 4rem !important;
            padding-right: 6rem !important;
          }
          .desktop-menu {
            display: flex !important;
            align-items: center !important;
          }
          .mobile-toggle,
          .mobile-menu {
            display: none !important;
          }
          .nav-link:hover {
            color: #d1d5db !important;      /* gray-300 */
          }
          .contact-btn:hover {
            background-color: #1f2937 !important;  /* gray-800 */
            color: #e5e7eb !important;            /* gray-200 */
            transform: scale(1.05) !important;
          }
        }

        @media (max-width: 767px) {
          .mobile-toggle:focus {
            outline: none;
            box-shadow: 0 0 0 2px #3b82f6;
          }
          .mobile-link:hover {
            color: #d1d5db !important;      /* gray-300 */
          }
          .mobile-contact:hover {
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;