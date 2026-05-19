'use client';

import Image from 'next/image';
import MenuBook from '../components/MenuBook';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Clock,
  Facebook,
  Flame,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Star,
  Utensils,
} from 'lucide-react';

const whatsappNumber = '971501234567';
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const signatureCategories = [
  {
    en: 'Breakfast Classics',
    ar: 'فطور شامي',
    image: '/images/menu/page-4.jpg',
    description: 'Foul, hummous, eggs, fresh bread, olive oil, and plates made for sharing.',
  },
  {
    en: 'Shawarma & Sandwiches',
    ar: 'شاورما وسندويشات',
    image: '/images/menu/page-7.jpg',
    description: 'Warm wraps, toasted bread, pickles, sauces, and the comfort of street-food flavor.',
  },
  {
    en: 'Grills & BBQ',
    ar: 'مشاوي',
    image: '/images/menu/page-3.jpg',
    description: 'Charcoal-inspired plates with Levantine seasoning and generous portions.',
  },
  {
    en: 'Manakeesh & Baked Goods',
    ar: 'مناقيش ومعجنات',
    image: '/images/menu/page-4.jpg',
    description: 'Freshly baked, warm, simple, and deeply nostalgic.',
  },
];

const menuHighlights = [
  ['Hummous Dishes', 'أطباق الحمص', 'Creamy bowls finished with olive oil.'],
  ['Falafel', 'فلافل', 'Crisp, golden, and made for breakfast tables.'],
  ['Fatteh', 'فتات', 'Layered comfort with yoghurt, bread, and warm toppings.'],
  ['BBQ', 'مشاوي', 'Grilled plates with smoky Levantine flavor.'],
  ['Manakeesh', 'مناقيش', 'Oven-baked classics with zaatar, cheese, and more.'],
  ['Shawarma', 'الشاورما', 'Juicy wraps with pickles, garlic, and toasted bread.'],
];

const branches = [
  { name: 'Al Najda Branch', phone: '02 6333200', area: 'Central Abu Dhabi', hours: 'Open daily' },
  { name: 'Hamdan Branch', phone: '02 4499916', area: 'Hamdan Street', hours: 'Open daily' },
  { name: 'Baniyas Branch', phone: '02 3686203', area: 'Baniyas', hours: 'Open daily' },
];

const reviews = [
  'Warm food, quick service, and the kind of breakfast table you want to share.',
  'A familiar Levantine taste with generous portions and fresh bread.',
  'Perfect for shawarma, foul, hummous, and family-style comfort food.',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <Header />
      <Hero />
      <CelebrityStrip />
      <Story />
      <div className="h-10 overflow-hidden bg-[#9aa083]">
      <div className="flex h-full items-center justify-around opacity-70">
      {Array.from({ length: 18 }).map((_, i) => (
      <div key={i} className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-[#d8dccb]" />
      <div className="h-0 w-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#d8dccb]" />
      </div>
    ))}
  </div>
</div>
      <DigitalMenuPreview />
      <MenuBook />
      <Branches />
      <SocialProof />
      <ContactSection />
      <Footer />
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="relative overflow-hidden bg-paper pb-20 pt-20 text-deep md:pb-0 md:pt-24"
      >
        <MessageCircle size={18} /> Order
      </a>
    </main>
  );
}

function Header() {
  useEffect(() => {
    const header = document.getElementById('site-header');

    const handleScroll = () => {
      if (window.scrollY > 120) {
        header?.classList.add(
          'opacity-0',
          '-translate-y-6',
          'pointer-events-none'
        );
      } else {
        header?.classList.remove(
          'opacity-0',
          '-translate-y-6',
          'pointer-events-none'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-deep/80 text-cream shadow-soft backdrop-blur-xl transition-all duration-500"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-3 -translate-y-0.5">
          <span className="flex items-center justify-center rounded-2xl bg-cream p-2 shadow-soft">
            <Image
              src="/images/logo.png"
              alt="Beit El Khetyar logo"
              width={118}
              height={76}
              className="block h-12 w-auto object-contain"
              priority
            />
          </span>

          <span className="hidden font-display text-xl font-semibold leading-tight sm:block">
            Beit El Khetyar
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-cream/80 lg:flex">
          <a href="#story" className="transition hover:text-gold">Story</a>
          <a href="#signature" className="transition hover:text-gold">Specialties</a>
          <a href="#menu" className="transition hover:text-gold">Menu</a>
          <a href="#branches" className="transition hover:text-gold">Branches</a>
          <a href="#contact" className="transition hover:text-gold">Contact</a>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-gold hover:text-deep"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const mixedMashawiMessage = encodeURIComponent(
    "Hi, I'd like to order the Mixed Mashawi please."
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-paper pb-16 pt-20 text-deep md:pb-0 md:pt-24"
    >
      <div className="absolute inset-0 paper-texture opacity-70" />

      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 py-6 md:min-h-[calc(100vh-96px)] md:items-center md:gap-10 md:py-8 lg:grid-cols-[0.88fr_1.12fr]">
        
        {/* MOBILE HERO IMAGE FIRST */}
        <div className="relative order-2 lg:order-2">
          <div className="group relative overflow-hidden rounded-[2.2rem] border border-olive/10 bg-cream p-3 shadow-lift">
            <img
              src="/images/bbq.jpg"
              alt="Mixed Mashawi grill platter from Beit El Khetyar"
              className="h-[320px] md:h-[560px] w-full rounded-[1.8rem] object-cover object-center md:h-[560px]"
            />

            <div className="absolute inset-3 rounded-[1.8rem] bg-gradient-to-t from-deep/35 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-2xl border border-olive/10 bg-[#f5f0e6] px-5 py-4 shadow-soft">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-olive/55">
                Bestseller
              </p>

              <p className="mt-1 font-display text-2xl font-semibold text-deep md:text-3xl">
                Mixed Mashawi
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${mixedMashawiMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-olive"
              >
                Order now <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* REVIEW CARD BELOW IMAGE */}
<a
  href="https://www.google.com/search?q=beit+el+khetyar+abu+dhabi"
  target="_blank"
  rel="noreferrer"
  className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#d9ccaa] bg-[#fffdf7] px-5 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] lg:hidden"
>
  <div>
    <div className="text-[1.45rem] leading-none text-[#d4a85a]">
      ★★★★★
    </div>

    <p className="mt-3 text-lg font-bold leading-tight text-deep">
      4.7 ★ Google Reviews
    </p>

    <p className="mt-1 text-sm leading-6 text-ink/55">
      1,200+ reviews across Abu Dhabi
    </p>
  </div>

  <div className="border-t border-olive/10 pt-5">
    <img
      src="/images/tripadvisor.png"
      alt="Tripadvisor Travellers Choice Award"
      className="mx-auto h-50 w-auto object-contain"
    />
  </div>
</a>
        </div>

{/* TEXT SIDE */}
<div className="order-1 max-w-2xl lg:order-1">

  {/* DESKTOP REVIEW CARD */}
  <a
    href="https://www.google.com/search?q=beit+el+khetyar+abu+dhabi"
    target="_blank"
    rel="noreferrer"
    className="mb-8 hidden max-w-xl items-center justify-between gap-6 rounded-2xl border border-[#d9ccaa] bg-[#fffdf7] px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)] lg:flex"
  >
    <div>
      <div className="text-[1.35rem] leading-none text-[#d4a85a]">
        ★★★★★
      </div>

      <p className="mt-2 text-base font-bold leading-tight text-deep">
        4.7 ★ Google Reviews
      </p>

      <p className="mt-1 text-sm text-ink/55">
        1,200+ reviews across Abu Dhabi
      </p>
    </div>

    <img
      src="/images/tripadvisor.png"
      alt="Tripadvisor Travellers Choice Award"
      className="-mr-1 h-32 w-auto object-contain"
    />
  </a>

  <div className="mb-4 flex items-center gap-3">
    <p className="arabic text-3xl text-olive md:text-4xl">
      سفرة دايمة...!
    </p>

    <div className="hidden h-px w-16 bg-olive/20 md:block" />
  </div>

  <h1 className="font-display text-[2.75rem] font-semibold leading-[0.9] tracking-tight text-deep md:text-[3.7rem]">
    Warm Levantine breakfast, shawarma & grills in Abu Dhabi.
  </h1>

  <p className="mt-5 max-w-xl text-base leading-8 text-ink/68 md:text-lg">
    Home-cooked Levantine plates, generous portions, and the kind of warmth that keeps Abu Dhabi coming back.
  </p>

  <div className="mt-6 flex flex-wrap items-center gap-3">
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#c96d3a] px-6 py-3.5 text-sm font-bold text-cream shadow-soft"
    >
      <MessageCircle size={17} />
      Order on WhatsApp
    </a>

    <a
      href="#menu"
      className="inline-flex items-center gap-2 rounded-full border border-olive/15 px-6 py-3.5 text-sm font-semibold text-olive"
    >
      View Menu
      <ArrowRight size={15} />
    </a>
  </div>

  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
    <span className="flex items-center gap-2 text-olive">
      <span className="text-green-600">●</span>
      Open daily 7AM–1AM
    </span>

    <span className="hidden text-olive/20 md:block">|</span>

    <span className="text-ink/55">
      3 branches across Abu Dhabi
    </span>
  </div>

  <div className="mt-4 flex items-center gap-2">
    <span className="rounded-full border border-olive/10 bg-cream px-3 py-1 text-xs font-semibold text-[#f97316] shadow-sm">
      Talabat
    </span>

    <span className="rounded-full border border-olive/10 bg-cream px-3 py-1 text-xs font-semibold text-olive shadow-sm">
      Careem
    </span>
  </div>
</div>
      </div>
    </section>
  );
}
function CelebrityStrip() {
  const guests = [
    {
      name: "Shaquille O’Neal",
      handle: "@shaq",
      note: "The giant shawarma moment that quietly became part of the Beit El Khetyar story.",
      image: "/images/celeb-shaq.jpg",
      label: "Guest Moment",
    },
    {
      name: "Basil Elhaj",
      handle: "@basil.elhaj",
      note: "A creator stop at the Beit El Khetyar storefront in Abu Dhabi.",
      image: "/images/celeb-basil.jpg",
      label: "Creator Visit",
    },
    {
      name: "Naser",
      handle: "@naw_sir",
      note: "A sunny shawarma challenge visit shared from the Beit El Khetyar table.",
      image: "/images/celeb-naser.jpg",
      label: "Spotted Here",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#182118] px-4 py-10 text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(212,168,90,0.1),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.04),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold/70">
              Guest Wall
            </p>

            <h2 className="font-display text-[3.2rem] font-semibold leading-[0.95] tracking-tight text-cream md:text-6xl">
              Spotted at
              <br />
              Beit El Khetyar.
            </h2>
          </div>

          <div>
            <p className="arabic mb-3 text-3xl text-gold/80">
              ضيوفنا
            </p>

            <p className="max-w-md text-sm leading-6 text-cream/62">
              Familiar faces, creator visits, and moments naturally shared
              around the Beit El Khetyar table.
            </p>
          </div>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
        {guests.map((guest) => (
            <a
              key={guest.name}
              href={`https://instagram.com/${guest.handle.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
            className="group relative aspect-[3/4] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[2rem] bg-[#202920] transition duration-500 hover:-translate-y-1 md:w-[46vw] lg:w-auto lg:aspect-[4/5]"
            >
              <div className="absolute inset-0">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111711] via-[#111711]/30 to-transparent" />
              </div>

              <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold/72">
                    {guest.label}
                  </span>

                  <span className="text-xs text-cream/55">
                    {guest.handle}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl font-semibold leading-[1] text-cream md:text-4xl">
                    {guest.name}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-cream/68">
                    {guest.note}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 border-b border-gold/30 pb-1 text-sm font-semibold text-gold/90 transition group-hover:gap-3">
                    Instagram ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

<div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-4 text-sm text-cream/45">
  <span>
    Moments shared naturally by visitors and creators.
  </span>

  <span className="hidden text-gold/75 md:block">
    Abu Dhabi • Beit El Khetyar
  </span>
</div>
      </div>
    </section>
  );
}
function Story() {
  const storyImages = [
    '/images/story-1.jpg',
    '/images/story-2.jpg',
    '/images/story-3.jpg',
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % storyImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

return (
  <section
    id="story"
    className="paper-texture relative overflow-hidden px-4 py-14 md:py-24"
  >
    <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative">
        <div className="overflow-hidden rounded-[2rem] border border-olive/10 bg-cream p-2 shadow-lift md:rounded-[2.75rem] md:p-3">
          <img
            src={storyImages[activeImage]}
            alt="Guests dining at Beit El Khetyar"
            className="h-[310px] w-full rounded-[1.6rem] object-cover object-center transition duration-700 md:h-[500px] md:rounded-[2.25rem]"
          />
        </div>

        <div className="absolute bottom-6 left-6 flex gap-2 md:bottom-8 md:left-8">
          {storyImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeImage === index
                  ? 'w-9 bg-gold md:w-10'
                  : 'w-2.5 bg-cream/70'
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="arabic text-4xl text-olive">
          قصتنا
        </p>

        <h2 className="mt-3 font-display text-[2.8rem] font-semibold leading-[0.95] tracking-tight text-deep md:text-6xl">
          A table people return to.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-ink/72 md:text-lg md:leading-9">
          Since 2015, Beit El Khetyar has grown around a simple idea:
          serve the food people recognize, crave, and come back for.
          Breakfast plates, shawarma, grills, hummous, foul, and fresh bread —
          made with the generosity of a Levantine table.
        </p>

        <p className="mt-5 hidden max-w-2xl text-lg leading-9 text-ink/72 md:block">
          Over the years, it became a familiar Abu Dhabi stop for families,
          workers, friends, late-night cravings, and everyday comfort food
          served without pretending to be something else.
        </p>

        <p className="mt-5 hidden max-w-2xl text-lg leading-9 text-ink/72 md:block">
          What keeps people coming back is not only the food, but the feeling:
          generous portions, busy tables, familiar flavors, and the warmth of
          being welcomed like a regular.
        </p>

        <div className="mt-7 border-l-2 border-olive/20 pl-5 md:mt-10 md:pl-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive/55">
            Since 2015
          </p>

          <p className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight text-deep md:text-3xl">
            Built on familiar flavors, generous plates, and hospitality that
            makes a meal feel personal.
          </p>
        </div>
      </div>
    </div>
  </section>
);
}
function SignatureCategories() {
  const categories = [
    {
      en: 'Breakfast Plates',
      ar: 'فطور شامي',
      image: '/images/humus.jpg',
      desc: 'Hummous, foul, eggs, olive oil, and fresh bread served the Levantine way.',
    },
    {
      en: 'Shawarma',
      ar: 'الشاورما',
      image: '/images/arabic shawarma.jpg',
      desc: 'Toasted wraps, garlic, pickles, and familiar street-food comfort.',
    },
    {
      en: 'Grills',
      ar: 'مشاوي',
      image: '/images/bbq.jpg',
      desc: 'Charcoal-style plates, generous portions, and warm family sharing.',
    },
  ];

  return (
    <section id="signature" className="bg-paper px-4 py-14 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="arabic text-3xl text-olive md:text-4xl">أصنافنا</p>

          <h2 className="mt-3 font-display text-[2.8rem] font-semibold leading-[0.95] text-deep md:text-7xl">
            What people come back for.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65 md:text-lg md:leading-8">
            Simple Levantine comfort food, served generously.
          </p>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {categories.map((item) => (
            <a
              key={item.en}
              href="#menu"
              className="group w-[82vw] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-olive/10 bg-cream shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift md:w-[46vw] lg:w-auto"
            >
              <div className="h-52 overflow-hidden md:h-72">
                <img
                  src={item.image}
                  alt={item.en}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 md:p-7">
                <p className="arabic text-3xl text-olive">{item.ar}</p>

                <h3 className="mt-2 font-display text-3xl font-semibold text-deep md:text-4xl">
                  {item.en}
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink/62 md:mt-4 md:text-base md:leading-7">
                  {item.desc}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-olive md:mt-6">
                  Explore menu <ArrowRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalMenuPreview() {
  const categories = [
    {
      en: 'Hummous Dishes',
      ar: 'أطباق الحمص',
      desc: 'Creamy hummous bowls finished with olive oil and warm bread.',
      image: '/images/humus.jpg',
    },
    {
      en: 'Falafel',
      ar: 'فلافل',
      desc: 'Crisp, golden pieces made for breakfast tables and sharing.',
      image: '/images/falafel plate.jpg',
    },
    {
      en: 'Fatteh',
      ar: 'فتات',
      desc: 'Layered comfort with yoghurt, toasted bread, and warm toppings.',
      image: '/images/Eggplant-fatteh-featured-photo.jpg',
    },
    {
      en: 'BBQ',
      ar: 'مشاوي',
      desc: 'Grilled plates with smoky Levantine flavor and generous portions.',
      image: '/images/bbq.jpg',
    },
    {
      en: 'Manakeesh',
      ar: 'مناقيش',
      desc: 'Oven-baked classics with zaatar, cheese, and warm dough.',
      image: '/images/manakeesh.jpg',
    },
    {
      en: 'Shawarma',
      ar: 'الشاورما',
      desc: 'Juicy wraps with garlic, pickles, toasted bread, and fries.',
      image: '/images/arabic shawarma.jpg',
    },
  ];

  return (
    <section id="digital-menu" className="relative overflow-hidden bg-paper px-4 py-14 md:py-20">
      <div className="absolute inset-0 paper-texture opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <p className="arabic text-3xl text-olive md:text-4xl">قائمة رقمية</p>

          <h2 className="mt-3 font-display text-[2.8rem] font-semibold leading-[0.95] tracking-tight text-deep md:text-6xl">
            Browse the table.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ink/60 md:text-lg">
            Swipe through favorites, then open the full flipbook menu.
          </p>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {categories.map((category) => (
            <a
              key={category.en}
              href="#menu"
              className="group flex min-h-[350px] w-[82vw] shrink-0 snap-center flex-col overflow-hidden rounded-[1.75rem] border border-olive/10 bg-[#f6f1e8] shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift md:w-[46vw] lg:w-auto"
            >
              <div className="h-48 overflow-hidden bg-cream md:h-52">
                <img
                  src={category.image}
                  alt={category.en}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="arabic text-3xl leading-none text-olive">
                  {category.ar}
                </p>

                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-deep">
                  {category.en}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-ink/62 md:text-base md:leading-7">
                  {category.desc}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-olive">
                  View full menu
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Branches() {
  const branches = [
    {
      area: 'Central Abu Dhabi',
      name: 'Al Najda Branch',
      phone: '02 6333200',
      map: 'https://www.google.com/maps?q=Beit+El+Khetyar+Al+Najda+Abu+Dhabi&output=embed',
    },
    {
      area: 'Hamdan Street',
      name: 'Hamdan Branch',
      phone: '02 4499916',
      map: 'https://www.google.com/maps?q=Beit+El+Khetyar+Hamdan+Street+Abu+Dhabi&output=embed',
    },
    {
      area: 'Baniyas',
      name: 'Baniyas Branch',
      phone: '02 3686203',
      map: 'https://www.google.com/maps?q=Beit+El+Khetyar+Baniyas+Abu+Dhabi&output=embed',
    },
  ];

  return (
    <section
      id="branches"
      className="paper-texture relative overflow-hidden bg-paper px-4 py-14 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="arabic text-3xl text-olive md:text-4xl">
            فروعنا
          </p>

          <h2 className="mt-3 font-display text-[2.8rem] font-semibold leading-[0.95] tracking-tight text-deep md:text-7xl">
            Find us in Abu Dhabi.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ink/60 md:text-lg md:leading-8">
            Three familiar stops for breakfast, shawarma, grills, and late-night comfort.
          </p>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="w-[86vw] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-olive/10 bg-[#f6f1e8] shadow-soft md:w-[46vw] lg:w-auto"
            >
              <div className="h-56 overflow-hidden bg-cream">
                <iframe
                  title={branch.name}
                  src={branch.map}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-olive text-cream">
                  <MapPin size={22} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive/60">
                  {branch.area}
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-deep">
                  {branch.name}
                </h3>

                <div className="mt-5 space-y-3 text-ink/65">
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 transition hover:text-olive"
                  >
                    <Phone size={18} className="text-olive" />
                    {branch.phone}
                  </a>

                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-olive" />
                    Open daily 7AM–1AM
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, '')}`}
                    className="rounded-full border border-olive/20 px-5 py-3 text-sm font-bold text-olive transition hover:bg-olive hover:text-cream"
                  >
                    Call
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-bold text-cream shadow-soft transition hover:bg-deep"
                  >
                    <MessageCircle size={17} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const reviews = [
    'Warm food, quick service, and the kind of breakfast table you want to share.',
    'A familiar Levantine taste with generous portions and fresh bread.',
    'Perfect for shawarma, foul, hummous, and family-style comfort food.',
  ];

  return (
    <section className="bg-cream px-4 py-14 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-deep px-6 py-10 text-cream shadow-lift md:rounded-[3rem] md:px-12 md:py-16">
        <div className="max-w-3xl">
          <div className="text-2xl leading-none text-gold">
            ★★★★★
          </div>

          <h2 className="mt-5 font-display text-[2.7rem] font-semibold leading-[0.95] md:text-7xl">
            Loved by Abu Dhabi locals.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-cream/70 md:text-lg">
            Warm Levantine plates, generous portions, and familiar service that keeps people coming back.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review}
              className="rounded-3xl border border-cream/10 bg-cream/5 p-5 md:p-7"
            >
              <p className="text-4xl font-display text-gold/80">”</p>

              <p className="mt-3 text-base leading-7 text-cream/85 md:text-lg md:leading-8">
                {review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-cream px-4 py-14 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-deep text-cream shadow-lift md:rounded-[3rem] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-7 md:p-12">
          <p className="arabic text-4xl text-gold">
            تواصل معنا
          </p>

          <h2 className="mt-4 font-display text-[2.8rem] font-semibold leading-[0.95] md:text-7xl">
            Order, visit, or reserve.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-cream/78 md:text-lg">
            Order directly on WhatsApp, find your nearest branch, or send us a request for group tables and catering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-deep shadow-soft transition hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href="#branches"
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-6 py-3.5 text-sm font-bold text-cream transition hover:bg-cream hover:text-deep"
            >
              <MapPin size={18} />
              Find branch
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition hover:bg-cream hover:text-deep"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition hover:bg-cream hover:text-deep"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <form className="rounded-t-[2rem] bg-cream p-5 text-deep md:p-8 lg:rounded-l-[2rem] lg:rounded-t-none">
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-2xl border border-olive/15 bg-paper px-5 py-4 text-base outline-none focus:border-olive"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-2xl border border-olive/15 bg-paper px-5 py-4 text-base outline-none focus:border-olive"
            />

            <input
              type="text"
              placeholder="Guests"
              className="w-full rounded-2xl border border-olive/15 bg-paper px-5 py-4 text-base outline-none focus:border-olive"
            />

            <input
              type="text"
              placeholder="Date / Time"
              className="w-full rounded-2xl border border-olive/15 bg-paper px-5 py-4 text-base outline-none focus:border-olive"
            />

            <textarea
              placeholder="Special requests"
              rows={4}
              className="w-full resize-none rounded-2xl border border-olive/15 bg-paper px-5 py-4 text-base outline-none focus:border-olive"
            />

            <button
              type="button"
              className="rounded-full bg-olive px-6 py-4 text-base font-bold text-cream transition hover:bg-deep"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep px-4 pb-24 pt-14 text-cream md:pb-12 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <img
            src="/images/logo.png"
            alt="Beit El Khetyar logo"
            className="h-24 w-auto rounded-2xl bg-cream p-3"
          />

          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/72">
            Beit El Khetyar Restaurant & Cafeteria, Abu Dhabi. Authentic Levantine comfort food served with warmth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-bold text-gold">Navigation</h3>

            <div className="space-y-3 text-cream/72">
              <a href="#story" className="block hover:text-gold">Story</a>
              <a href="#signature" className="block hover:text-gold">Specialties</a>
              <a href="#menu" className="block hover:text-gold">Menu</a>
              <a href="#branches" className="block hover:text-gold">Branches</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gold">Branches</h3>

            <div className="space-y-3 text-cream/72">
              <p>Al Najda Branch: 02 6333200</p>
              <p>Hamdan Branch: 02 4499916</p>
              <p>Baniyas Branch: 02 3686203</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gold">Order</h3>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-cream transition hover:bg-gold hover:text-deep"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-5 text-sm text-cream/45">
          © 2026 Beit El Khetyar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}