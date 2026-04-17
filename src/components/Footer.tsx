import { Link } from "@tanstack/react-router";
import { Coffee, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-accent" />
              <span className="font-heading text-lg font-bold tracking-wider uppercase">
                Artisan Coffee
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Ethically sourced, skillfully roasted. Since 2015, we've been bringing
              the world's finest beans to your cup.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase mb-4 text-accent">
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/shop" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Shop</Link>
              <Link to="/blog" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Blog</Link>
              <Link to="/contact" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase mb-4 text-accent">
              Contact
            </h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                +27 21 555 0123
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                hello@artisanroasters.co.za
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                123 Bree Street, Cape Town
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase mb-4 text-accent">
              Our Cafés
            </h4>
            <div className="space-y-3 text-sm opacity-70">
              <p>Bree Street — Cape Town CBD</p>
              <p>Kloof Street — Gardens</p>
              <p>Main Road — Sea Point</p>
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8 opacity-20" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© 2026 Artisan Coffee Roasters. All rights reserved.</p>
          <p>artisanroasters.co.za</p>
        </div>
        <div className="mt-6 text-center text-xs opacity-60">
          <p>
            Created by <span className="font-heading font-bold text-accent">Bonolo Tomeng</span> ·{" "}
            <a
              href="mailto:bonolotomeng390@gmail.com"
              className="underline hover:opacity-100 hover:text-accent transition-opacity"
            >
              bonolotomeng390@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
