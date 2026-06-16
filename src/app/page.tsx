"use client";

import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
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
import { useState } from "react";

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
      "/paris-night-hero.jpg",
    alt: "Paris iluminada de noche con puente elegante sobre el rio Sena",
  },
  {
    image: "/rio-christ-hero.jpg",
    alt: "Rio de Janeiro con Cristo Redentor y vista panoramica",
  },
];

type DestinationCard = {
  place: string;
  detail: string;
  image: string;
  href: string;
  gallery: [string, string][];
};

type SpotProfile = {
  name: string;
  location: string;
  description: string;
  history: string;
  highlights: string[];
  activities: string[];
  useful: {
    season: string;
    temperature: string;
    duration: string;
    currency: string;
  };
  imperdibles: { name: string; text: string; image: string }[];
};

const imageSet = {
  rio: [
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1400&q=90",
  ],
  beach: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1400&q=90",
  ],
  city: [
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=90",
  ],
  cruise: [
    "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=90",
  ],
  hotel: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=85",
  ],
};

const brazilProfiles: Record<string, Partial<SpotProfile>> = {
  "Rio de Janeiro": {
    location: "Estado de Rio de Janeiro, Brasil",
    highlights: ["Cristo Redentor", "Pan de Azucar", "Escalera Selaron", "Maracana", "Lapa"],
    activities: [
      "Subir al Cristo Redentor y al Pan de Azucar",
      "Caminar por Copacabana e Ipanema",
      "Vivir una noche con musica en Lapa",
      "Tomar un paseo panoramico por la bahia",
    ],
    history:
      "Rio fue capital de Brasil y uno de los grandes puertos culturales de America del Sur. Su identidad mezcla historia colonial, samba, arquitectura urbana y paisajes naturales reconocidos mundialmente.",
  },
  "Arraial do Cabo": {
    location: "Region dos Lagos, Rio de Janeiro, Brasil",
    highlights: ["Praia do Farol", "Prainhas do Pontal", "Gruta Azul", "Paseo en barco"],
    activities: [
      "Navegar por playas de aguas transparentes",
      "Hacer snorkel o buceo",
      "Visitar miradores naturales",
      "Disfrutar atardeceres en la costa",
    ],
    history:
      "Arraial do Cabo crecio como villa pesquera y se hizo famoso por sus aguas claras, corrientes frias y biodiversidad marina. Hoy es uno de los destinos mas buscados para playas y paseos nauticos.",
  },
  "Isla Grande": {
    location: "Angra dos Reis, Rio de Janeiro, Brasil",
    highlights: ["Lopes Mendes", "Lagoa Azul", "Lagoa Verde", "Senderos ecologicos"],
    activities: [
      "Hacer trekking entre playas",
      "Navegar por Lagoa Azul y Lagoa Verde",
      "Descansar en playas sin autos",
      "Explorar naturaleza y vida marina",
    ],
    history:
      "Isla Grande conserva una fuerte identidad natural. Durante decadas tuvo acceso limitado, lo que ayudo a proteger su vegetacion, sus senderos y sus playas de aspecto salvaje.",
  },
};

function getSpotImages(name: string, destination: string, cover: string) {
  const normalized = name.toLowerCase();
  if (destination === "Cruceros") return [cover, ...imageSet.cruise].slice(0, 6);
  if (["rio de janeiro", "copacabana", "ipanema"].includes(normalized)) {
    return [cover, ...imageSet.rio].slice(0, 6);
  }
  if (["camboriu", "florianopolis", "campos do jordao", "salvador"].includes(normalized)) {
    return [cover, ...imageSet.city].slice(0, 6);
  }
  return [cover, ...imageSet.beach].slice(0, 6);
}

function getSpotProfile(name: string, destination: DestinationCard): SpotProfile {
  const isCruise = destination.place === "Cruceros";
  const isBrazil = destination.place === "Brasil";
  const preset = brazilProfiles[name] ?? {};
  const location =
    preset.location ??
    (isCruise
      ? "Ruta internacional en crucero"
      : isBrazil
        ? "Brasil"
        : `${destination.place}, destino turistico internacional`);

  return {
    name,
    location,
    description:
      `${name} es una alternativa ideal para viajeros que buscan combinar descanso, paisajes memorables y experiencias bien organizadas. Es un destino que puede adaptarse a parejas, familias, grupos de amigos o viajes especiales, porque permite mezclar playa, gastronomia, paseos, compras, cultura y momentos de desconexion. La gracia de viajar con una asesoria personalizada es elegir bien la zona donde alojar, la temporada, el ritmo del itinerario y las actividades que realmente valen la pena segun el presupuesto. En Sello Viajero se puede transformar este destino en una propuesta a medida, comparando opciones de hoteleria, traslados, excursiones y dias recomendados para que el viaje se sienta claro desde el comienzo. Es un lugar perfecto para inspirarse con fotos, imaginar una ruta y luego cotizar una experiencia mas segura, ordenada y pensada para disfrutar sin improvisar.`,
    history:
      preset.history ??
      `${name} ha crecido como destino gracias a su mezcla de paisaje, cultura local y servicios turisticos. Su historia esta ligada al mar, al comercio, a la vida urbana y a la forma en que cada comunidad fue creando una identidad propia para recibir viajeros.`,
    highlights:
      preset.highlights ??
      (isCruise
        ? ["Vida a bordo", "Excursiones en puerto", "Gastronomia", "Shows nocturnos", "Piscinas y spa"]
        : ["Playas principales", "Miradores", "Centro turistico", "Gastronomia local", "Atardeceres"]),
    activities:
      preset.activities ??
      (isCruise
        ? ["Elegir cabina y ruta ideal", "Reservar excursiones", "Disfrutar shows y restaurantes", "Conocer varios destinos en un solo viaje"]
        : ["Paseos guiados", "Excursiones de dia completo", "Playas y actividades nauticas", "Restaurantes, compras y vida nocturna"]),
    useful: {
      season: isBrazil ? "Septiembre a abril; verano ideal para playa" : "Todo el ano, segun clima y temporada",
      temperature: isBrazil ? "24 a 32 grados aprox." : "22 a 30 grados aprox.",
      duration: isCruise ? "5 a 10 noches" : "5 a 8 dias recomendados",
      currency: isBrazil ? "Real brasileno (BRL)" : isCruise ? "Dolar estadounidense a bordo" : "Moneda local segun destino",
    },
    imperdibles: (preset.highlights ?? ["Playa principal", "Mirador", "Paseo recomendado", "Centro turistico"]).slice(0, 5).map((item, index) => ({
      name: item,
      text: "Un punto clave para sumar al itinerario, tomar fotos y vivir una experiencia representativa del destino.",
      image: getSpotImages(name, destination.place, destination.image)[index] ?? destination.image,
    })),
  };
}

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

const destinations: DestinationCard[] = [
  {
    place: "Aruba",
    detail:
      "Playas de arena blanca, hoteles frente al mar y experiencias ideales para parejas y familias.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=90",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20viaje%20a%20Aruba",
    gallery: [
      ["Eagle Beach", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85"],
      ["Palm Beach", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"],
      ["Baby Beach", "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85"],
      ["Flamingo Beach", "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=85"],
      ["Oranjestad", "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=85"],
      ["Arashi Beach", "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85"],
      ["Natural Pool", "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85"],
      ["California Lighthouse", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"],
      ["Mangel Halto", "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=85"],
      ["Atardecer en Aruba", "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=85"],
    ],
  },
  {
    place: "Caribe",
    detail:
      "Resorts todo incluido, aguas turquesas y descanso diseñado para desconectarte de verdad.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=90",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20viaje%20al%20Caribe",
    gallery: [
      ["Punta Cana", "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=85"],
      ["Cancun", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"],
      ["Riviera Maya", "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85"],
      ["Jamaica", "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=85"],
      ["Bahamas", "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85"],
      ["Turks and Caicos", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85"],
      ["Barbados", "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=900&q=85"],
      ["Curazao", "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=85"],
      ["Saint Martin", "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85"],
      ["Isla Mujeres", "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85"],
    ],
  },
  {
    place: "Brasil",
    detail:
      "Playas, cultura, gastronomía y rutas vibrantes para viajar en pareja, grupo o familia.",
    image:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1400&q=90",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20viaje%20a%20Brasil",
    gallery: [
      ["Rio de Janeiro", "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=85"],
      ["Copacabana", "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=900&q=85"],
      ["Ipanema", "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?auto=format&fit=crop&w=900&q=85"],
      ["Cabo Frio", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85"],
      ["Isla Grande", "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85"],
      ["Arraial do Cabo", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"],
      ["Camboriu", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"],
      ["Florianopolis", "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=85"],
      ["Natal", "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=900&q=85"],
      ["Fortaleza", "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85"],
      ["Bahia", "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85"],
      ["Salvador", "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=85"],
      ["Porto de Galinhas", "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=85"],
      ["Campos do Jordao", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=85"],
    ],
  },
  {
    place: "Cruceros",
    detail:
      "Itinerarios premium, comodidad a bordo y varios destinos en una sola experiencia.",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=90",
    href:
      "https://wa.me/56942664722?text=Hola%20Sello%20Viajero,%20quiero%20cotizar%20un%20crucero",
    gallery: [
      ["Caribe Sur", "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=85"],
      ["Caribe Occidental", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85"],
      ["Bahamas en crucero", "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85"],
      ["Mediterraneo", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"],
      ["Islas Griegas", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85"],
      ["Alaska", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85"],
      ["Fiordos Nordicos", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=85"],
      ["Dubai y Emiratos", "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85"],
      ["Panama y Caribe", "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85"],
      ["Brasil y Uruguay", "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=85"],
    ],
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
  const [selectedDestination, setSelectedDestination] = useState<
    (typeof destinations)[number] | null
  >(null);
  const [selectedSpot, setSelectedSpot] = useState<{
    name: string;
    image: string;
    destination: DestinationCard;
  } | null>(null);

  const spotProfile = selectedSpot
    ? getSpotProfile(selectedSpot.name, selectedSpot.destination)
    : null;
  const spotImages =
    selectedSpot && spotProfile
      ? getSpotImages(selectedSpot.name, selectedSpot.destination.place, selectedSpot.image)
      : [];

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
              className="group overflow-hidden rounded-xl bg-white shadow-elegant transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`Destino ${destination.place}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepPetrol/88 via-deepPetrol/18 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-softGold">
                    Destino premium
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">{destination.place}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="min-h-24 leading-7 text-petrol/74">{destination.detail}</p>
                <div className="mt-6 grid gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedDestination(destination)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-turquoise/25 bg-turquoise/10 px-5 py-3 font-bold text-deepPetrol transition hover:bg-turquoise hover:text-white"
                  >
                    Ver mas fotos
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <a
                    href={destination.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-softGold px-5 py-3 font-bold text-deepPetrol transition hover:bg-turquoise"
                  >
                    Cotizar
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedDestination && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-deepPetrol/82 px-4 py-6 backdrop-blur-sm sm:py-10">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-elegant">
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-petrol/10 bg-white/95 px-5 py-5 backdrop-blur md:px-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-turquoise">
                    Galeria premium
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold text-deepPetrol md:text-4xl">
                    {selectedDestination.place}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-petrol/70">
                    Mira ideas de lugares y experiencias para inspirar tu proximo viaje.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDestination(null);
                    setSelectedSpot(null);
                  }}
                  aria-label="Cerrar galeria"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-petrol/10 text-petrol transition hover:bg-turquoise hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 md:p-8 lg:grid-cols-3">
                {selectedDestination.gallery.map(([name, image]) => (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedSpot({
                        name,
                        image,
                        destination: selectedDestination,
                      })
                    }
                    key={name}
                    className="group overflow-hidden rounded-xl bg-ivory text-left shadow-sm transition hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image}
                        alt={`${name} - ${selectedDestination.place}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deepPetrol/78 via-transparent to-transparent" />
                      <h4 className="absolute bottom-4 left-4 right-4 text-2xl font-semibold text-white">
                        {name}
                      </h4>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-turquoise">Ver ficha del destino</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-petrol/10 bg-ivory px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
                <p className="text-sm font-semibold text-deepPetrol">
                  Si te gusto este destino, Cindy puede armar una propuesta a tu medida.
                </p>
                <a
                  href={selectedDestination.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-softGold px-6 py-3 font-bold text-deepPetrol transition hover:bg-turquoise"
                >
                  Cotizar por WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {selectedSpot && spotProfile && (
          <div className="fixed inset-0 z-[60] overflow-y-auto bg-deepPetrol/88 px-4 py-6 backdrop-blur-md sm:py-10">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-elegant">
              <div className="relative">
                <div className="flex snap-x gap-3 overflow-x-auto bg-deepPetrol p-3">
                  {spotImages.map((image, index) => (
                    <img
                      key={`${image}-${index}`}
                      src={image}
                      alt={`${spotProfile.name} foto ${index + 1}`}
                      className="h-[24rem] w-[86%] flex-none snap-center rounded-xl object-cover sm:w-[56%] lg:w-[42%]"
                    />
                  ))}
                </div>
                <div className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-deepPetrol shadow-md md:grid">
                  <ChevronLeft className="h-5 w-5" />
                </div>
                <div className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-deepPetrol shadow-md md:grid">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSpot(null)}
                  aria-label="Cerrar ficha del destino"
                  className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-petrol shadow-md transition hover:bg-turquoise hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-turquoise">
                    Destino seleccionado
                  </p>
                  <h3 className="mt-3 font-serif text-4xl font-semibold text-deepPetrol md:text-5xl">
                    {spotProfile.name}
                  </h3>
                  <p className="mt-2 font-semibold text-petrol/70">{spotProfile.location}</p>
                  <p className="mt-6 leading-8 text-petrol/76">{spotProfile.description}</p>

                  <div className="mt-8 rounded-xl bg-ivory p-6">
                    <h4 className="font-serif text-2xl font-semibold text-deepPetrol">
                      Historia breve
                    </h4>
                    <p className="mt-3 leading-7 text-petrol/74">{spotProfile.history}</p>
                  </div>
                </div>

                <aside className="rounded-2xl border border-turquoise/18 bg-deepPetrol p-6 text-white">
                  <h4 className="font-serif text-2xl font-semibold">Informacion util</h4>
                  <div className="mt-5 grid gap-4 text-sm">
                    {[
                      ["Mejor epoca", spotProfile.useful.season],
                      ["Temperatura promedio", spotProfile.useful.temperature],
                      ["Duracion recomendada", spotProfile.useful.duration],
                      ["Moneda local", spotProfile.useful.currency],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-lg bg-white/8 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-softGold">{label}</p>
                        <p className="mt-1 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/56942664722?text=${encodeURIComponent(
                      `Hola Sello Viajero, quiero cotizar el destino ${spotProfile.name}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-softGold px-6 py-3 font-bold text-deepPetrol transition hover:bg-turquoise hover:text-white"
                  >
                    Cotizar este destino
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </aside>
              </div>

              <div className="grid gap-8 border-t border-petrol/10 p-5 md:p-8 lg:grid-cols-2">
                <section>
                  <h4 className="font-serif text-3xl font-semibold text-deepPetrol">Que hacer</h4>
                  <div className="mt-5 grid gap-3">
                    {spotProfile.activities.map((activity) => (
                      <p key={activity} className="flex gap-3 rounded-lg bg-ivory p-4 text-petrol/78">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-turquoise" />
                        {activity}
                      </p>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="font-serif text-3xl font-semibold text-deepPetrol">
                    Principales atractivos
                  </h4>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {spotProfile.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-turquoise/25 bg-turquoise/10 px-4 py-2 text-sm font-semibold text-deepPetrol"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <section className="border-t border-petrol/10 bg-ivory p-5 md:p-8">
                <h4 className="font-serif text-3xl font-semibold text-deepPetrol">Imperdibles</h4>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {spotProfile.imperdibles.map((item) => (
                    <article key={item.name} className="overflow-hidden rounded-xl bg-white shadow-sm">
                      <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
                      <div className="p-5">
                        <h5 className="text-xl font-semibold text-deepPetrol">{item.name}</h5>
                        <p className="mt-2 text-sm leading-6 text-petrol/72">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="border-t border-petrol/10 p-5 md:p-8">
                <h4 className="font-serif text-3xl font-semibold text-deepPetrol">
                  Hoteles recomendados
                </h4>
                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  {[
                    ["3 estrellas", "Comodo, bien ubicado y practico para priorizar excursiones.", imageSet.hotel[0]],
                    ["4 estrellas", "Mejor equilibrio entre ubicacion, servicios y descanso.", imageSet.hotel[1]],
                    ["5 estrellas", "Experiencia premium con mayor confort, vistas y servicios superiores.", imageSet.hotel[2]],
                  ].map(([category, text, image]) => (
                    <article key={category} className="overflow-hidden rounded-xl bg-white shadow-elegant">
                      <img src={image} alt={`Hotel ${category}`} className="h-52 w-full object-cover" />
                      <div className="p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-softGold">
                          Categoria {category}
                        </p>
                        <p className="mt-3 leading-6 text-petrol/74">{text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
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

