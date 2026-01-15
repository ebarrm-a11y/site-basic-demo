import { Link } from "wouter";
import { Instagram, Mail, Phone } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="font-display text-2xl font-semibold tracking-tight cursor-pointer">
                {siteContent.siteName}
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Premium photography services across Canada. Capturing moments that matter since 2014.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteContent.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteContent.socialLinks.email}`}
                data-testid="link-email"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={`tel:${siteContent.socialLinks.phone.replace(/\s/g, "")}`}
                data-testid="link-phone"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {siteContent.navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {siteContent.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="/services">
                    <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-sm">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{siteContent.socialLinks.email}</li>
              <li>{siteContent.socialLinks.phone}</li>
              <li>{siteContent.primaryCity}, Canada</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Service Areas</h3>
              <p className="text-sm text-muted-foreground">
                {siteContent.serviceAreas.slice(0, 4).join(" • ")}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteContent.siteName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/legal">
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/legal">
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}