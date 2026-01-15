import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";

export default function Services() {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional photography services tailored to your unique needs.
            </p>
          </div>

          <div className="space-y-24">
            {siteContent.services.map((service, index) => (
              <div
                key={service.id}
                data-testid={`service-section-${service.id}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src={
                        siteContent.portfolioItems.find(
                          (p) => p.category === service.id
                        )?.imageUrl ||
                        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                      }
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.longDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-semibold mb-3">Deliverables</h3>
                      <ul className="space-y-2">
                        {service.deliverables.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Ideal For</h3>
                      <ul className="space-y-2">
                        {service.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="bg-muted px-4 py-2 rounded-lg">
                      <p className="text-xs text-muted-foreground">Starting at</p>
                      <p className="font-semibold">{service.startingPriceRange}</p>
                    </div>
                    <div className="bg-muted px-4 py-2 rounded-lg">
                      <p className="text-xs text-muted-foreground">Timeline</p>
                      <p className="font-semibold text-sm">{service.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 pt-16 border-t border-border">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and create something beautiful together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}