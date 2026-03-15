import { FEATURED_SERVICES } from '../data/services'
import ServiceIcon from './ServiceIcon'
import '../styles/services.css'

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

function ServiceCard({ service }) {
  const cardClass = [
    'service-card',
    service.tag === 'Most Popular' ? 'service-card--featured' : '',
  ].join(' ').trim()

  return (
    <article className={cardClass} aria-label={`${service.name} service`}>
      <div className="service-card__icon" aria-hidden="true">
        <ServiceIcon type={service.iconType} size={24} />
      </div>

      <div className="service-card__header">
        <h3 className="service-card__name">{service.name}</h3>
        <span className="service-card__tag">{service.tag}</span>
      </div>

      <p className="service-card__description">{service.description}</p>

      <div className="service-card__footer">
        <div>
          <span className="service-card__price">{service.price}</span>
          <span className="service-card__price-label">starting</span>
        </div>
        <button
          className="service-card__cta"
          type="button"
          aria-label={`Book ${service.name}`}
          onClick={scrollToContact}
        >
          Book Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  )
}

function Services({ onViewAll }) {
  return (
    <section id="services" className="services">
      <div className="section-wrapper">

        <header className="services__header">
          <div className="services__header-text">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              From a quick everyday wash to a full professional detail — we have a service
              tailored to every car and every budget.
            </p>
          </div>
          <button
            className="services__view-all"
            type="button"
            onClick={onViewAll}
            aria-label="Browse all services"
          >
            See All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </header>

        <div className="services__grid" role="list">
          {FEATURED_SERVICES.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="services__footer-cta">
          <p className="services__footer-text">
            Need something more? We offer 8 specialist services including ceramic coating and full detail packages.
          </p>
          <button
            className="btn-primary"
            type="button"
            onClick={onViewAll}
          >
            View All 8 Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Services
