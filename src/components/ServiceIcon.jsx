/* ============================================================
   ServiceIcon — Shared SVG icon set for service cards
   ============================================================ */

function ServiceIcon({ type, size = 24 }) {
  const icons = {
    drop: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 16C7 16 5 14 5 11C5 8.24 7.24 6 10 6C11.18 6 12.26 6.42 13.12 7.12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 16C17 16 19 14 19 11C19 8.24 16.76 6 14 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 19H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 6V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="3" r="1" fill="currentColor" />
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    interior: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10H21" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 14H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 6V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 6V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    circle: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.5 10.5C9.5 9 11 8.5 12 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 15C10.2 16.2 13 17 15.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    engine: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8V6M12 8V5M16 8V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 13H17M9 16H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L4 7V13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13V7L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return icons[type] || icons['drop']
}

export default ServiceIcon
