import { motion } from "motion/react";
import { Search, PenTool, Hammer, PlugZap } from "lucide-react";

// Adımlar, Taahhüt metnindeki süreçten türetildi: keşif, projelendirme, malzeme temini/montaj, test ve devreye alma
const steps = [
  { Icon: Search, title: "Keşif", text: "Sahada ihtiyaç ve mevcut durum analizi, fizibilite ve maliyet değerlendirmesi." },
  { Icon: PenTool, title: "Projelendirme", text: "Teknik standartlara ve mevzuata uygun mühendislik tasarımı ve resmi projeler." },
  { Icon: Hammer, title: "Uygulama", text: "Malzeme temini, pano üretimi, montaj ve kablolama; iş güvenliği öncelikli saha yönetimi." },
  { Icon: PlugZap, title: "Test & Devreye Alma", text: "Fonksiyon testleri, ölçümler ve devreye alma; ardından periyodik bakım ve destek." },
];

export function Process() {
  return (
    <section className="py-24 md:py-28 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(185,28,28,0.25),transparent_50%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow eyebrow-dark mb-4">Çalışma Sürecimiz</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Anahtar teslim, <span className="text-red-500">uçtan uca</span> süreç.
          </h2>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {steps.map(({ Icon, title, text }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-950 p-8 group hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="size-12 rounded-2xl bg-red-700/15 border border-red-500/30 flex items-center justify-center group-hover:bg-red-700 transition-colors">
                  <Icon className="size-5 text-red-400 group-hover:text-white transition-colors" />
                </span>
                <span className="font-mono text-sm text-white/30">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed text-[15px]">{text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
