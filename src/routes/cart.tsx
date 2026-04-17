import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({
    meta: [
      { title: "Cart — Artisan Coffee Roasters" },
      { name: "description", content: "Review your coffee selection and proceed to checkout." },
    ],
  }),
});

function CartPage() {
  const { items, updateQuantity, removeFromCart, total, count } = useCart();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">Your Selection</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Shopping Cart</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="font-heading text-xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Discover our range of specialty coffee beans.</p>
              <Link to="/shop" className="btn-primary-coffee inline-flex items-center gap-2">
                Browse Coffee <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-10">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-card rounded-lg border border-border p-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-foreground">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.weight}</p>
                      <p className="font-heading font-bold text-foreground mt-1">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <div className="flex items-center gap-2 bg-secondary rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 hover:bg-muted rounded-l-lg transition-colors">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-heading font-bold w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 hover:bg-muted rounded-r-lg transition-colors">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Subtotal ({count} items)</span>
                  <span className="font-heading font-bold">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-heading font-bold text-sm">
                    {total >= 350 ? "FREE" : formatPrice(65)}
                  </span>
                </div>
                <div className="section-divider my-4" />
                <div className="flex justify-between items-center mb-6">
                  <span className="font-heading font-bold text-lg">Total</span>
                  <span className="font-heading font-bold text-xl">
                    {formatPrice(total >= 350 ? total : total + 65)}
                  </span>
                </div>
                {total < 350 && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Add {formatPrice(350 - total)} more for free delivery!
                  </p>
                )}
                <Link to="/checkout" className="btn-primary-coffee w-full text-center block">
                  Proceed to Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
