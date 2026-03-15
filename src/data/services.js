/* ============================================================
   ALL SERVICES DATA — AquaShine Car Wash
   Single source of truth used by both the homepage
   preview section and the full Services browse page.
   ============================================================ */

export const ALL_SERVICES = [
  {
    id: 'basic-wash',
    iconType: 'drop',
    name: 'Basic Wash',
    tag: 'Quick & Clean',
    category: 'Exterior',
    description:
      'A thorough exterior rinse and wash using our high-pressure foam system. Removes everyday dust, dirt, and grime — in and out in minutes.',
    price: '$12',
    duration: '15 min',
    includes: ['Exterior foam wash', 'High-pressure rinse', 'Spot-free final rinse', 'Air-dry finish'],
    featured: true,
  },
  {
    id: 'premium-wash',
    iconType: 'star',
    name: 'Premium Wash',
    tag: 'Most Popular',
    category: 'Exterior',
    description:
      'Full exterior wash, wheel scrub, undercarriage rinse, tire dressing, and a spot-free rinse with hand-dry finish. The complete package.',
    price: '$28',
    duration: '30 min',
    includes: ['Everything in Basic', 'Wheel & tire scrub', 'Undercarriage rinse', 'Tire dressing', 'Hand-dry finish'],
    featured: true,
  },
  {
    id: 'interior-deep-clean',
    iconType: 'interior',
    name: 'Interior Deep Clean',
    tag: 'Full Detail',
    category: 'Interior',
    description:
      'Steam vacuuming, dashboard wipe-down, seat shampooing, and glass cleaning inside. Transform your cabin back to factory-fresh condition.',
    price: '$45',
    duration: '60 min',
    includes: ['Full vacuum', 'Steam cleaning', 'Seat shampoo', 'Dashboard & console wipe', 'Interior glass clean'],
    featured: true,
  },
  {
    id: 'wax-polish',
    iconType: 'circle',
    name: 'Wax & Polish',
    tag: 'Paint Care',
    category: 'Exterior',
    description:
      'Hand-applied carnauba wax and machine polish to protect your paint, restore gloss, and create a long-lasting hydrophobic shield.',
    price: '$60',
    duration: '90 min',
    includes: ['Machine polish', 'Carnauba wax application', 'Paint sealant', 'Hydrophobic coating', 'Final buff'],
    featured: false,
  },
  {
    id: 'engine-bay',
    iconType: 'engine',
    name: 'Engine Bay Cleaning',
    tag: 'Specialty',
    category: 'Specialty',
    description:
      'Safe degreasing and low-pressure rinse of the engine compartment. Removes grease, grime, and buildup while protecting sensitive components.',
    price: '$50',
    duration: '45 min',
    includes: ['Engine degreaser application', 'Low-pressure rinse', 'Component protection', 'Dressing & shine'],
    featured: false,
  },
  {
    id: 'full-detail',
    iconType: 'star',
    name: 'Full Detail Package',
    tag: 'Best Value',
    category: 'Packages',
    description:
      'Our flagship service — combines exterior wash, full interior deep clean, wax & polish, and engine bay cleaning into one premium session.',
    price: '$149',
    duration: '3–4 hrs',
    includes: ['Premium Wash', 'Interior Deep Clean', 'Wax & Polish', 'Engine Bay Clean', 'Tyre dressing', 'Air freshener'],
    featured: false,
  },
  {
    id: 'ceramic-coat',
    iconType: 'shield',
    name: 'Ceramic Coating',
    tag: 'Premium Protection',
    category: 'Specialty',
    description:
      'Professional-grade nano-ceramic coating that bonds to your paint and provides up to 3 years of hydrophobic protection against UV, dirt, and scratches.',
    price: '$299',
    duration: '1 day',
    includes: ['Paint decontamination', 'Clay bar treatment', 'Machine polish', 'Ceramic coat application', '3-year warranty'],
    featured: false,
  },
  {
    id: 'headlight-restore',
    iconType: 'drop',
    name: 'Headlight Restoration',
    tag: 'Safety',
    category: 'Specialty',
    description:
      'Removes yellowing, oxidation, and cloudiness from headlight lenses. Restores clarity and improves night-time visibility significantly.',
    price: '$35',
    duration: '30 min',
    includes: ['Sanding & buffing', 'UV-protective sealant', 'Final polish', 'Before/after comparison'],
    featured: false,
  },
]

/* The 3 cards shown on the homepage */
export const FEATURED_SERVICES = ALL_SERVICES.filter((s) => s.featured)
