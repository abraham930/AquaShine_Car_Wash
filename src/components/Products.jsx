import { FEATURED_PRODUCTS } from '../data/products'
import ProductIcon from './ProductIcon'
import '../styles/products.css'

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

function ProductCard({ product }) {
  return (
    <article className="product-card" aria-label={product.name}>
      <div className="product-card__image-wrapper">
        <div className="product-card__image-bg">
          <span className="product-card__image-icon">
            <ProductIcon type={product.iconType} size={72} />
          </span>
        </div>
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">{product.price}</span>
          <button
            className="product-card__add-btn"
            type="button"
            aria-label={`Order ${product.name} — contact us`}
            onClick={scrollToContact}
          >
            Get One
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

function Products({ onViewAll }) {
  return (
    <section id="products" className="products">
      <div className="section-wrapper">

        <header className="products__header">
          <div className="products__header-text">
            <span className="section-label">Shop With Us</span>
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Professional-grade car care products — the same ones we use in our wash bay,
              now available for you to take home.
            </p>
          </div>
          <button
            className="products__view-all"
            type="button"
            onClick={onViewAll}
            aria-label="Browse all products"
          >
            Browse All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </header>

        <div className="products__grid" role="list">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="products__footer-cta">
          <p className="products__footer-text">
            Looking for something specific? We stock over 30 professional car care products.
          </p>
          <button
            className="btn-primary"
            type="button"
            onClick={onViewAll}
          >
            See All 12 Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Products
