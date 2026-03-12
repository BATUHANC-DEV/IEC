import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import logo from "@/assets/logo.svg";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Hizmetler", href: "#services" },
    { label: "Projeler", href: "#projects" },
    { label: "İletişim", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-2xl py-2" 
        : "bg-transparent py-4"
    }`}>
      {/* Top Bar - hidden when scrolled */}
      <div className={`bg-gradient-to-r from-red-900 via-gray-900 to-black text-white transition-all duration-500 overflow-hidden ${
        isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-2"
      }`}>
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+902121234567" className="flex items-center gap-2 hover:text-red-300 transition-colors">
              <Phone className="size-4" />
              <span>+90 (212) 123 45 67</span>
            </a>
            <a href="mailto:info@iecmuhendislik.com" className="flex items-center gap-2 hover:text-red-300 transition-colors">
              <Mail className="size-4" />
              <span>info@iecmuhendislik.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-2">
          <div className="flex items-center gap-3">
            <img 
             src="/logo.png" 
              alt="IEC Mühendislik Logo" 
              className="h-16 w-16 object-contain transform hover:scale-110 transition-transform duration-300"
              style={{ mixBlendMode: 'darken' }}
            />
        <div className="flex flex-col ml-3 transition-opacity duration-300 opacity-100">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
              }`}>
                IEC Mühendislik
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? "text-gray-600" : "text-white/90"
              }`}>
                Elektrik & Otomasyon
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-all duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600" 
                    : "text-white hover:text-red-300"
                } group`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")} 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-black text-white shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Teklif Al
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-white/95 backdrop-blur-xl rounded-lg mt-2 p-4 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-red-600 py-2 text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection("#contact")} className="w-full bg-gradient-to-r from-red-600 to-red-800">
                Teklif Al
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
