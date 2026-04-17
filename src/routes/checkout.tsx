import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart, clearCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";
import { Lock, ArrowRight, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: "Checkout — Artisan Coffee Roasters" },
      { name: "description", content: "Complete your order securely. Enter your delivery and payment details to get freshly roasted coffee on its way." },
    ],
  }),
});

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, total, count } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const delivery = total >= 350 || total === 0 ? 0 : 65;
  const grandTotal = total + delivery;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const orderRef = "AC" + Math.floor(100000 + Math.random() * 900000);
    setTimeout(() => {
      clearCart();
      navigate({ to: "/order-confirmed", search: { ref: orderRef } });
    }, 1400);
  };

  if (items.length === 0 && !submitting) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h1 className="font-heading text-2xl font-bold mb-2">Nothing to checkout</h1>
            <p className="text-muted-foreground mb-6">Add some coffee to your cart first.</p>
            <Link to="/shop" className="btn-primary-coffee inline-flex items-center gap-2">
              Browse Coffee <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">Almost There</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Checkout</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-heading text-lg font-bold mb-4">Contact</h2>
                <div className="space-y-4">
                  <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                  <Field label="Phone" name="phone" type="tel" placeholder="+27 82 123 4567" required />
                </div>
              </div>

              {/* Delivery */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-heading text-lg font-bold mb-4">Delivery Address</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="First Name" name="firstName" placeholder="Thandi" required />
                  <Field label="Last Name" name="lastName" placeholder="Nkosi" required />
                  <div className="sm:col-span-2">
                    <Field label="Street Address" name="address" placeholder="123 Bree Street" required />
                  </div>
                  <Field label="City" name="city" placeholder="Cape Town" required />
                  <Field label="Postal Code" name="postal" placeholder="8001" required />
                  <div className="sm:col-span-2">
                    <Field label="Province" name="province" placeholder="Western Cape" required />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-lg font-bold">Payment</h2>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    Secure (demo)
                  </div>
                </div>
                <div className="space-y-4">
                  <Field label="Cardholder Name" name="cardName" placeholder="As shown on card" required />
                  <Field label="Card Number" name="cardNumber" placeholder="4242 4242 4242 4242" inputMode="numeric" maxLength={19} required />
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Expiry" name="expiry" placeholder="MM/YY" maxLength={5} required />
                    <Field label="CVC" name="cvc" placeholder="123" inputMode="numeric" maxLength={4} required />
                  </div>
                </div>
                <p className="mt-4 text-[11px] text-muted-foreground">
                  This is a demo store. No real payment will be processed and no card details are stored.
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 lg:sticky lg:top-28">
                <h2 className="font-heading text-lg font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4 max-h-64 overflow-auto pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 text-sm">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-bold text-foreground truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.weight} × {item.quantity}
                        </p>
                      </div>
                      <span className="font-heading font-bold text-sm whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="section-divider my-4" />
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({count} items)</span>
                    <span className="font-heading font-bold">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-heading font-bold">{delivery === 0 ? "FREE" : formatPrice(delivery)}</span>
                  </div>
                </div>
                <div className="section-divider my-4" />
                <div className="flex justify-between items-center mb-6">
                  <span className="font-heading font-bold">Total</span>
                  <span className="font-heading font-bold text-xl">{formatPrice(grandTotal)}</span>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary-coffee w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Processing…" : `Pay ${formatPrice(grandTotal)}`}
                </button>
                <Link to="/cart" className="block text-center text-xs text-muted-foreground hover:text-foreground mt-3">
                  ← Back to cart
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-xs font-heading font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">
        {label}
      </span>
      <input
        name={name}
        type={type}
        className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        {...rest}
      />
    </label>
  );
}
