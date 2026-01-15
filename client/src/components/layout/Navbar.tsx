import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <span className="font-display text-xl md:text-2xl font-semibold tracking-tight cursor-pointer">
              {siteContent.siteName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {siteContent.navLinks.slice(0, 7).map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-${link.label.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-gold cursor-pointer ${
                    location === link.href
                      ? "text-gold"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              data-testid="button-theme-toggle"
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link href="/contact">
              <Button data-testid="button-book-cta" className="bg-foreground text-background hover:bg-foreground/90">
                Book a Consultation
              </Button>
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              data-testid="button-theme-toggle-mobile"
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              data-testid="button-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-4 py-6 space-y-4">
            {siteContent.navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  className={`block text-lg font-medium py-2 transition-colors hover:text-gold cursor-pointer ${
                    location === link.href
                      ? "text-gold"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact">
                <Button data-testid="button-book-mobile" className="w-full bg-foreground text-background hover:bg-foreground/90">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Link href="/contact">
      <button
        data-testid="button-floating-book"
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-foreground text-background px-6 py-3 rounded-full font-medium shadow-lg hover:bg-foreground/90 transition-all animate-fade-in"
      >
        Book Now
      </button>
    </Link>
  );
}