import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: '車隊介紹', labelEn: 'Fleet', id: 'fleet' },
    { label: '服務方案', labelEn: 'Packages', id: 'packages' },
    { label: '立即預訂', labelEn: 'Booking', id: 'booking' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div
              className="text-2xl font-serif font-bold cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              data-testid="link-logo"
            >
              <span className={isScrolled ? 'text-foreground' : 'text-white'}>
                尊榮包車
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                  data-testid={`link-${link.id}`}
                >
                  {link.label} / {link.labelEn}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('booking')}
                variant={isScrolled ? 'default' : 'default'}
                data-testid="button-book-nav"
              >
                立即預訂
              </Button>
            </div>

            <button
              className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.id)}
                className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label} / {link.labelEn}
              </button>
            ))}
            <Button
              size="lg"
              onClick={() => scrollToSection('booking')}
              data-testid="button-mobile-book"
            >
              立即預訂 / Book Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
