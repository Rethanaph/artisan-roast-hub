import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Mail, Truck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/order-confirmed")({
  component: OrderConfirmedPage,
  validateSearch: (search: Record<string, unknown>) => ({
    ref: typeof search.ref === "string" ? search.ref : "AC000000",
  }),
  head: () => ({
    meta: [
      { title: "Order Confirmed — Artisan Coffee Roasters" },
      { name: "description", content: "Thank you for your order. Your freshly roasted coffee is on its way." },
    ],
  }),
});

function OrderConfirmedPage() {
  const { ref } = Route.useSearch();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-secondary mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">
            Order Confirmed
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Thank you for your order
          </h1>
          <p className="text-muted-foreground mb-2">
            Your beans are being prepared by our roastery team.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            Order reference:{" "}
            <span className="font-heading font-bold text-foreground tracking-wider">#{ref}</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
            <div className="bg-card border border-border rounded-lg p-5">
              <Mail className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-heading font-bold mb-1">Confirmation Email</h3>
              <p className="text-sm text-muted-foreground">
                A receipt and tracking link will arrive in your inbox shortly.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <Truck className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-heading font-bold mb-1">Delivery 2–4 Days</h3>
              <p className="text-sm text-muted-foreground">
                Roasted to order and dispatched from Cape Town within 24 hours.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/shop" className="btn-primary-coffee inline-flex items-center gap-2">
              Continue Shopping <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/" className="btn-outline-coffee inline-block">
              Back to Home
            </Link>
          </div>

          <p className="mt-12 text-xs text-muted-foreground">
            This is a demo store — no real order has been placed and no payment was charged.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
