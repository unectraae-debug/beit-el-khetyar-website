import Image from 'next/image';
import MenuBook from '../components/MenuBook';
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
      <Story />
      <SignatureCategories />
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
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-deep/80 text-cream shadow-soft backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <span className="rounded-2xl bg-cream p-2 shadow-soft">
            <Image src="/images/logo.png" alt="Beit El Khetyar logo" width={118} height={76} className="h-12 w-auto object-contain" priority />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-xl font-semibold">Beit El Khetyar</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-cream/60">Restaurant & Cafeteria</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-cream/80 lg:flex">
          <a href="#story" className="transition hover:text-gold">Story</a>
          <a href="#signature" className="transition hover:text-gold">Specialties</a>
          <a href="#menu" className="transition hover:text-gold">Menu</a>
          <a href="#branches" className="transition hover:text-gold">Branches</a>
          <a href="#contact" className="transition hover:text-gold">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <a href="#menu" className="hidden rounded-full border border-cream/25 px-4 py-2 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold sm:inline-flex">View Menu</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full bg-terracotta px-4 py-2 text-sm font-bold text-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-gold hover:text-deep">WhatsApp</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-deep pt-28 text-cream">
      <div className="absolute inset-0">
        <img src="/images/menu/page-3.jpg" alt="Levantine grill and appetizers" className="h-full w-full scale-105 object-cover opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(180,129,68,.34),transparent_32%),linear-gradient(90deg,rgba(35,42,30,.98),rgba(35,42,30,.82)_42%,rgba(35,42,30,.38))]" />
      </div>
      <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 lg:grid-cols-[1fr_.86fr] lg:pt-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-sm font-semibold text-gold backdrop-blur">
            <Sparkles size={16} /> Authentic Levantine comfort food in Abu Dhabi
          </div>
          <p className="arabic mb-3 text-4xl text-gold md:text-6xl">سفرة دايمة...!</p>
          <h1 className="font-display text-6xl font-semibold leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
            Warm bread. Olive oil. Familiar flavor.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/78 md:text-xl">
            A modern home for Levantine breakfast classics, shawarma, grills, hummous, foul, and warm hospitality served across Abu Dhabi.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#digital-menu" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-deep shadow-lift transition hover:-translate-y-1 hover:bg-cream">
              Explore Menu <ArrowRight size={18} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-7 py-4 font-bold text-cream backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:text-gold">
              <MessageCircle size={18} /> Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full border border-gold/30" />
          <div className="relative rotate-2 rounded-[2.5rem] border border-cream/15 bg-cream/10 p-4 shadow-lift backdrop-blur">
            <img src="/images/menu/page-5.jpg" alt="Menu dishes preview" className="h-[520px] w-full rounded-[2rem] object-cover object-top" />
          </div>
          <div className="absolute -bottom-8 -left-8 max-w-xs rounded-[2rem] border border-gold/25 bg-cream p-6 text-deep shadow-lift">
            <div className="mb-3 flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="font-semibold">Fresh bread, signature olive oil, and generous plates made for sharing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="paper-texture relative px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <img src="/images/menu/page-4.jpg" alt="Breakfast plates" className="h-72 rounded-[2rem] object-cover object-top shadow-soft sm:mt-16" />
          <img src="/images/menu/page-6.jpg" alt="Levantine menu" className="h-96 rounded-[2rem] object-cover object-top shadow-lift" />
        </div>
        <div>
          <p className="arabic text-4xl text-olive">قصتنا</p>
          <h2 className="mt-3 font-display text-5xl font-semibold leading-tight text-deep md:text-7xl">The taste of a table that feels like home.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-ink/72">
            Beit El Khetyar is built around the feeling of a generous Levantine table: warm bread arriving first, olive oil on the side, familiar breakfast plates, grills, shawarma, and dishes made to bring people together.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-ink/72">
            The redesign should protect that authenticity while making the website feel more cinematic, appetizing, and premium from the first scroll.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Fresh bread', 'Original olive oil', 'Family-style plates'].map((item) => (
              <div key={item} className="rounded-2xl border border-olive/15 bg-cream/80 p-4 font-bold text-deep shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureCategories() {
  return (
    <section id="signature" className="relative bg-cream px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="arabic text-4xl text-olive">أصنافنا</p>
            <h2 className="mt-2 font-display text-5xl font-semibold text-deep md:text-7xl">Signature categories</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink/65">
            Larger visual cards replace repetitive tiny menu screenshots and make each category feel desirable and easy to explore.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {signatureCategories.map((category, index) => (
            <a href="#digital-menu" key={category.en} className="group relative min-h-[360px] overflow-hidden rounded-[2.25rem] bg-deep shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <img src={category.image} alt={category.en} className="absolute inset-0 h-full w-full object-cover object-top opacity-55 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-transparent" />
              <div className="relative flex h-full min-h-[360px] flex-col justify-end p-7 text-cream md:p-9">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-black text-deep">{index + 1}</span>
                <p className="arabic text-4xl text-gold">{category.ar}</p>
                <h3 className="mt-2 font-display text-4xl font-semibold">{category.en}</h3>
                <p className="mt-3 max-w-lg leading-7 text-cream/75">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalMenuPreview() {
  return (
    <section id="digital-menu" className="bg-deep px-4 py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="arabic text-4xl text-gold">قائمة رقمية</p>
          <h2 className="mt-2 font-display text-5xl font-semibold md:text-7xl">A faster way to choose</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/70">
            Keep the flipbook, but lead users with a mobile-friendly digital menu. This section is designed for quick browsing and WhatsApp ordering.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menuHighlights.map(([en, ar, desc]) => (
            <div key={en} className="group rounded-[2rem] border border-cream/10 bg-cream/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-gold/50 hover:bg-cream/[0.09]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-deep transition group-hover:rotate-3">
                <Utensils size={24} />
              </div>
              <p className="arabic text-3xl text-gold">{ar}</p>
              <h3 className="mt-2 text-2xl font-bold">{en}</h3>
              <p className="mt-3 leading-7 text-cream/65">{desc}</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-gold">
                Order this category <ArrowRight size={16} />
              </a>
            </div>
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
