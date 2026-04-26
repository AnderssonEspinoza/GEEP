import React, { useMemo, useState, useEffect } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Award, BookText, ExternalLink, Handshake, Mail, MapPin, Medal, Phone, Scale, ShieldCheck } from 'lucide-react';
import {
  ABOUT,
  CLIENT_LOGOS,
  COMPANY,
  FOOTER,
  HOME,
  NAV_ITEMS,
  SERVICES,
  STATS,
} from './data/siteContent';

const VALUE_ICONS = {
  Scale,
  Medal,
  Handshake,
  ShieldCheck,
  Award,
};

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash, pathname]);

  return null;
}

function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles = {
      '/': `${COMPANY.brand} | Soluciones eléctricas`,
      '/servicios': `${COMPANY.brand} | Servicios`,
      '/clientes': `${COMPANY.brand} | Clientes`,
      '/contacto': `${COMPANY.brand} | Contacto`,
      '/nosotros': `${COMPANY.brand} | Nosotros`,
    };

    document.title = titles[pathname] ?? `${COMPANY.brand} | Ingeniería eléctrica`;
  }, [pathname]);

  return null;
}

function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'default' }) {
  const isCenter = align === 'center';
  const lightTone = tone === 'light';

  return (
    <div className={isCenter ? 'text-center mx-auto max-w-3xl' : ''}>
      <p className={`text-xs uppercase tracking-[0.4em] ${lightTone ? 'text-geep-200' : 'text-geep-500'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl md:text-4xl mt-3 ${lightTone ? 'text-white' : 'text-ink-900'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-3xl ${lightTone ? 'text-white/80' : 'text-neutral-600'}`}>{description}</p>
      ) : null}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-ink-900 text-white text-xs">
        <div className="max-w-6xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-4">
          <span className="uppercase tracking-[0.25em]">{COMPANY.legalName}</span>
          <span className="text-white/80">
            {COMPANY.phonePrimary} · {COMPANY.email}
          </span>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-[1.9rem] md:text-[2.3rem] tracking-[0.06em] text-geep-700 leading-none">
            GEEP
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.3em]">
            {NAV_ITEMS.map((item) =>
              item.anchor ? (
                <a key={item.to} href={item.to} className="text-ink-800 hover:text-geep-600 transition-colors">
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative pb-1 transition-colors ${isActive ? 'text-geep-700' : 'text-ink-800 hover:text-geep-600'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full transition-opacity ${
                          isActive ? 'bg-geep-600 opacity-100' : 'bg-geep-600 opacity-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex bg-geep-600 text-white px-5 py-2 text-xs uppercase tracking-[0.25em] hover:bg-geep-700 transition-colors"
          >
            Cotizar
          </a>

          <button className="lg:hidden text-ink-900" onClick={() => setMenuOpen((open) => !open)} aria-label="Abrir menú">
            <span className="block w-7 h-0.5 bg-ink-900 mb-1" />
            <span className="block w-7 h-0.5 bg-ink-900 mb-1" />
            <span className="block w-7 h-0.5 bg-ink-900" />
          </button>
        </div>

        {menuOpen ? (
          <div className="lg:hidden bg-white border-t border-neutral-200">
            <div className="px-6 py-4 flex flex-col gap-3 text-sm">
              {NAV_ITEMS.map((item) =>
                item.anchor ? (
                  <a key={item.to} href={item.to} className="text-ink-800" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 transition-colors ${isActive ? 'bg-geep-50 text-geep-700 border border-geep-100' : 'text-ink-800'}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 bg-geep-600 text-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-center"
                onClick={() => setMenuOpen(false)}
              >
                Cotizar
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-900 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-0 md:border-0 md:bg-transparent">
          <a href={FOOTER.complaintBookUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 group">
            <img
              src={FOOTER.complaintBookImage}
              alt="Libro de Reclamaciones"
              className="w-11 h-11 rounded-lg border border-white/25 bg-white/5 p-1.5 object-contain"
              loading="lazy"
            />
            <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
              Libro de Reclamaciones
            </span>
            <ExternalLink size={14} className="text-white/60" />
          </a>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">{COMPANY.shortDescription}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-0 md:border-0 md:bg-transparent">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Links de interés</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {FOOTER.interestLinks.map((linkLabel) => (
              <li key={linkLabel} className="flex items-center gap-2 border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
                <BookText size={14} className="text-geep-300 shrink-0" />
                <span>{linkLabel}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-0 md:border-0 md:bg-transparent">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Contáctenos</p>
          <div className="mt-4 text-sm text-white/80 space-y-3">
            <p className="flex items-start gap-2">
              <MapPin size={15} className="text-geep-300 mt-0.5 shrink-0" />
              <span>{COMPANY.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} className="text-geep-300 shrink-0" />
              <span>{COMPANY.phonePrimary}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} className="text-geep-300 shrink-0" />
              <span>{COMPANY.phoneSecondary}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} className="text-geep-300 shrink-0" />
              <span>{COMPANY.email}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs py-4 text-white/60">{FOOTER.legalText}</div>
    </footer>
  );
}

function ContactFormSection() {
  const [status, setStatus] = useState('idle');
  const mapUrl = `https://www.google.com/maps?q=${COMPANY.mapLatitude},${COMPANY.mapLongitude}&z=18&output=embed`;

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const phone = formData.get('phone')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY.formRecipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Nueva consulta web - ${name || COMPANY.brand}`,
          _captcha: 'false',
          _template: 'table',
          nombre: name,
          correo: email,
          telefono: phone,
          mensaje: message,
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      setStatus('success');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="bg-white py-16 scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <div className="rounded-2xl overflow-hidden shadow-soft border border-neutral-200 bg-neutral-50">
          <div className="p-5 border-b border-neutral-200">
            <p className="text-xs uppercase tracking-[0.25em] text-geep-700">Ubicación</p>
            <p className="mt-2 text-sm text-neutral-700">{COMPANY.address}</p>
          </div>
          <div className="h-[420px]">
            <iframe
              title="Mapa ubicación GEEP"
              src={mapUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="border border-neutral-200 rounded-2xl p-8 shadow-soft">
          <h2 className="font-display text-3xl">Contáctanos</h2>
          <p className="text-neutral-600 mt-2">Cuéntanos tu necesidad y te responderemos por correo o llamada.</p>

          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <input
              name="name"
              className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
              placeholder="Nombre y apellido"
              required
            />
            <input
              name="email"
              type="email"
              className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
              placeholder="Correo"
              required
            />
            <input
              name="phone"
              type="tel"
              className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
              placeholder="Celular"
              required
            />
            <textarea
              name="message"
              className="border border-neutral-300 rounded-lg px-4 py-3 text-sm min-h-[140px]"
              placeholder="Describe tu proyecto o requerimiento"
              required
            />

            <div className="flex flex-wrap gap-3">
              <button
                className="bg-geep-600 text-white px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-geep-700 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar consulta'}
              </button>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-geep-500 text-geep-700 px-6 py-3 text-xs uppercase tracking-[0.25em]"
              >
                WhatsApp
              </a>
            </div>

            {status === 'success' ? (
              <p className="text-sm text-geep-700">Mensaje enviado correctamente. Te responderemos a la brevedad.</p>
            ) : null}
            {status === 'error' ? (
              <p className="text-sm text-red-700">
                No se pudo enviar desde el formulario. Escríbenos directo a {COMPANY.formRecipientEmail}.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-geep-100 flex items-center justify-center text-geep-600 font-display text-lg shrink-0">
                {stat.value}
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCardsSection() {
  return (
    <section id="servicios" className="bg-neutral-50 py-16 scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow={SERVICES.headline.eyebrow}
            title={SERVICES.headline.title}
            description={SERVICES.headline.description}
          />
          <Link to="/servicios" className="text-sm uppercase tracking-[0.25em] text-geep-600">
            Ver detalle completo
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.cards.map((service) => (
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
                <p className="text-sm text-neutral-600 mt-2">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main className="pt-28">
      <section id="home" className="relative min-h-[80vh] flex items-center scroll-mt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HOME.hero.image}
            alt="Cabecera GEEP"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-ink-900/65" />
          <div className="absolute inset-0 bg-mesh" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-white animate-fade-in-up">
          <p className="text-geep-300 font-display text-2xl md:text-3xl uppercase tracking-[0.25em] text-shadow-hero">
            {HOME.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight text-shadow-hero mt-4">
            {HOME.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-white/85 text-lg">{HOME.hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={HOME.hero.primaryCta.href} className="bg-geep-500 text-white px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-geep-600 transition-colors">
              {HOME.hero.primaryCta.label}
            </a>
            <Link to={HOME.hero.secondaryCta.href} className="border border-white/70 px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-white/10 transition-colors">
              {HOME.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOME.highlights.map((item) => (
            <article key={item.title} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <h3 className="font-display text-xl text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ServicesCardsSection />

      <section id="nosotros" className="bg-geep-600 text-white py-16 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading eyebrow="Nosotros" title={HOME.aboutSnippet.title} tone="light" />
            <p className="mt-4 text-white/85 leading-relaxed max-w-2xl">{HOME.aboutSnippet.description}</p>
            <div className="mt-6 flex gap-4">
              <Link to={HOME.aboutSnippet.cta.to} className="bg-white text-geep-700 px-5 py-2 text-xs uppercase tracking-[0.25em]">
                {HOME.aboutSnippet.cta.label}
              </Link>
              <Link to="/clientes" className="border border-white/60 px-5 py-2 text-xs uppercase tracking-[0.25em]">
                Ver clientes
              </Link>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-glow animate-float bg-gradient-to-br from-geep-500/20 via-white/10 to-transparent">
            <img
              src={HOME.aboutSnippet.image}
              alt="Equipo GEEP"
              className="w-full h-[280px] md:h-full object-contain md:object-cover image-fade-edge-desktop"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <StatsStrip />
    </main>
  );
}

function ServicesPage() {
  const [index, setIndex] = useState(0);
  const slides = useMemo(() => SERVICES.detailSlides, []);

  const prev = () => setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <main className="pt-28">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <img src="/assets/img/headers/cabecera-servicios.webp" alt="Servicios GEEP" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink-900/60" />
        <div className="absolute inset-0 bg-circuit-dark opacity-40" />
        <h1 className="relative z-10 font-display text-4xl md:text-5xl uppercase tracking-[0.3em]">Servicios</h1>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={SERVICES.headline.eyebrow}
            title={SERVICES.headline.title}
            description={SERVICES.headline.description}
            align="center"
          />

          <div className="mt-12 relative rounded-3xl bg-neutral-50 shadow-soft overflow-hidden">
            <div className="absolute inset-0 bg-circuit-light opacity-30" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 items-center p-6 md:p-10">
              <div className="relative flex items-center justify-center">
                <button onClick={prev} className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-geep-500 text-white items-center justify-center shadow-soft" aria-label="Anterior">
                  ‹
                </button>

                <img src={slides[index].image} alt={slides[index].title} className="max-h-[380px] w-auto max-w-full object-contain" />

                <button onClick={next} className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-geep-500 text-white items-center justify-center shadow-soft" aria-label="Siguiente">
                  ›
                </button>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Servicio especializado</p>
                <h3 className="font-display text-2xl text-geep-600 mt-3">{slides[index].title}</h3>
                <p className="mt-3 text-neutral-600">{slides[index].description}</p>

                <div className="mt-6 space-y-3">
                  {slides.map((slide, slideIndex) => (
                    <button
                      key={slide.title}
                      onClick={() => setIndex(slideIndex)}
                      className={`w-full text-left rounded-xl px-4 py-3 border transition ${
                        slideIndex === index ? 'bg-white shadow-soft border-geep-200' : 'bg-white/80 border-neutral-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                            slideIndex === index ? 'bg-geep-600 text-white' : 'bg-neutral-200 text-neutral-600'
                          }`}
                        >
                          {slideIndex + 1}
                        </span>
                        <span className="font-display text-sm text-ink-900">{slide.title}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex justify-center gap-2 md:hidden">
                  <button onClick={prev} className="w-10 h-10 bg-geep-500 text-white flex items-center justify-center" aria-label="Anterior">
                    ‹
                  </button>
                  <button onClick={next} className="w-10 h-10 bg-geep-500 text-white flex items-center justify-center" aria-label="Siguiente">
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

function ClientsPage() {
  return (
    <main className="pt-28">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
          alt="Clientes GEEP"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/60" />
        <div className="absolute inset-0 bg-circuit-dark opacity-40" />
        <h1 className="relative z-10 font-display text-4xl md:text-5xl uppercase tracking-[0.3em]">Clientes</h1>
      </section>

      <section className="bg-neutral-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Clientes"
            title="Empresas que confían en nuestro trabajo"
            description="Atendemos proyectos eléctricos para sectores industriales y de infraestructura con enfoque en seguridad, continuidad y calidad de ejecución."
          />

          <div className="mt-10 bg-white rounded-3xl shadow-soft border border-neutral-200 p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.src} className="flex items-center justify-center p-4 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
                <img src={logo.src} alt={logo.alt} className="max-h-14 object-contain" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Compromiso</p>
              <p className="mt-2 text-sm text-neutral-700">Relaciones de largo plazo basadas en cumplimiento técnico y comunicación clara.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Ejecución</p>
              <p className="mt-2 text-sm text-neutral-700">Protocolos de pruebas y control de calidad en cada etapa del servicio.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Seguridad</p>
              <p className="mt-2 text-sm text-neutral-700">Operaciones orientadas a reducir riesgo y proteger personal y activos.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="pt-28">
      <section className="relative h-[34vh] min-h-[260px] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&w=1600&q=80"
          alt="Contacto GEEP"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/65" />
        <h1 className="relative z-10 font-display text-4xl md:text-5xl uppercase tracking-[0.3em]">Contacto</h1>
      </section>
      <ContactFormSection />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="pt-28 overflow-x-hidden bg-[#f4f7f6]">
      <section className="relative overflow-hidden bg-ink-900">
        <img src={ABOUT.hero.image} alt="Equipo GEEP" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/78 to-geep-700/70" />
        <div className="absolute inset-0 bg-circuit-dark opacity-35" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
          <div className="text-white">
            <p className="text-geep-300 text-xs uppercase tracking-[0.45em]">{ABOUT.hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">{ABOUT.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-white/85 text-sm md:text-base leading-relaxed">{ABOUT.hero.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {ABOUT.hero.badges.map((badge) => (
                <span key={badge} className="px-4 py-2 bg-white/10 border border-white/20 text-xs uppercase tracking-[0.25em]">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/95 border border-white/70 rounded-2xl p-6 md:p-8 shadow-soft backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-geep-600">Somos GEEP</p>
            <p className="mt-4 text-neutral-700 text-sm leading-relaxed">{COMPANY.shortDescription}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              {STATS.slice(0, 4).map((stat) => (
                <div key={stat.label} className="bg-geep-50 rounded-xl py-3 px-2">
                  <p className="font-display text-2xl text-geep-700">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-20 px-6 max-w-6xl mx-auto space-y-12">
        {[ABOUT.mission, ABOUT.vision].map((item, index) => {
          const reverseLayout = index % 2 === 1;

          return (
            <div key={item.title} className={`flex flex-col ${reverseLayout ? 'md:flex-row-reverse bg-gradient-to-l' : 'md:flex-row bg-gradient-to-r'} items-center gap-10 from-[#eef6f1] to-transparent p-6 md:p-8 rounded-2xl`}>
              <div className="md:w-1/2 flex">
                <div className="w-1.5 bg-geep-500 mr-5 shrink-0 rounded-full" />
                <div>
                  <h2 className="text-geep-600 text-3xl font-extrabold mb-4 uppercase">{item.title}</h2>
                  <p className="text-sm font-medium leading-relaxed text-neutral-700">{item.description}</p>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <div className="rounded-3xl shadow-xl w-full max-w-sm h-56 border-4 border-white bg-gradient-to-br from-geep-100 to-white overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain image-fade-edge"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-gradient-to-b from-geep-500 to-[#00924c] pt-14 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white tracking-tight uppercase">Valores</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {ABOUT.values.map((value) => {
              const Icon = VALUE_ICONS[value.icon] || Award;

              return (
                <article key={value.title} className="bg-white/95 border border-white/70 rounded-2xl p-6 shadow-soft">
                  <div className="w-14 h-14 bg-geep-50 rounded-full flex items-center justify-center text-geep-700">
                    <Icon size={28} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-ink-900 uppercase">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteMeta />
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
