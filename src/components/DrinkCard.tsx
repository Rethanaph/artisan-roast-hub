import type { Drink } from "@/lib/drinks";
import { formatPrice } from "@/lib/products";
import { addToCart } from "@/lib/cart-store";
import { Plus } from "lucide-react";

export function DrinkCard({ drink }: { drink: Drink }) {
  const handleAdd = () => {
    addToCart({
      id: drink.id,
      name: drink.name,
      price: drink.price,
      image: drink.image,
      weight: drink.size,
    });
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border product-card-hover flex flex-col">
      <div className="overflow-hidden aspect-square">
        <img
          src={drink.image}
          alt={drink.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="badge-roast">{drink.category}</span>
          <span className="text-xs font-body text-muted-foreground">{drink.size}</span>
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-1">{drink.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{drink.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-foreground">{formatPrice(drink.price)}</span>
          <button onClick={handleAdd} className="btn-primary-coffee flex items-center gap-2 !py-2 !px-4 !text-xs">
            <Plus className="h-3.5 w-3.5" />
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
