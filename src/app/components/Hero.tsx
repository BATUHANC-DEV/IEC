import { motion } from "motion/react";
import { ArrowRight, Zap, LayoutGrid, Network, Cpu, Wrench } from "lucide-react";

const highlights = [
  { Icon: LayoutGrid, label: "AG/OG Pano Sistemleri" },
  { Icon: Network, label: "Enerji Dağıtımı" },
  { Icon: Cpu, label: "PLC / SCADA Otomasyon" },
  { Icon: Wrench, label: "Servis & Bakım" },
];

const stats = [
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "100+", label: "Tamamlanan Proje" },
  { value: "50+", label: "Mutlu Müşteri" },
];

export function Hero() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  });

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col bg-gray-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4NzN8MHwxfGFsbHx8fHx8fHx8fDE3MTc1MTU4ODZ8MA&ixlib=rb-4.0.3&q=80&w=1600"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(185,28,28,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative flex-1 flex items-center container mx-auto px-4 pt-36 pb-16">
        <div className="max-w-3xl">
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 mb-7 pl-2 pr-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur">
            <span className="size-6 rounded-full bg-red-600 flex items-center justify-center">
              <Zap className="size-3.5 text-white" />
            </span>
            <span className="text-white/85 text-sm font-medium">Manisa merkezli elektrik & otomasyon mühendisliği</span>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="text-[2.6rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-7">
            Elektrik ve <span className="text-red-500">Otomasyon</span>
            <br />
            Çözümlerinde Lideriz
          </motion.h1>

          <motion.p {...fade(0.2)} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
            Endüstriyel elektrik tesisatı, otomasyon sistemleri ve enerji yönetimi alanlarında yenilikçi ve sürdürülebilir çözümler sunuyoruz.
          </motion.p>

          <motion.div {...fade(0.3)} className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-4 shadow-lg shadow-red-900/40 transition-colors group"
            >
              Teklif Alın
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("#services")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 text-white font-semibold px-7 py-4 hover:bg-white hover:text-gray-950 transition-colors"
            >
              Hizmetlerimizi Keşfedin
            </button>
          </motion.div>
        </div>
      </div>

      {/* Alt şerit: öne çıkan alanlar + rakamlar */}
      <motion.div {...fade(0.45)} className="relative border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-6 py-6">
          <ul className="lg:col-span-7 flex flex-wrap items-center gap-x-7 gap-y-3">
            {highlights.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-gray-300 whitespace-nowrap">
                <Icon className="size-4 text-red-500 flex-shrink-0" />
                {label}
              </li>
            ))}
          </ul>
          <div className="lg:col-span-5 grid grid-cols-3 gap-4 lg:border-l lg:border-white/10 lg:pl-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-white leading-none">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
