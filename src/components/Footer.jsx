import '../styles/footer.css'

const SERVICES_LINKS = [
  { label: 'Basic Wash',          page: 'all-services' },
  { label: 'Premium Wash',        page: 'all-services' },
  { label: 'Interior Deep Clean', page: 'all-services' },
  { label: 'Wax & Polish',        page: 'all-services' },
  { label: 'Engine Bay Cleaning', page: 'all-services' },
]

const COMPANY_LINKS = [
  { label: 'About Us',     page: '#about'       },
  { label: 'Our Products', page: 'all-products'  },
  { label: 'Contact Us',   page: '#contact'      },
  { label: 'Book a Wash',  page: '#contact'      },
]

const CONTACT_INFO = [
  {
    id: 'address',
    text: '2840 Clearwater Blvd\nMetroville, CA 90210',
    href: 'https://maps.google.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
    ),
  },
  {
    id: 'phone',
    text: '+1 (555) 284-9200',
    href: 'tel:+15552849200',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    id: 'email',
    text: 'hello@aquashine.com',
    href: 'mailto:hello@aquashine.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
]

/* Social icons */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8L10.89 13.26C11.22 13.4793 11.6056 13.5963 12 13.5963C12.3944 13.5963 12.78 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" />
  </svg>
)

function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear()

  const handleClick = (e, page) => {
    e.preventDefault()
    if (onNavigate) onNavigate(page)
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main">

        {/* --- Brand column --- */}
        <div className="footer__brand">
          <a
            href="/"
            className="footer__logo"
            aria-label="AquaShine Car Wash – Back to top"
            onClick={(e) => handleClick(e, 'home')}
          >
            <svg className="footer__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18 4C18 4 6 16.5 6 23C6 29.627 11.373 35 18 35C24.627 35 30 29.627 30 23C30 16.5 18 4Z" fill="#00B4D8" />
              <path d="M18 10C18 10 11 19.5 11 24C11 27.866 14.134 31 18 31C21.866 31 25 27.866 25 24C25 19.5 18 10Z" fill="rgba(255,255,255,0.2)" />
              <ellipse cx="13.5" cy="22" rx="2" ry="3.5" fill="rgba(255,255,255,0.35)" transform="rotate(-20 13.5 22)" />
            </svg>
            <span className="footer__logo-text">
              Aqua<span>Shine</span>
            </span>
          </a>

          <p className="footer__tagline">
            Professional car wash &amp; detailing services you can trust.
            Serving Metroville with pride since 2012.
          </p>

          {/* Social links */}
          <div className="footer__socials" role="list" aria-label="Social media links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              role="listitem"
              aria-label="AquaShine on Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              role="listitem"
              aria-label="AquaShine on Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="mailto:hello@aquashine.com"
              className="footer__social-link"
              role="listitem"
              aria-label="Email AquaShine"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* --- Services column --- */}
        <nav aria-label="Footer services navigation">
          <p className="footer__col-title">Services</p>
          <ul className="footer__links" role="list">
            {SERVICES_LINKS.map(({ label, page }) => (
              <li key={label}>
                <a
                  href="/all-services"
                  className="footer__link"
                  onClick={(e) => handleClick(e, page)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Company column --- */}
        <nav aria-label="Footer company navigation">
          <p className="footer__col-title">Company</p>
          <ul className="footer__links" role="list">
            {COMPANY_LINKS.map(({ label, page }) => (
              <li key={label}>
                <a
                  href={page.startsWith('#') ? page : `/${page}`}
                  className="footer__link"
                  onClick={(e) => handleClick(e, page)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Contact column --- */}
        <address style={{ fontStyle: 'normal' }}>
          <p className="footer__col-title">Contact</p>
          <div className="footer__links">
            {CONTACT_INFO.map(({ id, text, href, icon }) => (
              <div key={id} className="footer__contact-item">
                {icon}
                <a
                  href={href}
                  target={id === 'address' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </a>
              </div>
            ))}
          </div>
        </address>

      </div>

      {/* --- Bottom bar --- */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {currentYear} <span>AquaShine Car Wash</span>. All rights reserved.
          &nbsp;·&nbsp; Built with care for our community.
        </p>
        <nav className="footer__bottom-links" aria-label="Legal navigation">
          <a href="#" className="footer__bottom-link">Privacy Policy</a>
          <a href="#" className="footer__bottom-link">Terms of Service</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
