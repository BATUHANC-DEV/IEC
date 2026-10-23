import { Linkedin, Instagram, ArrowUp, Phone, Mail, MapPin, LayoutDashboard, UserRound } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/18b16f5249c3ff094e1c6c1e6e2eeb6909227268.png";
import { SITE, whatsappLink } from "@/app/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98.99-3.63-.23-.37a9.8 9.8 0 0 1-1.5-5.23c0-5.42 4.41-9.83 9.84-9.83a9.77 9.77 0 0 1 6.95 2.88 9.77 9.77 0 0 1 2.88 6.96c0 5.42-4.42 9.83-9.84 9.83zm8.37-18.2A11.75 11.75 0 0 0 12.04.13C5.5.13.18 5.45.18 11.98c0 2.09.55 4.13 1.59 5.93L.08 24l6.24-1.64a11.84 11.84 0 0 0 5.71 1.46h.01c6.53 0 11.85-5.32 11.86-11.85 0-3.17-1.23-6.15-3.47-8.39z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Ana Sayfa", to: "/#home" },
  { label: "Hakkımızda", to: "/#about" },
  { label: "Hizmetler", to: "/#services" },
  { label: "Projeler", to: "/#projects" },
  { label: "İletişim", to: "/#contact" },
];

const serviceLinks = [
  { label: "Pano Sistemleri", to: "/pano-sistemleri" },
  { label: "Enerji Dağıtım Sistemi", to: "/enerji-dagitim-sistemi" },
  { label: "Otomasyon Sistemleri", to: "/otomasyon" },
  { label: "Servis & Bakım", to: "/servis-bakim" },
  { label: "Devreye Alma", to: "/devreye-alma" },
];

const socialClass =
  "size-12 bg-white/5 backdrop-blur rounded-xl flex items-center justify-center transition-all duration-300";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { label: "Instagram", href: SITE.instagram, Icon: Instagram },
    { label: "LinkedIn", href: SITE.linkedin, Icon: Linkedin },
    { label: "WhatsApp", href: whatsappLink(), Icon: WhatsAppIcon },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="IEC Mühendislik Logo"
                loading="lazy"
                className="h-16 w-16 object-contain brightness-0 invert"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">{SITE.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{SITE.tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elektrik mühendisliği ve otomasyon sistemlerinde 10 yıllık deneyim ile güvenilir çözüm ortağınız.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Hızlı Erişim</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Hizmetlerimiz</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">İletişim</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-red-400 flex-shrink-0" />
                {SITE.city}
              </li>
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 hover:text-red-400 transition-colors">
                  <Phone className="size-4 text-red-400 flex-shrink-0" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-red-400 transition-colors">
                  <Mail className="size-4 text-red-400 flex-shrink-0" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {socials.map(({ label, href, Icon }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className={`${socialClass} hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 hover:scale-110`}
                  >
                    <Icon className="size-5" />
                  </a>
                ) : (
                  <span
                    key={label}
                    aria-label={`${label} (yakında)`}
                    title={`${label} — yakında`}
                    className={`${socialClass} opacity-40 cursor-default`}
                  >
                    <Icon className="size-5" />
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-4 md:mr-20">
            <a
              href={SITE.portalUrl}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
            >
              <UserRound className="size-4" />
              Müşteri Girişi
            </a>
            <a
              href={SITE.panelUrl}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
            >
              <LayoutDashboard className="size-4" />
              Yönetim Paneli
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Sayfanın başına dön"
              title="Başa dön"
              className="size-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              <ArrowUp className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
