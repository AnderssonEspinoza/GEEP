export const COMPANY = {
  legalName: 'Green Energy Electric Perú S.A.C.',
  brand: 'GEEP',
  shortDescription:
    'Ingeniería eléctrica especializada para infraestructura crítica en minería, industria y energía.',
  phonePrimary: '+51 939567355',
  phoneSecondary: '+51 986789482',
  email: 'comercial@geep-pe.com',
  formRecipientEmail: 'Josue.leon@geep-pe.com',
  address: 'Las Fresas Mz Z Lt. 18, Puente Piedra, Lima 22 - Perú',
  mapLatitude: -11.8596427,
  mapLongitude: -77.078858,
  whatsappUrl: 'https://wa.me/51939567355',
};

export const NAV_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Clientes', to: '/clientes' },
  { label: 'Contacto', to: '/contacto' },
];

export const HOME = {
  hero: {
    eyebrow: 'Ingeniería eléctrica de alto desempeño',
    title: 'Soluciones confiables para operaciones críticas',
    description:
      'Diseñamos, implementamos y mantenemos sistemas de potencia de baja, media y alta tensión con foco en continuidad, seguridad y cumplimiento técnico.',
    image: '/assets/img/home/hero-main.webp',
    primaryCta: { label: 'Ver servicios', href: '/#servicios' },
    secondaryCta: { label: 'Solicitar diagnóstico', href: '/contacto' },
  },
  highlights: [
    {
      title: 'Ejecución con metodología',
      description: 'Planificación, protocolos de prueba y control de calidad por etapa.',
    },
    {
      title: 'Seguridad operativa real',
      description: 'Diseños y maniobras enfocadas en reducir exposición a riesgo eléctrico.',
    },
    {
      title: 'Soporte técnico especializado',
      description: 'Acompañamiento integral durante implementación y post servicio.',
    },
  ],
  aboutSnippet: {
    title: 'Equipo experto, enfoque estratégico',
    description:
      'Somos una empresa peruana orientada a soluciones integrales del sector eléctrico. Trabajamos con estándares técnicos robustos y una cultura de mejora continua.',
    image: '/assets/img/nosotros/banner-nosotros.webp',
    cta: { label: 'Conócenos más', to: '/nosotros' },
  },
};

export const STATS = [
  { value: '+8', label: 'Años' },
  { value: '120+', label: 'Proyectos ejecutados' },
  { value: '24/7', label: 'Soporte especializado' },
  { value: '98%', label: 'Cumplimiento de cronograma' },
];

export const CLIENT_LOGOS = Array.from({ length: 12 }, (_, index) => {
  const logoIndex = index + 1;
  return {
    src: `/assets/img/clientes/logo${logoIndex}.png`,
    alt: `Cliente estratégico ${logoIndex}`,
  };
});

export const SERVICES = {
  headline: {
    eyebrow: 'Servicios',
    title: 'Capacidades técnicas para proyectos exigentes',
    description:
      'Portafolio enfocado en montaje, pruebas, mantenimiento y mejora de sistemas eléctricos industriales.',
  },
  cards: [
    {
      title: 'Configuración, ajustes y pruebas de IEDs',
      description: 'Lógicas de interbloqueo, activación de funciones y protocolos de pruebas funcionales.',
      image: '/assets/img/servicios/thermal-logistics.webp',
    },
    {
      title: 'Instalación y comisionamiento',
      description: 'Montaje e integración de equipos de potencia y control con validación en campo.',
      image: '/assets/img/servicios/kyoritsu.webp',
    },
    {
      title: 'Upgrade y control de riesgos',
      description: 'Mejora de bases instaladas e interbloqueos para mitigar riesgos de operación.',
      image: '/assets/img/servicios/celda.webp',
    },
    {
      title: 'Mantenimientos especializados',
      description: 'Diagnóstico, conservación preventiva/correctiva y pruebas de desempeño.',
      image: '/assets/img/servicios/celda-detail.webp',
    },
  ],
  detailSlides: [
    {
      title: 'Celdas de media tensión',
      description:
        'Montaje y pruebas eléctricas en cuadros de media tensión aislados en aire para distintos fabricantes.',
      image: '/assets/img/servicios/celda-detail.webp',
    },
    {
      title: 'Transformadores de distribución',
      description:
        'Montaje y pruebas para transformadores secos y en aceite con protocolos de calidad y seguridad.',
      image: '/assets/img/servicios/kyoritsu.webp',
    },
    {
      title: 'Tableros de baja tensión',
      description:
        'Intervención técnica en tableros de baja tensión para optimizar desempeño y confiabilidad.',
      image: '/assets/img/servicios/thermal-logistics-expert-staff.jpg',
    },
    {
      title: 'Pruebas e inspecciones termográficas',
      description:
        'Detección temprana de fallas, análisis de condición y reportes para mantenimiento predictivo.',
      image: '/assets/img/servicios/thermal-logistics.webp',
    },
  ],
};

export const ABOUT = {
  hero: {
    eyebrow: 'Green Energy Electric Perú S.A.C.',
    title: 'Ingeniería eléctrica confiable para infraestructura crítica',
    description:
      'Desarrollamos soluciones en baja, media y alta tensión para minería, industria, energía y edificaciones con enfoque en continuidad operativa y seguridad.',
    image: '/assets/img/headers/cabecera-nosotros.webp',
    badges: ['Calidad operativa', 'Seguridad eléctrica', 'Innovación técnica'],
  },
  mission: {
    title: 'Misión',
    description:
      'Suministrar e integrar soluciones en ingeniería e infraestructura eléctrica para proyectos de electrificación, garantizando calidad, eficiencia y estándares internacionales.',
    image: '/assets/img/nosotros/mision-corporativa.jpg',
  },
  vision: {
    title: 'Visión',
    description:
      'Consolidarnos como referente nacional e internacional en soluciones eléctricas integrales, reconocidos por excelencia técnica, talento humano y responsabilidad ambiental.',
    image: '/assets/img/nosotros/vision-corporativa.jpg',
  },
  values: [
    {
      title: 'Integridad',
      description:
        'Actuamos con ética y responsabilidad en cada proyecto, decisión y relación con nuestros clientes.',
      icon: 'Scale',
    },
    {
      title: 'Excelencia',
      description:
        'Buscamos alto rendimiento técnico y calidad verificable en cada etapa de servicio.',
      icon: 'Medal',
    },
    {
      title: 'Confianza',
      description:
        'Construimos relaciones de largo plazo con cumplimiento y comunicación transparente.',
      icon: 'Handshake',
    },
    {
      title: 'Seguridad',
      description:
        'Priorizamos operaciones controladas para proteger personas, activos y continuidad.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Liderazgo',
      description:
        'Impulsamos mejora continua para responder a los retos técnicos de la industria.',
      icon: 'Award',
    },
  ],
};

export const FOOTER = {
  interestLinks: ['OSINERGMIN', 'Ministerio de Energía y Minas', 'COES'],
  complaintBookImage: '/assets/img/footer/libro-reclamaciones.svg',
  complaintBookUrl: 'https://www.consumidor.gob.pe/libro-de-reclamaciones',
  legalText: '© GEEP®. Todos los derechos reservados.',
};
