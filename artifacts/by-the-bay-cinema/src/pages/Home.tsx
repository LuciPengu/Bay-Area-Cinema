import { Mail, Phone, Check } from "lucide-react";

const GOOGLE_DRIVE_VIDEO_ID = "1rdkJoSaoNiDM3v8VuPp9fc31mr7owJBi";

const packages = [
  {
    name: "Intro Package",
    price: "$200",
    delivery: "48 Hour Delivery",
    features: [
      "1 Cinematic basic walkthrough (60–90 sec)",
      "1 Basic reel for social media (10–15 sec)",
      "Normal colors (no color grading)",
      "Licensed music",
    ],
    highlight: false,
  },
  {
    name: "Basic",
    price: "$350",
    delivery: "36 Hour Delivery",
    features: [
      "1 Cinematic walkthrough with detail shots (60–90 sec)",
      "2 Cutdowns for social media (10–15 sec)",
      "Color correction/grade",
      "Licensed music",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "$525",
    delivery: "24 Hour Delivery",
    features: [
      "1 Cinematic walkthrough (60–90 sec)",
      "3 Cutdowns for social media (10–15 sec)",
      "1 Agent promotional video (15–30 sec)",
      "Color correction/grade",
      "Licensed music",
    ],
    highlight: true,
  },
  {
    name: "Pro-Pack",
    price: "$700",
    delivery: "12–18 Hour Delivery",
    features: [
      "1 Cinematic walkthrough – different styles (60–90 sec)",
      "5 Cutdowns for social media (10–15 sec)",
      "2 Personalized brand reels (15–30 sec)",
      "Color correction/grade",
      "Licensed music",
    ],
    highlight: false,
  },
];

const addOns = [
  { name: "Speed-ramp transitions", price: "$45" },
  { name: "Drone footage", price: "$65" },
  { name: "iPhone speed ramp walkthrough for social media", price: "$100" },
  { name: "Personalized brand reel", price: "$150" },
  { name: "Walkthrough revision", price: "$30" },
  { name: "Brand reel revision", price: "$10" },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-background/70 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-primary rounded-full" />
          <span className="text-base font-bold tracking-widest uppercase text-foreground">By the Bay Cinema</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          <a href="#video" className="hover:text-primary transition-colors">Work</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-none bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Book Now
        </a>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20 pb-10 overflow-hidden">
        {/* Layered background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,_rgba(234,179,8,0.06)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Decorative lines */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-center opacity-20">
          <div className="w-px h-24 bg-primary" />
          <div className="w-1 h-1 rounded-full bg-primary" />
          <div className="w-px h-24 bg-primary" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-center opacity-20">
          <div className="w-px h-24 bg-primary" />
          <div className="w-1 h-1 rounded-full bg-primary" />
          <div className="w-px h-24 bg-primary" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary/60" />
            <p className="text-primary text-xs font-bold tracking-[0.35em] uppercase">Real Estate Videography</p>
            <div className="h-px w-12 bg-primary/60" />
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 leading-none">
            By the Bay
          </h1>
          <h1
            className="text-6xl md:text-8xl tracking-tight leading-none italic"
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              WebkitTextStroke: "1.5px hsl(38, 90%, 55%)",
              color: "transparent",
              letterSpacing: "0.02em",
            }}
          >
            Cinema
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#video"
              className="px-10 py-3.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Watch Our Work
            </a>
            <a
              href="#pricing"
              className="px-10 py-3.5 border border-white/15 text-foreground text-xs font-bold tracking-widest uppercase hover:border-primary/50 hover:bg-white/5 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>

      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary z-10" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary z-10" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary z-10" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary z-10" />
            <div className="overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-card">
              <div className="aspect-video w-full">
                <iframe
                  src={`https://drive.google.com/file/d/${GOOGLE_DRIVE_VIDEO_ID}/preview`}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="By the Bay Cinema – Featured Real Estate Video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THIN DIVIDER */}
      <div className="flex items-center justify-center gap-4 py-4 px-6 opacity-30">
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-primary/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-primary/60" />
      </div>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary/60" />
              <p className="text-primary text-xs font-bold tracking-[0.35em] uppercase">Packages</p>
              <div className="h-px w-10 bg-primary/60" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Choose Your Package</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-16 border border-border">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-6 flex flex-col gap-4 ${
                  pkg.highlight
                    ? "bg-primary/5 border-t-2 border-t-primary"
                    : "bg-card"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest">
                    Popular
                  </div>
                )}
                <div>
                  <h3 className="text-xs font-black tracking-widest uppercase text-muted-foreground mb-3">{pkg.name}</h3>
                  <div className="text-4xl font-black text-foreground mb-1">{pkg.price}</div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-primary">{pkg.delivery}</p>
                </div>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-2 w-full py-2.5 text-xs font-black tracking-widest uppercase text-center transition-opacity hover:opacity-80 ${
                    pkg.highlight
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  Book
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border" />
              <p className="text-xs font-black tracking-[0.35em] uppercase text-primary">Add-Ons</p>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between px-5 py-3.5 bg-card"
                >
                  <span className="text-xs text-muted-foreground">{addon.name}</span>
                  <span className="text-sm font-black text-primary ml-4 shrink-0">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THIN DIVIDER */}
      <div className="flex items-center justify-center gap-4 py-4 px-6 opacity-30">
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-primary/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-primary/60" />
      </div>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary/60" />
            <p className="text-primary text-xs font-bold tracking-[0.35em] uppercase">Contact</p>
            <div className="h-px w-10 bg-primary/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
            Aiden Flores
          </h2>

          <div className="flex flex-col gap-px bg-border border border-border overflow-hidden">
            <a
              href="tel:+12098346875"
              className="flex items-center gap-4 px-6 py-5 bg-card hover:bg-primary/5 transition-colors group"
            >
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-0.5">Call or Text</p>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">209-834-6875</p>
              </div>
              <div className="ml-auto h-px flex-1 max-w-12 bg-border group-hover:bg-primary/40 transition-colors" />
            </a>
            <a
              href="mailto:a1d3nflowers19@gmail.com"
              className="flex items-center gap-4 px-6 py-5 bg-card hover:bg-primary/5 transition-colors group"
            >
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-0.5">Email</p>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">a1d3nflowers19@gmail.com</p>
              </div>
              <div className="ml-auto h-px flex-1 max-w-12 bg-border group-hover:bg-primary/40 transition-colors" />
            </a>
            <a
              href="https://www.tiktok.com/@filmdelinquent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 bg-card hover:bg-primary/5 transition-colors group"
            >
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-0.5">TikTok</p>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">@filmdelinquent</p>
              </div>
              <div className="ml-auto h-px flex-1 max-w-12 bg-border group-hover:bg-primary/40 transition-colors" />
            </a>
            <a
              href="https://youtube.com/@filmdelinquent-energy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 bg-card hover:bg-primary/5 transition-colors group"
            >
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.45A3.02 3.02 0 0 0 .5 6.19 31.8 31.8 0 0 0 .06 12a31.8 31.8 0 0 0 .44 5.81 3.02 3.02 0 0 0 2.12 2.14C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.45a3.02 3.02 0 0 0 2.12-2.14A31.8 31.8 0 0 0 23.94 12a31.8 31.8 0 0 0-.44-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-0.5">YouTube</p>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">Film Delinquents</p>
              </div>
              <div className="ml-auto h-px flex-1 max-w-12 bg-border group-hover:bg-primary/40 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-primary rounded-full" />
          <span className="text-xs font-black tracking-widest uppercase text-muted-foreground">By the Bay Cinema</span>
        </div>
        <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Aiden Flores. All rights reserved.</p>
      </footer>
    </div>
  );
}
