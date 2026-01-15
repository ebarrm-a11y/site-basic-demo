import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export function ServiceCards() {
  const featuredServices = siteContent.services.slice(0, 6);

  return (
    <section data-testid="section-services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            What We Capture
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate moments to grand celebrations, we bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <Link key={service.id} href="/services">
              <div
                data-testid={`card-service-${service.id}`}
                className="group relative overflow-hidden rounded-lg bg-card border border-border p-8 hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-medium mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-muted/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <span className="inline-flex items-center text-foreground font-medium hover:text-gold transition-colors cursor-pointer">
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}