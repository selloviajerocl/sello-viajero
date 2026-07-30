import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Palmtree,
  Phone,
  Plane,
  ShieldCheck,
  Ship,
  Sparkles,
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

const services = [
  {
    icon: Palmtree,
    title: "Viajes vacacionales",
    text: "Escapadas familiares, viajes en pareja, lunas de miel y vacaciones a medida con hoteles, vuelos, traslados y experiencias seleccionadas.",
  },
  {
    icon: Building2,
    title: "Viajes corporativos",
    text: "Soluciones para empresas, viajes de incentivo, reuniones, traslados ejecutivos y coordinacion para equipos.",
  },
  {
    icon: Ship,
    title: "Cruceros",
    text: "Asesoria para elegir naviera, ruta, cabina, temporada y excursiones en cruceros por Caribe, Europa y otros destinos.",
  },
  {
    icon: Users,
    title: "Grupos y giras",
    text: "Organizacion de grupos, giras de estudio, viajes especiales y programas con acompanamiento antes, durante y despues.",
  },
  {
    icon: ShieldCheck,
    title: "Seguros y respaldo",
    text: "Opciones de seguros de viaje, asistencia, condiciones claras y respaldo para viajar con mayor tranquilidad.",
  },
  {
    icon: Plane,
    title: "Aereos y traslados",
    text: "Gestion de vuelos, hoteles, traslados, excursiones, asistencia y servicios complementarios en una sola propuesta.",
  },
];

const destinations = [
  {
    name: "Punta Cana",
    country: "Republica Dominicana",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85",
    text: "Resorts all inclusive, playas de arena blanca y descanso ideal para familias, parejas y celebraciones.",
  },
  {
    name: "Aruba",
    country: "Caribe",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    text: "Playas sin sargazo, atardeceres, Eagle Beach, Palm Beach y una experiencia caribena muy comoda.",
  },
  {
    name: "Riviera Maya",
    country: "Mexico",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    text: "Cancun, Tulum, cenotes, cultura maya, parques como Xcaret y hoteles para todos los estilos.",
  },
  {
    name: "Rio de Janeiro",
    country: "Brasil",
    image: "/rio-cristo-redentor-hero.jpg",
    text: "Cristo Redentor, Pan de Azucar, playas iconicas, vida urbana, musica, gastronomia y paisajes memorables.",
  },
  {
    name: "Orlando & Disney",
    country: "Estados Unidos",
    image:
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=900&q=85",
    text: "Parques, compras, hoteles familiares, experiencias para ninos y adultos, con planificacion completa.",
  },
  {
    name: "Cruceros",
    country: "Rutas internacionales",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=85",
    text: "Varios destinos en un solo viaje, comodidad a bordo, gastronomia, entretenimiento y excursiones.",
  },
];

const process = [
  ["Conversamos", "Cuéntanos fechas, destino, presupuesto y estilo de viaje.", MessageCircle],
  ["Diseñamos", "Buscamos alternativas reales y armamos una propuesta clara.", Sparkles],
  ["Reservamos", "Coordinamos vuelos, hoteles, traslados y servicios.", FileCheck2],
  ["Acompañamos", "Estamos contigo antes, durante y despues del viaje.", HeartHandshake],
];

const benefits = [
  "Mas de 20 anos de experiencia en turismo.",
  "Atencion cercana y asesoría real.",
  "Propuestas adaptadas a cada presupuesto.",
  "Soluciones para personas, familias, grupos y empresas.",
  "Acompañamiento antes, durante y despues del viaje.",
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

const faqs = [
  [
    "¿Puedo cotizar un viaje aunque no tenga destino definido?",
    "Si. Podemos ayudarte a elegir destino segun fechas, presupuesto, cantidad de viajeros y tipo de experiencia.",
  ],
  [
    "¿Trabajan viajes corporativos?",
    "Si. Coordinamos viajes para empresas, grupos, eventos, incentivos, traslados, alojamiento y servicios complementarios.",
  ],
  [
    "¿La asesoria tiene acompañamiento durante el viaje?",
    "Si. La idea es que viajes con claridad y respaldo antes, durante y despues de tu experiencia.",
  ],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#073a46]">
      <header className="sticky top-0 z-50 border-b border-[#dceff1] bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
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
          <div className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.04em] text-[#073a46] lg:flex">
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
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/22" />
        </div>
        <div className="relative mx-auto min-h-[650px] max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid min-h-[540px] items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="font-serif text-5xl italic leading-none text-[#078f98] md:text-7xl">
                Tu viaje,
              </p>
              <h1 className="mt-1 text-6xl font-black uppercase leading-[0.92] tracking-normal text-[#073a46] md:text-8xl">
                Tu sello
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-[#073a46]/82">
                Asesoria personalizada para crear viajes seguros, simples y memorables en Chile y el mundo.
              </p>

              <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Asesoria personalizada", Users],
                  ["Respaldo durante tu viaje", ShieldCheck],
                  ["Planificacion completa", Clock3],
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
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <aside className="hidden rounded-[2rem] bg-white/70 p-6 shadow-2xl backdrop-blur lg:block">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#078f98]">
                Agencia boutique
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#073a46]">
                Viajes diseñados con criterio, cercanía y respaldo.
              </h2>
              <div className="mt-6 space-y-4">
                {benefits.slice(0, 4).map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[#073a46]/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#078f98]" />
                    {item}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-[#edf8f9] shadow-xl">
              <img
                src="/cindy-vergara-hero.jpg"
                alt="Cindy Vergara, fundadora de Sello Viajero"
                className="h-[34rem] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-[#078f98] px-6 py-5 text-center text-white shadow-2xl">
              <p className="font-serif text-3xl italic">Cindy Vergara</p>
              <p className="mt-1 text-sm font-black uppercase tracking-[0.06em]">
                Fundadora & Directora de Sello Viajero
              </p>
            </div>
          </div>

          <div className="pt-8 lg:pt-0">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#078f98]">
              Nosotros
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#073a46] md:text-5xl">
              Cada viaje merece ser tan único como la persona que lo vive.
            </h2>
            <p className="mt-6 leading-8 text-[#073a46]/78">
              Sello Viajero nace para acompañar a personas, familias, grupos y empresas que quieren viajar con tranquilidad. No vendemos un paquete estandar: escuchamos, comparamos alternativas y diseñamos propuestas pensadas para cada presupuesto, destino y estilo de viaje.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Más de 20 años de experiencia", Plane],
                ["América, Europa y el Caribe", MapPin],
                ["Atención personalizada", HeartHandshake],
                ["Corporativo y vacacional", Building2],
                ["Cruceros y viajes a medida", Ship],
              ].map(([text, Icon]) => (
                <div key={text as string} className="flex items-center gap-3 rounded-2xl bg-[#edf8f9] p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#078f98] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-bold leading-5 text-[#073a46]">{text as string}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-[#078f98]/15 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black uppercase text-[#078f98]">Nuestra misión</h3>
                <p className="mt-4 leading-7 text-[#073a46]/78">
                  Hacer que viajar sea una experiencia simple, segura y memorable, entregando soluciones personalizadas para disfrutar con total tranquilidad.
                </p>
              </article>
              <article className="rounded-3xl border border-[#078f98]/15 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black uppercase text-[#078f98]">Nuestra visión</h3>
                <p className="mt-4 leading-7 text-[#073a46]/78">
                  Ser una agencia reconocida por confianza, cercanía y excelencia, acompañando a nuestros clientes en sus aventuras por el mundo.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#edf8f9] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#078f98]">
              Servicios
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#073a46] md:text-5xl">
              Todo lo que necesitas para viajar bien, en un solo lugar.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Icon className="h-10 w-10 text-[#078f98]" />
                <h3 className="mt-5 text-xl font-black uppercase text-[#073a46]">{title}</h3>
                <p className="mt-3 leading-7 text-[#073a46]/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="destinos" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#078f98]">
              Inspiración
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#073a46] md:text-5xl">
              Destinos que inspiran
            </h2>
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-black text-[#078f98]">
            Cotizar otro destino
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.name} className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img src={destination.image} alt={destination.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-black uppercase text-[#078f98]">{destination.name}</h3>
                <p className="text-sm font-semibold text-[#073a46]/65">{destination.country}</p>
                <p className="mt-3 leading-7 text-[#073a46]/72">{destination.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="corporativo" className="bg-[#073a46] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7ddbe0]">
              Corporativo
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
              Viajes para empresas, equipos y grupos.
            </h2>
            <p className="mt-6 leading-8 text-white/75">
              Coordinamos viajes corporativos, programas de incentivo, reuniones, giras de estudio y grupos especiales con una gestion clara, ordenada y cercana.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Cotizaciones comparables y claras.",
              "Hoteles, vuelos y traslados coordinados.",
              "Opciones para grupos y empresas.",
              "Soporte antes, durante y despues del viaje.",
            ].map((item) => (
              <p key={item} className="flex gap-3 rounded-2xl bg-white/8 p-5 font-semibold leading-7 text-white/86">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#7ddbe0]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf8f9] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#078f98]">
              Proceso
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#073a46] md:text-5xl">
              Así trabajamos tu viaje
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {process.map(([title, text, Icon], index) => (
              <article key={title as string} className="rounded-3xl bg-white p-6 text-center shadow-sm">
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#078f98] text-sm font-black text-white">
                  {index + 1}
                </span>
                <Icon className="mx-auto mt-5 h-10 w-10 text-[#073a46]" />
                <h3 className="mt-4 text-lg font-black uppercase text-[#078f98]">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-[#073a46]/72">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden bg-[#078f98] px-5 py-14 text-white lg:px-14">
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

        <div id="contacto" className="bg-[#f8fbfb] px-5 py-14 lg:px-14">
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="text-center font-serif text-4xl font-semibold text-[#073a46] md:text-5xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 grid gap-4">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-3xl border border-[#078f98]/15 bg-[#f8fbfb] p-6">
                <h3 className="text-lg font-black text-[#078f98]">{question}</h3>
                <p className="mt-3 leading-7 text-[#073a46]/75">{answer}</p>
              </article>
            ))}
          </div>
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
