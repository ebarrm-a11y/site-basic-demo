import { Link } from "wouter";
import { ArrowRight, Camera, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";

export default function About() {
  const { about } = siteContent;

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                {about.headline}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {about.intro}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {about.bio}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                  alt="Photographer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-foreground text-background p-6 rounded-lg shadow-xl">
                <p className="font-display text-3xl font-semibold">300+</p>
                <p className="text-sm opacity-80">Weddings Captured</p>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {about.values.map((value, i) => (
                <div
                  key={i}
                  data-testid={`value-card-${i}`}
                  className="bg-card border border-border rounded-lg p-6 hover-lift"
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <span className="font-display text-xl font-semibold">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="h-6 w-6 text-gold" />
                <h3 className="font-display text-xl font-medium">Equipment</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {about.equipment}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-gold" />
                <h3 className="font-display text-xl font-medium">Coverage Area</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {about.coverage}
              </p>
              <div className="flex flex-wrap gap-2">
                {siteContent.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-muted rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center bg-card border border-border rounded-lg p-12">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether it's your wedding day or a corporate event, we'd love to hear about your project.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}