import { useState } from 'react'
import { ALL_SERVICES } from '../data/services'
import ServiceIcon from '../components/ServiceIcon'
import '../styles/allServicesPage.css'

const CATEGORIES = ['All', ...Array.from(new Set(ALL_SERVICES.map((s) => s.category)))]

function scrollToContact() {
  window.dispatchEvent(new CustomEvent('navigate-home-contact'))
}

function BrowseServiceCard({ service }) {
  const isFeatured = service.tag === 'Most Popular' || service.tag === 'Best Value'
  const cardClass = [
    'browse-service-card',
    isFeatured ? 'browse-service-card--featured' : '',
  ].join(' ').trim()

  return (
    <article className={cardClass} aria-label={`${service.name} service`}>

      <div className="browse-service-card__icon" aria-hidden="true">
        <ServiceIcon type={service.iconType} size={22} />
      </div>

      <div className="browse-service-card__header">
        <h3 className="browse-service-card__name">{service.name}</h3>
        <span className="browse-service-card__tag">{service.tag}</span>
      </div>

      <p className="browse-service-card__description">{service.description}</p>

      <hr className="browse-service-card__divider" />
      <p className="browse-service-card__includes-label">What's Included</p>
      <ul className="browse-service-card__includes" role="list">
        {service.includes.map((item) => (
          <li key={item} className="browse-service-card__include-item">{item}</li>
        ))}
      </ul>

      <div className="browse-service-card__footer">
        <div className="browse-service-card__price-group">
          <span className="browse-service-card__price">{service.price}</span>
          <span className="browse-service-card__duration">⏱ {service.duration}</span>
        </div>
        <button
          className="browse-service-card__book-btn"
          type="button"
          aria-label={`Book ${service.name}`}
          onClick={scrollToContact}
        >
          Book Now
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  )
}

function AllServicesPage({ onBack }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? ALL_SERVICES
    : ALL_SERVICES.filter((s) => s.category === activeCategory)

  return (
    <div className="all-services-page">

      {/* Hero Banner */}
      <div className="all-services-page__hero">
        <div className="all-services-page__hero-inner">
          <div className="all-services-page__hero-text">
            <button
              className="all-services-page__back"
              type="button"
              onClick={onBack}
              aria-label="Back to home"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </button>
            <h1 className="all-services-page__hero-title">
              All <span>Services</span>
            </h1>
            <p className="all-services-page__hero-sub">
              From a quick 15-minute wash to a full-day ceramic coating — every service is
              carried out by our trained technicians with care and precision.
            </p>
          </div>
          <p className="all-services-page__hero-count" aria-hidden="true">
            {ALL_SERVICES.length}
          </p>
        </div>
      </div>

      {/* Sticky Controls */}
      <div className="all-services-page__controls" role="navigation" aria-label="Filter services">
        <div className="all-services-page__controls-inner">
          <div className="all-services-page__filters" role="group" aria-label="Category filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'filter-pill--active' : ''}`}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="all-services-page__result-count" aria-live="polite">
            {filtered.length} service{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="all-services-page__body">
        {filtered.length > 0 ? (
          <div className="all-services-page__grid" role="list">
            {filtered.map((service) => (
              <div key={service.id} role="listitem">
                <BrowseServiceCard service={service} />
              </div>
            ))}
          </div>
        ) : (
          <div className="all-services-page__empty">
            <p className="all-services-page__empty-icon" aria-hidden="true">🔍</p>
            <h3>No services found</h3>
            <p>Try selecting a different category.</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default AllServicesPage
