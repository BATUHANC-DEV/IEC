import { ClipboardList, HardHat, Ruler, Sun, Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import engineeringImg from "../../assets/aec4d8485bb1a639b788b7bad07ef0557b2da0b7.jpg";
import contractImg from "../../assets/1a9678d4e224afdcc720459b9c1ed079957547f1.jpg";
import projectImg from "../../assets/e7ec1a5f9c02552521e2a7da9a292ca19bb12f80.jpg";
import renewableEnergyImg from "../../assets/46c123fc687542d84b9c2f8ced61499affe2c6b8.jpg";

type Group = { title: string; items: string[] };
type Area = {
  key: string;
  label: string;
  Icon: typeof ClipboardList;
  image: string;
  title: string;
  text: string;
  items?: string[];
  groups?: Group[];
};

const areas: Area[] = [
  {
    key: "proje",
    label: "Proje Yönetimi",
    Icon: ClipboardList,
    image: projectImg,
    title: "Proje Yönetimi",
    text: "Elektrik projeleri; keşif, mühendislik tasarımı, uygulama ve teslim süreçleri boyunca teknik standartlar ve iş güvenliği gereklilikleri doğrultusunda yönetilir. Zaman, maliyet ve kalite kontrolü entegre şekilde yürütülür.",
    items: [
      "Enerji Yönetim Sistemi",
      "Kuvvetli Akım Tesisleri",
      "Jeneratör ve UPS",
      "Topraklama Projeleri",
      "MCC, Otomasyon ve Dağıtım Pano Projeleri ve Kablolaması",
      "Paratoner Projeleri",
      "Yüksek Gerilim ve Alçak Gerilim Enerji İzleme",
      "Yenilenebilir Enerji Sistemleri",
      "Resmi Yüksek Gerilim Projesi",
      "Dağıtım merkezleri",
      "Resmi Son Durum Projesi",
      "Aydınlatma projeleri",
      "Yangın Algılama",
      "Zayıf Akım Tesisleri",
      "Seslendirme",
      "Güvenlik Sistemleri",
    ],
  },
  {
    key: "taahhut",
    label: "Taahhüt",
    Icon: HardHat,
    image: contractImg,
    title: "Taahhüt",
    text: "Alçak ve orta gerilim elektrik tesisleri için anahtar teslim taahhüt hizmetleri sunuyoruz. Keşif, projelendirme, malzeme temini, montaj, test ve devreye alma süreçleri teknik şartnamelere uygun olarak yürütülür.",
    items: [
      "YG Dağıtım Sistemleri ve Enerji Merkezleri",
      "AG Dağıtım Sistemleri",
      "Busbar Sistemleri",
      "Kablo Taşıma Sistemleri",
      "Mekanik Ekipman Sistemleri",
      "ADP, MCC, SBS, DDS, Senkronizasyon, Yük Atma ve Otomasyon Panoları",
      "Kompanzasyon Sistemleri",
      "İç, Çevre ve Acil Aydınlatma Sistemleri",
      "Enstrümantasyon",
      "Otomasyon Sistemleri",
      "Topraklama ve Yıldırımdan Korunma Sistemleri",
      "Yangın Algılama ve Söndürme Sistemleri",
      "Seslendirme ve Acil Anons Sistemleri",
      "CCTV Sistemleri",
      "Kartlı Geçiş ve Güvenlik Sistemleri",
      "Data, Telefon, Network Sistemleri",
      "Sismik Tedbirler",
    ],
  },
  {
    key: "muhendislik",
    label: "Mühendislik",
    Icon: Ruler,
    image: engineeringImg,
    title: "Mühendislik Hizmetleri",
    text: "İşletme sorumluluğundan müşavirliğe, makine kurulumundan ölçme ve raporlamaya kadar tesislerinizin teknik ihtiyaçlarını uçtan uca karşılıyoruz.",
    groups: [
      {
        title: "Yüksek Gerilim İşletme Sorumluluğu",
        items: [
          "OG/YG tesislerin işletme sorumluluğunun üstlenilmesi",
          "İşletme güvenliği ve mevzuat uygunluğu",
          "Periyodik kontroller ve raporlama",
          "Enerji sürekliliği ve risk yönetimi",
        ],
      },
      {
        title: "Proje Müşavirlik Hizmetleri",
        items: [
          "Teknik danışmanlık ve proje değerlendirme",
          "Şartname ve proje uygunluk kontrolleri",
          "Uygulama süreci teknik denetimi",
          "Yatırım ve sistem optimizasyon danışmanlığı",
        ],
      },
      {
        title: "Demontaj & Montaj / Makine Kurulumu",
        items: [
          "Elektrik ekipmanlarının söküm ve yeniden montajı",
          "Endüstriyel makine enerji bağlantıları",
          "Hat ve kablo sistemlerinin taşınması",
          "Devreye alma öncesi mekanik & elektriksel kontroller",
        ],
      },
      {
        title: "Ölçme & Değerlendirme",
        items: [
          "Enerji analizleri ve güç kalitesi ölçümleri",
          "Termal kamera ve yük analizleri",
          "Topraklama ve izolasyon ölçümleri",
          "Performans ve verimlilik raporlaması",
        ],
      },
    ],
  },
  {
    key: "yenilenebilir",
    label: "Yenilenebilir Enerji",
    Icon: Sun,
    image: renewableEnergyImg,
    title: "Yenilenebilir Enerji",
    text: "Güneş enerjisi başta olmak üzere yenilenebilir enerji sistemlerinin projelendirme, kurulum ve entegrasyon hizmetlerini sağlıyoruz. Şebeke bağlantılı ve hibrit sistem çözümleri uygulanmaktadır.",
    items: [
      "GES (Güneş Enerji Sistemleri) kurulumu",
      "Şebeke bağlantılı ve hibrit sistemler",
      "İnverter ve enerji depolama çözümleri",
      "Enerji üretim izleme sistemleri",
      "Fizibilite ve geri dönüş analizi",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(areas[0].key);
  const area = areas.find((a) => a.key === active)!;

  const goContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-24 md:py-32 bg-stone-50 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Uzmanlık Alanlarımız</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 leading-[1.1]">
              Tasarımdan devreye almaya,
              <br className="hidden md:block" /> tek elden mühendislik.
            </h2>
          </div>
          <p className="lg:col-span-5 text-gray-600 text-lg leading-relaxed">
            Elektrik projelerinizi keşiften teslime kadar teknik standartlara, iş güvenliğine ve bütçenize uygun şekilde yönetiyoruz.
          </p>
        </div>

        {/* Sekmeler */}
        <div role="tablist" aria-label="Hizmet alanları" className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-white rounded-2xl border border-gray-200 shadow-sm mb-10">
          {areas.map(({ key, label, Icon }) => {
            const on = key === active;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(key)}
                className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3.5 text-sm md:text-base font-semibold transition-all duration-300 ${
                  on ? "bg-red-700 text-white shadow-md shadow-red-900/20" : "text-gray-600 hover:text-red-700 hover:bg-red-50"
                }`}
              >
                <Icon className="size-4 md:size-5 flex-shrink-0" />
                {label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={area.key}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12"
          >
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-72 shadow-xl">
                <img loading="lazy" src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <area.Icon className="size-9 mb-4 text-red-400" />
                  <h3 className="text-3xl font-extrabold tracking-tight mb-3">{area.title}</h3>
                  <p className="text-white/80 leading-relaxed">{area.text}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {area.items && (
                <ul className="grid sm:grid-cols-2 gap-x-6 bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 text-gray-700">
                      <span className="mt-0.5 size-5 rounded-full bg-red-50 text-red-700 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-[15px] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {area.groups && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {area.groups.map((g, i) => (
                    <div key={g.title} className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
                      <div className="text-red-700 font-mono text-sm font-bold mb-2">0{i + 1}</div>
                      <h4 className="text-lg font-bold text-gray-950 mb-4 leading-snug">{g.title}</h4>
                      <ul className="space-y-2.5">
                        {g.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                            <span className="mt-2 size-1.5 rounded-full bg-red-600 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={goContact}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-red-700 hover:text-red-900 group"
              >
                Bu alanda teklif isteyin
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
