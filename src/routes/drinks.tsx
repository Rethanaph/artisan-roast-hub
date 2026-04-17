import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DrinkCard } from "@/components/DrinkCard";
import { drinks, type DrinkCategory } from "@/lib/drinks";

export const Route = createFileRoute("/drinks")({
  component: DrinksPage,
  head: () => ({
    meta: [
      { title: "Café Menu — Artisan Coffee Roasters" },
      { name: "description", content: "Our full café drinks menu. Espresso, cappuccino, flat white, latte, mocha and iced coffee — handcrafted in our Cape Town cafés with South African Rand pricing." },
      { property: "og:title", content: "Café Menu — Artisan Coffee Roasters" },
      { property: "og:description", content: "Handcrafted espresso drinks, milk-based coffees, and cold brews in our Cape Town cafés." },
    ],
  }),
});

const categoryFilters = ["All", "Espresso-Based", "Milk-Based", "Cold Brew"] as const;

function DrinksPage() {
  const [filter, setFilter] = useState<(typeof categoryFilters)[number]>("All");

  const filtered = drinks.filter((d) => filter === "All" || d.category === (filter as DrinkCategory));

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">In Our Cafés</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Coffee by the Cup</h1>
          <p className="text-muted-foreground max-w-xl">
            Handcrafted by our baristas using freshly roasted beans. Every cup is pulled,
            steamed, and poured to order in our three Cape Town cafés.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-heading text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
