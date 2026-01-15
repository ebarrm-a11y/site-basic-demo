import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABand() {
  return (
    <section
      data-testid="section-cta"
      className="relative py-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
          Ready to Create Something Beautiful?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss your vision and bring it to life. Book a free consultation today.
        </p>
        <Link href="/contact">
          <Button
            data-testid="button-cta-book"
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium"
          >
            Book Your Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}