// Firma iletişim bilgileri — tek yerden yönetilir (üst bar, iletişim, alt bilgi, WhatsApp butonu)
export const SITE = {
  name: "IEC Mühendislik",
  tagline: "Elektrik & Otomasyon",
  city: "Manisa, Merkez",
  phoneDisplay: "0541 895 34 86",
  phoneTel: "+905418953486",
  email: "info@iecmuhendislik.com",
  whatsapp: "905418953486",
  // Boş bırakılan sosyal medya hesapları alt bilgide "yakında" olarak görünür
  instagram: "https://www.instagram.com/iecelektrikmuhendislik/",
  linkedin: "",
  panelUrl: "https://panel.iecmuhendislik.com.tr",
};

export const whatsappLink = (text = "Merhaba, IEC Mühendislik web sitesinden ulaşıyorum.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
