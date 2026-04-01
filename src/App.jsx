import React, { useMemo, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Scale, Medal, Handshake, ShieldCheck, Award } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Soluciones', to: '/soluciones' },
  { label: 'Clientes', to: '/#clientes', anchor: true },
  { label: 'Contacto', to: '/#contacto', anchor: true },
];

const SERVICES = [
  {
    title: 'Instalaciones y cuestionamiento',
    desc: 'Montajes, pruebas y puesta en marcha con procedimientos certificados.',
    image: '/assets/img/servicios/thermal-logistics.png',
  },
  {
    title: 'Mantenimiento integral',
    desc: 'Preventivo y correctivo para continuidad operativa y seguridad.',
    image: '/assets/img/servicios/Kyoritsu-2017-Digital-Clamp-Meter-from-Tools-Bangladesh-1569385797.png',
  },
  {
    title: 'Automatización industrial',
    desc: 'Control y monitoreo con ingeniería aplicada y trazabilidad.',
    image: '/assets/img/servicios/celda-.png',
  },
  {
    title: 'Proyectos eléctricos',
    desc: 'Diseño, ingeniería y ejecución para baja, media y alta tensión.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80',
  },
];

const SOLUTIONS = [
  {
    title: 'Sistemas de interbloqueo mecánico-eléctrico mediante uso de llaves',
    description:
      'Sistema de interbloqueo para la protección del personal y equipos que garantiza una correcta secuencia de maniobras de un determinado sistema. Cada sistema es diseñado y configurado para las necesidades de cada usuario mediante llaves para hacer cumplir una secuencia de operación segura y única para el operador.',
    supportText:
      'GEEP brinda el soporte desde el desarrollo de la ingeniería, suministro de llaves e implementación.',
    features: ['Ingeniería', 'Interbloqueo en puerta de tableros', 'Interbloqueo en Interruptores'],
    align: 'right',
  },
  {
    title: 'Sistemas de protección contra arco eléctrico para cuadros media y baja tensión',
    description:
      'Permite brindar un nivel superior de seguridad al personal operador en caso de presentarse un evento de arco eléctrico en el interior de los cuadros, de igual forma permite reducir los efectos ocasionados en el interior de los cuadros mediante la reducción del tiempo de despeje de falla.',
    supportText:
      'GEEP brinda el soporte desde el desarrollo de la ingeniería, suministro de equipos e implementación de la solución.',
    features: ['Aplicación de cuadros de BT', 'Aplicación de cuadros de MT'],
    align: 'left',
  },
  {
    title: 'Sistemas de detección de voltaje',
    description:
      'Garantiza un sistema visible de presencia de tensión mediante la implementación de aisladores capacitivos. También se implementan sistemas de detección de tensión con contactos auxiliares para el monitoreo e interbloqueo con maquinas o equipos.',
    supportText:
      'GEEP brinda el soporte desde el desarrollo de la ingeniería, suministro de equipos e implementación.',
    features: [],
    align: 'right',
  },
];

const SOLUTIONS_HOME = [
  {
    title: 'Interbloqueo mecánico-eléctrico',
    short: 'Protección del personal con secuencias de maniobra seguras.',
  },
  {
    title: 'Protección contra arco eléctrico',
    short: 'Seguridad avanzada para cuadros de media y baja tensión.',
  },
  {
    title: 'Detección de voltaje',
    short: 'Presencia de tensión visible y monitoreo confiable.',
  },
];



const STATS = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '120+', label: 'Proyectos ejecutados' },
  { value: '24/7', label: 'Soporte especializado' },
];

const CLIENTS = [
  '/assets/img/clientes/logo1.png',
  '/assets/img/clientes/logo2.png',
  '/assets/img/clientes/logo3.png',
  '/assets/img/clientes/logo4.png',
  '/assets/img/clientes/logo5.png',
  '/assets/img/clientes/logo6.png',
  '/assets/img/clientes/logo7.png',
  '/assets/img/clientes/logo8.png',
  '/assets/img/clientes/logo9.png',
  '/assets/img/clientes/logo10.png',
  '/assets/img/clientes/logo11.png',
  '/assets/img/clientes/logo12.png',
];

const VALUES = [
  {
    title: 'Integridad',
    desc: 'Promovemos estándares éticos altos alineados con reglas y regulaciones.',
  },
  {
    title: 'Excelencia',
    desc: 'Cuidamos cada detalle para cumplir tiempos y exigencias del cliente.',
  },
  {
    title: 'Confianza',
    desc: 'Aseguramos calidad y eficacia para la tranquilidad de nuestros clientes.',
  },
  {
    title: 'Seguridad',
    desc: 'Velamos por operaciones libres de riesgo en todas las etapas del servicio.',
  },
  {
    title: 'Pasión',
    desc: 'Trabajamos con motivación, innovación y compromiso permanente.',
  },
];

const SERVICES_DETAIL = [
  {
    title: 'Celdas de media tensión',
    desc: 'Servicio de montaje y pruebas eléctricas de cuadros de media tensión aislados en aire de diversos fabricantes.',
    image: '/assets/img/servicios/celda-webp.jpg',
  },
  {
    title: 'Transformadores de distribución',
    desc: 'Montaje y pruebas eléctricas de transformadores de distribución secos y en aceite de diversos fabricantes.',
    image: '/assets/img/servicios/Kyoritsu-2017-Digital-Clamp-Meter-from-Tools-Bangladesh-1569385797.png',
  },
  {
    title: 'Tableros de baja tensión',
    desc: 'Montaje y pruebas eléctricas de tableros de baja tensión de diversos fabricantes.',
    image: '/assets/img/servicios/thermal-logistics-expert-staff.jpg',
  },
  {
    title: 'Mantenimiento preventivo',
    desc: 'Inspecciones, ajustes y pruebas para garantizar la continuidad operativa.',
    image: '/assets/img/servicios/thermal-logistics-expert-staff.jpg',
  },
  {
    title: 'Pruebas eléctricas',
    desc: 'Ensayos especializados en interruptores, relés y transformadores.',
    image: '/assets/img/servicios/celda-webp.jpg',
  },
  {
    title: 'Inspecciones termográficas',
    desc: 'Detección de puntos calientes y reportes técnicos de condición.',
    image: '/assets/img/servicios/thermal-logistics.png',
  },
];

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-ink-900 text-white text-xs">
        <div className="max-w-6xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-4">
          <span className="uppercase tracking-[0.25em]">GEEP · Green Energy Electric Perú</span>
          <span className="text-white/80">+51 971 829 585 · contacto@geep.com.pe</span>
        </div>
      </div>
      <div className="bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-3xl tracking-tight text-geep-600">
            GEEP
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.3em]">
            {NAV_LINKS.map((link) =>
              link.anchor ? (
                <a key={link.to} href={link.to} className="text-ink-800 hover:text-geep-600 transition-colors">
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className="text-ink-800 hover:text-geep-600 transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <a
            href="/#contacto"
            className="hidden lg:inline-flex bg-geep-600 text-white px-5 py-2 text-xs uppercase tracking-[0.25em] hover:bg-geep-700 transition-colors"
          >
            Cotizar
          </a>
          <button
            className="lg:hidden text-ink-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className="block w-7 h-0.5 bg-ink-900 mb-1"></span>
            <span className="block w-7 h-0.5 bg-ink-900 mb-1"></span>
            <span className="block w-7 h-0.5 bg-ink-900"></span>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200">
            <div className="px-6 py-4 flex flex-col gap-3 text-sm">
              {NAV_LINKS.map((link) =>
                link.anchor ? (
                  <a
                    key={link.to}
                    href={link.to}
                    className="text-ink-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-ink-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="/#contacto"
                className="mt-2 bg-geep-600 text-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-center"
                onClick={() => setMenuOpen(false)}
              >
                Cotizar
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Libro de reclamos</p>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Soluciones eléctricas especializadas para infraestructura crítica en Perú.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Links de interés</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Ministerio de Transporte y Telecomunicaciones</li>
            <li>OSITRAN</li>
            <li>ATU</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Contáctenos</p>
          <div className="mt-4 text-sm text-white/70 space-y-2">
            <p>+51 971 829 585 · 952 435 730</p>
            <p>contacto@geep.com.pe</p>
            <p>Av. XXXXX XXXXXXXXX XXXXX XXXXXX XXXXXXXXX XXXX</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs py-4 text-white/60">
        © GEEP®. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function SolutionCard({ data }) {
  const isLeft = data.align === 'left';

  const getMainImage = (title) => {
    const key = title.toLowerCase();
    if (key.includes('interbloqueo')) {
      return 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80';
    }
    if (key.includes('arco')) {
      return 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80';
    }
    if (key.includes('voltaje')) {
      return 'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?auto=format&fit=crop&w=1200&q=80';
    }
    return 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80';
  };

  const getFeatureImage = (feature) => {
    const key = feature.toLowerCase();
    if (key.includes('ingenier')) {
      return 'https://images.unsplash.com/photo-1581092919535-7146ff1a5902?auto=format&fit=crop&w=500&q=80';
    }
    if (key.includes('puerta')) {
      return 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=500&q=80';
    }
    if (key.includes('interruptor')) {
      return 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=500&q=80';
    }
    if (key.includes('bt')) {
      return 'https://images.unsplash.com/photo-1581092335397-9fa3411089f3?auto=format&fit=crop&w=500&q=80';
    }
    if (key.includes('mt')) {
      return 'https://images.unsplash.com/photo-1581091215367-59ab6dcef594?auto=format&fit=crop&w=500&q=80';
    }
    return 'https://images.unsplash.com/photo-1581092921461-eab10380e785?auto=format&fit=crop&w=500&q=80';
  };

  return (
    <div className="relative w-full py-10 md:py-16">
      <div
        className={`absolute top-0 bottom-0 bg-geep-500 z-0 ${
          isLeft ? 'left-0 w-[90%] md:w-[80%]' : 'right-0 w-[95%] md:w-[85%]'
        }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
          <div
            className={`w-64 h-72 md:w-[320px] md:h-[320px] bg-neutral-500 shrink-0 shadow-soft mb-8 md:mb-0 z-20 overflow-hidden rounded-2xl border border-white/25 ${
              isLeft ? 'md:-mr-12 md:ml-12' : 'md:-ml-12 md:mr-12'
            }`}
          >
            <img
              src={getMainImage(data.title)}
              alt={data.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1581091215367-59ab6dcef594?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>

          <div className={`flex-1 text-white z-10 py-6 ${isLeft ? 'md:pr-12 lg:pr-24' : 'md:pl-12 lg:pl-20'}`}>
            <h3 className="text-xl md:text-[22px] font-bold mb-4 leading-tight">{data.title}</h3>
            <p className="text-sm md:text-sm mb-6 leading-relaxed opacity-95">{data.description}</p>
            <p className="text-sm md:text-base font-bold mb-8 leading-snug">{data.supportText}</p>

            {data.features.length > 0 && (
              <div className="flex flex-wrap gap-6 md:gap-10 justify-start">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center w-24">
                    <div className="w-20 h-20 rounded-full bg-[#65d693] mb-3 shadow-inner overflow-hidden border border-white/25">
                      <img
                        src={getFeatureImage(feature)}
                        alt={feature}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://images.unsplash.com/photo-1581092921461-eab10380e785?auto=format&fit=crop&w=500&q=80';
                        }}
                      />
                    </div>
                    <span className="text-[11px] md:text-xs text-center leading-tight font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SolucionesPage() {
  return (
    <main className="pt-28">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
          alt="Soluciones"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/60"></div>
        <div className="absolute inset-0 bg-circuit-dark opacity-40"></div>
        <h1 className="relative z-10 font-display text-4xl md:text-5xl uppercase tracking-[0.3em]">Soluciones</h1>
      </section>

      <section className="bg-neutral-100 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-geep-500">Soluciones</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Soluciones integrales especializadas</h2>
          <p className="text-neutral-600 mt-4 max-w-3xl">
            Soluciones diseñadas para proteger al personal, optimizar la operación y elevar la seguridad en sistemas eléctricos de baja y media tensión.
          </p>
        </div>

        <div className="mt-10 space-y-6 md:space-y-10 overflow-hidden">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard key={index} data={solution} />
          ))}
        </div>
      </section>
    </main>
  );
}

function HomePage() {
  return (
    <main className="pt-28">
      <section id="home" className="relative min-h-[80vh] flex items-center scroll-mt-32">
        <div className="absolute inset-0">
          <img
            src="/assets/img/Cabecera.ingenieria_2940x713.jpg"
            alt="Ingeniería eléctrica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/65"></div>
          <div className="absolute inset-0 bg-mesh"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-white">
          <p className="text-geep-300 font-display text-4xl md:text-5xl uppercase tracking-[0.3em] text-shadow-hero">
            GEEP
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-2xl leading-tight text-shadow-hero">
            Soluciones especializadas para infraestructura eléctrica crítica
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            Diseñamos, instalamos y mantenemos sistemas en baja, media y alta tensión con enfoque en seguridad, continuidad y eficiencia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#servicios"
              className="bg-geep-500 text-white px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-geep-600 transition-colors"
            >
              Ver servicios
            </a>
            <a
              href="/#contacto"
              className="border border-white/70 px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-white/10 transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

                  <section className="bg-neutral-100 py-12 md:py-20 scroll-mt-32" id="soluciones">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-geep-500">Soluciones</p>
              <h2 className="font-display text-3xl md:text-4xl mt-3">Soluciones integrales especializadas</h2>
              <p className="text-neutral-600 mt-4 max-w-3xl">
                Diseñamos soluciones para proteger al personal, optimizar la operación y elevar la seguridad en sistemas eléctricos.
              </p>
            </div>
            <Link to="/soluciones" className="text-sm uppercase tracking-[0.25em] text-geep-600">
              Ver soluciones
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOLUTIONS_HOME.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-soft p-6 border border-neutral-200">
                <h3 className="font-display text-lg text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">{item.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-neutral-50 py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-geep-500">Servicios</p>
              <h2 className="font-display text-3xl md:text-4xl mt-3">Capacidades integrales de alto impacto</h2>
            </div>
            <Link to="/servicios" className="text-sm uppercase tracking-[0.25em] text-geep-600">
              Ver detalle completo
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <article key={service.title} className="bg-white rounded-2xl overflow-hidden shadow-soft group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-ink-900">{service.title}</h3>
                  <p className="text-sm text-neutral-600 mt-2">{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-geep-600 text-white py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-geep-200">Nosotros</p>
            <h2 className="font-display text-3xl md:text-4xl mt-3">Equipo experto, enfoque estratégico</h2>
            <p className="mt-4 text-white/85 leading-relaxed">
              Somos Green Energy Electric Perú. Diseñamos soluciones integrales en el sector eléctrico con visión innovadora, compromiso social y cumplimiento normativo riguroso.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                to="/nosotros"
                className="bg-white text-geep-700 px-5 py-2 text-xs uppercase tracking-[0.25em]"
              >
                Conócenos más
              </Link>
              <a
                href="/#clientes"
                className="border border-white/60 px-5 py-2 text-xs uppercase tracking-[0.25em]"
              >
                Ver clientes
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-glow">
            <img
              src="/assets/img/nosotros/banner-nosotros.png"
              alt="Equipo GEEP"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-geep-100 flex items-center justify-center text-geep-600 font-display text-lg">
                  {stat.value}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes" className="bg-neutral-50 py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-geep-500">Nuestros clientes</p>
          <div className="mt-8 bg-white rounded-3xl shadow-soft p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {CLIENTS.map((logo) => (
              <div key={logo} className="flex items-center justify-center p-3 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition">
                <img src={logo} alt="Cliente" className="max-h-12 object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
              alt="Servicio técnico"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="border border-neutral-200 rounded-2xl p-8 shadow-soft">
            <h2 className="font-display text-3xl">Contáctanos</h2>
            <p className="text-neutral-600 mt-2">¿En qué podemos ayudarte? Déjanos tus datos y te contactamos.</p>
            <form className="mt-6 grid gap-4">
              <input className="border border-neutral-300 rounded-lg px-4 py-3 text-sm" placeholder="Nombre y apellido" required />
              <input type="email" className="border border-neutral-300 rounded-lg px-4 py-3 text-sm" placeholder="Correo" required />
              <input type="tel" className="border border-neutral-300 rounded-lg px-4 py-3 text-sm" placeholder="Celular" required />
              <textarea className="border border-neutral-300 rounded-lg px-4 py-3 text-sm min-h-[140px]" placeholder="Servicio de interés" required></textarea>
              <button className="bg-geep-600 text-white py-3 text-xs uppercase tracking-[0.25em] hover:bg-geep-700">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiciosPage() {
  const [index, setIndex] = useState(0);
  const slides = useMemo(() => SERVICES_DETAIL, []);

  const prev = () => setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <main className="pt-28">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <img
          src="/assets/img/headers/cabecera-servicios.jpg"
          alt="Servicios"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/60"></div>
        <div className="absolute inset-0 bg-circuit-dark opacity-40"></div>
        <h1 className="relative z-10 font-display text-4xl md:text-5xl uppercase tracking-[0.3em]">Servicios</h1>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-geep-500 text-center">Montaje y pruebas de equipos</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mt-3">Especialistas en infraestructura eléctrica</h2>

          <div className="mt-12 relative rounded-3xl bg-neutral-50 shadow-soft overflow-hidden">
            <div className="absolute inset-0 bg-circuit-light opacity-30"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 items-center p-6 md:p-10">
              <div className="relative flex items-center justify-center">
                <button
                  onClick={prev}
                  className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-geep-500 text-white items-center justify-center shadow-soft"
                  aria-label="Anterior"
                >
                  ‹
                </button>
                <img
                  src={slides[index].image}
                  alt={slides[index].title}
                  className="max-h-[380px] w-auto max-w-full object-contain"
                />
                <button
                  onClick={next}
                  className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-geep-500 text-white items-center justify-center shadow-soft"
                  aria-label="Siguiente"
                >
                  ›
                </button>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Servicio de montaje especializado</p>
                <h3 className="font-display text-2xl text-geep-600 mt-3">{slides[index].title}</h3>
                <p className="mt-3 text-neutral-600">{slides[index].desc}</p>

                <div className="mt-6 space-y-3">
                  {slides.slice(0, 3).map((item, i) => (
                    <button
                      key={item.title}
                      onClick={() => setIndex(i)}
                      className={`w-full text-left rounded-xl px-4 py-3 border transition ${
                        i === index ? 'bg-white shadow-soft border-geep-200' : 'bg-white/80 border-neutral-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                            i === index ? 'bg-geep-600 text-white' : 'bg-neutral-200 text-neutral-600'
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="font-display text-sm text-ink-900">{item.title}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex justify-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-10 rounded-full ${i === index ? 'bg-geep-600' : 'bg-neutral-300'}`}
                      aria-label={`Ir al slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-6 flex justify-center gap-3 md:hidden">
                  <button
                    onClick={prev}
                    className="w-10 h-10 bg-geep-500 text-white flex items-center justify-center"
                    aria-label="Anterior"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 bg-geep-500 text-white flex items-center justify-center"
                    aria-label="Siguiente"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function NosotrosPage() {
  return (
    <main className="pt-28 overflow-x-hidden bg-[#f4f7f6]">
      <section className="relative overflow-hidden bg-ink-900">
        <img
          src="/assets/img/headers/cabecera-nosotros.jpg"
          alt="Equipo tecnico GEEP"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/78 to-geep-700/70"></div>
        <div className="absolute inset-0 bg-circuit-dark opacity-35"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
          <div className="text-white">
            <p className="text-geep-300 text-xs uppercase tracking-[0.45em]">Green Energy Electric Peru</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Ingenieria Electrica <span className="text-geep-400">Confiable</span> para Infraestructura Critica
            </h1>
            <p className="mt-6 max-w-2xl text-white/85 text-sm md:text-base leading-relaxed">
              Desarrollamos soluciones integrales en baja, media y alta tension, con enfoque en seguridad,
              continuidad operativa y cumplimiento tecnico para mineria, industria, energia y edificaciones.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs uppercase tracking-[0.25em]">
                Calidad Operativa
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs uppercase tracking-[0.25em]">
                Seguridad Electrica
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-xs uppercase tracking-[0.25em]">
                Innovacion Tecnica
              </span>
            </div>
          </div>

          <div className="bg-white/95 border border-white/70 rounded-2xl p-6 md:p-8 shadow-soft backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-geep-600">Somos GEEP</p>
            <p className="mt-4 text-neutral-700 text-sm leading-relaxed">
              Empresa peruana especializada en soluciones electricas para sistemas de potencia,
              comprometida con la excelencia tecnica, responsabilidad social y sostenibilidad.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-geep-50 rounded-xl py-3">
                <p className="font-display text-2xl text-geep-700">15+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Anios</p>
              </div>
              <div className="bg-geep-50 rounded-xl py-3">
                <p className="font-display text-2xl text-geep-700">120+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Proyectos</p>
              </div>
              <div className="bg-geep-50 rounded-xl py-3">
                <p className="font-display text-2xl text-geep-700">24/7</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Soporte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-[#eef6f1] to-transparent p-6 md:p-8 rounded-2xl">
          <div className="md:w-1/2 flex">
            <div className="w-1.5 bg-geep-500 mr-5 shrink-0 rounded-full"></div>
            <div>
              <h2 className="text-geep-600 text-3xl font-extrabold mb-4 uppercase">Mision</h2>
              <p className="text-sm font-medium leading-relaxed text-neutral-700">
                Suministrar e integrar soluciones en servicios de ingenieria y desarrollo de infraestructuras
                para proyectos de electrificacion en el sector minero, industrial, hidrocarburos,
                construccion, energia y edificaciones, garantizando calidad y eficiencia con
                estandares internacionales y personal altamente calificado.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/img/nosotros/mision.png"
              alt="Mision GEEP"
              className="rounded-3xl shadow-xl w-full max-w-sm h-56 object-cover border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 bg-gradient-to-l from-[#eef6f1] to-transparent p-6 md:p-8 rounded-2xl">
          <div className="md:w-1/2 flex">
            <div className="w-1.5 bg-geep-500 mr-5 shrink-0 rounded-full"></div>
            <div>
              <h2 className="text-geep-600 text-3xl font-extrabold mb-4 uppercase">Vision</h2>
              <p className="text-sm font-medium leading-relaxed text-neutral-700">
                Ser la empresa lider a nivel nacional e internacional que desarrolle soluciones electricas
                integrales de forma innovadora en los sectores industria, mineria, construccion y energia,
                siendo reconocidos por la excelencia de nuestros servicios, la calidad humana y
                nuestra responsabilidad ambiental.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/img/nosotros/vision.png"
              alt="Vision GEEP"
              className="rounded-3xl shadow-xl w-full max-w-sm h-56 object-cover border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative mt-2">
        <div className="max-w-7xl mx-auto px-6 mb-4 relative z-10">
          <h2 className="text-4xl font-extrabold text-neutral-800 tracking-tight uppercase">Valores</h2>
        </div>

        <div className="relative w-full overflow-hidden leading-none">
          <svg className="absolute top-4 left-0 w-full h-auto text-[#009b50] fill-current" viewBox="0 0 1440 250" preserveAspectRatio="none">
            <path d="M0,150 C300,250 500,50 1440,100 L1440,250 L0,250 Z"></path>
          </svg>
          <svg className="relative block w-full h-[150px] md:h-[200px] text-geep-500 fill-current" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,80 C400,180 600,0 1440,60 L1440,200 L0,200 Z"></path>
          </svg>
        </div>

        <div className="bg-gradient-to-b from-geep-500 to-[#00924c] pt-12 pb-24 px-6">
          <div className="max-w-5xl mx-auto space-y-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-end items-center gap-6">
              <div className="text-right md:w-1/2">
                <h3 className="text-white text-3xl font-bold mb-2 uppercase">Integridad</h3>
                <p className="text-white/90 text-sm leading-relaxed ml-auto max-w-md">
                  Actuamos con un alto sentido del deber, siendo justos, rectos y equitativos,
                  asumiendo nuestra responsabilidad en cada proyecto y entorno.
                </p>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0 text-geep-600">
                <Scale size={38} strokeWidth={1.7} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse justify-end items-center gap-6">
              <div className="text-left md:w-1/2">
                <h3 className="text-white text-3xl font-bold mb-2 uppercase">Excelencia</h3>
                <p className="text-white/90 text-sm leading-relaxed mr-auto max-w-md">
                  Buscamos un alto nivel de rendimiento en todo lo que hacemos,
                  mediante trabajo seguro, eficiente y de calidad tecnica.
                </p>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0 text-geep-600">
                <Medal size={38} strokeWidth={1.7} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-end items-center gap-6">
              <div className="text-right md:w-1/2">
                <h3 className="text-white text-3xl font-bold mb-2 uppercase">Confianza</h3>
                <p className="text-white/90 text-sm leading-relaxed ml-auto max-w-md">
                  Aseguramos el cumplimiento de nuestra palabra y construimos
                  relaciones duraderas basadas en comunicacion clara y transparente.
                </p>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0 text-geep-600">
                <Handshake size={38} strokeWidth={1.7} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse justify-end items-center gap-6">
              <div className="text-left md:w-1/2">
                <h3 className="text-white text-3xl font-bold mb-2 uppercase">Seguridad</h3>
                <p className="text-white/90 text-sm leading-relaxed mr-auto max-w-md">
                  Priorizamos operaciones seguras y controladas en cada fase,
                  protegiendo al personal, los activos y la continuidad operativa.
                </p>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0 text-geep-600">
                <ShieldCheck size={38} strokeWidth={1.7} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-end items-center gap-6">
              <div className="text-right md:w-1/2">
                <h3 className="text-white text-3xl font-bold mb-2 uppercase">Liderazgo</h3>
                <p className="text-white/90 text-sm leading-relaxed ml-auto max-w-md">
                  Nos mantenemos en mejora continua para entregar soluciones innovadoras,
                  eficientes y alineadas a los mas altos estandares del sector.
                </p>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0 text-geep-600">
                <Award size={38} strokeWidth={1.7} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/soluciones" element={<SolucionesPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
