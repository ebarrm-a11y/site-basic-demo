import { useState } from "react";
import { X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { siteContent } from "@/data/siteContent";
import type { PortfolioItem } from "@/data/siteContent";

const categories = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "corporate", label: "Corporate" },
  { id: "portraits", label: "Portraits" },
  { id: "artists", label: "Artists" },
  { id: "events", label: "Events" },
  { id: "product", label: "Product" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? siteContent.portfolioItems
      : siteContent.portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Portfolio
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated collection of our work across weddings, corporate, portraits, and more.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                data-testid={`filter-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="masonry-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                data-testid={`portfolio-card-${item.id}`}
                className="masonry-item group cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                <div className="relative overflow-hidden rounded-lg image-zoom">
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-white/70 text-sm">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div
          data-testid="lightbox"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <button
            data-testid="button-close-lightbox"
            className="absolute top-6 right-6 p-2 text-white hover:text-white/70 transition-colors"
            onClick={() => setLightboxItem(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxItem.imageUrl}
              alt={lightboxItem.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium text-lg">{lightboxItem.title}</p>
              <p className="text-white/70">{lightboxItem.location}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}