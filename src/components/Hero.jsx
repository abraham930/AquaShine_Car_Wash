import '../styles/hero.css'

function Hero({ onNavigate }) {
  const handleBookClick = (e) => {
    e.preventDefault()
    if (onNavigate) onNavigate('#contact')
  }

  const handleServicesClick = (e) => {
    e.preventDefault()
    if (onNavigate) onNavigate('all-services')
  }

  return (
    <section id="home" className="hero" aria-label="Hero — AquaShine Car Wash">

      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="hero__particle" />
        ))}
      </div>

      <svg
        className="hero__deco-drop"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M200 20C200 20 40 160 40 260C40 348 112 420 200 420C288 420 360 348 360 260C360 160 200 20 200 20Z"
          fill="var(--color-cyan)"
        />
      </svg>

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-dot" aria-hidden="true" />
          Premium Car Wash &amp; Detailing
        </p>

        <h1 className="hero__headline">
          Your Car
          <br />
          Deserves{' '}
          <span className="hero__headline-accent">Shine</span>
        </h1>

        <p className="hero__description">
          Professional car wash services that leave your vehicle spotless,
          protected, and looking showroom-fresh — every single time.
          Fast, affordable, and thorough.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn-primary" onClick={handleBookClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
            </svg>
            Book Your Wash Today
          </a>
          <a href="/all-services" className="btn-outline" onClick={handleServicesClick}>
            View Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
