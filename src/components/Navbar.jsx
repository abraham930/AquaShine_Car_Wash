import { useState, useEffect } from 'react'
import '../styles/navbar.css'

/*
  Navbar now accepts an `onNavigate` prop so the parent (App.jsx)
  can intercept clicks on Services and Products and load their
  dedicated pages instead of scrolling to a section.

  onNavigate(page) where page is:
    'home' | 'services' | 'products' | '#about' | '#contact'
*/

const NAV_LINKS = [
  { label: 'Home',     page: 'home'        },
  { label: 'Services', page: 'all-services' },
  { label: 'Products', page: 'all-products' },
  { label: 'About',    page: '#about'       },
  { label: 'Contact',  page: '#contact'     },
]

function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClick = (e, page) => {
    e.preventDefault()
    setMenuOpen(false)
    if (onNavigate) onNavigate(page)
  }

  const navClass = [
    'navbar',
    isScrolled ? 'navbar--scrolled' : 'navbar--transparent',
  ].join(' ')

  return (
    <header className={navClass} role="banner">
      <div className="navbar__inner">

        {/* Logo */}
        <a
          href="/"
          className="navbar__logo"
          aria-label="AquaShine Car Wash – Home"
          onClick={(e) => handleClick(e, 'home')}
        >
          <svg
            className="navbar__logo-icon"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M18 4C18 4 6 16.5 6 23C6 29.627 11.373 35 18 35C24.627 35 30 29.627 30 23C30 16.5 18 4Z" fill="#00B4D8" />
            <path d="M18 10C18 10 11 19.5 11 24C11 27.866 14.134 31 18 31C21.866 31 25 27.866 25 24C25 19.5 18 10Z" fill="rgba(255,255,255,0.25)" />
            <ellipse cx="13.5" cy="22" rx="2" ry="3.5" fill="rgba(255,255,255,0.4)" transform="rotate(-20 13.5 22)" />
          </svg>
          <span className="navbar__logo-text">
            Aqua<span>Shine</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main navigation">
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, page }) => (
              <li key={page}>
                <a
                  href={page.startsWith('#') ? page : `/${page}`}
                  className="navbar__link"
                  onClick={(e) => handleClick(e, page)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="navbar__cta"
                onClick={(e) => handleClick(e, '#contact')}
              >
                Book a Wash
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="navbar__hamburger-line" aria-hidden="true" />
          <span className="navbar__hamburger-line" aria-hidden="true" />
          <span className="navbar__hamburger-line" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, page }) => (
          <a
            key={page}
            href={page.startsWith('#') ? page : `/${page}`}
            className="navbar__mobile-link"
            onClick={(e) => handleClick(e, page)}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="navbar__mobile-cta"
          onClick={(e) => handleClick(e, '#contact')}
        >
          Book a Wash
        </a>
      </nav>
    </header>
  )
}

export default Navbar
