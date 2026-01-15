import { Link } from "wouter";
import { Check, Star, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";

export default function Pricing() {
  const weddingPackages = siteContent.pricingPackages.filter(
    (p) => p.category === "weddings"
  );
  const corporatePackages = siteContent.pricingPackages.filter(
    (p) => p.category === "corporate"
  );
  const portraitPackages = siteContent.pricingPackages.filter(
    (p) => p.category === "portraits"
  );

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Investment
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing for quality photography. Final quotes provided after consultation.
            </p>
          </div>

          <div className="space-y-20">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-8 text-center">
                Wedding Photography
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {weddingPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    data-testid={`pricing-card-${pkg.id}`}
                    className={`relative bg-card border rounded-lg p-8 hover-lift ${
                      pkg.popular ? "border-gold" : "border-border"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-display text-xl font-medium mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-3xl font-semibold mb-6">{pkg.priceRange}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? "bg-foreground text-background hover:bg-foreground/90"
                            : "bg-muted text-foreground hover:bg-accent"
                        }`}
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-8 text-center">
                Corporate Photography
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {corporatePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    data-testid={`pricing-card-${pkg.id}`}
                    className={`relative bg-card border rounded-lg p-8 hover-lift ${
                      pkg.popular ? "border-gold" : "border-border"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-display text-xl font-medium mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-3xl font-semibold mb-6">{pkg.priceRange}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? "bg-foreground text-background hover:bg-foreground/90"
                            : "bg-muted text-foreground hover:bg-accent"
                        }`}
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-8 text-center">
                Portrait Sessions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {portraitPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    data-testid={`pricing-card-${pkg.id}`}
                    className={`relative bg-card border rounded-lg p-8 hover-lift ${
                      pkg.popular ? "border-gold" : "border-border"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-display text-xl font-medium mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-3xl font-semibold mb-6">{pkg.priceRange}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? "bg-foreground text-background hover:bg-foreground/90"
                            : "bg-muted text-foreground hover:bg-accent"
                        }`}
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl font-medium mb-6 text-center">
              Add-Ons & Extras
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {siteContent.addOns.map((addon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-background rounded-lg"
                >
                  <span className="text-sm">{addon.name}</span>
                  <span className="font-semibold text-sm">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">
              All pricing is starting rates. Final quotes are provided after consultation based on your specific needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Request a Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}