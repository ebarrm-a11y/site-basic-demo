import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { siteContent } from "@/data/siteContent";

export default function Legal() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
              Legal
            </h1>
            <p className="text-muted-foreground">
              Our policies and terms of service.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              data-testid="tab-privacy"
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "privacy"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              Privacy Policy
            </button>
            <button
              data-testid="tab-terms"
              onClick={() => setActiveTab("terms")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "terms"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              Terms of Service
            </button>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
                {activeTab === "privacy"
                  ? siteContent.legal.privacy
                  : siteContent.legal.terms}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}