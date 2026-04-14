import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { addToCart } from "@/lib/cart-store";
import { ShoppingCart } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      weight: product.weight,
    });
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border product-card-hover">
      <Link to="/shop" className="block overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="badge-roast">{product.roast} Roast</span>
          <span className="text-xs font-body text-muted-foreground">{product.origin}</span>
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {product.flavourNotes.map((note) => (
            <span key={note} className="text-[10px] font-heading font-medium tracking-wider uppercase text-muted-foreground bg-muted px-2 py-0.5 rounded">
              {note}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-heading text-xl font-bold text-foreground">{formatPrice(product.price)}</span>
            <span className="text-xs text-muted-foreground ml-1">/ {product.weight}</span>
          </div>
          <button onClick={handleAdd} className="btn-primary-coffee flex items-center gap-2 !py-2 !px-4 !text-xs">
            <ShoppingCart className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
