import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Palmtree,
  Phone,
  Plane,
  Sailboat,
  ShieldCheck,
  Ship,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

const whatsappHref =
  "https://wa.me/56966957801?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20mi%20proximo%20viaje";

const navItems = [
  ["Inicio", "#inicio"],
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Destinos", "#destinos"],
  ["Corporativo", "#corporativo"],
  ["Testimonios", "#testimonios"],
  ["Contacto", "#contacto"],
];

const specialties = [
  { icon: Palmtree, title: "Viajes vacacionales" },
  { icon: Building2, title: "Viajes corporativos" },
  { icon: Ship, title: "Cruceros" },
  { icon: Users, title: "Grupos y giras de estudio" },
  { icon: HeartHandshake, title: "Bodas destino" },
  { icon: ShieldCheck, title: "Seguros de viaje" },
  { icon: Plane, title: "Aereos, hoteles y traslados" },
];

const destinations = [
  {
    name: "Punta Cana",
    country: "Republica Dominicana",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Aruba",
    country: "El paraiso te espera",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Riviera Maya",
    country: "Mexico",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Rio de Janeiro",
    country: "Brasil",
    image: "/rio-cristo-redentor-hero.jpg",
  },
  {
    name: "Orlando & Disney",
    country: "Diversion para todos",
    image:
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Nueva York",
    country: "Estados Unidos",
    image: "/new-york-statue-liberty-hero.jpg",
  },
  {
    name: "San Francisco",
    country: "Estados Unidos",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Paris",
    country: "Francia",
    image: "/paris-eiffel-hero.jpg",
  },
  {
    name: "Turquia",
    country: "Historia y cultura",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Egipto",
    country: "Un viaje en el tiempo",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Cruceros",
    country: "Vive el mar",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=85",
  },
];

const steps = [
  ["Cuentanos tu idea", MessageCircle],
  ["Ajustamos cada detalle", Star],
  ["Te enviamos una propuesta personalizada", Mail],
  ["Reservamos y coordinamos todo por ti", ShieldCheck],
  ["Tu disfrutas, nosotros estamos contigo", Plane],
];

const benefits = [
  "Mas de 20 anos de experiencia en turismo",
  "Asesoria 100% personalizada",
  "Respaldo de los mejores operadores e IATA",
  "Atencion cercana antes, durante y despues de tu viaje",
  "Soluciones a medida para personas y empresas",
];

const testimonials = [
  {
    name: "Maria Jose",
    place: "Santiago, Chile",
    text: "Cindy organizo nuestro viaje a Punta Cana y fue perfecto. Se preocupo de cada detalle.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rodrigo M.",
    place: "Concepcion, Chile",
    text: "El viaje corporativo estuvo impecable. Puntualidad, hoteles y traslados excelentes.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Carolina P.",
    place: "Concepcion, Chile",
    text: "La mejor experiencia en crucero. Todo 10/10, 100% recomendada.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#073a46]">
      <header className="sticky top-0 z-50 border-b border-[#dceff1] bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/sello-viajero-logo-web.png"
              alt="Sello Viajero Agencia de Viajes"
              width={220}
              height={95}
              priority
              unoptimized
              className="h-auto w-40 object-contain md:w-52"
            />
          </a>
          <div className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.04em] text-[#073a46] lg:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-[#078f98]">
                {label}
              </a>
            ))}
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#078f98] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#073a46]"
          >
            <MessageCircle className="h-5 w-5" />
            Escríbenos
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-[#eaf8f8]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=90"
            alt="Playa tropical"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/86 to-white/18" />
        </div>
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div>
            <p className="font-serif text-5xl italic leading-none text-[#078f98] md:text-7xl">
              Tu viaje,
            </p>
            <h1 className="mt-1 text-6xl font-black uppercase leading-[0.92] tracking-normal text-[#073a46] md:text-8xl">
              Tu sello
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-[#073a46]/82">
              Mas de 20 anos creando experiencias inolvidables para que solo te preocupes de disfrutar.
            </p>

            <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Asesoria personalizada", Users],
                ["Respaldo durante tu viaje", ShieldCheck],
                ["Planificacion completa", CalendarIcon],
                ["Experiencia y confianza", Star],
              ].map(([text, Icon]) => (
                <div key={text as string} className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#073a46]/25 bg-white/70">
                    <Icon className="h-5 w-5 text-[#073a46]" />
                  </span>
                  <p className="text-xs font-black uppercase leading-4 text-[#073a46]">{text as string}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#078f98] px-8 py-4 text-sm font-black uppercase text-white shadow-xl transition hover:bg-[#073a46]"
              >
                <MessageCircle className="h-5 w-5" />
                Cotiza por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#073a46]/25 bg-white/70 px-8 py-4 text-sm font-black uppercase text-[#073a46] transition hover:border-[#078f98] hover:text-[#078f98]"
              >
                Conoce más
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] lg:block">
            <img
              src="/cindy-vergara-hero.jpg"
              alt="Cindy Vergara, fundadora de Sello Viajero"
              className="absolute bottom-0 right-4 h-[520px] w-[390px] rounded-t-[12rem] object-cover object-top shadow-2xl"
            />
            <div className="absolute bottom-8 right-0 rounded-3xl bg-[#078f98] px-8 py-5 text-center text-white shadow-2xl">
              <p className="font-serif text-3xl italic">Cindy Vergara</p>
              <p className="mt-1 text-sm font-black uppercase">Fundadora de Sello Viajero</p>
              <p className="mt-1 text-sm">20 anos de experiencia en turismo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#edf8f9] py-9">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-center text-2xl font-black uppercase text-[#078f98]">
            Nos especializamos en
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-7">
            {specialties.map(({ icon: Icon, title }) => (
              <article key={title} className="border-r border-[#073a46]/15 px-3 text-center last:border-r-0">
                <Icon className="mx-auto h-10 w-10 text-[#073a46]" />
                <p className="mt-4 text-xs font-black uppercase leading-5 text-[#073a46]">{title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="destinos" className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <h2 className="text-center text-2xl font-black uppercase text-[#078f98]">
          Destinos que inspiran
        </h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {destinations.map((destination) => (
            <article key={destination.name} className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img src={destination.image} alt={destination.name} className="h-36 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-black uppercase text-[#078f98]">{destination.name}</h3>
                <p className="text-sm font-semibold text-[#073a46]/70">{destination.country}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#078f98] px-8 py-3 text-sm font-black uppercase text-white transition hover:bg-[#073a46]"
          >
            Ver más destinos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="corporativo" className="bg-[#edf8f9] py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-black uppercase text-[#078f98]">Cómo trabajamos</h2>
            <p className="mt-1 font-serif text-3xl italic text-[#078f98]">Así de simple, así de personal</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-5">
              {steps.map(([label, Icon], index) => (
                <article key={label as string} className="relative text-center">
                  <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-[#078f98] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <Icon className="mx-auto mt-4 h-9 w-9 text-[#073a46]" />
                  <p className="mt-3 text-xs font-bold leading-5 text-[#073a46]">{label as string}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase text-[#078f98]">¿Por qué elegirnos?</h2>
            <div className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <p key={benefit} className="flex gap-3 text-sm font-semibold text-[#073a46]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#078f98]" />
                  {benefit}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonios" className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden bg-[#078f98] px-5 py-10 text-white lg:px-14">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85"
            alt="Playa testimonial"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="relative">
            <h2 className="text-2xl font-black uppercase">Lo que dicen</h2>
            <p className="font-serif text-3xl italic">nuestros viajeros</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="text-center">
                  <img src={item.image} alt={item.name} className="mx-auto h-20 w-20 rounded-full border-4 border-white object-cover" />
                  <p className="mt-4 text-sm leading-6">"{item.text}"</p>
                  <p className="mt-3 font-black">{item.name}</p>
                  <p className="text-xs">{item.place}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div id="contacto" className="bg-[#f8fbfb] px-5 py-10 lg:px-14">
          <h2 className="text-2xl font-black uppercase text-[#078f98]">Cotiza tu próximo viaje</h2>
          <p className="mt-2 text-sm text-[#073a46]/70">Déjanos tus datos y te contactaremos a la brevedad.</p>
          <form className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-md border border-[#073a46]/15 px-4 py-3" placeholder="Nombre completo" />
              <input className="rounded-md border border-[#073a46]/15 px-4 py-3" placeholder="Correo electrónico" />
              <input className="rounded-md border border-[#073a46]/15 px-4 py-3" placeholder="Teléfono / WhatsApp" />
              <input className="rounded-md border border-[#073a46]/15 px-4 py-3" placeholder="Destino de interés" />
            </div>
            <textarea className="min-h-28 rounded-md border border-[#073a46]/15 px-4 py-3" placeholder="Cuéntanos tu idea de viaje" />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#078f98] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[#073a46]"
            >
              Enviar solicitud
            </a>
          </form>
        </div>
      </section>

      <footer className="bg-[#073a46] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/sello-viajero-logo-web.png"
              alt="Sello Viajero"
              width={220}
              height={95}
              unoptimized
              className="h-auto w-48 brightness-0 invert"
            />
            <p className="mt-3 font-serif text-2xl italic text-white/80">Tu viaje, tu sello</p>
          </div>
          <div>
            <h3 className="font-black uppercase">Contáctanos</h3>
            <div className="mt-4 space-y-2 text-sm text-white/78">
              <p className="flex gap-2"><Phone className="h-4 w-4" /> +56 9 6695 7801</p>
              <p className="flex gap-2"><Mail className="h-4 w-4" /> cindyvergarach@gmail.com</p>
              <p className="flex gap-2"><MapPin className="h-4 w-4" /> Santiago, Chile</p>
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase">Enlaces rápidos</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/78">
              {navItems.slice(0, 6).map(([label, href]) => (
                <a key={label} href={href} className="hover:text-white">{label}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase">Síguenos</h3>
            <a
              href="https://instagram.com/selloviajerocl"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-white/78 hover:text-white"
            >
              <Instagram className="h-6 w-6" />
              @selloviajerocl
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl border-t border-white/12 pt-5 text-center text-xs text-white/60">
          © 2026 Sello Viajero - Agencia de Viajes | Todos los derechos reservados
        </p>
      </footer>
    </main>
  );
}

function CalendarIcon(props: React.ComponentProps<typeof CalendarIconBase>) {
  return <CalendarIconBase {...props} />;
}

function CalendarIconBase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}
