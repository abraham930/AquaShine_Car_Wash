import { useState } from 'react'
import { ALL_PRODUCTS } from '../data/products'
import ProductIcon from '../components/ProductIcon'
import '../styles/allProductsPage.css'

/* Derive unique categories from data */
const CATEGORIES = ['All', ...Array.from(new Set(ALL_PRODUCTS.map((p) => p.category)))]

function scrollToContact() {
  /* Navigate back to main page first if needed, then scroll */
  window.dispatchEvent(new CustomEvent('navigate-home-contact'))
}

function BrowseProductCard({ product }) {
  return (
    <article className="browse-product-card" aria-label={product.name}>
      <div className="browse-product-card__image">
        <span className="browse-product-card__image-icon">
          <ProductIcon type={product.iconType} size={80} />
        </span>
        {product.badge && (
          <span className="browse-product-card__badge">{product.badge}</span>
        )}
      </div>

      <div className="browse-product-card__body">
        <span className="browse-product-card__category">{product.category}</span>
        <h3 className="browse-product-card__name">{product.name}</h3>
        <p className="browse-product-card__description">{product.description}</p>

        <div className="browse-product-card__footer">
          <span className="browse-product-card__price">{product.price}</span>
          <button
            className="browse-product-card__btn"
            type="button"
            aria-label={`Order ${product.name}`}
            onClick={scrollToContact}
          >
            Get One
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

function AllProductsPage({ onBack }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <div className="all-products-page">

      {/* Hero Banner */}
      <div className="all-products-page__hero">
        <div className="all-products-page__hero-inner">
          <div className="all-products-page__hero-text">
            <button
              className="all-products-page__back"
              type="button"
              onClick={onBack}
              aria-label="Back to home"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </button>
            <h1 className="all-products-page__hero-title">
              All <span>Products</span>
            </h1>
            <p className="all-products-page__hero-sub">
              Professional-grade car care products — the same ones we trust in our wash bay,
              now available for you to take home.
            </p>
          </div>
          <p className="all-products-page__hero-count" aria-hidden="true">
            {ALL_PRODUCTS.length}
          </p>
        </div>
      </div>

      {/* Sticky Controls */}
      <div className="all-products-page__controls" role="navigation" aria-label="Filter products">
        <div className="all-products-page__controls-inner">
          <div className="all-products-page__filters" role="group" aria-label="Category filters">
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
          <p className="all-products-page__result-count" aria-live="polite">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="all-products-page__body">
        {filtered.length > 0 ? (
          <div className="all-products-page__grid" role="list">
            {filtered.map((product) => (
              <div key={product.id} role="listitem">
                <BrowseProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="all-products-page__empty">
            <p className="all-products-page__empty-icon" aria-hidden="true">🔍</p>
            <h3>No products found</h3>
            <p>Try selecting a different category.</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default AllProductsPage
