/* ============================================================
   ProductIcon — Shared SVG icon set for product cards
   ============================================================ */

function ProductIcon({ type, size = 72 }) {
  const s = size

  const icons = {
    shampoo: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <rect x="24" y="18" width="24" height="36" rx="6" fill="currentColor" opacity="0.55" />
        <rect x="28" y="12" width="16" height="8" rx="3" fill="currentColor" opacity="0.38" />
        <path d="M32 30 Q36 26 40 30 Q44 34 40 38 Q36 42 32 38 Q28 34 32 30Z" fill="white" opacity="0.28" />
        <circle cx="44" cy="22" r="4" fill="currentColor" opacity="0.22" />
        <circle cx="50" cy="32" r="3" fill="currentColor" opacity="0.18" />
      </svg>
    ),
    tireShine: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <circle cx="36" cy="36" r="20" stroke="currentColor" strokeWidth="4" opacity="0.45" />
        <circle cx="36" cy="36" r="10" fill="currentColor" opacity="0.28" />
        <path d="M36 16V20M36 52V56M16 36H20M52 36H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.38" />
        <path d="M22 22L25 25M47 47L50 50M50 22L47 25M25 47L22 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    towel: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <rect x="16" y="22" width="40" height="28" rx="4" fill="currentColor" opacity="0.38" />
        <path d="M16 30H56" stroke="white" strokeWidth="2" opacity="0.45" />
        <path d="M16 38H56" stroke="white" strokeWidth="2" opacity="0.45" />
        <path d="M24 22V50" stroke="white" strokeWidth="2" opacity="0.45" />
        <path d="M32 22V50" stroke="white" strokeWidth="2" opacity="0.45" />
        <rect x="20" y="16" width="32" height="8" rx="2" fill="currentColor" opacity="0.22" />
      </svg>
    ),
    interiorCleaner: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <path d="M28 52L20 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
        <rect x="24" y="20" width="20" height="32" rx="4" fill="currentColor" opacity="0.48" />
        <rect x="28" y="14" width="12" height="8" rx="2" fill="currentColor" opacity="0.32" />
        <path d="M34 14V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.38" />
        <circle cx="50" cy="24" r="5" fill="currentColor" opacity="0.18" />
        <circle cx="54" cy="36" r="3" fill="currentColor" opacity="0.16" />
        <circle cx="48" cy="44" r="4" fill="currentColor" opacity="0.14" />
      </svg>
    ),
    waxSpray: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <rect x="20" y="22" width="22" height="32" rx="5" fill="currentColor" opacity="0.48" />
        <path d="M32 22V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.38" />
        <path d="M42 26L50 20M42 32L52 32M42 38L50 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.32" />
        <circle cx="50" cy="20" r="3" fill="currentColor" opacity="0.28" />
        <circle cx="52" cy="32" r="3" fill="currentColor" opacity="0.26" />
        <circle cx="50" cy="44" r="3" fill="currentColor" opacity="0.22" />
      </svg>
    ),
    glass: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <rect x="14" y="14" width="44" height="44" rx="4" stroke="currentColor" strokeWidth="3" opacity="0.4" />
        <path d="M20 20L52 52M20 36H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        <circle cx="44" cy="24" r="6" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    wheel: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <circle cx="36" cy="36" r="22" stroke="currentColor" strokeWidth="4" opacity="0.4" />
        <circle cx="36" cy="36" r="8" fill="currentColor" opacity="0.35" />
        <path d="M36 14V20M36 52V58M14 36H20M52 36H58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    leather: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <path d="M14 28C14 22 18 18 24 18H48C54 18 58 22 58 28V44C58 50 54 54 48 54H24C18 54 14 50 14 44V28Z" fill="currentColor" opacity="0.3" />
        <path d="M22 36H50M30 26V46" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    freshener: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <path d="M36 52C36 52 20 42 20 30C20 22 27 16 36 16C45 16 52 22 52 30C52 42 36 52 36 52Z" fill="currentColor" opacity="0.35" />
        <path d="M28 26C30 20 36 18 40 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <path d="M32 8C32 8 34 12 36 8C38 4 40 8 40 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    brush: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <rect x="32" y="10" width="8" height="32" rx="4" fill="currentColor" opacity="0.4" />
        <ellipse cx="36" cy="52" rx="10" ry="10" fill="currentColor" opacity="0.3" />
        <path d="M26 44C28 38 44 38 46 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      </svg>
    ),
    foam: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <rect x="22" y="28" width="28" height="28" rx="4" fill="currentColor" opacity="0.35" />
        <path d="M30 28V22M42 28V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <circle cx="28" cy="20" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="36" cy="16" r="5" fill="currentColor" opacity="0.25" />
        <circle cx="44" cy="20" r="4" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    bug: (
      <svg width={s} height={s} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <ellipse cx="36" cy="38" rx="14" ry="18" fill="currentColor" opacity="0.35" />
        <path d="M22 30L14 22M50 30L58 22M22 44L14 52M50 44L58 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <circle cx="36" cy="22" r="8" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  }

  return icons[type] || icons['shampoo']
}

export default ProductIcon
