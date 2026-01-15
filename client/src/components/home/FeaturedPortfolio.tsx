import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export function FeaturedPortfolio() {
  const featuredItems = siteContent.portfolioItems.slice(0, 8);

  return (
    <section data-testid="section-featured-portfolio" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our portfolio of memorable moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredItems.map((item, index) => (
            <Link key={item.id} href="/portfolio">
              <div
                data-testid={`portfolio-item-${item.id}`}
                className={`group relative overflow-hidden rounded-lg cursor-pointer image-zoom ${
                  index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="aspect-square">
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/70 text-xs">{item.location}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <span className="inline-flex items-center text-foreground font-medium hover:text-gold transition-colors cursor-pointer">
              View full portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}