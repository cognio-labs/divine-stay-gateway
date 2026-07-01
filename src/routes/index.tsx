import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";

import gurujiAsset from "@/assets/guruji.png.asset.json";
import heroHall from "@/assets/hero-hall.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import hallMaha from "@/assets/hall-maha.jpg";
import hallEvent from "@/assets/hall-event.jpg";
import bathroom from "@/assets/bathroom.jpg";
import mandir from "@/assets/mandir.jpg";
import exterior from "@/assets/exterior.jpg";
import flowers from "@/assets/flowers.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Halls", href: "#halls" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Halls />
      <Gallery />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ----------------------------- NAVBAR ----------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-full bg-gradient-saffron grid place-items-center shadow-glow">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
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
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground relative group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-saffron transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#booking"
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
                  className="px-3 py-2.5 rounded-xl hover:bg-accent/60 text-sm font-medium"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#booking"
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
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroHall}
          alt="Sakshi Dham satsang hall"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1a10]/70 via-[#3a2718]/60 to-[#faf7f2]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(232,164,76,0.35),transparent_60%)]" />
      </motion.div>

      <Particles />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto relative w-36 h-36 sm:w-44 sm:h-44"
        >
          <div className="absolute inset-0 rounded-full divine-ring blur-sm opacity-80" />
          <div className="absolute inset-1 rounded-full bg-background" />
          <div className="absolute inset-2 rounded-full overflow-hidden ring-2 ring-white/70 shadow-glow">
            <img
              src={gurujiAsset.url}
              alt="Guruji of Sakshi Dham International"
              className="w-full h-full object-cover"
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
          <span className="block text-gradient-gold italic font-semibold">
            International
          </span>
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
          Experience divine peace, comfortable stay, satsang halls, and spiritual
          energy in the heart of Vrindavan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#booking"
            className="btn-saffron rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Book Room <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="glass rounded-full px-7 py-3.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/20 transition"
          >
            Explore Ashram
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 text-xs tracking-widest">
        <span>SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent animate-pulse" />
      </div>
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
function About() {
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
              width={1280}
              height={960}
              className="w-full h-[520px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-52 rounded-2xl overflow-hidden shadow-soft ring-4 ring-background rotate-3">
            <img src={flowers} alt="Diya and marigold" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-6 -left-4 glass rounded-2xl px-4 py-3 shadow-card">
            <div className="text-2xl font-display font-semibold text-gradient-gold">15+</div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Years of Seva</div>
          </div>
        </motion.div>

        <div>
          <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
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
            accommodation, satsang halls, and divine surroundings for devotees, families,
            and spiritual seekers.
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
    img: roomDeluxe,
    price: "1,499",
    features: ["Double Bed", "Attached Bathroom", "AC", "Hot Water"],
    tag: "Most Booked",
  },
  {
    name: "Family Room",
    img: roomFamily,
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

function Rooms() {
  return (
    <section id="rooms" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
      <SectionHeader
        eyebrow="Rooms & Stay"
        title={<>Rest in <span className="text-gradient-gold italic">divine comfort</span></>}
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
                  href="#booking"
                  className="flex-1 text-center rounded-full border border-border py-2.5 text-sm font-semibold hover:bg-accent transition"
                >
                  View Details
                </a>
                <a
                  href="#booking"
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
    img: hallMaha,
    capacity: "300 People",
    use: "Satsang, Kirtan, Pravachan",
    price: "11,000",
  },
  {
    name: "Spiritual Event Hall",
    img: hallEvent,
    capacity: "150 People",
    use: "Meditation, Gatherings, Events",
    price: "7,500",
  },
];

function Halls() {
  return (
    <section id="halls" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <SectionHeader
        eyebrow="Satsang & Event Halls"
        title={<>Sacred spaces for <span className="text-gradient-gold italic">gathering & grace</span></>}
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
              <h3 className="mt-4 text-3xl sm:text-4xl font-display font-semibold">
                {h.name}
              </h3>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-widest">Starting at</div>
                  <div className="text-2xl font-display font-semibold text-gradient-gold">
                    ₹{h.price} <span className="text-sm text-white/80">/ day</span>
                  </div>
                </div>
                <a
                  href="#booking"
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
  { src: mandir, alt: "Mandir", span: "row-span-2" },
  { src: roomDeluxe, alt: "Deluxe room", span: "" },
  { src: hallEvent, alt: "Event hall", span: "" },
  { src: bathroom, alt: "Bathroom", span: "row-span-2" },
  { src: hallMaha, alt: "Maha satsang hall", span: "col-span-2" },
  { src: roomSuite, alt: "Premium suite", span: "" },
  { src: exterior, alt: "Exterior", span: "" },
  { src: flowers, alt: "Diya and marigold", span: "" },
  { src: roomFamily, alt: "Family room", span: "" },
];

function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
      <SectionHeader
        eyebrow="Gallery"
        title={<>Moments of <span className="text-gradient-gold italic">peace & devotion</span></>}
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
function Booking() {
  const [submitted, setSubmitted] = useState(false);
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
    if (!form.name || !form.phone || !form.checkin || !form.checkout) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section id="booking" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
        <motion.div {...fadeUp}>
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

          <div className="mt-8 space-y-4">
            {[
              { icon: Phone, label: "+91 98765 43210", sub: "Call anytime, 8am–9pm" },
              { icon: MessageCircle, label: "WhatsApp us", sub: "Instant confirmations" },
              { icon: MapPin, label: "Vrindavan, Uttar Pradesh", sub: "India" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 glass rounded-2xl p-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-saffron grid place-items-center shadow-glow">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">{c.label}</div>
                  <div className="text-xs text-muted-foreground">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          onSubmit={onSubmit}
          className="glass rounded-3xl p-6 sm:p-8 shadow-soft"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} className="sm:col-span-2" />
            <Field label="Check-in" type="date" value={form.checkin} onChange={(v) => setForm({ ...form, checkin: v })} required icon={Calendar} />
            <Field label="Check-out" type="date" value={form.checkout} onChange={(v) => setForm({ ...form, checkout: v })} required icon={Calendar} />
            <div>
              <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
                Room / Hall
              </label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-saffron transition"
              >
                <option>Deluxe Room</option>
                <option>Family Room</option>
                <option>Premium Suite</option>
                <option>Maha Satsang Hall</option>
                <option>Spiritual Event Hall</option>
              </select>
            </div>
            <Field label="Guests" type="number" value={form.guests} onChange={(v) => setForm({ ...form, guests: v })} />
            <div className="sm:col-span-2">
              <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
                Special Request
              </label>
              <textarea
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                rows={3}
                className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-saffron transition resize-none"
                placeholder="Dietary needs, arrival time, satsang preferences…"
              />
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
  label,
  value,
  onChange,
  type = "text",
  required,
  className = "",
  icon: Icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className={className}>
      <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
        {label} {required && <span className="text-saffron-deep">*</span>}
      </label>
      <div className="relative mt-2">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        )}
        <input
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-xl border border-border bg-background/60 py-3 text-sm outline-none focus:ring-2 focus:ring-saffron transition ${
            Icon ? "pl-10 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

/* --------------------------- TESTIMONIALS -------------------------- */
const reviews = [
  { text: "Peaceful stay and amazing spiritual atmosphere.", author: "Devotee", from: "Delhi" },
  { text: "Rooms were clean and halls were spacious.", author: "Family Visitor", from: "Mumbai" },
  { text: "Perfect place in Vrindavan for satsang.", author: "Spiritual Group", from: "Bengaluru" },
];

function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-soft">
      <SectionHeader
        eyebrow="Devotee Voices"
        title={<>Words from our <span className="text-gradient-gold italic">extended family</span></>}
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
function Contact() {
  const cards = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919876543210" },
    { icon: Mail, label: "Email", value: "info@sakshidham.org", href: "mailto:info@sakshidham.org" },
    { icon: MapPin, label: "Location", value: "Vrindavan, U.P.", href: "#map" },
  ];
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <SectionHeader
        eyebrow="Contact"
        title={<>Come visit <span className="text-gradient-gold italic">Sakshi Dham</span></>}
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

        <div id="map" className="rounded-3xl overflow-hidden shadow-soft ring-1 ring-border h-[420px] lg:h-full min-h-[420px]">
          <iframe
            title="Sakshi Dham location"
            src="https://www.google.com/maps?q=Vrindavan,Uttar+Pradesh,India&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ---------------------------- */
function Footer() {
  return (
    <footer className="relative mt-10 bg-[#241811] text-white/80 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(232,164,76,0.25),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-saffron grid place-items-center shadow-glow">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-white">Sakshi Dham International</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Vrindavan · India</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            A peaceful spiritual ashram offering divine stay, satsang halls, and warm hospitality
            in the sacred land of Vrindavan.
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
          <div className="text-xs uppercase tracking-widest text-saffron/90 font-semibold">Quick Links</div>
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
          <div className="text-xs uppercase tracking-widest text-saffron/90 font-semibold">Contact</div>
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
function SectionHeader({
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
      <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.28em] text-saffron-deep font-medium">
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
