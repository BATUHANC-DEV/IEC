import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.svg";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="IEC Mühendislik Logo" 
                className="h-16 w-16 object-contain brightness-0 invert"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">IEC Mühendislik</h3>
            <p className="text-sm text-gray-400 mb-4">Elektrik & Otomasyon</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elektrik mühendisliği ve otomasyon sistemlerinde 10 yıllık deneyim ile güvenilir çözüm ortağınız.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Hızlı Erişim</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block">Ana Sayfa</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block">Hizmetler</a></li>
              <li><a href="#projects" className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block">Projeler</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Hizmetlerimiz</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-red-400 transition-colors">Elektrik Tesisat</li>
              <li className="hover:text-red-400 transition-colors">Otomasyon Sistemleri</li>
              <li className="hover:text-red-400 transition-colors">Enerji Yönetimi</li>
              <li className="hover:text-red-400 transition-colors">Akıllı Bina Sistemleri</li>
              <li className="hover:text-red-400 transition-colors">Periyodik Bakım</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">İletişim</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Şehzadeler, Manisa</li>
              <li className="hover:text-red-400 transition-colors">+90 (212) 123 45 67</li>
              <li className="hover:text-red-400 transition-colors">info@iecmuhendislik.com</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" className="size-12 bg-white/5 backdrop-blur rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 transition-all hover:scale-110 duration-300">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="size-12 bg-white/5 backdrop-blur rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 transition-all hover:scale-110 duration-300">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="size-12 bg-white/5 backdrop-blur rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 transition-all hover:scale-110 duration-300">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="size-12 bg-white/5 backdrop-blur rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 transition-all hover:scale-110 duration-300">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2026 IEC Mühendislik. Tüm hakları saklıdır.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="size-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
          >
            <ArrowUp className="size-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}