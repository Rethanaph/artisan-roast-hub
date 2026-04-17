import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import { getCartCount } from "@/lib/cart-store";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCartCount(getCartCount());
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { to: "/" as const, label: "Home" },
    { to: "/shop" as const, label: "Beans" },
    { to: "/drinks" as const, label: "Café Menu" },
    { to: "/blog" as const, label: "Blog" },
    { to: "/contact" as const, label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="font-heading text-xl font-bold tracking-wider uppercase text-foreground">
            Artisan Coffee Roasters
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-heading text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "font-heading text-sm font-bold tracking-wider uppercase text-foreground" }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block font-heading text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/cart"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 font-heading text-sm font-medium tracking-wider uppercase text-muted-foreground"
            >
              <ShoppingCart className="h-4 w-4" />
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
