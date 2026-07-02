import { useLocation } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  BedDouble,
  Users,
  Wind,
  Droplets,
  Home,
  Flame,
  Star,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  Calendar,
  Check,
  Wifi,
  Clock,
  ShieldCheck,
  Coffee,
  Bath,
  DoorOpen,
  Utensils,
  HeartHandshake,
  Sparkle,
} from "lucide-react";

import heroHall from "@/assets/hero-hall.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import exterior from "@/assets/exterior.jpg";
import flowers from "@/assets/flowers.jpg";

const gurujiImage = "/guruji.png";
const siteLogo = "https://sciencedivine.org/wp-content/uploads/2023/07/cropped-SD_logo.png";
const mandirImage = "/assets-custom/mandir-new.jpeg";
const roomDeluxeImage = "/assets-custom/room-1.jpeg";
const roomFamilyImage = "/assets-custom/room-2.jpeg";
const hallImage = "/assets-custom/hall-1.jpeg";
const washroomImage = "/assets-custom/washroom-1.jpeg";

const nav = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Halls", href: "/halls" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function HomePage() {
  return (
    <PageShell>
      <Hero />
      <About />
      <Testimonials />
    </PageShell>
  );
}

/* ----------------------------- NAVBAR ----------------------------- */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 border-b border-border/70 shadow-card backdrop-blur-xl transition-all duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between px-1 sm:px-2 py-3 transition-all duration-500">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={siteLogo}
              alt="Sakshi Dham logo"
              width={40}
              height={40}
              decoding="async"
              className="h-10 w-10 rounded-full object-contain bg-white shadow-glow"
            />
            <div className="leading-tight">
              <div className="font-display text-lg sm:text-xl font-semibold tracking-tight">
                Sakshi Dham
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                International
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => {
              const active = currentPath === n.href;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  className={`text-sm font-semibold relative group transition ${
                    active ? "text-saffron-deep" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-saffron transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/rooms"
              className="hidden sm:inline-flex btn-saffron rounded-full px-5 py-2.5 text-sm font-semibold animate-pulse-glow"
            >
              Book Now
            </a>
            <button
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full glass"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-soft"
          >
            <div className="flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition ${currentPath === n.href ? "bg-accent text-saffron-deep" : "hover:bg-accent/60"}`}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="/rooms"
                onClick={() => setOpen(false)}
                className="mt-2 btn-saffron rounded-xl px-4 py-3 text-center text-sm font-semibold"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------- HERO ----------------------------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100svh-72px)] flex items-center justify-center overflow-hidden pt-40 sm:pt-44"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroHall}
          alt="Sakshi Dham satsang hall"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1a10]/70 via-[#3a2718]/60 to-[#faf7f2]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(232,164,76,0.35),transparent_60%)]" />
      </motion.div>

      <Particles />

      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center pb-24"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto relative w-44 h-44 sm:w-56 sm:h-56"
        >
          <div className="absolute inset-0 rounded-full divine-ring blur-sm opacity-80" />
          <div className="absolute inset-1 rounded-full bg-background" />
          <div className="absolute inset-2 rounded-full overflow-hidden ring-4 ring-white/80 shadow-glow bg-cream">
            <img
              src={gurujiImage}
              alt="Guruji of Sakshi Dham International"
              onError={(event) => {
                event.currentTarget.src = flowers;
              }}
              className="w-full h-full object-contain bg-cream"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute -inset-3 rounded-full animate-pulse-glow pointer-events-none" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-foreground/80"
        >
          <Sparkles className="w-3.5 h-3.5 text-saffron-deep" />
          Vrindavan · Divine Sanctuary
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          Sakshi Dham
          <span className="block text-gradient-gold italic font-semibold">International</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-5 text-lg sm:text-xl text-white/90 font-light"
        >
          A Peaceful Spiritual Stay in Vrindavan
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/75 leading-relaxed"
        >
          Experience divine peace, comfortable stay, satsang halls, and spiritual energy in the
          heart of Vrindavan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="/rooms"
            className="btn-saffron rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Book Room <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="/about"
            className="glass rounded-full px-7 py-3.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/20 transition"
          >
            Explore Ashram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Particles() {
  const dots = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 pointer-events-none z-[5]">
      {dots.map((_, i) => {
        const size = 4 + ((i * 7) % 10);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-gradient-saffron opacity-40 blur-[1px] animate-float"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${(i % 6) * 0.7}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ------------------------------ ABOUT ----------------------------- */
export function About() {
  const features = [
    { icon: Sparkles, label: "Peaceful Environment" },
    { icon: BedDouble, label: "Clean Rooms" },
    { icon: Droplets, label: "Hot Water" },
    { icon: Wind, label: "AC Rooms" },
    { icon: Home, label: "Spacious Halls" },
    { icon: Flame, label: "Spiritual Atmosphere" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft">
            <img
              src={exterior}
              alt="Sakshi Dham exterior"
              loading="lazy"
              decoding="async"
              width={1280}
              height={960}
              className="w-full h-[520px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-52 rounded-2xl overflow-hidden shadow-soft ring-4 ring-background rotate-3">
            <img
              src={flowers}
              alt="Diya and marigold"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -left-4 glass rounded-2xl px-4 py-3 shadow-card">
            <div className="text-2xl font-display font-semibold text-gradient-gold">15+</div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Years of Seva
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium"
          >
            About the Ashram
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-tight"
          >
            Welcome to <span className="text-gradient-gold italic">Sakshi Dham</span> International
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Sakshi Dham International is a spiritual ashram in Vrindavan offering peaceful
            accommodation, satsang halls, and divine surroundings for devotees, families, and
            spiritual seekers.
          </motion.p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group glass rounded-2xl p-4 flex items-center gap-3 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-saffron grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-sm">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ ROOMS ----------------------------- */
const rooms = [
  {
    name: "Deluxe Room",
    img: roomDeluxeImage,
    price: "1,499",
    features: ["Double Bed", "Attached Bathroom", "AC", "Hot Water"],
    tag: "Most Booked",
  },
  {
    name: "Family Room",
    img: roomFamilyImage,
    price: "2,499",
    features: ["3 Beds", "Attached Bathroom", "AC", "Spacious"],
    tag: "Best for Families",
  },
  {
    name: "Premium Suite",
    img: roomSuite,
    price: "3,499",
    features: ["Luxury Bed", "Best Comfort", "AC", "Premium Stay"],
    tag: "Signature",
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
      <SectionHeader
        eyebrow="Rooms & Stay"
        title={
          <>
            Rest in <span className="text-gradient-gold italic">divine comfort</span>
          </>
        }
        subtitle="Thoughtfully designed rooms for devotees, families, and seekers — with all modern comforts wrapped in ashram serenity."
      />

      <div className="mt-16 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {rooms.map((r, i) => (
          <motion.article
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl overflow-hidden glass shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={r.img}
                alt={r.name}
                loading="lazy"
                decoding="async"
                width={1280}
                height={896}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                {r.tag}
              </span>
              <span className="absolute top-4 right-4 bg-gradient-saffron rounded-full px-3 py-1.5 text-white text-xs font-semibold shadow-glow">
                ₹{r.price} / night
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-display font-semibold">{r.name}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {r.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-saffron-deep" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2">
                <a
                  href="/rooms"
                  className="flex-1 text-center rounded-full border border-border py-2.5 text-sm font-semibold hover:bg-accent transition"
                >
                  View Room
                </a>
                <a
                  href="/rooms"
                  className="flex-1 btn-saffron text-center rounded-full py-2.5 text-sm font-semibold"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ HALLS ----------------------------- */
const halls = [
  {
    name: "Maha Satsang Hall",
    img: hallImage,
    capacity: "300 People",
    use: "Satsang, Kirtan, Pravachan",
    price: "11,000",
  },
  {
    name: "Spiritual Event Hall",
    img: hallImage,
    capacity: "150 People",
    use: "Meditation, Gatherings, Events",
    price: "7,500",
  },
];

export function Halls() {
  return (
    <section id="halls" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <SectionHeader
        eyebrow="Satsang & Event Halls"
        title={
          <>
            Sacred spaces for <span className="text-gradient-gold italic">gathering & grace</span>
          </>
        }
        subtitle="Grand halls with ornate detailing, warm lighting, and reverent acoustics — designed for kirtan, pravachan, and meditative gatherings."
      />

      <div className="mt-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        {halls.map((h, i) => (
          <motion.article
            key={h.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative rounded-[2rem] overflow-hidden shadow-card hover:shadow-soft transition-all duration-500"
          >
            <div className="relative h-[420px] sm:h-[480px] overflow-hidden">
              <img
                src={h.img}
                alt={h.name}
                loading="lazy"
                decoding="async"
                width={1280}
                height={896}
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a10]/95 via-[#2a1a10]/40 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest">
                <span className="glass-dark rounded-full px-3 py-1">
                  <Users className="w-3 h-3 inline mr-1" /> {h.capacity}
                </span>
                <span className="glass-dark rounded-full px-3 py-1">{h.use}</span>
              </div>
              <h3 className="mt-4 text-3xl sm:text-4xl font-display font-semibold">{h.name}</h3>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-widest">Starting at</div>
                  <div className="text-2xl font-display font-semibold text-gradient-gold">
                    ₹{h.price} <span className="text-sm text-white/80">/ day</span>
                  </div>
                </div>
                <a
                  href="/rooms"
                  className="btn-saffron rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                >
                  Reserve Hall <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- GALLERY ---------------------------- */
const galleryItems = [
  { src: mandirImage, alt: "Mandir", span: "row-span-2" },
  { src: roomDeluxeImage, alt: "Deluxe room", span: "" },
  { src: hallImage, alt: "Event hall", span: "" },
  { src: washroomImage, alt: "Washroom", span: "row-span-2" },
  { src: hallImage, alt: "Maha satsang hall", span: "col-span-2" },
  { src: roomSuite, alt: "Premium suite", span: "" },
  { src: exterior, alt: "Exterior", span: "" },
  { src: flowers, alt: "Diya and marigold", span: "" },
  { src: roomFamilyImage, alt: "Family room", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
      <SectionHeader
        eyebrow="Gallery"
        title={
          <>
            Moments of <span className="text-gradient-gold italic">peace & devotion</span>
          </>
        }
        subtitle="A glimpse into the spaces, rituals, and light that make Sakshi Dham a home away from home."
      />

      <div className="mt-14 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
        {galleryItems.map((g, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 6) * 0.06, duration: 0.7 }}
            className={`relative overflow-hidden rounded-2xl shadow-card group ${g.span}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <figcaption className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition">
              {g.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- BOOKING ---------------------------- */
export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    type: "Deluxe Room",
    guests: "2",
    note: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (!form.name || !form.phone || !form.checkin || !form.checkout) return;
    setSubmitted(true);
    setAttemptedSubmit(false);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section id="booking" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
            Reserve Your Stay
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-tight">
            Begin your <span className="text-gradient-gold italic">divine journey</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Share a few details and our seva team will confirm your reservation within a few hours.
            Every booking is treated with warmth and grace.
          </p>
        </motion.div>

        <motion.form
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          onSubmit={onSubmit}
          className="mt-10 glass rounded-3xl p-6 sm:p-8 shadow-soft"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              id="booking-name"
              name="name"
              label="Full Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              autoComplete="name"
              required
              invalid={attemptedSubmit && !form.name}
              error="Please enter your full name."
            />
            <Field
              id="booking-phone"
              name="phone"
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              autoComplete="tel"
              required
              invalid={attemptedSubmit && !form.phone}
              error="Please enter your phone number."
            />
            <Field
              id="booking-email"
              name="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              autoComplete="email"
              className="sm:col-span-2"
            />
            <Field
              id="booking-checkin"
              name="checkin"
              label="Check-in"
              type="date"
              value={form.checkin}
              onChange={(v) => setForm({ ...form, checkin: v })}
              autoComplete="off"
              required
              invalid={attemptedSubmit && !form.checkin}
              error="Please choose your check-in date."
              icon={Calendar}
            />
            <Field
              id="booking-checkout"
              name="checkout"
              label="Check-out"
              type="date"
              value={form.checkout}
              onChange={(v) => setForm({ ...form, checkout: v })}
              autoComplete="off"
              required
              invalid={attemptedSubmit && !form.checkout}
              error="Please choose your check-out date."
              icon={Calendar}
            />
            <div>
              <label
                htmlFor="booking-type"
                className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold"
              >
                Room / Hall
              </label>
              <select
                id="booking-type"
                name="roomType"
                value={form.type}
                aria-invalid={false}
                aria-describedby="booking-type-help"
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-saffron transition"
              >
                <option>Deluxe Room</option>
                <option>Family Room</option>
                <option>Premium Suite</option>
                <option>Maha Satsang Hall</option>
                <option>Spiritual Event Hall</option>
              </select>
              <p id="booking-type-help" className="sr-only">
                Choose a room or hall for this booking.
              </p>
            </div>
            <Field
              id="booking-guests"
              name="guests"
              label="Guests"
              type="number"
              value={form.guests}
              onChange={(v) => setForm({ ...form, guests: v })}
              autoComplete="off"
              min="1"
            />
            <div className="sm:col-span-2">
              <label
                htmlFor="booking-message"
                className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold"
              >
                Special Request
              </label>
              <textarea
                id="booking-message"
                name="message"
                value={form.note}
                aria-invalid={false}
                aria-describedby="booking-message-help"
                autoComplete="off"
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                rows={3}
                className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-saffron transition resize-none"
                placeholder="Dietary needs, arrival time, satsang preferences…"
              />
              <p id="booking-message-help" className="sr-only">
                Share arrival time, dietary needs, or satsang preferences.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full btn-saffron rounded-full py-4 text-sm font-semibold inline-flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" /> Booking Received — Hari Om!
              </>
            ) : (
              <>
                Confirm Booking <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            You'll receive a confirmation call within a few hours.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
  invalid = false,
  error,
  min,
  className = "",
  icon: Icon,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  invalid?: boolean;
  error?: string;
  min?: string;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const helpId = `${id}-help`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold"
      >
        {label} {required && <span className="text-saffron-deep">*</span>}
      </label>
      <div className="relative mt-2">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          required={required}
          min={min}
          autoComplete={autoComplete}
          aria-invalid={invalid}
          aria-describedby={helpId}
          onChange={(e) => onChange(e.target.value)}
          className={
            "w-full rounded-xl border border-border bg-background/60 py-3 text-sm outline-none focus:ring-2 focus:ring-saffron transition " +
            (Icon ? "pl-10 pr-4" : "px-4")
          }
        />
      </div>
      <p id={helpId} className={invalid ? "mt-1 text-xs text-destructive" : "sr-only"}>
        {invalid ? error : `${label} field`}
      </p>
    </div>
  );
}

/* --------------------------- TESTIMONIALS -------------------------- */
const reviews = [
  { text: "Peaceful stay and amazing spiritual atmosphere.", author: "Devotee", from: "Delhi" },
  { text: "Rooms were clean and halls were spacious.", author: "Family Visitor", from: "Mumbai" },
  { text: "Perfect place in Vrindavan for satsang.", author: "Spiritual Group", from: "Bengaluru" },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
      <SectionHeader
        eyebrow="Devotee Voices"
        title={
          <>
            Words from our <span className="text-gradient-gold italic">extended family</span>
          </>
        }
      />

      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex gap-0.5 text-saffron-deep">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 font-display text-xl leading-snug">"{r.text}"</p>
            <div className="mt-6 pt-4 border-t border-border/60">
              <div className="font-semibold text-sm">{r.author}</div>
              <div className="text-xs text-muted-foreground">from {r.from}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ---------------------------- */
export function Contact() {
  const [showMap, setShowMap] = useState(false);
  const cards = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@sakshidham.org",
      href: "mailto:info@sakshidham.org",
    },
    { icon: MapPin, label: "Location", value: "Vrindavan, U.P.", href: "#map" },
  ];
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Come visit <span className="text-gradient-gold italic">Sakshi Dham</span>
          </>
        }
        subtitle="Vrindavan, Uttar Pradesh — India"
      />

      <div className="mt-14 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group glass rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-saffron grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-1 font-semibold">{c.value}</div>
            </a>
          ))}
        </div>

        <div
          id="map"
          className="relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-border h-[420px] lg:h-full min-h-[420px] bg-gradient-soft"
        >
          {showMap ? (
            <iframe
              title="Sakshi Dham location"
              src="https://www.google.com/maps?q=Vrindavan,Uttar+Pradesh,India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-10 h-10 text-saffron-deep" aria-hidden="true" />
              <h3 className="mt-4 font-display text-3xl font-semibold">Vrindavan, Uttar Pradesh</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Open the interactive Google Map only when you need directions.
              </p>
              <button
                type="button"
                onClick={() => setShowMap(true)}
                className="mt-6 btn-saffron rounded-full px-6 py-3 text-sm font-semibold"
              >
                View Interactive Map
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ---------------------------- */
export function Footer() {
  return (
    <footer className="relative mt-10 bg-[#241811] text-white/80 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(232,164,76,0.25),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={siteLogo}
              alt="Sakshi Dham logo"
              className="h-12 w-12 rounded-full object-contain bg-white shadow-glow"
            />
            <div>
              <div className="font-display text-xl font-semibold text-white">
                Sakshi Dham International
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Vrindavan · India
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            A peaceful spiritual ashram offering divine stay, satsang halls, and warm hospitality in
            the sacred land of Vrindavan.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Ic, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-saffron hover:bg-gradient-saffron transition-all"
                aria-label="social"
              >
                <Ic className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-saffron/90 font-semibold">
            Quick Links
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-saffron transition">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-saffron/90 font-semibold">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Vrindavan, Uttar Pradesh</li>
            <li>+91 98765 43210</li>
            <li>info@sakshidham.org</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© 2026 Sakshi Dham International. All rights reserved.</span>
          <span className="tracking-widest uppercase">Hari Om · Radhe Radhe</span>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------- SECTION HEAD -------------------------- */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <motion.p
        {...fadeUp}
        className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.05 }}
        className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-5 text-muted-foreground leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  primaryLabel,
  primaryHref,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
  primaryLabel: string;
  primaryHref: string;
}) {
  return (
    <section className="relative min-h-[58svh] pt-32 sm:pt-36 flex items-center overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#241811]/80 via-[#3a2718]/62 to-background" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white">
        <motion.p
          {...fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs uppercase tracking-[0.25em]"
        >
          <Sparkles className="w-3.5 h-3.5 text-saffron" /> {eyebrow}
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.06 }}
          className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]"
        >
          {title}
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="mt-5 max-w-2xl mx-auto text-white/82 leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.18 }} className="mt-8">
          <a
            href={primaryHref}
            className="btn-saffron rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            {primaryLabel} <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const luxuryRooms = [
  {
    category: "Deluxe",
    name: "Deluxe Devotee Room",
    img: roomDeluxeImage,
    price: "1,499",
    capacity: "2-4 Guests",
    badge: "Most Booked",
    description:
      "A peaceful AC room with attached washroom, warm bedding, and a quiet atmosphere for families and devotees.",
    amenities: ["AC", "Attached Washroom", "Hot Water", "Daily Seva Support"],
    policies: [
      "Check-in from 12:00 PM",
      "Quiet hours after 10:00 PM",
      "Photo ID required at arrival",
    ],
  },
  {
    category: "Family",
    name: "Family Comfort Room",
    img: roomFamilyImage,
    price: "2,499",
    capacity: "3-5 Guests",
    badge: "Family Choice",
    description:
      "A spacious family stay designed for longer Vrindavan visits, with flexible bedding and easy access to ashram facilities.",
    amenities: ["Family Beds", "Window AC", "Attached Washroom", "Extra Bedding"],
    policies: ["Ideal for families", "Advance booking preferred", "Reception support available"],
  },
  {
    category: "Premium Suite",
    name: "Premium Suite Stay",
    img: roomSuite,
    price: "3,499",
    capacity: "2-3 Guests",
    badge: "Signature",
    description:
      "A premium room experience for guests who want added calm, privacy, and comfort during their spiritual visit.",
    amenities: ["Premium Bed", "AC", "Hot Water", "Priority Assistance"],
    policies: ["Limited availability", "Best for senior guests", "Booking confirmation by call"],
  },
  {
    category: "Executive",
    name: "Executive Seva Room",
    img: roomDeluxeImage,
    price: "3,999",
    capacity: "2 Guests",
    badge: "Executive",
    description:
      "A refined stay option with a calm setting for coordinators, speakers, and guests visiting for satsang events.",
    amenities: ["AC", "Work Corner", "Attached Washroom", "Priority Check-in"],
    policies: ["Subject to availability", "Recommended for event guests", "Early request advised"],
  },
];

const roomStats = [
  ["24", "Comfort Rooms"],
  ["12+", "Core Amenities"],
  ["24/7", "Reception Support"],
  ["High", "WiFi Availability"],
];

const roomAmenityGrid = [
  { icon: Wind, title: "AC Rooms", text: "Comfortable cooling for restful stays." },
  { icon: Bath, title: "Attached Washrooms", text: "Private, practical, and easy for families." },
  { icon: Droplets, title: "Hot Water", text: "Fresh morning routines before darshan." },
  { icon: Wifi, title: "WiFi Access", text: "Stay connected when needed." },
  { icon: Clock, title: "Reception", text: "Seva support for arrival and booking." },
  { icon: ShieldCheck, title: "Family Safe", text: "A calm environment for all age groups." },
];

const roomFaqs = [
  [
    "Can I book rooms for a family?",
    "Yes. Family rooms and extra bedding can be requested during booking.",
  ],
  ["Are washrooms attached?", "Yes. The listed rooms include attached washroom access."],
  [
    "How is booking confirmed?",
    "Submit the form and the seva team will confirm availability by phone or WhatsApp.",
  ],
  [
    "Is early check-in possible?",
    "Early check-in depends on availability and should be requested in advance.",
  ],
];

function LuxuryRoomsExperience() {
  const categories = ["All", "Deluxe", "Family", "Premium Suite", "Executive"];
  const [category, setCategory] = useState("All");
  const [activeRoom, setActiveRoom] = useState<(typeof luxuryRooms)[number] | null>(null);
  const visibleRooms =
    category === "All" ? luxuryRooms : luxuryRooms.filter((room) => room.category === category);

  return (
    <>
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
                Luxury Accommodation
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-tight">
                Rooms shaped for{" "}
                <span className="text-gradient-gold italic">rest, seva, and grace</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Choose a peaceful stay with the warmth of an ashram and the thoughtful details of a
                premium retreat: clean bedding, AC comfort, attached washrooms, and a calm
                devotional setting.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {roomStats.map(([value, label], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                    className="glass rounded-2xl p-5 shadow-card"
                  >
                    <div className="font-display text-3xl text-gradient-gold font-semibold">
                      {value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="relative rounded-[2rem] overflow-hidden shadow-soft"
            >
              <img
                src={roomDeluxeImage}
                alt="Luxury room at Sakshi Dham"
                loading="lazy"
                decoding="async"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241811]/65 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5 text-white">
                <div className="text-xs uppercase tracking-widest text-saffron">
                  Premium Stay Experience
                </div>
                <div className="mt-2 font-display text-3xl font-semibold">
                  Comfort with devotional quiet
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6">
        <SectionHeader
          eyebrow="Amenities"
          title={
            <>
              <span className="text-gradient-gold italic">Everything</span> needed for a peaceful
              stay
            </>
          }
          subtitle="Simple comforts, thoughtfully arranged for devotees, families, and spiritual groups."
        />
        <div className="mt-12 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roomAmenityGrid.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="glass rounded-3xl p-6 shadow-card hover:shadow-soft transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-saffron grid place-items-center shadow-glow">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Room Collection"
            title={
              <>
                Choose your <span className="text-gradient-gold italic">sanctuary</span>
              </>
            }
            subtitle="Browse by room category, compare comforts, and open a detailed view before booking."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={
                  category === item
                    ? "btn-saffron rounded-full px-5 py-2.5 text-sm font-semibold"
                    : "glass rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-accent transition"
                }
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {visibleRooms.map((room, index) => (
              <motion.article
                key={room.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className="group glass rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                    {room.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-saffron-deep font-semibold">
                    {room.category}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{room.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {room.description}
                  </p>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest">
                        From
                      </div>
                      <div className="font-display text-3xl font-semibold text-gradient-gold">
                        ₹{room.price}
                      </div>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">{room.capacity}</div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {room.amenities.slice(0, 4).map((item) => (
                      <span key={item} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-saffron-deep" />
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveRoom(room)}
                      className="flex-1 rounded-full border border-border py-2.5 text-sm font-semibold hover:bg-accent transition"
                    >
                      Details
                    </button>
                    <a
                      href="#booking"
                      className="flex-1 btn-saffron text-center rounded-full py-2.5 text-sm font-semibold"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[420px] overflow-hidden px-4 sm:px-6 py-24 flex items-center">
        <img
          src={roomFamilyImage}
          alt="Family room promotion"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#241811]/70" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-saffron">Extended Stays</p>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl font-semibold">
            Arrive for darshan, stay in peace
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed">
            Ask the seva team for family stays, group visits, event room blocks, and longer
            Vrindavan itineraries.
          </p>
          <a
            href="#booking"
            className="mt-8 inline-flex btn-saffron rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            Reserve Your Stay
          </a>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader
              eyebrow="Why Stay With Us"
              title={
                <>
                  Designed around{" "}
                  <span className="text-gradient-gold italic">devotion and ease</span>
                </>
              }
            />
            <div className="mt-10 grid gap-4">
              {[
                "Quiet devotional setting",
                "Clean practical rooms",
                "Helpful reception team",
                "Close to Vrindavan spiritual routes",
              ].map((item) => (
                <div key={item} className="glass rounded-2xl p-5 flex gap-4 shadow-card">
                  <HeartHandshake className="w-5 h-5 text-saffron-deep shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-6 shadow-soft overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">Room comparison table</caption>
              <thead>
                <tr className="text-left text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="py-3">Room</th>
                  <th>Capacity</th>
                  <th>Comforts</th>
                  <th>From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/70">
                {luxuryRooms.map((room) => (
                  <tr key={room.name}>
                    <td className="py-4 font-semibold">{room.name}</td>
                    <td>{room.capacity}</td>
                    <td>{room.amenities.slice(0, 2).join(", ")}</td>
                    <td>₹{room.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 bg-gradient-soft">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
              Guest Voices
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium">
              Warm words from visiting families
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Rooms were simple, clean, and peaceful after darshan.",
              "The team helped our family settle in with care.",
            ].map((text, i) => (
              <div key={i} className="glass rounded-3xl p-6 shadow-card">
                <div className="text-saffron-deep">★★★★★</div>
                <p className="mt-4 font-display text-xl">"{text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6">
        <SectionHeader
          eyebrow="Room FAQ"
          title={
            <>
              Before your <span className="text-gradient-gold italic">stay</span>
            </>
          }
        />
        <div className="mt-12 max-w-4xl mx-auto grid gap-4">
          {roomFaqs.map(([q, a]) => (
            <div key={q} className="glass rounded-2xl p-5 shadow-card">
              <h3 className="font-semibold">{q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {activeRoom && (
        <div
          className="fixed inset-0 z-[80] bg-black/55 backdrop-blur-sm p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="room-details-title"
        >
          <div className="max-w-4xl w-full max-h-[90svh] overflow-y-auto rounded-3xl bg-background shadow-soft">
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <img
                src={activeRoom.img}
                alt={activeRoom.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveRoom(null)}
                className="absolute top-4 right-4 glass rounded-full px-4 py-2 text-sm font-semibold"
              >
                Close
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-saffron-deep">
                {activeRoom.badge}
              </p>
              <h2 id="room-details-title" className="mt-2 font-display text-4xl font-semibold">
                {activeRoom.name}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{activeRoom.description}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-5">
                  <h3 className="font-semibold">Amenities</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {activeRoom.amenities.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass rounded-2xl p-5">
                  <h3 className="font-semibold">Policies</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {activeRoom.policies.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href="#booking"
                onClick={() => setActiveRoom(null)}
                className="mt-7 inline-flex btn-saffron rounded-full px-7 py-3 text-sm font-semibold"
              >
                Book This Room
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const hallStats = [
  ["2", "Event Halls"],
  ["300", "Guest Capacity"],
  ["3", "Packages"],
  ["24/7", "Planning Support"],
];
const hallFeatures = [
  {
    icon: Users,
    title: "Large Capacity",
    text: "Flexible space for satsang and spiritual gatherings.",
  },
  { icon: Wind, title: "Cooling Support", text: "Comfortable indoor event environment." },
  { icon: Clock, title: "Booking Support", text: "Guidance for setup, timing, and flow." },
  {
    icon: Sparkles,
    title: "Spiritual Setting",
    text: "A calm venue for kirtan, pravachan, and seva.",
  },
];
const eventPackages = [
  ["Silver", "7,500", "Small satsang and meditation gatherings"],
  ["Gold", "11,000", "Kirtan, pravachan, and family events"],
  ["Platinum", "18,000", "Full-day spiritual programs with priority coordination"],
];

function LuxuryHallsExperience() {
  return (
    <>
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
              Premium Venue Experience
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-tight">
              Sacred halls for{" "}
              <span className="text-gradient-gold italic">memorable gatherings</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Host satsang, kirtan, pravachan, meditation circles, and devotional events in spacious
              halls prepared for comfort, sound, flow, and reverence.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {hallStats.map(([value, label], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass rounded-2xl p-5 shadow-card"
                >
                  <div className="font-display text-3xl text-gradient-gold font-semibold">
                    {value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-[2rem] overflow-hidden shadow-soft">
            <img
              src={hallImage}
              alt="Premium satsang hall"
              loading="lazy"
              decoding="async"
              className="w-full h-[520px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6">
        <SectionHeader
          eyebrow="Hall Features"
          title={
            <>
              Every event with <span className="text-gradient-gold italic">comfort and care</span>
            </>
          }
        />
        <div className="mt-12 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hallFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.04 }}
              className="glass rounded-3xl p-6 shadow-card"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-saffron grid place-items-center shadow-glow">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
        <SectionHeader
          eyebrow="Hall Collection"
          title={
            <>
              Venues for <span className="text-gradient-gold italic">satsang and celebration</span>
            </>
          }
          subtitle="Choose from spacious halls for devotional and family events."
        />
        <div className="mt-14 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {halls.map((hall, i) => (
            <motion.article
              key={hall.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-[2rem] overflow-hidden shadow-card hover:shadow-soft transition-all duration-500"
            >
              <div className="relative h-[440px] overflow-hidden">
                <img
                  src={hall.img}
                  alt={hall.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241811]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex gap-2 text-[11px] uppercase tracking-widest">
                    <span className="glass-dark rounded-full px-3 py-1">{hall.capacity}</span>
                    <span className="glass-dark rounded-full px-3 py-1">{hall.use}</span>
                  </div>
                  <h3 className="mt-4 font-display text-4xl font-semibold">{hall.name}</h3>
                  <p className="mt-3 text-white/75">
                    A refined venue for spiritual programs, family gatherings, and devotional
                    events.
                  </p>
                  <a
                    href="#booking"
                    className="mt-5 inline-flex btn-saffron rounded-full px-6 py-3 text-sm font-semibold"
                  >
                    Reserve Hall
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
              Packages
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium">
              Event plans for every gathering
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Select a simple package and the seva team will help confirm timings, hall
              availability, and coordination details.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {eventPackages.map(([name, price, text]) => (
              <div key={name} className="glass rounded-3xl p-6 shadow-card">
                <div className="text-xs uppercase tracking-widest text-saffron-deep">{name}</div>
                <div className="mt-3 font-display text-4xl text-gradient-gold font-semibold">
                  ₹{price}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{text}</p>
                <a
                  href="#booking"
                  className="mt-6 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent transition"
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 bg-gradient-soft">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Booking Timeline"
            title={
              <>
                From enquiry to <span className="text-gradient-gold italic">event day</span>
              </>
            }
          />
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            {[
              "Share event details",
              "Confirm hall and timing",
              "Plan setup and seating",
              "Arrive for the gathering",
            ].map((step, i) => (
              <div key={step} className="glass rounded-2xl p-5 shadow-card">
                <div className="font-display text-3xl text-gradient-gold">0{i + 1}</div>
                <div className="mt-3 font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
              Why Choose Our Halls
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium">
              A venue held with care, quiet, and devotion
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Spacious indoor layout",
              "Devotional environment",
              "Seating flexibility",
              "Seva team coordination",
            ].map((item) => (
              <div key={item} className="glass rounded-2xl p-5 flex gap-4 shadow-card">
                <Sparkle className="w-5 h-5 text-saffron-deep" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 bg-gradient-soft">
        <SectionHeader
          eyebrow="Hall Gallery"
          title={
            <>
              A glimpse of the <span className="text-gradient-gold italic">event space</span>
            </>
          }
        />
        <div className="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
          {[hallImage, hallImage, hallImage].map((img, i) => (
            <figure
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card"
            >
              <img
                src={img}
                alt="Satsang hall gallery"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center glass rounded-[2rem] p-8 sm:p-12 shadow-soft">
          <p className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
            Reserve Your Hall
          </p>
          <h2 className="mt-3 font-display text-5xl font-medium">
            Plan a sacred gathering at Sakshi Dham
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Share your expected capacity, date, and event style. The team will help confirm the best
            hall and package.
          </p>
          <a
            href="#booking"
            className="mt-8 inline-flex btn-saffron rounded-full px-8 py-4 text-sm font-semibold"
          >
            Start Hall Enquiry
          </a>
        </div>
      </section>
    </>
  );
}

export function RoomsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Rooms & Stay"
        title={
          <>
            Room <span className="text-gradient-gold italic">Booking</span>
          </>
        }
        subtitle="Choose peaceful rooms designed for devotees, families, and spiritual seekers visiting Vrindavan."
        image={roomDeluxeImage}
        primaryLabel="Book a Room"
        primaryHref="#booking"
      />
      <LuxuryRoomsExperience />
      <Booking />
    </PageShell>
  );
}

export function HallsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Satsang & Events"
        title={
          <>
            Hall <span className="text-gradient-gold italic">Booking</span>
          </>
        }
        subtitle="Premium halls for satsang, kirtan, pravachan, meditation gatherings, and spiritual events."
        image={hallImage}
        primaryLabel="Reserve Hall"
        primaryHref="#booking"
      />
      <LuxuryHallsExperience />
      <Booking />
    </PageShell>
  );
}

export function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Sacred <span className="text-gradient-gold italic">Moments</span>
          </>
        }
        subtitle="Explore the rooms, halls, mandir spaces, flowers, light, and atmosphere of Sakshi Dham International."
        image={mandirImage}
        primaryLabel="View Stay Options"
        primaryHref="/rooms"
      />
      <Gallery />
    </PageShell>
  );
}

export function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Sakshi Dham <span className="text-gradient-gold italic">International</span>
          </>
        }
        subtitle="A spiritual home in Vrindavan shaped by seva, devotion, peaceful hospitality, and sacred gathering."
        image={exterior}
        primaryLabel="Plan Your Stay"
        primaryHref="/rooms"
      />
      <About />
      <section className="relative px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 sm:p-10 shadow-soft">
          <h2 className="font-display text-4xl sm:text-5xl font-medium">Our mission</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Sakshi Dham International welcomes devotees with clean rooms, graceful halls, quiet
            corners for prayer, and a warm seva team. Our mission is to make every visit to
            Vrindavan feel peaceful, dignified, and close to the spirit of bhakti.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function FAQ() {
  const faqs = [
    [
      "How do I confirm a booking?",
      "Submit the enquiry form or call the seva team. We confirm availability by phone or WhatsApp.",
    ],
    [
      "Are rooms suitable for families?",
      "Yes, family rooms and premium suites are available with attached bathrooms and AC options.",
    ],
    [
      "Can halls be booked for satsang?",
      "Yes, halls can be reserved for satsang, kirtan, pravachan, meditation, and spiritual gatherings.",
    ],
  ];
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-gradient-soft">
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Before you <span className="text-gradient-gold italic">arrive</span>
          </>
        }
      />
      <div className="mt-12 max-w-4xl mx-auto grid gap-4">
        {faqs.map(([q, a]) => (
          <div key={q} className="glass rounded-2xl p-5 shadow-card">
            <h3 className="font-semibold">{q}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Visit <span className="text-gradient-gold italic">Vrindavan</span>
          </>
        }
        subtitle="Reach the Sakshi Dham seva team for room bookings, hall reservations, directions, and travel support."
        image={flowers}
        primaryLabel="Send Enquiry"
        primaryHref="#booking"
      />
      <Contact />
      <Booking />
      <FAQ />
    </PageShell>
  );
}
