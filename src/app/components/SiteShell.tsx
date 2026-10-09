import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { SITE, whatsappLink } from "@/app/site";

// Sayfa değişince başa döner; adres "#iletisim" gibi bir bölüm içeriyorsa o bölüme kayar.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }
    let tries = 0;
    const go = () => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else if (tries++ < 20) setTimeout(go, 50);
    };
    go();
  }, [pathname, hash]);
  return null;
}

function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      title="WhatsApp ile yazın"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 flex items-center justify-center hover:scale-110 transition-transform duration-300"
    >
      <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98.99-3.63-.23-.37a9.8 9.8 0 0 1-1.5-5.23c0-5.42 4.41-9.83 9.84-9.83a9.77 9.77 0 0 1 6.95 2.88 9.77 9.77 0 0 1 2.88 6.96c0 5.42-4.42 9.83-9.84 9.83zm8.37-18.2A11.75 11.75 0 0 0 12.04.13C5.5.13.18 5.45.18 11.98c0 2.09.55 4.13 1.59 5.93L.08 24l6.24-1.64a11.84 11.84 0 0 0 5.71 1.46h.01c6.53 0 11.85-5.32 11.86-11.85 0-3.17-1.23-6.15-3.47-8.39z" />
      </svg>
    </a>
  );
}

export function SiteShell({ title, children }: { title?: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${SITE.name}`
      : `${SITE.name} | Elektrik, Otomasyon ve Enerji Çözümleri – Manisa`;
  }, [title]);

  return (
    <div className="min-h-screen">
      <ScrollManager />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
