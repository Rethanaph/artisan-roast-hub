import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Locations — Artisan Coffee Roasters" },
      { name: "description", content: "Find our three Cape Town café locations, get in touch, or visit our roastery. Bree Street, Kloof Street, and Sea Point." },
    ],
  }),
});

const cafes = [
  {
    name: "Bree Street — CBD",
    address: "123 Bree Street, Cape Town, 8001",
    phone: "+27 21 555 0123",
    hours: "Mon–Fri 7:00–17:00 | Sat 8:00–15:00",
  },
  {
    name: "Kloof Street — Gardens",
    address: "45 Kloof Street, Gardens, 8001",
    phone: "+27 21 555 0456",
    hours: "Mon–Sun 7:00–18:00",
  },
  {
    name: "Main Road — Sea Point",
    address: "78 Main Road, Sea Point, 8005",
    phone: "+27 21 555 0789",
    hours: "Mon–Sun 6:30–18:00",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">Get In Touch</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-xl">
            Visit one of our three Cape Town cafés, or drop us a message. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Cafes */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold mb-10">Our Cafés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cafes.map((cafe) => (
              <div key={cafe.name} className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-heading text-lg font-bold mb-4">{cafe.name}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    {cafe.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    {cafe.phone}
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    {cafe.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg">
            <img src={cafeInterior} alt="Our café interior" loading="lazy" width={1200} height={800} className="w-full h-64 md:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-heading text-xs font-semibold tracking-wider uppercase mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
              </div>
              <div>
                <label className="block font-heading text-xs font-semibold tracking-wider uppercase mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block font-heading text-xs font-semibold tracking-wider uppercase mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block font-heading text-xs font-semibold tracking-wider uppercase mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us more..." />
            </div>
            <button type="submit" className="btn-primary-coffee w-full sm:w-auto">
              Send Message
            </button>
          </form>
          <div className="mt-8 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Or email us directly at hello@artisanroasters.co.za
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Created by Bonolo Tomeng ·{" "}
              <a
                href="mailto:bonolotomeng390@gmail.com"
                className="underline hover:text-accent transition-colors"
              >
                bonolotomeng390@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
