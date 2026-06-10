import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Instagram,
  Mail,
  Menu,
  Phone,
  Plane,
  Quote,
  Search,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

const whatsappBase =
  "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20viaje";

const navItems = [
  ["Home", "#inicio"],
  ["Nosotros", "#experiencia"],
  ["Destinos", "#destinos"],
  ["Paquetes", "#paquetes"],
  ["Servicios", "#servicios"],
  ["Contacto", "#cotizacion"],
];

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=90",
    alt: "Playa paradisíaca del Caribe con aguas turquesas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2200&q=90",
    alt: "Vista elegante de París en Europa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=2200&q=90",
    alt: "Skyline de Nueva York en Estados Unidos",
  },
];

const services = [
  {
    icon: Compass,
    title: "Destinos",
    text: "Creamos rutas personalizadas en Chile y el mundo, pensadas para tu estilo de viaje.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20informacion%20sobre%20destinos",
    details: [
      "Asesoría para elegir destino según fechas, presupuesto y tipo de viaje.",
      "Opciones para parejas, familias, grupos, empresas y viajes especiales.",
      "Recomendaciones de vuelos, hoteles, traslados y experiencias.",
      "Propuesta clara para comparar alternativas antes de reservar.",
    ],
  },
  {
    icon: Plane,
    title: "All Inclusive",
    text: "Paquetes todo incluido para descansar sin preocuparte por cada detalle del viaje.",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20All%20Inclusive",
    details: [
      "Selección de resorts, hoteles y planes con comidas y servicios incluidos.",
      "Ideal para Caribe, Brasil, Aruba y escapadas de descanso premium.",
      "Comparación de categorías, ubicación, beneficios y condiciones.",
      "Acompañamiento para reservar con tranquilidad y respaldo.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Cruceros",
    text: "Itinerarios en crucero para conocer varios destinos con comodidad y experiencia a bordo.",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20informacion%20sobre%20cruceros",
    details: [
      "Orientación para elegir naviera, ruta, cabina y temporada.",
      "Opciones para familias, parejas, grupos y celebraciones especiales.",
      "Información sobre embarque, documentos, excursiones y servicios a bordo.",
      "Cotización personalizada con alternativas según presupuesto.",
    ],
  },
];

const destinations = [
  {
    place: "Aruba",
    detail:
      "Playas de arena blanca, hoteles frente al mar y experiencias ideales para parejas y familias.",
    image:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=85",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20viaje%20a%20Aruba",
  },
  {
    place: "Caribe",
    detail:
      "Resorts todo incluido, aguas turquesas y descanso diseñado para desconectarte de verdad.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20viaje%20al%20Caribe",
  },
  {
    place: "Brasil",
    detail:
      "Playas, cultura, gastronomía y rutas vibrantes para viajar en pareja, grupo o familia.",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=85",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20viaje%20a%20Brasil",
  },
  {
    place: "Cruceros",
    detail:
      "Itinerarios premium, comodidad a bordo y varios destinos en una sola experiencia.",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20crucero",
  },
];

const testimonials = [
  {
    name: "Marcela R.",
    trip: "Viaje familiar al Caribe",
    text:
      "Nos ayudaron a elegir el hotel perfecto y viajamos con todo claro desde el primer día. Se notó la experiencia.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Javier y Antonia",
    trip: "Luna de miel en Aruba",
    text:
      "Queríamos algo especial y recibimos una propuesta preciosa, bien explicada y adaptada a nuestro presupuesto.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Claudia M.",
    trip: "Crucero premium",
    text:
      "La asesoría fue muy humana. Nos acompañaron antes y durante el viaje, eso nos dio mucha tranquilidad.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
  },
];

const reasons = [
  "Atención personalizada",
  "Más de 20 años de experiencia",
  "Soporte antes, durante y después del viaje",
  "Propuestas adaptadas a cada presupuesto",
  "Asesoría real y humana",
];

export default function Home() {
  return (
    <main className="min-h-screen text-petrol">
      <header className="fixed left-0 right-0 top-5 z-40 px-4">
        <nav className="sv-nav-enter mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/55 bg-white/70 px-4 py-3 text-deepPetrol shadow-elegant backdrop-blur-md md:px-6">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/sello-viajero-logo-web.png"
              alt="Sello Viajero Agencia de Viajes"
              width={240}
              height={103}
              priority
              unoptimized
              className="h-auto w-32 object-contain sm:w-36 md:w-44"
            />
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-turquoise">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#destinos"
              aria-label="Buscar destinos"
              className="grid h-10 w-10 place-items-center rounded-full text-petrol transition hover:bg-turquoise/12 hover:text-turquoise"
            >
              <Search className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/selloviajerocl"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Sello Viajero"
              className="grid h-10 w-10 place-items-center rounded-full text-petrol transition hover:bg-turquoise/12 hover:text-turquoise"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <details className="relative md:hidden">
            <summary
              className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-petrol/15 bg-white/50"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 mt-3 w-60 rounded-lg border border-petrol/10 bg-white p-3 text-deepPetrol shadow-elegant">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block rounded-md px-4 py-3 text-sm font-semibold hover:bg-turquoise/10"
                >
                  {label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 border-t border-petrol/10 pt-3">
                <a
                  href="#destinos"
                  aria-label="Buscar destinos"
                  className="grid h-10 w-10 place-items-center rounded-full bg-turquoise/10 text-petrol"
                >
                  <Search className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/selloviajerocl"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de Sello Viajero"
                  className="grid h-10 w-10 place-items-center rounded-full bg-turquoise/10 text-petrol"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      <section id="inicio" className="relative grid min-h-screen place-items-center overflow-hidden bg-deepPetrol px-5 py-28 text-center text-white">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              className="sv-hero-slide absolute inset-0 h-full w-full object-cover"
              style={{ animationDelay: `${index * 6}s` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-deepPetrol/58 via-deepPetrol/28 to-deepPetrol/68" />
        <div className="absolute inset-0 bg-black/18" />

        <div className="sv-hero-content relative mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-softGold md:text-base">
            BIENVENIDOS A SELLO VIAJERO
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-normal text-white md:text-7xl lg:text-8xl">
            EXPERTOS EN LLEVARTE MÁS LEJOS
          </h1>
          <a
            href={whatsappBase}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-softGold px-9 py-4 text-sm font-bold uppercase tracking-[0.08em] text-deepPetrol shadow-elegant transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
          >
            CONTÁCTANOS
          </a>
        </div>
      </section>

      <section id="experiencia" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-turquoise">
            Experiencia y respaldo
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-deepPetrol md:text-5xl">
            Viajar bien empieza con una asesoría real.
          </h2>
        </div>
        <div className="text-lg leading-8 text-petrol/80">
          <p>
            Sello Viajero acompaña a familias, parejas, grupos y empresas que quieren viajar con claridad, confianza y propuestas seleccionadas con criterio.
          </p>
          <p className="mt-5">
            La diferencia está en escuchar lo que necesitas, cuidar los detalles y recomendar opciones que tengan sentido para tu presupuesto, tu estilo y la experiencia que quieres vivir.
          </p>
        </div>
      </section>

      <section id="servicios" className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-7xl font-black uppercase tracking-[0.08em] text-turquoise/10 md:text-9xl">
          Servicios
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-turquoise">
              Nuestros Servicios
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-deepPetrol md:text-5xl">
              Disfruta de principio a fin, nosotros cuidamos los detalles.
            </h2>
            <p className="mt-5 leading-8 text-petrol/68">
              Elige el tipo de experiencia que quieres vivir y recibe una propuesta pensada para tu forma de viajar.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, image, details, href }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-xl border border-petrol/10 bg-white shadow-elegant transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={`Servicio ${title} de Sello Viajero`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepPetrol/64 to-transparent" />
                  <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/88 text-turquoise shadow-lg backdrop-blur">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <div className="relative -mt-8 mx-5 rounded-t-xl bg-white px-5 pb-6 pt-5 text-center shadow-sm">
                  <h3 className="text-2xl font-bold text-softGold">{title}</h3>
                  <p className="mt-4 min-h-20 leading-7 text-petrol/72">{text}</p>

                  <details className="mt-5 rounded-lg border border-petrol/10 bg-ivory text-left">
                    <summary className="cursor-pointer list-none px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-deepPetrol">
                      Ver información
                    </summary>
                    <ul className="space-y-3 border-t border-petrol/10 px-4 py-4 text-sm leading-6 text-petrol/75">
                      {details.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-turquoise" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deepPetrol px-5 py-3 font-semibold text-white transition hover:bg-turquoise hover:text-deepPetrol"
                  >
                    Cotizar este servicio
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="paquetes" className="scroll-mt-28" />
      <section id="destinos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-turquoise">
              Destinos destacados
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-deepPetrol md:text-5xl">
              Escapadas premium para empezar a imaginar.
            </h2>
          </div>
          <a
            href={whatsappBase}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-petrol hover:text-turquoise"
          >
            Cotizar viaje personalizado
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <article
              key={destination.place}
              className="group overflow-hidden rounded-lg bg-white shadow-elegant"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`Destino ${destination.place}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepPetrol/84 via-deepPetrol/10 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-softGold">
                    Destino premium
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">{destination.place}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="min-h-24 leading-7 text-petrol/74">{destination.detail}</p>
                <a
                  href={destination.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deepPetrol px-5 py-3 font-semibold text-white transition hover:bg-turquoise hover:text-deepPetrol"
                >
                  Cotizar
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonios" className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-turquoise">
              Testimonios
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-deepPetrol md:text-5xl">
              Lo que dicen nuestros viajeros
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-lg bg-white p-8 shadow-sm">
                <Quote className="h-8 w-8 text-softGold" />
                <div className="mt-5 flex gap-1 text-softGold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-softGold" />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-petrol/76">"{testimonial.text}"</p>
                <div className="mt-7 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-deepPetrol">{testimonial.name}</p>
                    <p className="text-sm text-petrol/62">{testimonial.trip}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="por-que" className="bg-deepPetrol py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-softGold">
              Diferenciadores
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              ¿Por qué viajar con Sello Viajero?
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/72">
              Porque un viaje importante merece más que una reserva automática: merece criterio, seguimiento y una persona al otro lado.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-4 rounded-lg border border-white/12 bg-white/8 p-5">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-turquoise" />
                <p className="font-medium leading-7 text-white/88">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizacion" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-turquoise">
            Cotización personalizada
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-deepPetrol md:text-5xl">
            Cuéntanos qué viaje tienes en mente.
          </h2>
          <div className="mt-8 space-y-5 text-petrol/76">
            <p className="flex gap-3">
              <CalendarCheck className="mt-1 h-5 w-5 text-softGold" />
              Recibirás orientación para comparar opciones con más seguridad.
            </p>
            <p className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-softGold" />
              Te contactaremos por WhatsApp para afinar fechas, destino y presupuesto.
            </p>
            <p className="flex gap-3">
              <Users className="mt-1 h-5 w-5 text-softGold" />
              Ideal para familias, parejas, grupos, empresas y viajes especiales.
            </p>
          </div>
        </div>

        <form className="rounded-lg bg-white p-6 shadow-elegant md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-deepPetrol">Nombre</span>
              <input
                name="nombre"
                className="mt-2 w-full rounded-lg border border-petrol/15 px-4 py-3 outline-none transition focus:border-turquoise"
                placeholder="Tu nombre"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-deepPetrol">Correo</span>
              <input
                name="correo"
                type="email"
                className="mt-2 w-full rounded-lg border border-petrol/15 px-4 py-3 outline-none transition focus:border-turquoise"
                placeholder="correo@ejemplo.com"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-deepPetrol">Teléfono</span>
              <input
                name="telefono"
                className="mt-2 w-full rounded-lg border border-petrol/15 px-4 py-3 outline-none transition focus:border-turquoise"
                placeholder="+56 9 4266 4722"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-deepPetrol">Destino</span>
              <input
                name="destino"
                className="mt-2 w-full rounded-lg border border-petrol/15 px-4 py-3 outline-none transition focus:border-turquoise"
                placeholder="Aruba, Caribe, Brasil, crucero..."
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-deepPetrol">Fecha estimada</span>
              <input
                name="fecha"
                type="date"
                className="mt-2 w-full rounded-lg border border-petrol/15 px-4 py-3 outline-none transition focus:border-turquoise"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-deepPetrol">Número de viajeros</span>
              <input
                name="viajeros"
                type="number"
                min="1"
                className="mt-2 w-full rounded-lg border border-petrol/15 px-4 py-3 outline-none transition focus:border-turquoise"
                placeholder="2"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-semibold text-deepPetrol">Mensaje</span>
            <textarea
              name="mensaje"
              className="mt-2 min-h-32 w-full rounded-lg border border-petrol/15 px-4 py-3 outline-none transition focus:border-turquoise"
              placeholder="Cuéntanos presupuesto, tipo de viaje y cualquier detalle importante."
            />
          </label>
          <a
            href={whatsappBase}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-petrol px-7 py-4 font-semibold text-white transition hover:bg-turquoise hover:text-deepPetrol md:w-auto"
          >
            Enviar solicitud por WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
        </form>
      </section>

      <a
        href={whatsappBase}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center gap-3 rounded-full bg-[#25D366] font-bold text-deepPetrol shadow-elegant transition hover:scale-105 sm:w-auto sm:px-5"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <footer className="bg-deepPetrol px-5 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-sm">
            <div className="inline-flex rounded-lg bg-white px-4 py-3 shadow-lg">
              <Image
                src="/sello-viajero-logo-web.png"
                alt="Sello Viajero Agencia de Viajes"
                width={240}
                height={103}
                unoptimized
                className="h-auto w-52 object-contain"
              />
            </div>
            <p className="mt-4 text-white/72">Viajes con detalle, confianza y estilo.</p>
          </div>
          <div className="flex flex-col gap-4 text-white/82 sm:flex-row sm:items-center sm:gap-6">
            <a
              className="inline-flex items-center gap-2 hover:text-softGold"
              href="https://instagram.com/selloviajerocl"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-5 w-5" />
              @selloviajerocl
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-softGold"
              href="mailto:cindyvergarach@gmail.com"
            >
              <Mail className="h-5 w-5" />
              cindyvergarach@gmail.com
            </a>
            <a className="inline-flex items-center gap-2 hover:text-softGold" href="tel:+56942664722">
              <Phone className="h-5 w-5" />
              +56 9 4266 4722
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
