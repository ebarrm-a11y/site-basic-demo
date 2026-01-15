import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent } from "@/data/siteContent";

export default function FAQ() {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Answers to common questions about our photography services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {siteContent.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                data-testid={`faq-item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16 bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-xl md:text-2xl font-medium mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link href="/contact">
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}