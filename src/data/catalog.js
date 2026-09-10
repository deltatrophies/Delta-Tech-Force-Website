// Delta Tech Force - Product Catalog
// Image assets are stored locally under /public/images so the website does
// not depend on third-party image URLs at runtime.

export const CATEGORIES = [
  {
    slug: "plastic-processing-machines",
    name: "Plastic Processing Machine",
    short: "Production",
    description:
      "Industrial plastic processing machines designed for consistent, accurate, and efficient production.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933024/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "wood-working-machines",
    name: "Wood Working Machines",
    short: "Craftsmanship",
    description:
      "CNC, sawing, boring, planing, sanding, routing, and specialist machines for woodworking production.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933053/delta-impex/images/machinery/wood-working-machines/router-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "signage-machines",
    name: "Signage Machine",
    short: "Laser Signage",
    description:
      "CNC, laser marking, polishing, cutting, engraving, and finishing machines for signage production.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933020/delta-impex/images/machinery/laser-machines/laser-machine/lid-closed.png",
    imageFit: "contain",
  },
];

export const SUBCATEGORIES = [
  {
    slug: "plastic-injection-moulding-machines",
    parentSlug: "plastic-processing-machines",
    name: "Plastic Injection Moulding Machine",
    short: "Injection Moulding",
    description:
      "Industrial plastic injection moulding machines for accurate, consistent, and repeatable production.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933024/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "3d-printers",
    parentSlug: "plastic-processing-machines",
    name: "3D Printers",
    short: "Additive Manufacturing",
    description:
      "3D printing machines for prototypes, custom components, models, and production development.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381863/delta-impex/images/machinery/plastic-machines/3d-printer-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "hot-hoppers",
    parentSlug: "plastic-processing-machines",
    name: "Hot Hoppers",
    short: "Material Drying",
    description:
      "Hot hopper systems for preparing and drying plastic raw material before processing.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381908/delta-impex/images/machinery/plastic-machines/hopper-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "hot-runner-systems",
    parentSlug: "plastic-processing-machines",
    name: "Hot Runner Systems",
    short: "Mould Flow Control",
    description:
      "Hot runner systems for controlled material flow in plastic injection moulding applications.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381931/delta-impex/images/machinery/plastic-machines/hot-runner-system-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "injection-moulding-robotic-arms",
    parentSlug: "plastic-processing-machines",
    name: "Injection Moulding Robotic Arms",
    short: "Automated Handling",
    description:
      "Robotic handling systems for part removal and repeatable injection moulding workflows.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381971/delta-impex/images/machinery/plastic-machines/injection-moulding-robotic-arm-type-2/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "plastic-crushers",
    parentSlug: "plastic-processing-machines",
    name: "Plastic Crushers",
    short: "Material Recycling",
    description:
      "Plastic crushing machines for size reduction, scrap handling, and material recovery workflows.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381986/delta-impex/images/machinery/plastic-machines/plastic-crusher-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "robotic-spray-arms",
    parentSlug: "plastic-processing-machines",
    name: "Robotic Spray Arms",
    short: "Automated Finishing",
    description:
      "Robotic spray systems for consistent, repeatable, and controlled surface finishing work.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382014/delta-impex/images/machinery/plastic-machines/robotic-spray-arm/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "uv-dryers",
    parentSlug: "plastic-processing-machines",
    name: "UV Dryers",
    short: "UV Curing",
    description:
      "UV drying and curing machines for production printing, coating, and finishing workflows.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382021/delta-impex/images/machinery/plastic-machines/uv-dryer/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "uv-printers",
    parentSlug: "plastic-processing-machines",
    name: "UV Printers",
    short: "Digital Printing",
    description:
      "UV printing machines for direct, detailed, and versatile printing on production materials.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382036/delta-impex/images/machinery/plastic-machines/uv-printer/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "cnc-machines",
    parentSlug: "wood-working-machines",
    name: "CNC Machines",
    short: "Precision CNC",
    description:
      "CNC machines for accurate cutting, shaping, engraving, and repeatable woodworking production.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933009/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "sanding-machines",
    parentSlug: "wood-working-machines",
    name: "Sanding Machines",
    short: "Surface Finishing",
    description:
      "Reliable sanding solutions for smooth, consistent, and production-ready surfaces.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933032/delta-impex/images/machinery/sanding-machines/sanding-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "wide-belt-sanders",
    parentSlug: "wood-working-machines",
    name: "Wide Belt Sanders",
    short: "Panel Finishing",
    description:
      "Wide belt sanding machines for uniform calibration, smoothing, and high-quality panel finishing.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041152/delta-impex/images/machinery/wood-working-machines/wide-belt-sander/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "sawing-machines",
    parentSlug: "wood-working-machines",
    name: "Saw Machines",
    short: "Precision Cutting",
    description:
      "Circular and rebend saw machines for clean, controlled, and efficient woodworking cuts.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041104/delta-impex/images/machinery/wood-working-machines/circular-saw/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "panel-saw-machines",
    parentSlug: "wood-working-machines",
    name: "Panel Saw Machines",
    short: "Panel Cutting",
    description:
      "Panel saw machines for accurate, repeatable cutting of boards, sheets, and furniture panels.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041126/delta-impex/images/machinery/wood-working-machines/panel-saw/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "spm-machines",
    parentSlug: "wood-working-machines",
    name: "SPM (Special Purpose Machine)",
    short: "Custom Purpose",
    description:
      "Special purpose machines designed for focused, repeatable, and application-specific production work.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933057/delta-impex/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "wood-router-machines",
    parentSlug: "wood-working-machines",
    name: "Router Machines",
    short: "Routing & Profiling",
    description:
      "Versatile router machines for grooving, profiling, shaping, and edge work.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933053/delta-impex/images/machinery/wood-working-machines/router-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "pantorouter-machines",
    parentSlug: "wood-working-machines",
    name: "Pantorouter Machines",
    short: "Precision Joinery",
    description:
      "Pantorouter machines for accurate mortise-and-tenon joinery, templates, profiling, and repeatable woodworking operations.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1788853769/delta-impex/images/machinery/wood-working-machines/pantorouter/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "drill-machines",
    parentSlug: "wood-working-machines",
    name: "Drill Machines",
    short: "Single & Dual Drill",
    description:
      "Accurate single and dual-head drilling machines for repeatable woodworking operations.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933048/delta-impex/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "multi-boring-machines",
    parentSlug: "wood-working-machines",
    name: "Multi Boring Machines",
    short: "Multi-Point Drilling",
    description:
      "Multi boring machines for fast, accurate, and repeatable drilling of furniture and cabinet components.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041116/delta-impex/images/machinery/wood-working-machines/double-head-multi-boring/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "wood-thickness-planers",
    parentSlug: "wood-working-machines",
    name: "Wood Thickness Planers",
    short: "Thickness Calibration",
    description:
      "Wood thickness planers for producing accurately sized, smooth, and consistent timber stock.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041140/delta-impex/images/machinery/wood-working-machines/wood-thickness-planer/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "cold-press-machines",
    parentSlug: "wood-working-machines",
    name: "Cold Press Machines",
    short: "Panel Pressing",
    description:
      "Cold press machines for bonding, laminating, and pressing wood panels and furniture components.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382051/delta-impex/images/machinery/wood-working-machines/cold-press/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "edge-bending-machines",
    parentSlug: "wood-working-machines",
    name: "Edge Bending Machines",
    short: "Edge Processing",
    description:
      "Edge bending machines for controlled and repeatable edge work on furniture and panel components.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382064/delta-impex/images/machinery/wood-working-machines/edge-bending-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "hot-press-machines",
    parentSlug: "wood-working-machines",
    name: "Hot Press Machines",
    short: "Heated Pressing",
    description:
      "Hot press machines for heated bonding, lamination, and panel production applications.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382077/delta-impex/images/machinery/wood-working-machines/hot-press/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "spray-paint-machines",
    parentSlug: "wood-working-machines",
    name: "Spray Paint Machines",
    short: "Surface Finishing",
    description:
      "Multi-gun spray paint machines for uniform, efficient, and production-ready surface finishing.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382092/delta-impex/images/machinery/wood-working-machines/multi-gun-spray-paint-machine/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "laser-machines",
    parentSlug: "signage-machines",
    name: "Laser Machines",
    short: "Precision Light",
    description:
      "Advanced machines for laser cutting, engraving, marking, and precision signage design work.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933020/delta-impex/images/machinery/laser-machines/laser-machine/lid-closed.png",
    imageFit: "contain",
  },
  {
    slug: "signage-cnc-router-machines",
    parentSlug: "signage-machines",
    name: "CNC Router Machines",
    short: "CNC Routing",
    description:
      "CNC router machines for accurate cutting, shaping, and engraving across signage production materials.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933009/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "fibre-metal-marking-machines",
    parentSlug: "signage-machines",
    name: "Fibre Metal Marking Machines",
    short: "Metal Marking",
    description:
      "Fibre laser metal marking machines for permanent logos, serial numbers, text, and industrial graphics.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041159/delta-impex/images/machinery/signage-machines/fibre-metal-marking/front-view.png",
    imageFit: "contain",
  },
  {
    slug: "flame-polishing-machines",
    parentSlug: "signage-machines",
    name: "Flame Polishing Machines",
    short: "Acrylic Finishing",
    description:
      "Flame polishing machines for smooth, clear, and professional finishing of acrylic edges.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041279/delta-impex/images/machinery/signage-machines/flame-polishing-machine/front-view.png",
    imageFit: "contain",
  },
];

export const LEGACY_CATEGORY_ALIASES = {
  "plastic-machines": "plastic-processing-machines",
  "wood-turning-lathes": "spm-machines",
  "wood-saw-machines": "sawing-machines",
  "wood-sanding-machines": "sanding-machines",
};

export const CATEGORY_TREE = CATEGORIES.map((category) => ({
  ...category,
  subcategories: SUBCATEGORIES.filter((sub) => sub.parentSlug === category.slug),
}));

export const findSubcategory = (slug) =>
  SUBCATEGORIES.find((c) => c.slug === slug);

export const subcategoriesByParent = (slug) =>
  SUBCATEGORIES.filter((c) => c.parentSlug === slug);

export const findCategoryNode = (slug) =>
  CATEGORIES.find((c) => c.slug === slug) || findSubcategory(slug);

export const resolveCategorySlug = (slug) => LEGACY_CATEGORY_ALIASES[slug] || slug;

export const PLASTIC_CATEGORIES = SUBCATEGORIES.filter(
  (c) => c.parentSlug === "plastic-processing-machines"
).map((c) => ({
  ...c,
  href: `/products?category=${c.slug}`,
}));

export const WOODWORKING_CATEGORIES = SUBCATEGORIES.filter(
  (c) => c.parentSlug === "wood-working-machines"
).map((c) => ({
  ...c,
  href: `/products?category=${c.slug}`,
}));

const createNewMachine = ({
  slug,
  name,
  category,
  parentCategory,
  categories,
  parentCategories,
  categoryName,
  description,
  features,
  applications,
  image,
  gallery,
  materialSupport,
  usage = "Industrial / Commercial",
  automationLevel = "Contact for details",
}) => ({
  slug,
  name,
  category,
  parentCategory,
  ...(categories ? { categories } : {}),
  ...(parentCategories ? { parentCategories } : {}),
  categoryName,
  condition: "New",
  description,
  features,
  applications,
  image,
  imageFit: "contain",
  gallery,
  specs: {
    machine_type: name,
    condition: "New",
    power: "Contact for details",
    working_area: "Contact for details",
    material_support: materialSupport,
    usage,
    automation_level: automationLevel,
    availability: "Available",
    price: "Contact for Price",
  },
});

export const PRODUCTS = [
  {
    slug: "cnc-cutting-machine-type-1",
    name: "CNC Cutting Machine - Type 1",
    category: "cnc-machines",
    parentCategory: "wood-working-machines",
    categories: ["cnc-machines", "signage-cnc-router-machines"],
    parentCategories: ["wood-working-machines", "signage-machines"],
    categoryName: "CNC Cutting Machine",
    condition: "Old / New",
    description:
      "A precision CNC cutting machine designed for accurate cutting, shaping, and repeatable production work.",
    features: [
      "High-accuracy CNC cutting",
      "Strong and stable machine body",
      "Suitable for wood, acrylic, MDF, and similar materials",
      "Reliable performance for repeatable production",
    ],
    applications:
      "Furniture manufacturing, signage, panel processing, modular production, and prototyping.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933009/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933009/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-1/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933012/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-1/side-view.png",
    ],
    specs: {
      machine_type: "CNC Cutting Machine - Type 1",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard 4x8 ft",
      material_support: "Wood, Acrylic, MDF, Plastic",
      usage: "Industrial / Commercial",
      automation_level: "Fully Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "cnc-cutting-machine-type-2",
    name: "CNC Cutting Machine - Type 2",
    category: "cnc-machines",
    parentCategory: "wood-working-machines",
    categories: ["cnc-machines", "signage-cnc-router-machines"],
    parentCategories: ["wood-working-machines", "signage-machines"],
    categoryName: "CNC Cutting Machine",
    condition: "Old / New",
    description:
      "An industrial CNC cutting machine with a different configuration for accurate and automated production work.",
    features: [
      "Computer-controlled precision cutting",
      "Smooth and consistent finishing",
      "Strong configuration for industrial workshops",
      "Reliable performance for continuous production",
    ],
    applications:
      "Furniture components, panel processing, signage, workshop production, and custom manufacturing.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933014/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-2/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933014/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-2/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933017/delta-impex/images/machinery/cnc-machines/cnc-cutting-machine-type-2/side-view.png",
    ],
    specs: {
      machine_type: "CNC Cutting Machine - Type 2",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Custom",
      material_support: "Wood, Acrylic, MDF, Plastic",
      usage: "Industrial",
      automation_level: "Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "plastic-moulding-machine-type-1",
    name: "Plastic Moulding Machine - Type 1",
    category: "plastic-injection-moulding-machines",
    parentCategory: "plastic-processing-machines",
    categoryName: "Plastic Injection Moulding Machine",
    condition: "Old / New",
    description:
      "Industrial plastic moulding machine with a robust hydraulic configuration for consistent and accurate production.",
    features: [
      "Heavy-duty hydraulic moulding system",
      "Stable and repeatable production cycle",
      "Strong industrial machine structure",
      "Suitable for continuous manufacturing",
    ],
    applications:
      "Plastic components, household products, industrial parts, packaging items, and custom moulded products.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933024/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933024/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-1/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933025/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-1/side-view-1.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933027/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-1/side-view-2.png",
    ],
    specs: {
      machine_type: "Plastic Moulding Machine - Type 1",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Contact for details",
      material_support: "Thermoplastics",
      usage: "Industrial / Manufacturing",
      automation_level: "Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "plastic-moulding-machine-type-2",
    name: "Plastic Moulding Machine - Type 2",
    category: "plastic-injection-moulding-machines",
    parentCategory: "plastic-processing-machines",
    categoryName: "Plastic Injection Moulding Machine",
    condition: "Old / New",
    description:
      "Enclosed plastic moulding machine designed for controlled, efficient, and repeatable industrial manufacturing.",
    features: [
      "Enclosed production-focused design",
      "Consistent and controlled moulding output",
      "Integrated operating controls",
      "Built for reliable industrial production",
    ],
    applications:
      "Injection-moulded components, consumer products, automotive parts, packaging items, and industrial products.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933028/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-2/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933028/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-2/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933030/delta-impex/images/machinery/plastic-machines/plastic-moulding-machine-type-2/side-view.png",
    ],
    specs: {
      machine_type: "Plastic Moulding Machine - Type 2",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Contact for details",
      material_support: "Thermoplastics",
      usage: "Industrial / Manufacturing",
      automation_level: "Fully Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "wood-working-machine",
    name: "Wood Router Machine",
    category: "wood-router-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Router Machine",
    condition: "Old / New",
    description:
      "A reliable wood router machine for grooving, profiling, edge shaping, and material preparation.",
    features: [
      "Accurate routing and profiling",
      "Strong and stable working platform",
      "Suitable for grooves, edges, and shaping work",
      "Useful for furniture and workshop industries",
    ],
    applications:
      "Furniture manufacturing, cabinetry, joinery, edge profiling, and carpentry workshops.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933053/delta-impex/images/machinery/wood-working-machines/router-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933053/delta-impex/images/machinery/wood-working-machines/router-machine/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933056/delta-impex/images/machinery/wood-working-machines/router-machine/side-view.png",
    ],
    specs: {
      machine_type: "Wood Router",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Custom",
      material_support: "Hardwood, Softwood, MDF, Plywood",
      usage: "Workshop / Industrial",
      automation_level: "Semi-Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "wood-cutting-machine",
    name: "SPM (Special Purpose Machine)",
    category: "spm-machines",
    parentCategory: "wood-working-machines",
    categoryName: "SPM",
    condition: "Old / New",
    description:
      "Special purpose machine designed for focused, repeatable, and application-specific industrial production.",
    features: [
      "Application-specific machine setup",
      "Repeatable production performance",
      "Durable industrial build",
      "Suitable for focused workshop and industrial operations",
    ],
    applications:
      "Custom production tasks, workshop operations, component processing, and industrial manufacturing support.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933057/delta-impex/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933057/delta-impex/images/machinery/wood-working-machines/wood-turning-lathe/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933058/delta-impex/images/machinery/wood-working-machines/wood-turning-lathe/side-view.png",
    ],
    specs: {
      machine_type: "SPM (Special Purpose Machine)",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Contact for details",
      usage: "Commercial",
      automation_level: "Manual / Semi-Auto",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "single-drill-machine",
    name: "Single Drill Machine",
    category: "drill-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Drilling Machine",
    condition: "Old / New",
    description:
      "A dependable single-head drill machine for accurate and repeatable woodworking operations.",
    features: [
      "Accurate single-head drilling",
      "Stable working platform",
      "Simple and reliable operation",
      "Suitable for workshop production",
    ],
    applications:
      "Furniture components, joinery, cabinet work, and general woodworking production.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933043/delta-impex/images/machinery/wood-working-machines/drill-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933043/delta-impex/images/machinery/wood-working-machines/drill-machine/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933046/delta-impex/images/machinery/wood-working-machines/drill-machine/side-view.png",
    ],
    specs: {
      machine_type: "Single Drill",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, MDF, Plywood",
      usage: "Workshop / Commercial",
      automation_level: "Semi-Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "dual-drill-machine",
    name: "Dual Drill Machine",
    category: "drill-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Drilling Machine",
    condition: "Old / New",
    description:
      "A dual-head drill machine built for faster, consistent, and repeatable woodworking production.",
    features: [
      "Dual-head drilling operation",
      "Improved production efficiency",
      "Strong and stable machine body",
      "Consistent drilling accuracy",
    ],
    applications:
      "Furniture production, cabinet components, joinery, and repetitive drilling work.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933048/delta-impex/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933048/delta-impex/images/machinery/wood-working-machines/dual-drill-machine/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933051/delta-impex/images/machinery/wood-working-machines/dual-drill-machine/side-view.png",
    ],
    specs: {
      machine_type: "Dual Drill",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, MDF, Plywood",
      usage: "Workshop / Industrial",
      automation_level: "Semi-Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "laser-cutting-machine",
    name: "Laser Cutting Machine",
    category: "laser-machines",
    parentCategory: "signage-machines",
    categoryName: "Laser Machine",
    condition: "Old / New",
    description:
      "Advanced laser machine for cutting, engraving, and marking work with precision.",
    features: [
      "High precision cutting",
      "Smooth engraving",
      "Suitable for multiple materials",
      "Modern industrial application",
    ],
    applications:
      "Signage, jewelry, metal fabrication, advertising and design industries.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933020/delta-impex/images/machinery/laser-machines/laser-machine/lid-closed.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933020/delta-impex/images/machinery/laser-machines/laser-machine/lid-closed.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933023/delta-impex/images/machinery/laser-machines/laser-machine/lid-open.png",
    ],
    specs: {
      machine_type: "Laser Cutter",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Custom",
      material_support: "Steel, Acrylic, Wood, Leather",
      usage: "Industrial",
      automation_level: "Fully Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "industrial-sanding-machine",
    name: "Industrial Sanding Machine",
    category: "sanding-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Sanding Machine",
    condition: "Old / New",
    description:
      "Industrial sanding machine for surface finishing and smoothing applications.",
    features: [
      "Smooth surface finishing",
      "Useful for wood and industrial materials",
      "Strong machine structure",
      "Efficient finishing process",
    ],
    applications:
      "Furniture finishing, automotive prep, wood industry, surface preparation.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933032/delta-impex/images/machinery/sanding-machines/sanding-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933032/delta-impex/images/machinery/sanding-machines/sanding-machine/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933036/delta-impex/images/machinery/sanding-machines/sanding-machine/side-view.png",
    ],
    specs: {
      machine_type: "Sanding",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, Metal Surfaces",
      usage: "Industrial",
      automation_level: "Semi-Automatic",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  {
    slug: "sawing-machine",
    name: "Rebend Saw",
    category: "sawing-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Rebend Saw Machine",
    condition: "Old / New",
    description:
      "A dependable rebend saw designed for controlled curved, profile, and general woodworking cuts.",
    features: [
      "Controlled curved and profile cutting",
      "Durable machine frame",
      "Suitable for workshop and industrial woodworking",
      "Reliable, repeatable cutting performance",
    ],
    applications:
      "Furniture workshops, curved components, profile cutting, timber processing, and general woodworking production.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933038/delta-impex/images/machinery/sawing-machines/saw-machine/front-view.png",
    imageFit: "contain",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933038/delta-impex/images/machinery/sawing-machines/saw-machine/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1785933041/delta-impex/images/machinery/sawing-machines/saw-machine/side-view.png",
    ],
    specs: {
      machine_type: "Rebend Saw",
      condition: "Old / New",
      power: "Contact for details",
      working_area: "Standard",
      material_support: "Wood, timber, and compatible wood products",
      usage: "Workshop / Industrial",
      automation_level: "Manual / Semi-Auto",
      availability: "Available",
      price: "Contact for Price",
    },
  },
  createNewMachine({
    slug: "3d-printer-type-1",
    name: "3D Printer - Type 1",
    category: "3d-printers",
    parentCategory: "plastic-processing-machines",
    categoryName: "3D Printer",
    description: "A new 3D printer for accurate prototype, model, and custom component production.",
    features: ["Additive manufacturing workflow", "Suitable for prototypes and custom parts", "Production-focused enclosed design", "Repeatable digital fabrication"],
    applications: "Product development, prototyping, models, fixtures, custom parts, and small-batch production.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381863/delta-impex/images/machinery/plastic-machines/3d-printer-type-1/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381863/delta-impex/images/machinery/plastic-machines/3d-printer-type-1/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381868/delta-impex/images/machinery/plastic-machines/3d-printer-type-1/side-view.png",
    ],
    materialSupport: "Contact for compatible materials",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "3d-printer-type-2",
    name: "3D Printer - Type 2",
    category: "3d-printers",
    parentCategory: "plastic-processing-machines",
    categoryName: "3D Printer",
    description: "A new 3D printing system for detailed models, prototypes, and production development work.",
    features: ["Digital additive production", "Detailed component output", "Enclosed machine configuration", "Suitable for repeatable print jobs"],
    applications: "Design validation, product prototypes, architectural models, fixtures, and custom components.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381876/delta-impex/images/machinery/plastic-machines/3d-printer-type-2/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381876/delta-impex/images/machinery/plastic-machines/3d-printer-type-2/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381884/delta-impex/images/machinery/plastic-machines/3d-printer-type-2/side-view.png",
    ],
    materialSupport: "Contact for compatible materials",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "3d-printer-type-3",
    name: "3D Printer - Type 3",
    category: "3d-printers",
    parentCategory: "plastic-processing-machines",
    categoryName: "3D Printer",
    description: "A new 3D printer configuration for custom designs, models, and additive manufacturing requirements.",
    features: ["Additive layer production", "Suitable for custom designs", "Integrated operating enclosure", "Consistent prototype development"],
    applications: "Prototypes, educational models, product development, jigs, fixtures, and custom manufacturing.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381892/delta-impex/images/machinery/plastic-machines/3d-printer-type-3/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381892/delta-impex/images/machinery/plastic-machines/3d-printer-type-3/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381900/delta-impex/images/machinery/plastic-machines/3d-printer-type-3/side-view.png",
    ],
    materialSupport: "Contact for compatible materials",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "hot-hopper-type-1",
    name: "Hot Hopper - Type 1",
    category: "hot-hoppers",
    parentCategory: "plastic-processing-machines",
    categoryName: "Hot Hopper",
    description: "A new hot hopper for drying and preparing plastic raw material before processing.",
    features: ["Material drying support", "Production-ready hopper design", "Consistent material preparation", "Suitable for plastic processing lines"],
    applications: "Plastic moulding, raw-material drying, moisture control, and production material preparation.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381908/delta-impex/images/machinery/plastic-machines/hopper-type-1/front-view.png",
    gallery: ["https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381908/delta-impex/images/machinery/plastic-machines/hopper-type-1/front-view.png"],
    materialSupport: "Plastic raw materials",
    automationLevel: "Semi-Automatic",
  }),
  createNewMachine({
    slug: "hot-hopper-type-2",
    name: "Hot Hopper - Type 2",
    category: "hot-hoppers",
    parentCategory: "plastic-processing-machines",
    categoryName: "Hot Hopper",
    description: "A new hot hopper configuration for controlled drying and handling of plastic processing material.",
    features: ["Controlled material preparation", "Accessible open and closed configuration", "Industrial hopper construction", "Supports repeatable production"],
    applications: "Injection moulding support, plastic material drying, storage, and production-line feeding.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381915/delta-impex/images/machinery/plastic-machines/hopper-type-2/lid-closed.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381915/delta-impex/images/machinery/plastic-machines/hopper-type-2/lid-closed.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381923/delta-impex/images/machinery/plastic-machines/hopper-type-2/lid-open.png",
    ],
    materialSupport: "Plastic raw materials",
    automationLevel: "Semi-Automatic",
  }),
  createNewMachine({
    slug: "hot-runner-system-type-1",
    name: "Hot Runner System - Type 1",
    category: "hot-runner-systems",
    parentCategory: "plastic-processing-machines",
    categoryName: "Hot Runner System",
    description: "A new hot runner system for controlled melt delivery in injection moulding applications.",
    features: ["Controlled melt-flow support", "Multi-zone controller configuration", "Suitable for moulding production", "Organized operating interface"],
    applications: "Plastic injection moulding, mould temperature control, production tooling, and material-flow management.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381931/delta-impex/images/machinery/plastic-machines/hot-runner-system-type-1/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381931/delta-impex/images/machinery/plastic-machines/hot-runner-system-type-1/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381939/delta-impex/images/machinery/plastic-machines/hot-runner-system-type-1/side-view.png",
    ],
    materialSupport: "Plastic injection moulding materials",
  }),
  createNewMachine({
    slug: "hot-runner-system-type-2",
    name: "Hot Runner System - Type 2",
    category: "hot-runner-systems",
    parentCategory: "plastic-processing-machines",
    categoryName: "Hot Runner System",
    description: "A new hot runner control system for stable and repeatable injection moulding workflows.",
    features: ["Multi-channel control arrangement", "Production-focused operating panel", "Supports stable processing conditions", "Compact controller configuration"],
    applications: "Injection moulding tools, mould heating control, material-flow management, and repeat production.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381948/delta-impex/images/machinery/plastic-machines/hot-runner-system-type-2/front-view.png",
    gallery: ["https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381948/delta-impex/images/machinery/plastic-machines/hot-runner-system-type-2/front-view.png"],
    materialSupport: "Plastic injection moulding materials",
  }),
  createNewMachine({
    slug: "injection-moulding-robotic-arm-type-1",
    name: "Injection Moulding Robotic Arm - Type 1",
    category: "injection-moulding-robotic-arms",
    parentCategory: "plastic-processing-machines",
    categoryName: "Injection Moulding Robotic Arm",
    description: "A new robotic arm system for automated part handling around injection moulding machines.",
    features: ["Automated part-handling support", "Repeatable movement workflow", "Designed for moulding-machine integration", "Helps streamline production cycles"],
    applications: "Moulded-part removal, component transfer, production handling, and injection moulding automation.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381956/delta-impex/images/machinery/plastic-machines/injection-moulding-robotic-arm-type-1/side-view-1.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381956/delta-impex/images/machinery/plastic-machines/injection-moulding-robotic-arm-type-1/side-view-1.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381963/delta-impex/images/machinery/plastic-machines/injection-moulding-robotic-arm-type-1/side-view-2.png",
    ],
    materialSupport: "Moulded plastic components",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "injection-moulding-robotic-arm-type-2",
    name: "Injection Moulding Robotic Arm - Type 2",
    category: "injection-moulding-robotic-arms",
    parentCategory: "plastic-processing-machines",
    categoryName: "Injection Moulding Robotic Arm",
    description: "A new robotic handling system for repeatable automation in injection moulding production.",
    features: ["Automated handling configuration", "Suitable for repeat production", "Integrated control arrangement", "Supports safer part transfer"],
    applications: "Injection moulding automation, part extraction, placement, transfer, and production handling.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381971/delta-impex/images/machinery/plastic-machines/injection-moulding-robotic-arm-type-2/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381971/delta-impex/images/machinery/plastic-machines/injection-moulding-robotic-arm-type-2/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381978/delta-impex/images/machinery/plastic-machines/injection-moulding-robotic-arm-type-2/side-view.png",
    ],
    materialSupport: "Moulded plastic components",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "plastic-crusher-type-1",
    name: "Plastic Crusher - Type 1",
    category: "plastic-crushers",
    parentCategory: "plastic-processing-machines",
    categoryName: "Plastic Crusher",
    description: "A new industrial plastic crusher for reducing plastic scrap into manageable material sizes.",
    features: ["Plastic size-reduction workflow", "Heavy-duty machine structure", "Material collection support", "Suitable for recycling operations"],
    applications: "Plastic scrap reduction, recycling preparation, rejected-part processing, and material recovery.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381986/delta-impex/images/machinery/plastic-machines/plastic-crusher-type-1/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381986/delta-impex/images/machinery/plastic-machines/plastic-crusher-type-1/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787381993/delta-impex/images/machinery/plastic-machines/plastic-crusher-type-1/side-view.png",
    ],
    materialSupport: "Plastic scrap and rejected parts",
  }),
  createNewMachine({
    slug: "plastic-crusher-type-2",
    name: "Plastic Crusher - Type 2",
    category: "plastic-crushers",
    parentCategory: "plastic-processing-machines",
    categoryName: "Plastic Crusher",
    description: "A new plastic crushing machine for production scrap handling and recycling preparation.",
    features: ["Industrial crushing arrangement", "Supports scrap-size reduction", "Production-ready construction", "Useful for material recovery"],
    applications: "Plastic recycling, factory scrap handling, size reduction, reprocessing, and material preparation.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382000/delta-impex/images/machinery/plastic-machines/plastic-crusher-type-2/side-view-1.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382000/delta-impex/images/machinery/plastic-machines/plastic-crusher-type-2/side-view-1.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382008/delta-impex/images/machinery/plastic-machines/plastic-crusher-type-2/side-view-2.png",
    ],
    materialSupport: "Plastic scrap and rejected parts",
  }),
  createNewMachine({
    slug: "robotic-spray-arm",
    name: "Robotic Spray Arm",
    category: "robotic-spray-arms",
    parentCategory: "plastic-processing-machines",
    categoryName: "Robotic Spray Arm",
    description: "A new robotic spray arm for controlled and repeatable automated surface-finishing work.",
    features: ["Automated spray movement", "Repeatable finishing workflow", "Production integration support", "Consistent application coverage"],
    applications: "Automated coating, painting, surface finishing, component spraying, and production lines.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382014/delta-impex/images/machinery/plastic-machines/robotic-spray-arm/front-view.png",
    gallery: ["https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382014/delta-impex/images/machinery/plastic-machines/robotic-spray-arm/front-view.png"],
    materialSupport: "Plastic and compatible production components",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "uv-dryer",
    name: "UV Dryer",
    category: "uv-dryers",
    parentCategory: "plastic-processing-machines",
    categoryName: "UV Dryer",
    description: "A new UV drying machine for fast curing in printing, coating, and finishing workflows.",
    features: ["UV curing workflow", "Conveyor-based production design", "Suitable for printed and coated surfaces", "Supports consistent finishing"],
    applications: "UV ink curing, coating lines, printing production, signage, and surface finishing.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382021/delta-impex/images/machinery/plastic-machines/uv-dryer/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382021/delta-impex/images/machinery/plastic-machines/uv-dryer/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382029/delta-impex/images/machinery/plastic-machines/uv-dryer/side-view.png",
    ],
    materialSupport: "Printed and coated production materials",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "uv-printer",
    name: "UV Printer",
    category: "uv-printers",
    parentCategory: "plastic-processing-machines",
    categoryName: "UV Printer",
    description: "A new UV printer for direct, detailed, and versatile production printing applications.",
    features: ["Direct UV printing workflow", "Wide production-bed configuration", "Suitable for detailed graphics", "Supports multiple compatible surfaces"],
    applications: "Signage, decorative panels, promotional products, custom printing, and industrial graphics.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382036/delta-impex/images/machinery/plastic-machines/uv-printer/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382036/delta-impex/images/machinery/plastic-machines/uv-printer/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382044/delta-impex/images/machinery/plastic-machines/uv-printer/side-view.png",
    ],
    materialSupport: "Contact for compatible print materials",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "cold-press-machine",
    name: "Cold Press Machine",
    category: "cold-press-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Cold Press Machine",
    description: "A new cold press machine for bonding, laminating, and pressing woodworking panels.",
    features: ["Panel pressing workflow", "Strong industrial frame", "Suitable for bonding and lamination", "Large working-platform configuration"],
    applications: "Furniture panels, plywood bonding, laminates, doors, cabinetry, and woodworking production.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382051/delta-impex/images/machinery/wood-working-machines/cold-press/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382051/delta-impex/images/machinery/wood-working-machines/cold-press/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382058/delta-impex/images/machinery/wood-working-machines/cold-press/side-view.png",
    ],
    materialSupport: "Wood panels, plywood, laminates",
    automationLevel: "Semi-Automatic",
  }),
  createNewMachine({
    slug: "edge-bending-machine",
    name: "Edge Bending Machine",
    category: "edge-bending-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Edge Bending Machine",
    description: "A new edge bending machine for controlled processing of furniture and panel edges.",
    features: ["Controlled edge-processing workflow", "Compact production configuration", "Integrated operating controls", "Suitable for repeatable panel work"],
    applications: "Furniture components, cabinets, panel edges, modular interiors, and woodworking workshops.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382064/delta-impex/images/machinery/wood-working-machines/edge-bending-machine/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382064/delta-impex/images/machinery/wood-working-machines/edge-bending-machine/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382070/delta-impex/images/machinery/wood-working-machines/edge-bending-machine/side-view.png",
    ],
    materialSupport: "Wood and compatible panel materials",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "hot-press-machine",
    name: "Hot Press Machine",
    category: "hot-press-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Hot Press Machine",
    description: "A new hot press machine for heated bonding, lamination, and wood-panel production.",
    features: ["Heated pressing workflow", "Heavy-duty multi-level frame", "Suitable for panel lamination", "Production-focused construction"],
    applications: "Plywood, laminates, furniture panels, doors, board production, and woodworking manufacturing.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382077/delta-impex/images/machinery/wood-working-machines/hot-press/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382077/delta-impex/images/machinery/wood-working-machines/hot-press/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382085/delta-impex/images/machinery/wood-working-machines/hot-press/side-view.png",
    ],
    materialSupport: "Wood panels, plywood, laminates",
    automationLevel: "Semi-Automatic",
  }),
  createNewMachine({
    slug: "multi-gun-spray-paint-machine",
    name: "Multi-Gun Spray Paint Machine",
    category: "spray-paint-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Spray Paint Machine",
    description: "A new multi-gun spray paint machine for uniform and efficient production finishing.",
    features: ["Multi-gun spray configuration", "Conveyor-based finishing workflow", "Consistent surface coverage", "Suitable for repeat production"],
    applications: "Furniture finishing, doors, panels, cabinets, decorative components, and production coating lines.",
    image: "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382092/delta-impex/images/machinery/wood-working-machines/multi-gun-spray-paint-machine/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382092/delta-impex/images/machinery/wood-working-machines/multi-gun-spray-paint-machine/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1787382101/delta-impex/images/machinery/wood-working-machines/multi-gun-spray-paint-machine/working-view.png",
    ],
    materialSupport: "Wood, panels, and compatible production components",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "pantorouter",
    name: "Pantorouter",
    category: "pantorouter-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Pantorouter Machine",
    description:
      "A precision Pantorouter for creating accurate mortise-and-tenon joints, routed profiles, and repeatable woodworking components.",
    features: [
      "Precision mortise-and-tenon joinery",
      "Template-guided routing for repeatable results",
      "Adjustable worktable and secure clamping support",
      "Suitable for detailed furniture and workshop production",
    ],
    applications:
      "Furniture joinery, mortise-and-tenon work, routed profiles, chair and table components, cabinetry, and custom woodworking.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1788853769/delta-impex/images/machinery/wood-working-machines/pantorouter/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1788853769/delta-impex/images/machinery/wood-working-machines/pantorouter/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1788853776/delta-impex/images/machinery/wood-working-machines/pantorouter/working-view.png",
    ],
    materialSupport: "Solid wood, hardwood, softwood, and compatible wood products",
    usage: "Woodworking Workshop / Furniture Production",
    automationLevel: "Manual / Template-Guided",
  }),
  createNewMachine({
    slug: "circular-saw",
    name: "Circular Saw",
    category: "sawing-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Circular Saw Machine",
    description:
      "A robust circular saw for clean, accurate, and repeatable timber cutting in woodworking production.",
    features: [
      "Precision circular cutting blade",
      "Adjustable guide and working table",
      "Stable heavy-duty machine construction",
      "Suitable for repeat workshop production",
    ],
    applications:
      "Timber sizing, straight cutting, furniture components, joinery stock, and general woodworking production.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041104/delta-impex/images/machinery/wood-working-machines/circular-saw/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041104/delta-impex/images/machinery/wood-working-machines/circular-saw/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041110/delta-impex/images/machinery/wood-working-machines/circular-saw/working-view.png",
    ],
    materialSupport: "Solid wood, hardwood, softwood, and timber",
    usage: "Woodworking Workshop / Furniture Production",
    automationLevel: "Manual / Semi-Automatic",
  }),
  createNewMachine({
    slug: "double-head-multi-boring-machine",
    name: "Double Head Multi Boring Machine",
    category: "multi-boring-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Multi Boring Machine",
    description:
      "A double-head multi boring machine for fast, accurate, and repeatable drilling of furniture panels and components.",
    features: [
      "Double-head multi-point boring configuration",
      "Accurate and repeatable hole positioning",
      "Secure workpiece support and clamping",
      "Suitable for batch furniture production",
    ],
    applications:
      "Cabinet panels, modular furniture, shelving, dowel drilling, fittings, and production joinery.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041116/delta-impex/images/machinery/wood-working-machines/double-head-multi-boring/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041116/delta-impex/images/machinery/wood-working-machines/double-head-multi-boring/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041121/delta-impex/images/machinery/wood-working-machines/double-head-multi-boring/working-view.png",
    ],
    materialSupport: "Wood, MDF, plywood, particle board, and furniture panels",
    usage: "Furniture / Cabinet Production",
    automationLevel: "Semi-Automatic",
  }),
  createNewMachine({
    slug: "panel-saw",
    name: "Panel Saw",
    category: "panel-saw-machines",
    parentCategory: "wood-working-machines",
    categoryName: "Panel Saw Machine",
    description:
      "A precision panel saw for clean, square, and repeatable sizing of boards and furniture panels.",
    features: [
      "Large sliding table for panel support",
      "Accurate fence and cutting alignment",
      "Protective blade guard and dust outlet",
      "Designed for clean production cuts",
    ],
    applications:
      "Plywood, MDF, particle board, laminated panels, cabinet parts, doors, and modular furniture.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041126/delta-impex/images/machinery/wood-working-machines/panel-saw/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041126/delta-impex/images/machinery/wood-working-machines/panel-saw/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041133/delta-impex/images/machinery/wood-working-machines/panel-saw/working-view.png",
    ],
    materialSupport: "Plywood, MDF, particle board, laminates, and wood panels",
    usage: "Panel Processing / Furniture Production",
    automationLevel: "Manual / Semi-Automatic",
  }),
  createNewMachine({
    slug: "wood-thickness-planer",
    name: "Wood Thickness Planer",
    category: "wood-thickness-planers",
    parentCategory: "wood-working-machines",
    categoryName: "Thickness Planer",
    description:
      "A wood thickness planer for accurately sizing timber and producing smooth, parallel surfaces.",
    features: [
      "Adjustable thickness control",
      "Stable roller-assisted material feeding",
      "Consistent surface calibration",
      "Heavy-duty woodworking construction",
    ],
    applications:
      "Timber calibration, furniture stock preparation, joinery, doors, frames, and workshop production.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041140/delta-impex/images/machinery/wood-working-machines/wood-thickness-planer/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041140/delta-impex/images/machinery/wood-working-machines/wood-thickness-planer/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041146/delta-impex/images/machinery/wood-working-machines/wood-thickness-planer/working-view.png",
    ],
    materialSupport: "Solid wood, hardwood, softwood, and timber",
    usage: "Timber Preparation / Furniture Production",
    automationLevel: "Semi-Automatic",
  }),
  createNewMachine({
    slug: "wide-belt-sander",
    name: "Wide Belt Sander",
    category: "wide-belt-sanders",
    parentCategory: "wood-working-machines",
    categoryName: "Wide Belt Sander",
    description:
      "An industrial wide belt sander for uniform calibration, smoothing, and production-quality panel finishing.",
    features: [
      "Wide sanding belt for consistent coverage",
      "Conveyor-fed production workflow",
      "Adjustable sanding and calibration control",
      "Enclosed heavy-duty machine body",
    ],
    applications:
      "Furniture panels, doors, plywood, MDF, solid wood components, calibration, and surface finishing.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041152/delta-impex/images/machinery/wood-working-machines/wide-belt-sander/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041152/delta-impex/images/machinery/wood-working-machines/wide-belt-sander/front-view.png",
    ],
    materialSupport: "Solid wood, plywood, MDF, veneer, and furniture panels",
    usage: "Panel Calibration / Surface Finishing",
    automationLevel: "Automatic",
  }),
  createNewMachine({
    slug: "fibre-metal-marking-machine",
    name: "Fibre Metal Marking Machine",
    category: "fibre-metal-marking-machines",
    parentCategory: "signage-machines",
    categoryName: "Fibre Metal Marking Machine",
    description:
      "A precision fibre laser marking machine for permanent, detailed marking on metals and industrial components.",
    features: [
      "High-contrast permanent metal marking",
      "Computer-controlled design and positioning",
      "Adjustable marking head and work platform",
      "Suitable for fine text, logos, and serial numbers",
    ],
    applications:
      "Metal labels, nameplates, serial numbers, QR codes, logos, tools, components, and signage production.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041159/delta-impex/images/machinery/signage-machines/fibre-metal-marking/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041159/delta-impex/images/machinery/signage-machines/fibre-metal-marking/front-view.png",
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041167/delta-impex/images/machinery/signage-machines/fibre-metal-marking/working-view.png",
    ],
    materialSupport: "Stainless steel, aluminium, brass, coated metals, and compatible materials",
    usage: "Signage / Industrial Metal Marking",
    automationLevel: "Computer-Controlled",
  }),
  createNewMachine({
    slug: "flame-polishing-machine",
    name: "Flame Polishing Machine",
    category: "flame-polishing-machines",
    parentCategory: "signage-machines",
    categoryName: "Flame Polishing Machine",
    description:
      "A compact flame polishing machine for producing smooth, clear, and professional acrylic edges.",
    features: [
      "Focused flame for controlled edge polishing",
      "Portable and compact machine design",
      "Adjustable operating pressure",
      "Suitable for clear acrylic finishing",
    ],
    applications:
      "Acrylic letters, display pieces, signage edges, awards, decorative components, and fabrication finishing.",
    image:
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041279/delta-impex/images/machinery/signage-machines/flame-polishing-machine/front-view.png",
    gallery: [
      "https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto:best/v1789041279/delta-impex/images/machinery/signage-machines/flame-polishing-machine/front-view.png",
    ],
    materialSupport: "Acrylic and compatible thermoplastic edges",
    usage: "Signage / Acrylic Fabrication",
    automationLevel: "Manual",
  }),
];

export const findProduct = (slug) =>
  PRODUCTS.find((p) => p.slug === slug);

export const findCategory = (slug) =>
  findCategoryNode(resolveCategorySlug(slug));

export const productsByCategory = (slug) => {
  const resolved = resolveCategorySlug(slug);
  return PRODUCTS.filter(
    (p) =>
      p.slug === resolved ||
      p.category === resolved ||
      p.parentCategory === resolved ||
      p.categories?.includes(resolved) ||
      p.parentCategories?.includes(resolved)
  );
};

