import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "@tanstack/react-router";
import cafeInterior from "@/assets/cafe-interior.jpg";
import aboutStory from "@/assets/about-story.jpg";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — Artisan Coffee Roasters" },
      { name: "description", content: "Coffee tips, brew guides, and stories from our roastery. Learn about different origins, roast profiles, and how to make the perfect cup at home." },
    ],
  }),
});

const blogPosts = [
  {
    id: "brew-guide-pour-over",
    title: "The Ultimate Pour-Over Brew Guide",
    excerpt: "Master the art of pour-over coffee with our step-by-step guide. From water temperature to bloom time, we cover everything you need to brew café-quality coffee at home.",
    date: "12 April 2026",
    category: "Brew Guide",
    image: aboutStory,
  },
  {
    id: "understanding-roast-profiles",
    title: "Understanding Coffee Roast Profiles",
    excerpt: "Light, medium, dark — what do these really mean? We break down the science of roasting and how each profile transforms the flavour of your favourite beans.",
    date: "5 April 2026",
    category: "Education",
    image: cafeInterior,
  },
  {
    id: "ethiopian-coffee-origin",
    title: "Ethiopia: The Birthplace of Coffee",
    excerpt: "A journey through the highlands of Yirgacheffe, where coffee was first discovered. Explore the unique processing methods that give Ethiopian beans their distinctive character.",
    date: "28 March 2026",
    category: "Origins",
    image: aboutStory,
  },
  {
    id: "cold-brew-summer",
    title: "Cold Brew for South African Summers",
    excerpt: "Beat the heat with our simple cold brew recipe. Using our Brazilian Santos, this refreshing drink is smooth, sweet, and ready in just 12 hours.",
    date: "20 March 2026",
    category: "Recipes",
    image: cafeInterior,
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">From Our Roastery</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">The Blog</h1>
          <p className="text-muted-foreground max-w-xl">
            Brew guides, origin stories, and tips to elevate your coffee game.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-card rounded-lg overflow-hidden border border-border product-card-hover">
                <div className="overflow-hidden aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge-roast">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary hover:gap-2 transition-all cursor-pointer">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
