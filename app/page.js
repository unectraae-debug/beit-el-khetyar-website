import Image from 'next/image';
import MenuBook from '../components/MenuBook';
import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const categories = [
  ['Hummous Dishes', 'أطباق الحمص'], ['Beverages', 'مشروبات'], ['Appetizers', 'المقبلات'], ['Lebanese Salads', 'سلطات لبنانية'],
  ['Foul Dishes', 'أطباق الفول'], ['Fatteh', 'فتات'], ['BBQ', 'مشاوي'], ['Falafel', 'فلافل'],
  ['Jerusalem Bagel', 'كعكة قدسية'], ['Manakeesh', 'مناقيش'], ['Eggs Plates', 'أطباق البيض'], ['Liver', 'كبدة'],
  ['El Khetyar Fried', 'قلايات الاختيار'], ['Shawarma', 'الشاورما'], ['Musakhan', 'مسخن'], ['Grill', 'جريل'], ['Chicken', 'دجاج'], ['Sandwiches', 'السندويشات']
];

const branches = [
  { name: 'Al Najda Branch', phone: '02 6333200' },
  { name: 'Hamdan Branch', phone: '02 4499916' },
  { name: 'Baniyas Branch', phone: '02 3686203' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <Hero />
      <About />
      <FeaturedCategories />
      <MenuBook />
      <Branches />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-olive/15 bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Beit El Khetyar logo" width={136} height={86} className="h-14 w-auto object-contain" priority />
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-deep md:flex">
          <a href="#home" className="hover:text-olive">Home</a>
          <a href="#about" className="hover:text-olive">About</a>
          <a href="#menu" className="hover:text-olive">Menu</a>
          <a href="#branches" className="hover:text-olive">Branches</a>
          <a href="#contact" className="hover:text-olive">Contact</a>
        </div>
        <div className="flex gap-2">
          <a href="#menu" className="rounded-full border border-olive/30 px-4 py-2 text-sm font-semibold text-olive hover:bg-olive hover:text-cream">View Menu</a>
          <a href="#branches" className="hidden rounded-full bg-olive px-4 py-2 text-sm font-semibold text-cream hover:bg-deep sm:inline-flex">WhatsApp</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-16 md:pt-24">
      <div className="tile-strip absolute bottom-0 left-0 h-28 w-full opacity-85" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-olive/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <p className="arabic mb-4 text-4xl text-olive md:text-5xl">سفرة دايمة...!</p>
          <h1 className="menu-heading text-6xl font-semibold leading-[.95] text-deep md:text-8xl">Enjoy Your Meal...</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75">
            Beit El Khetyar Restaurant & Cafeteria brings Levantine comfort food, warm hospitality, fresh bread, olive oil, grills, shawarma, foul, hummous, and breakfast classics to Abu Dhabi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-olive px-7 py-4 font-semibold text-cream shadow-soft hover:bg-deep">View Interactive Menu</a>
            <a href="#branches" className="rounded-full border border-olive/35 px-7 py-4 font-semibold text-olive hover:bg-olive hover:text-cream">Order on WhatsApp</a>
          </div>
        </div>
        <div className="relative z-10 rounded-[2rem] border border-olive/20 bg-paper p-4 shadow-book">
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/menu/page-4.jpg" alt="Food menu preview" className="h-72 rounded-2xl object-cover object-top" />
            <img src="/images/menu/page-5.jpg" alt="Food menu preview" className="mt-12 h-72 rounded-2xl object-cover object-top" />
          </div>
          <div className="absolute -bottom-6 left-8 rounded-2xl bg-cream px-6 py-4 shadow-soft">
            <p className="text-sm font-semibold text-olive">Restaurant & Cafeteria</p>
            <p className="arabic text-2xl text-deep">بيت الاختيار</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="paper-texture px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="arabic mb-2 text-3xl text-olive">قصتنا</p>
          <h2 className="menu-heading text-5xl font-semibold text-deep">Food is an experience.</h2>
          <p className="mt-6 leading-8 text-ink/75">
            Bait El Khetyar Restaurant & Cafeteria truly is said that food is an experience. What better place to encounter it than Bait El Khetyar Restaurant and Cafeteria? Here, authentic oriental food is blended with the taste of the past and served with modern comfort.
          </p>
          <p className="mt-4 font-semibold italic text-olive">All foods are served with Bait Al Khetyar special bread and original olive oil.</p>
        </div>
        <div className="arabic rounded-[2rem] border border-olive/20 bg-cream p-8 text-right shadow-soft">
          <p className="text-2xl leading-10 text-deep">
            نقدم تجربة طعام دافئة مستوحاة من المائدة الشامية، حيث الخبز الطازج، زيت الزيتون الأصيل، والمذاق البيتي الذي يجمع العائلة والأصدقاء.
          </p>
          <p className="mt-8 text-4xl text-olive">سفرة دايمة...!</p>
        </div>
      </div>
    </section>
  );
}

function FeaturedCategories() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="arabic text-3xl text-olive">أصنافنا</p>
            <h2 className="menu-heading text-5xl font-semibold text-deep">Featured Categories</h2>
          </div>
          <p className="max-w-xl text-ink/65">Category cards follow the menu colors: cream paper, olive rules, dark headings, Arabic/English pairing, and simple spacing.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([en, ar], i) => (
            <a href="#menu" key={en} className="group rounded-3xl border border-olive/20 bg-paper p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 h-28 overflow-hidden rounded-2xl bg-olive/10">
                <img src={`/images/menu/page-${(i % 6) + 3}.jpg`} alt="Menu food" className="h-full w-full object-cover object-top opacity-85 transition group-hover:scale-105" />
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-olive/25 pt-4">
                <h3 className="text-xl font-bold text-deep">{en}</h3>
                <p className="arabic text-2xl text-olive">{ar}</p>
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
    <section id="branches" className="paper-texture px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="arabic text-center text-3xl text-olive">فروعنا</p>
        <h2 className="menu-heading text-center text-5xl font-semibold text-deep">Abu Dhabi Branches</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {branches.map((branch) => (
            <div key={branch.name} className="rounded-[2rem] border border-olive/20 bg-cream p-7 shadow-soft">
              <MapPin className="mb-5 text-olive" />
              <h3 className="text-2xl font-bold text-deep">{branch.name}</h3>
              <p className="mt-3 flex items-center gap-2 text-lg font-semibold text-olive"><Phone size={18} /> {branch.phone}</p>
              <div className="mt-6 flex gap-3">
                <a href={`tel:${branch.phone.replaceAll(' ', '')}`} className="rounded-full border border-olive/30 px-5 py-3 font-semibold text-olive hover:bg-olive hover:text-cream">Call</a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-olive px-5 py-3 font-semibold text-cream hover:bg-deep"><MessageCircle size={18} /> WhatsApp</a>
              </div>
              <div className="mt-6 flex h-36 items-center justify-center rounded-2xl border border-dashed border-olive/30 text-sm text-ink/50">Google Maps placeholder</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-olive/20 bg-paper p-6 shadow-book md:grid-cols-2 md:p-10">
        <div>
          <p className="arabic text-3xl text-olive">تواصل معنا</p>
          <h2 className="menu-heading text-5xl font-semibold text-deep">Order, visit, or reserve.</h2>
          <p className="mt-5 leading-8 text-ink/70">Use this section for reservations, WhatsApp ordering, delivery information, and social links. Replace placeholders with the restaurant’s live links.</p>
          <div className="mt-8 flex gap-3">
            <a href="#" className="rounded-full border border-olive/30 p-3 text-olive hover:bg-olive hover:text-cream"><Instagram /></a>
            <a href="#" className="rounded-full border border-olive/30 p-3 text-olive hover:bg-olive hover:text-cream"><Facebook /></a>
          </div>
        </div>
        <form className="grid gap-4">
          <input className="rounded-2xl border border-olive/20 bg-cream px-5 py-4 outline-none focus:border-olive" placeholder="Name" />
          <input className="rounded-2xl border border-olive/20 bg-cream px-5 py-4 outline-none focus:border-olive" placeholder="Phone" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-olive/20 bg-cream px-5 py-4 outline-none focus:border-olive" placeholder="Guests" />
            <input className="rounded-2xl border border-olive/20 bg-cream px-5 py-4 outline-none focus:border-olive" placeholder="Date / Time" />
          </div>
          <textarea className="min-h-32 rounded-2xl border border-olive/20 bg-cream px-5 py-4 outline-none focus:border-olive" placeholder="Special requests" />
          <button type="button" className="rounded-full bg-olive px-7 py-4 font-semibold text-cream hover:bg-deep">Send Request</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="tile-strip h-12 opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img src="/images/logo.png" alt="logo" className="mb-4 h-20 rounded-xl bg-cream object-contain p-2" />
          <p className="max-w-md text-cream/75">Beit El Khetyar Restaurant & Cafeteria, Abu Dhabi. Authentic Levantine comfort food, served with warmth.</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Navigation</h4>
          <div className="grid gap-2 text-cream/75"><a href="#about">About</a><a href="#menu">Menu</a><a href="#branches">Branches</a><a href="#contact">Contact</a></div>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Branches</h4>
          {branches.map(b => <p key={b.name} className="text-cream/75">{b.name}: {b.phone}</p>)}
        </div>
      </div>
    </footer>
  );
}
