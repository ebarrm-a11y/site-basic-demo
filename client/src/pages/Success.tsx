import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Success() {
  return (
    <Layout>
      <section className="pt-32 pb-24 min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-8">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Message Sent!
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours. We're excited to learn more about your project!
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="font-medium mb-2">What happens next?</h2>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li>• We'll review your inquiry and prepare a personalized response</li>
              <li>• You'll receive an email with available consultation times</li>
              <li>• We'll discuss your vision and answer any questions</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}