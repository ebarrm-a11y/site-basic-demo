import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServiceCards />
      <FeaturedPortfolio />
      <ProcessSteps />
      <Testimonials />
      <CTABand />
    </Layout>
  );
}