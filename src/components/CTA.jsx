import '../styles/cta.css'

const TRUST_ITEMS = [
  { label: 'Eco-Friendly Products'  },
  { label: 'Free Re-Wash Guarantee' },
  { label: 'Open 7 Days a Week'     },
]

function CTA() {
  const handleContactClick = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta" className="cta" aria-label="Call to action">
      <div className="cta__inner">

        <span className="cta__label">Ready to Shine?</span>

        <h2 className="cta__headline">
          Give Your Car the<br />
          Shine It <span>Deserves</span>
        </h2>

        <p className="cta__body">
          Don't settle for a dusty drive. Book your wash today and experience the
          AquaShine difference — professional results at an honest price.
        </p>

        <div className="cta__actions">
          <a href="#contact" className="btn-primary" onClick={handleContactClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 8L10.89 13.26C11.2200 13.4793 11.6056 13.5963 12 13.5963C12.3944 13.5963 12.78 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Contact Us
          </a>
        </div>

        {/* Trust indicators */}
        <div className="cta__trust" role="list" aria-label="Why choose us">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="cta__trust-item" role="listitem">
              <svg className="cta__trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CTA
