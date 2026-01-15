import { Quote } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export function Testimonials() {
  const featuredTestimonials = siteContent.testimonials.slice(0, 3);

  return (
    <section data-testid="section-testimonials" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from the people we've had the privilege to work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              data-testid={`testimonial-${testimonial.id}`}
              className="bg-background rounded-lg p-8 border border-border hover-lift"
            >
              <Quote className="h-8 w-8 text-gold/50 mb-4" />
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
      </div>
    </section>
  );
}