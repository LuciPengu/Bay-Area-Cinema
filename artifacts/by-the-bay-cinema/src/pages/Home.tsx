import { Mail, Phone, User, Check } from "lucide-react";

const GOOGLE_DRIVE_VIDEO_ID = "1rdkJoSaoNiDM3v8VuPp9fc31mr7owJBi";

const packages = [
  {
    name: "Intro Package",
    price: "$200",
    delivery: "48 Hour Delivery",
    deliveryNote: "After shoot",
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
    deliveryNote: "After shoot",
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
    deliveryNote: "After shoot",
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
    deliveryNote: "After shoot",
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
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur border-b border-border">
        <span className="text-lg font-semibold tracking-wide text-primary">By the Bay Cinema</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#video" className="hover:text-foreground transition-colors">Work</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Book Now
        </a>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,179,8,0.07)_0%,_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">Real Estate Videography</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            By the Bay<br />
            <span className="text-primary">Cinema</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cinematic real estate videos that make properties shine. Fast turnaround, stunning visuals, licensed music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#video"
              className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Watch Our Work
            </a>
            <a
              href="#pricing"
              className="px-8 py-3 rounded-md border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-0.5 h-8 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Featured Work</p>
            <h2 className="text-3xl md:text-4xl font-bold">See It in Action</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
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
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-card/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Transparent Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Every package includes licensed music and professional editing. Faster delivery available with Pro-Pack.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-xl border p-6 flex flex-col gap-4 ${
                  pkg.highlight
                    ? "border-primary bg-card shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  </div>
                  <p className="text-xs text-primary font-semibold">
                    {pkg.delivery} <span className="text-muted-foreground font-normal">({pkg.deliveryNote})</span>
                  </p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-2 w-full py-2.5 rounded-md text-sm font-semibold text-center transition-opacity hover:opacity-90 ${
                    pkg.highlight
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-6 text-primary uppercase tracking-widest text-sm">Add-Ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between px-4 py-3 rounded-lg border border-border bg-card"
                >
                  <span className="text-sm text-foreground">{addon.name}</span>
                  <span className="text-sm font-semibold text-primary ml-4 shrink-0">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Reach out to schedule your shoot. Fast turnaround guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+1"
              className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-0.5">Call or Text</p>
                <p className="font-semibold text-foreground">Your Number Here</p>
              </div>
            </a>
            <a
              href="mailto:youremail@email.com"
              className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="font-semibold text-foreground">youremail@email.com</p>
              </div>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card justify-center mx-auto max-w-xs">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground mb-0.5">Name</p>
              <p className="font-semibold text-foreground">Your Name Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} By the Bay Cinema. All rights reserved.</p>
      </footer>
    </div>
  );
}
