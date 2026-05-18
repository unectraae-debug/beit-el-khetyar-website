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
      <DigitalMenuPreview />
      <MenuBook />
      <Branches />
      <SocialProof />
      <Contact />
      <Footer />
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-4 text-sm font-bold text-cream shadow-lift transition hover:-translate-y-1 hover:bg-deep md:hidden"
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
        <a href="#home" className="flex items-center gap-3">
          <span className="rounded-2xl bg-cream p-2 shadow-soft">
            <Image
              src="/images/logo.png"
              alt="Beit El Khetyar logo"
              width={118}
              height={76}
              className="h-12 w-auto object-contain"
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
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-paper pt-24 text-deep"
    >
      <div className="absolute inset-0 paper-texture opacity-70" />

      <div className="absolute right-10 top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute left-10 bottom-20 h-72 w-72 rounded-full bg-olive/5 blur-3xl" />

      <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-14 px-4 py-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-4">
            <p className="arabic text-3xl text-olive md:text-4xl">
              سفرة دايمة...!
            </p>

            <div className="hidden h-px w-14 bg-olive/20 md:block" />
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[0.92] tracking-tight text-deep md:text-[4.5rem]">
            Warm Levantine breakfast,
            shawarma & grills
            in Abu Dhabi.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/68 md:text-xl">
            Fresh bread, hummous, foul, shawarma, grills, and generous Levantine
            plates served daily across Beit El Khetyar branches in Abu Dhabi.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#c96d3a] px-8 py-4 text-sm font-bold text-cream shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-deep"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-olive/15 bg-transparent px-7 py-4 text-sm font-semibold text-olive transition duration-300 hover:bg-olive hover:text-cream"
            >
              View Menu
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-olive">
              <span className="text-green-600">●</span>
              Open daily 7AM–1AM
            </span>

            <span className="hidden text-olive/20 md:block">|</span>

            <span className="text-ink/55">
              3 branches across Abu Dhabi
            </span>

            <span className="hidden text-olive/20 md:block">|</span>

            <div className="flex items-center gap-2">
              <span className="rounded-full border border-olive/10 bg-cream px-3 py-1 text-xs font-semibold text-olive shadow-sm">
                Talabat
              </span>

              <span className="rounded-full border border-olive/10 bg-cream px-3 py-1 text-xs font-semibold text-olive shadow-sm">
                Careem
              </span>
            </div>
          </div>
        </div>

        <div className="relative -translate-y-10">
          <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full border border-olive/10" />

          <a
            href="https://www.google.com/search?q=beit+el+khetyar+abu+dhabi"
            target="_blank"
            rel="noreferrer"
            className="absolute -top-10 right-0 z-20 flex w-[560px] max-w-[92vw] items-center gap-5 rounded-[1.75rem] border border-olive/10 bg-[#f5f0e6]/95 px-7 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[1.55rem] leading-none text-[#d4a85a]">
                ★★★★★
              </div>

              <span className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-olive/55">
                Google Verified
              </span>
            </div>

            <div className="h-14 w-px bg-olive/10" />

            <div className="flex flex-1 flex-col pr-28">
              <span className="text-2xl font-black tracking-tight text-deep">
                4.7 ★
              </span>

              <span className="mt-1 text-base font-semibold text-deep">
                Google Reviews
              </span>

              <span className="mt-2 text-sm leading-6 text-ink/55">
                1,200+ reviews from customers across Abu Dhabi
              </span>
            </div>

            <img
              src="/images/award.png"
              alt="Tripadvisor Travellers Choice Award"
              className="absolute right-8 top-1/2 h-24 w-auto -translate-y-1/2 object-contain opacity-95"
            />
          </a>

          <div className="group relative overflow-hidden rounded-[2.5rem] border border-olive/10 bg-cream p-3 shadow-lift transition duration-700 hover:scale-[1.01]">
            <img
              src="/images/bbq.jpg"
              alt="Mixed Mashawi grill platter from Beit El Khetyar"
              className="h-[500px] w-full rounded-[2rem] object-cover object-center transition duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-t from-deep/35 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 rounded-2xl border border-olive/10 bg-[#f5f0e6] px-5 py-4 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-olive/55">
                Bestseller
              </p>

              <p className="mt-1 font-display text-2xl font-semibold text-deep">
                Mixed Mashawi
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-olive transition hover:gap-3"
              >
                Order now <ArrowRight size={14} />
              </a>
            </div>
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
    <section className="relative overflow-hidden bg-[#182118] px-4 py-20 text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(212,168,90,0.12),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.05),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold/70">
              Guest Wall
            </p>

            <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-cream md:text-7xl">
              Spotted at
              <br />
              Beit El Khetyar.
            </h2>
          </div>

          <div>
            <p className="arabic mb-4 text-3xl text-gold/80">
              ضيوفنا
            </p>

            <p className="max-w-md text-base leading-7 text-cream/62">
              Familiar faces, creator visits, and moments naturally shared
              around the Beit El Khetyar table.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          {guests.map((guest, index) => (
            <a
              key={guest.name}
              href={`https://instagram.com/${guest.handle.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-[2rem] bg-[#202920] transition duration-500 hover:-translate-y-1 ${
                index === 0 ? "lg:translate-y-4" : ""
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111711] via-[#111711]/30 to-transparent" />
              </div>

              <div className="relative flex min-h-[520px] flex-col justify-between p-7 md:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold/72">
                    {guest.label}
                  </span>

                  <span className="text-sm text-cream/55">
                    {guest.handle}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-4xl font-semibold leading-[1] text-cream md:text-5xl">
                    {guest.name}
                  </h3>

                  <p className="mt-4 max-w-sm text-base leading-7 text-cream/68">
                    {guest.note}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 border-b border-gold/30 pb-1 text-sm font-semibold text-gold/90 transition group-hover:gap-3">
                    Instagram ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-cream/10 pt-5 text-sm text-cream/45">
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
      className="paper-texture relative overflow-hidden px-4 py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <div className="overflow-hidden rounded-[2.75rem] border border-olive/10 bg-cream p-3 shadow-lift">
            <img
              src={storyImages[activeImage]}
              alt="Guests dining at Beit El Khetyar"
              className="h-[500px] w-full rounded-[2.25rem] object-cover object-center transition duration-700"
            />
          </div>

          <div className="absolute bottom-8 left-8 flex gap-2">
            {storyImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? 'w-10 bg-gold'
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

          <h2 className="mt-3 font-display text-5xl font-semibold leading-tight text-deep md:text-6xl">
            A table people return to.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            Since 2015, Beit El Khetyar has grown around a simple idea:
            serve the food people recognize, crave, and come back for.
            Breakfast plates, shawarma, grills, hummous, foul, and fresh bread —
            made with the generosity of a Levantine table.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/72">
            Over the years, it became a familiar Abu Dhabi stop for families,
            workers, friends, late-night cravings, and everyday comfort food
            served without pretending to be something else.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/72">
            What keeps people coming back is not only the food, but the feeling:
            generous portions, busy tables, familiar flavors, and the warmth of
            being welcomed like a regular.
          </p>

          <div className="mt-8 border-l-2 border-olive/20 pl-6">
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
      desc: 'Toasted wraps, garlic, pickles, and the familiar street-food comfort people come back for.',
    },
    {
      en: 'Grills',
      ar: 'مشاوي',
      image: '/images/bbq.jpg',
      desc: 'Charcoal-style plates, generous portions, and warm family sharing.',
    },
  ];

  return (
    <section id="signature" className="bg-paper px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="arabic text-4xl text-olive">أصنافنا</p>

          <h2 className="mt-3 font-display text-5xl font-semibold leading-tight text-deep md:text-7xl">
            What people come back for.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">
            Simple Levantine comfort food, served generously: breakfast plates,
            shawarma, grills, and the familiar flavors of a table made for sharing.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((item) => (
            <a
              key={item.en}
              href="#menu"
              className="group overflow-hidden rounded-[2rem] border border-olive/10 bg-cream shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.en}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="arabic text-3xl text-olive">{item.ar}</p>

                <h3 className="mt-2 font-display text-4xl font-semibold text-deep">
                  {item.en}
                </h3>

                <p className="mt-4 leading-7 text-ink/62">
                  {item.desc}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-olive">
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
      desc: 'Creamy bowls finished with olive oil.',
      image: '/images/humus.jpg',
    },
    {
      en: 'Falafel',
      ar: 'فلافل',
      desc: 'Crisp, golden, and made for breakfast tables.',
      image: '/images/falafel plate.jpg',
    },
    {
      en: 'Fatteh',
      ar: 'فتات',
      desc: 'Layered comfort with yoghurt, bread, and warm toppings.',
      image: '/images/Eggplant-fatteh-featured-photo.jpg',
    },
    {
      en: 'BBQ',
      ar: 'مشاوي',
      desc: 'Grilled plates with smoky Levantine flavor.',
      image: '/images/bbq.jpg',
    },
    {
      en: 'Manakeesh',
      ar: 'مناقيش',
      desc: 'Oven-baked classics with zaatar, cheese, and more.',
      image: '/images/manakeesh.jpg',
    },
    {
      en: 'Shawarma',
      ar: 'الشاورما',
      desc: 'Juicy wraps with pickles, garlic, and toasted bread.',
      image: '/images/arabic shawarma.jpg',
    },
  ];

  return (
    <section
      id="digital-menu"
      className="relative overflow-hidden bg-paper py-28"
    >
      <div className="absolute inset-0 paper-texture opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="arabic text-3xl text-olive">
            قائمة رقمية
          </p>

          <h2 className="mt-3 font-display text-5xl font-semibold leading-[1] tracking-tight text-deep md:text-7xl">
            A simpler way to browse the table.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            Explore Beit El Khetyar’s most-loved categories with a clean,
            visual menu made for quick browsing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.en}
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-olive/10 bg-cream shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="h-64 overflow-hidden bg-paper">
                <img
                  src={category.image}
                  alt={category.en}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="arabic text-3xl text-olive">
                  {category.ar}
                </p>

                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-deep">
                  {category.en}
                </h3>

                <p className="mt-4 leading-7 text-ink/62">
                  {category.desc}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-olive">
                  Explore category
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
  return (
    <section id="branches" className="paper-texture px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="arabic text-4xl text-olive">فروعنا</p>
          <h2 className="mt-2 font-display text-5xl font-semibold text-deep md:text-7xl">Abu Dhabi branches</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/65">Each branch now has stronger calls-to-action and space for real maps, photos, opening hours, and parking details.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {branches.map((branch) => (
            <article key={branch.name} className="rounded-[2rem] border border-olive/15 bg-cream p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-olive text-cream"><MapPin /></div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-olive/70">{branch.area}</p>
              <h3 className="mt-2 text-2xl font-black text-deep">{branch.name}</h3>
              <div className="mt-5 grid gap-3 text-ink/70">
                <p className="flex items-center gap-2"><Phone size={18} className="text-olive" /> {branch.phone}</p>
                <p className="flex items-center gap-2"><Clock size={18} className="text-olive" /> {branch.hours}</p>
              </div>
              <div className="mt-6 h-40 rounded-3xl border border-dashed border-olive/30 bg-paper p-5 text-sm text-ink/55">
                Replace with real embedded Google Map and storefront photo.
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${branch.phone.replaceAll(' ', '')}`} className="rounded-full border border-olive/25 px-5 py-3 font-bold text-olive transition hover:bg-olive hover:text-cream">Call</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-3 font-bold text-cream transition hover:bg-deep"><MessageCircle size={18} /> WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-cream px-4 py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-deep p-7 text-cream shadow-lift md:p-12">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1fr] lg:items-center">
          <div>
            <div className="mb-4 flex text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={22} fill="currentColor" />)}</div>
            <h2 className="font-display text-5xl font-semibold">Loved by Abu Dhabi locals.</h2>
            <p className="mt-5 leading-8 text-cream/70">Add real Google reviews, Instagram posts, and delivery platform badges here to build trust before users order.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review} className="rounded-3xl border border-cream/10 bg-cream/[0.07] p-6">
                <Quote className="mb-4 text-gold" />
                <p className="leading-7 text-cream/78">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-paper to-transparent" />
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-olive/15 bg-paper shadow-lift lg:grid-cols-[.85fr_1fr]">
        <div className="bg-deep p-8 text-cream md:p-12">
          <p className="arabic text-4xl text-gold">تواصل معنا</p>
          <h2 className="mt-2 font-display text-5xl font-semibold leading-tight md:text-6xl">Order, visit, or reserve.</h2>
          <p className="mt-6 leading-8 text-cream/72">Use this space for real WhatsApp ordering, delivery links, reservations, and social channels. Remove all placeholder text before publishing.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-deep"><MessageCircle size={18} /> WhatsApp</a>
            <a href="#branches" className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 font-bold text-cream"><MapPin size={18} /> Find branch</a>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#" className="rounded-full border border-cream/20 p-3 text-cream/80 transition hover:border-gold hover:text-gold"><Instagram /></a>
            <a href="#" className="rounded-full border border-cream/20 p-3 text-cream/80 transition hover:border-gold hover:text-gold"><Facebook /></a>
          </div>
        </div>
        <form className="grid gap-4 p-6 md:p-10">
          <input className="rounded-2xl border border-olive/15 bg-cream px-5 py-4 outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/10" placeholder="Name" />
          <input className="rounded-2xl border border-olive/15 bg-cream px-5 py-4 outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/10" placeholder="Phone" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-olive/15 bg-cream px-5 py-4 outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/10" placeholder="Guests" />
            <input className="rounded-2xl border border-olive/15 bg-cream px-5 py-4 outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/10" placeholder="Date / Time" />
          </div>
          <textarea className="min-h-36 rounded-2xl border border-olive/15 bg-cream px-5 py-4 outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/10" placeholder="Special requests" />
          <button type="button" className="rounded-full bg-olive px-7 py-4 font-bold text-cream shadow-soft transition hover:-translate-y-1 hover:bg-deep">Send Request</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="tile-strip h-12 opacity-80" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img src="/images/logo.png" alt="Beit El Khetyar logo" className="mb-5 h-20 rounded-2xl bg-cream object-contain p-2" />
          <p className="max-w-md leading-7 text-cream/70">Beit El Khetyar Restaurant & Cafeteria, Abu Dhabi. Authentic Levantine comfort food served with warmth.</p>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-gold">Navigation</h4>
          <div className="grid gap-2 text-cream/70"><a href="#story">Story</a><a href="#signature">Specialties</a><a href="#menu">Menu</a><a href="#branches">Branches</a></div>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-gold">Branches</h4>
          {branches.map((b) => <p key={b.name} className="text-cream/70">{b.name}: {b.phone}</p>)}
        </div>
      </div>
    </footer>
  );
}
