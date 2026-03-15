/* ============================================================
   ALL PRODUCTS DATA — AquaShine Car Wash
   Single source of truth used by both the homepage
   preview section and the full Products browse page.
   ============================================================ */

export const ALL_PRODUCTS = [
  {
    id: 'car-shampoo',
    iconType: 'shampoo',
    name: 'Car Shampoo',
    badge: 'Best Seller',
    category: 'Exterior',
    description:
      'Ultra-foaming pH-neutral formula that safely lifts dirt and grime without stripping wax or sealant. Works on all paint types.',
    price: '$14.99',
    featured: true,
  },
  {
    id: 'tire-shine',
    iconType: 'tireShine',
    name: 'Tire Shine',
    badge: null,
    category: 'Tires',
    description:
      'Long-lasting silicone-free tire dressing that delivers a rich, non-greasy satin finish. UV-protected formula prevents cracking and fading.',
    price: '$11.99',
    featured: true,
  },
  {
    id: 'microfiber-towels',
    iconType: 'towel',
    name: 'Microfiber Towels',
    badge: '3-Pack',
    category: 'Accessories',
    description:
      'Professional-grade 400 GSM microfiber towels. Scratch-free, super absorbent, and machine washable up to 500 times.',
    price: '$18.99',
    featured: true,
  },
  {
    id: 'interior-cleaner',
    iconType: 'interiorCleaner',
    name: 'Interior Cleaner',
    badge: null,
    category: 'Interior',
    description:
      'Multi-surface formula safe on dashboards, leather, plastic, and vinyl. Leaves a matte, dust-resistant finish with a light fresh scent.',
    price: '$12.99',
    featured: false,
  },
  {
    id: 'wax-spray',
    iconType: 'waxSpray',
    name: 'Wax Spray',
    badge: 'New',
    category: 'Exterior',
    description:
      'Spray-on carnauba wax that bonds to your paint in seconds. Adds brilliant gloss and water-beading protection that lasts up to 3 months.',
    price: '$16.99',
    featured: false,
  },
  {
    id: 'glass-cleaner',
    iconType: 'glass',
    name: 'Glass Cleaner',
    badge: null,
    category: 'Exterior',
    description:
      'Streak-free ammonia-free glass cleaner safe for tinted windows. Removes fingerprints, haze, and road film with a single wipe.',
    price: '$9.99',
    featured: false,
  },
  {
    id: 'wheel-cleaner',
    iconType: 'wheel',
    name: 'Wheel Cleaner',
    badge: null,
    category: 'Tires',
    description:
      'Acid-free colour-changing wheel cleaner that dissolves brake dust and iron deposits on contact. Safe for all wheel finishes.',
    price: '$13.99',
    featured: false,
  },
  {
    id: 'leather-conditioner',
    iconType: 'leather',
    name: 'Leather Conditioner',
    badge: null,
    category: 'Interior',
    description:
      'Nourishing conditioner that restores suppleness and protects against cracking and UV fade. Leaves a natural, non-greasy finish.',
    price: '$19.99',
    featured: false,
  },
  {
    id: 'air-freshener',
    iconType: 'freshener',
    name: 'Air Freshener',
    badge: null,
    category: 'Interior',
    description:
      'Long-lasting vent clip freshener available in three scents: New Car, Ocean Breeze, and Citrus Burst. Up to 60 days of fragrance.',
    price: '$7.99',
    featured: false,
  },
  {
    id: 'detailing-brush-set',
    iconType: 'brush',
    name: 'Detailing Brush Set',
    badge: '5-Piece',
    category: 'Accessories',
    description:
      'Five-piece soft-bristle detailing brush set for vents, seams, emblems, and tight corners. Ergonomic handles with anti-slip grips.',
    price: '$24.99',
    featured: false,
  },
  {
    id: 'foam-cannon',
    iconType: 'foam',
    name: 'Foam Cannon',
    badge: 'Pro Tool',
    category: 'Accessories',
    description:
      'Pressure-washer compatible foam cannon that generates thick, clinging soap foam for a safe touchless pre-wash. Adjustable nozzle.',
    price: '$34.99',
    featured: false,
  },
  {
    id: 'bug-remover',
    iconType: 'bug',
    name: 'Bug & Tar Remover',
    badge: null,
    category: 'Exterior',
    description:
      'Enzyme-based spray that dissolves stubborn bug splatter, tree sap, and road tar without scratching or damaging clear coat.',
    price: '$10.99',
    featured: false,
  },
]

/* The 3 cards shown on the homepage */
export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter((p) => p.featured)
