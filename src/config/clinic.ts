export const clinic = {
  name: "Alimentación América",
  logo: "/images/logo.png",
  tagline: "Tu tienda de alimentación de confianza en Albacete",
  description: "Alimentación América es tu tienda de barrio en Albacete donde encontrarás todo lo que necesitas para el día a día. Ofrecemos gran variedad de productos frescos, pan y dulces recién hechos, además de servicio de paquetería para tu comodidad. Atención cercana y personalizada con un equipo que te atiende con rapidez y profesionalidad. Tu compra diaria, más fácil y cerca de casa.",
  colors: {
    primary: "#a98752",
    secondary: "#181722",
    accent: "#181722",
    neutral: "#f8f5f1"
  },
  phone: "648 08 80 60",
  whatsapp: "+34648088060",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros servicios de nutrición.",
  email: "",
  address: {
    street: "Av. Jose Prat, 14, 02008 Albacete, Spain",
    city: "Albacete",
    province: "",
    postalCode: "02008",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=5967283383011815717&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Alimentaci%C3%B3n%20Am%C3%A9rica%20%4038.9784%2C-1.84026&z=16&output=embed",
  coordinates: {
    lat: 38.9784,
    lng: -1.84026
  },
  schedule: [
    {
      days: "lunes - martes",
      hours: "9:00–14:30, 18:00–21:00"
    },
    {
      days: "miércoles",
      hours: "9:00–14:30, 17:30–19:30"
    },
    {
      days: "jueves - domingo",
      hours: "9:00–14:30, 18:00–21:00"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4,
    count: 30,
    url: "https://maps.google.com/?cid=5967283383011815717&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "José Martínez",
        rating: 5,
        text: "Gran sitio donde poder comprar las cosillas del día a día. Atencion más que recomendada… Traen mucha variedad de dulces y pan, y tienen un poquito de todo.\nMe parece de mal gusto poner una reseña negativa y criticar a esta empresa por el tema de paquetería, cuando simplemente hacen de intermediarios y a los vecinos un gran servicio a pie de casa… Seguir así!!",
        date: "Hace 2 meses"
      },
      {
        author: "Alberto Sánchez Sáez",
        rating: 5,
        text: "Todo perfecto, amable, buen trato servicio y muy atentas las chicas, cuando alguien se queja por tonterías es porque no tienen espera, todos los comercios necesitan un mínimo de espera para ser atendidos… y te atienden lo más rápido posible\nRecomendable 100%",
        date: "Hace 5 meses"
      },
      {
        author: "Pablo Sánchez",
        rating: 5,
        text: "Es imposible que una tienda de ese tamaño haga más cosas, tiene de todo y a un precio correcto. Por ponerle un pero, la apertura a las 18:00 se le hace un poco tarde en ocasiones",
        date: "Hace 3 meses"
      }
    ]
  },
  services: [
    {
      id: "productos-frescos",
      name: "Productos Frescos Diarios",
      description: "Selección diaria de productos frescos de calidad para tu alimentación. Frutas, verduras, lácteos y todo lo necesario para una dieta equilibrada. Renovamos nuestro stock constantemente para garantizar la máxima frescura.",
      benefits: [
        "Productos frescos renovados diariamente",
        "Calidad garantizada en cada compra",
        "Variedad adaptada a tus necesidades"
      ],
      icon: "Apple"
    },
    {
      id: "panaderia-dulces",
      name: "Panadería y Dulces",
      description: "Gran variedad de pan recién hecho y dulces artesanales que llegan cada día. Desde pan de barra tradicional hasta bollería variada para todos los gustos. Perfecto para empezar el día con energía o disfrutar de un capricho dulce.",
      benefits: [
        "Pan recién horneado a diario",
        "Amplia variedad de dulces y bollería",
        "Sabor tradicional y calidad artesanal"
      ],
      icon: "Heart"
    },
    {
      id: "alimentacion-basica",
      name: "Alimentación Básica",
      description: "Todo lo esencial para tu despensa en un solo lugar. Conservas, legumbres, pasta, arroz, aceites y productos básicos de alimentación. No hace falta ir lejos para encontrar lo que necesitas en tu día a día.",
      benefits: [
        "Un poquito de todo lo que necesitas",
        "Precios correctos y competitivos",
        "Ahorra tiempo comprando cerca de casa"
      ],
      icon: "Target"
    },
    {
      id: "bebidas-refrescos",
      name: "Bebidas y Refrescos",
      description: "Amplio surtido de bebidas para toda la familia. Agua, refrescos, zumos, bebidas energéticas y más. Mantén tu nevera siempre llena sin tener que desplazarte lejos de tu barrio.",
      benefits: [
        "Variedad de marcas y opciones",
        "Formato individual y familiar",
        "Siempre frío y listo para llevar"
      ],
      icon: "TrendingDown"
    },
    {
      id: "servicio-paqueteria",
      name: "Servicio de Paquetería",
      description: "Punto de recogida y envío de paquetes a pie de calle. Hacemos de intermediarios para ofrecerte comodidad sin moverte de tu barrio. Un servicio extra que facilita tu día a día.",
      benefits: [
        "Recoge tus paquetes sin desplazamientos",
        "Envía cómodamente desde el barrio",
        "Horario amplio adaptado a ti"
      ],
      icon: "Target"
    },
    {
      id: "productos-snacks",
      name: "Snacks y Aperitivos",
      description: "Selección de snacks, patatas, frutos secos y aperitivos para cualquier momento. Ideal para tener siempre algo a mano en casa o para llevar contigo. Variedad para todos los gustos y ocasiones.",
      benefits: [
        "Opciones dulces y saladas",
        "Formatos individuales y para compartir",
        "Perfectos para cualquier ocasión"
      ],
      icon: "Apple"
    },
    {
      id: "productos-higiene",
      name: "Productos de Higiene y Limpieza",
      description: "Artículos básicos de higiene personal y limpieza del hogar. Desde gel y champú hasta detergentes y productos de limpieza. Todo lo necesario para mantener tu hogar impecable.",
      benefits: [
        "Productos de primeras marcas",
        "Lo esencial siempre disponible",
        "Compra rápida sin colas"
      ],
      icon: "Heart"
    },
    {
      id: "atencion-personalizada",
      name: "Atención Personalizada",
      description: "Nuestro equipo te atiende con amabilidad y rapidez, conociendo tus preferencias. Un trato cercano que hace la diferencia en tu experiencia de compra. Como en las tiendas de toda la vida.",
      benefits: [
        "Trato familiar y cercano",
        "Atención rápida y eficiente",
        "Te conocemos y cuidamos cada detalle"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Visítanos",
      description: "Pásate por nuestra tienda en Albacete en el horario que mejor te venga. Estamos abiertos para atenderte y ayudarte a encontrar lo que necesitas. También puedes llamarnos para consultar disponibilidad de productos."
    },
    {
      step: 2,
      title: "Encuentra lo que Necesitas",
      description: "Nuestro equipo te ayudará a localizar todos los productos de tu lista. Tenemos un poquito de todo organizado para que tu compra sea rápida y cómoda. Si no encuentras algo, pregúntanos."
    },
    {
      step: 3,
      title: "Pago Rápido",
      description: "Te atendemos con la mayor rapidez posible para que no pierdas tiempo. Aceptamos diferentes métodos de pago para tu comodidad. Un servicio ágil respetando siempre el tiempo de cada cliente."
    },
    {
      step: 4,
      title: "Vuelve Cuando Quieras",
      description: "Estaremos aquí para tu próxima compra con productos frescos y la misma atención de siempre. Nos gusta verte y cuidarte como parte de nuestro barrio. Tu tienda de confianza para el día a día."
    }
  ],
  whyUs: [
    {
      title: "Valorados por Nuestros Clientes",
      description: "Con una puntuación de 4 estrellas en Google basada en 30 reseñas reales, nuestros clientes destacan la variedad de productos, la atención personalizada y el servicio rápido. Un equipo amable que te atiende como en las tiendas de toda la vida.",
      icon: "Award"
    },
    {
      title: "Variedad y Productos Frescos",
      description: "Gran surtido de pan y dulces recién hechos cada día, además de un poquito de todo lo que necesitas. A pesar del tamaño, conseguimos tener variedad en productos frescos, alimentación básica y más, todo a precios correctos.",
      icon: "ShoppingBag"
    },
    {
      title: "Cercanía y Comodidad",
      description: "Tu tienda de barrio en Albacete donde hacer la compra del día a día sin desplazamientos. Incluimos servicio de paquetería como valor añadido para facilitarte la vida. Todo lo esencial a pie de calle.",
      icon: "MapPin"
    },
    {
      title: "Atención Rápida y Profesional",
      description: "Las chicas del equipo te atienden con amabilidad, buen trato y la mayor rapidez posible. Entendemos que tu tiempo es valioso y nos esforzamos por hacer tu compra ágil y cómoda, cuidando cada detalle del servicio.",
      icon: "Clock"
    }
  ],
  team: [
    {
      name: "Equipo de Alimentación América",
      role: "Dietistas-Nutricionistas",
      image: "/images/team/placeholder.jpg",
      bio: "Dietistas-nutricionistas comprometidos con tu salud. En Alimentación América diseñamos planes nutricionales personalizados para alcanzar tus objetivos."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Alimentación América - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "Alimentación América - Imagen 2"
    }
  ],
  faq: [
    {
      question: "¿Qué horario tiene Alimentación América?",
      answer: "Alimentación América abre por la tarde a partir de las 18:00 horas. Sabemos que en ocasiones este horario puede parecer un poco tarde, pero intentamos adaptarnos a las necesidades del barrio. Te recomendamos llamar al 648 08 80 60 si tienes dudas sobre el horario de un día específico o necesitas confirmar disponibilidad de algún producto."
    },
    {
      question: "¿Qué tipo de productos puedo encontrar?",
      answer: "En Alimentación América tenemos un poquito de todo lo que necesitas para tu día a día. Gran variedad de pan y dulces recién hechos, productos frescos, alimentación básica, bebidas, snacks y artículos de higiene. A pesar del tamaño de la tienda, nos esforzamos por tener la mayor variedad posible a precios correctos."
    },
    {
      question: "¿Ofrecen servicio de paquetería?",
      answer: "Sí, Alimentación América actúa como punto de recogida y envío de paquetes. Hacemos de intermediarios para ofrecerte este servicio adicional a pie de casa, facilitando que no tengas que desplazarte. Es un servicio muy valorado por nuestros vecinos del barrio que pueden recoger sus pedidos cómodamente."
    },
    {
      question: "¿Cómo es la atención al cliente?",
      answer: "Nuestro equipo, especialmente las chicas que te atienden, se caracteriza por su amabilidad, buen trato y profesionalidad. Te atendemos lo más rápido posible, aunque como en cualquier comercio puede haber un mínimo de espera en momentos de mayor afluencia. Valoramos mucho la cercanía y el trato personalizado con cada cliente."
    },
    {
      question: "¿Los precios son competitivos?",
      answer: "En Alimentación América ofrecemos precios correctos y justos para una tienda de barrio. Aunque no somos un supermercado grande, compensamos con la cercanía, la comodidad de no tener que desplazarte y la atención personalizada. Nuestros clientes valoran la relación calidad-precio y el ahorro de tiempo."
    },
    {
      question: "¿Tienen pan y dulces frescos cada día?",
      answer: "Sí, recibimos pan y una gran variedad de dulces frescos diariamente. Es uno de nuestros puntos fuertes según nuestros clientes. Puedes encontrar desde pan de barra tradicional hasta bollería variada. Si buscas algo específico, te recomendamos venir temprano o llamarnos para reservarlo."
    },
    {
      question: "¿Puedo llamar para consultar productos?",
      answer: "Por supuesto, puedes llamar al 648 08 80 60 para consultar la disponibilidad de productos específicos o cualquier duda que tengas. El equipo de Alimentación América estará encantado de atenderte por teléfono y ayudarte con lo que necesites antes de tu visita."
    },
    {
      question: "¿Por qué elegir Alimentación América?",
      answer: "Alimentación América cuenta con una valoración de 4 estrellas sobre 5 en Google con 30 reseñas de clientes reales. Nuestros vecinos destacan la variedad de productos, la atención amable y rápida, y la comodidad de tener todo lo necesario a pie de casa. Somos tu tienda de confianza en Albacete donde el trato cercano marca la diferencia."
    }
  ],
  seo: {
    titleTemplate: "%s | Alimentación América",
    defaultTitle: "Alimentación América - Tu Tienda de Barrio en Albacete",
    defaultDescription: "Tienda de alimentación en Albacete con productos frescos, pan y dulces diarios, y servicio de paquetería. Atención cercana y todo lo que necesitas a pie de casa. ☎️ 648 08 80 60",
    keywords: [
      "tienda de alimentación Albacete",
      "Alimentación América",
      "productos frescos Albacete",
      "panadería Albacete",
      "tienda de barrio Albacete",
      "servicio paquetería Albacete",
      "dulces frescos Albacete",
      "alimentación básica Albacete",
      "tienda convenience Albacete",
      "compra diaria Albacete",
      "tienda cerca de casa Albacete",
      "alimentación América Albacete"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Alimentación América",
    cif: "",
    registeredAddress: "Av. Jose Prat, 14, 02008 Albacete, Spain, Albacete"
  },
  heroHeadline: [
    "Tu Centro de",
    "Nutrición",
    "en Albacete"
  ],
  heroDescription: "En Alimentación América encontrarás productos frescos y de calidad para tu día a día, con la cercanía y el trato familiar que buscas. Pan recién hecho, dulces variados y todo lo esencial a pie de calle en Albacete, atendido por un equipo que cuida cada detalle.",
  specialty: "Tienda de barrio",
  ctaLabel: "Tu Plan Nutricional",
  ctaHeadline: "¿Necesitas hacer la compra sin complicaciones?",
  ctaDescription: "Visítanos o llámanos y descubre la comodidad de tener tu tienda de confianza cerca de casa. Productos frescos, atención personalizada y todo lo que necesitas en un solo lugar.",
  statsLabel: "Pacientes",
  schemaType: "DieteticsAndNutrition",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
