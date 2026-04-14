import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Search } from "lucide-react";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop — Artisan Coffee Roasters" },
      { name: "description", content: "Browse our full range of single origin specialty coffee beans. Ethiopian, Colombian, Kenyan and more — all with South African Rand pricing." },
      { property: "og:title", content: "Shop — Artisan Coffee Roasters" },
      { property: "og:description", content: "Browse our full range of single origin specialty coffee beans." },
    ],
  }),
});

const roastFilters = ["All", "Light", "Medium", "Medium-Dark", "Dark"] as const;

function ShopPage() {
  const [search, setSearch] = useState("");
  const [roastFilter, setRoastFilter] = useState<string>("All");

  const filtered = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.origin.toLowerCase().includes(search.toLowerCase());
    const matchRoast = roastFilter === "All" || p.roast === roastFilter;
    return matchSearch && matchRoast;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">Our Collection</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Coffee Beans</h1>
          <p className="text-muted-foreground max-w-xl">
            Explore our range of single origin specialty beans, sourced from the world's
            finest coffee-growing regions and roasted fresh in Cape Town.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search beans..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {roastFilters.map((roast) => (
                <button
                  key={roast}
                  onClick={() => setRoastFilter(roast)}
                  className={`font-heading text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full transition-all ${
                    roastFilter === roast
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {roast}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No beans match your search. Try a different filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
