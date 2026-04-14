import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { ArrowRight, Leaf, Award, Truck } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";
import aboutStory from "@/assets/about-story.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Artisan Coffee Roasters — Ethically Sourced, Skillfully Roasted" },
      { name: "description", content: "Premium specialty coffee beans, ethically sourced and roasted in Cape Town. Shop single origin coffees from Ethiopia, Colombia, Kenya and more." },
      { property: "og:title", content: "Artisan Coffee Roasters — Ethically Sourced, Skillfully Roasted" },
      { property: "og:description", content: "Premium specialty coffee beans, ethically sourced and roasted in Cape Town." },
    ],
  }),
});

function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <img src={heroCoffee} alt="Coffee roasting" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              Est. 2015 — Cape Town
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-foreground mb-6">
              Coffee worth
              <br />
              slowing down for
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
              Ethically sourced beans from the world's finest growing regions,
              roasted to perfection in our Cape Town roastery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-hero inline-flex items-center gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline-coffee !border-primary-foreground/30 !text-primary-foreground hover:!bg-primary-foreground/10 inline-block">
                Visit Our Cafés
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Leaf, title: "Ethically Sourced", desc: "Direct trade partnerships with farmers across Africa and South America" },
              { icon: Award, title: "Freshly Roasted", desc: "Small-batch roasting ensures every bag is at peak flavour" },
              { icon: Truck, title: "Free Delivery", desc: "Complimentary delivery on orders over R350 across South Africa" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold tracking-wider uppercase">{title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">Curated Selection</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Featured Beans</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="btn-outline-coffee inline-flex items-center gap-2">
              View All Coffee <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">Our Story</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                From bean to cup, with care
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2015 in the heart of Cape Town, Artisan Coffee Roasters began with a
                simple belief: that great coffee starts with great relationships. We work directly
                with farmers across Ethiopia, Colombia, Kenya, and Rwanda to source the finest
                specialty-grade beans.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every batch is roasted in small quantities in our Bree Street roastery, ensuring
                peak freshness and flavour in every bag. With three cafés in the city, we invite
                you to experience the craft firsthand.
              </p>
              <Link to="/contact" className="btn-primary-coffee inline-block">
                Find a Café Near You
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutStory}
                alt="Artisan coffee preparation"
                loading="lazy"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg w-full"
              />
              <img
                src={cafeInterior}
                alt="Our café"
                loading="lazy"
                width={400}
                height={300}
                className="absolute -bottom-8 -left-8 w-48 h-32 object-cover rounded-lg shadow-xl border-4 border-background hidden lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">Stay in the Loop</p>
          <h2 className="font-heading text-3xl font-bold mb-4">Join Our Coffee Community</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe for brew tips, new roast releases, and exclusive offers.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button type="submit" className="btn-primary-coffee whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
