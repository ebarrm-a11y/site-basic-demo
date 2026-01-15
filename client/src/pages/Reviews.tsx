import { Link } from "wouter";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";

export default function Reviews() {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Client Reviews
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-6 w-6 text-gold fill-gold"
                />
              ))}
            </div>
            <span className="text-lg font-medium">5.0</span>
            <span className="text-muted-foreground">
              Based on {siteContent.testimonials.length}+ reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteContent.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                data-testid={`review-card-${testimonial.id}`}
                className="bg-card border border-border rounded-lg p-8 hover-lift"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-gold fill-gold"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-gold/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city} • {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="font-display text-2xl font-medium mb-4">
              Google Reviews
            </h2>
            <p className="text-muted-foreground mb-6">
              We're proud of our reputation. Check out our reviews on Google for more feedback from our clients.
            </p>
            <div className="inline-flex items-center gap-3 bg-background border border-border rounded-lg px-6 py-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-gold fill-gold"
                  />
                ))}
              </div>
              <span className="font-medium">5.0 on Google</span>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create beautiful memories together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Book Your Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}