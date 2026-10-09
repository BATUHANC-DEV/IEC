import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import otoImage from "../../assets/oto1.jpg";
import panoImage from "../../assets/ps1.jpg";
import servisImage from "../../assets/sb4.jpg";

const projects = [
  {
    title: "Pano Sistemleri",
    category: "Pano Üretimi",
    image: panoImage,
    description: "AG/OG dağıtım, MCC ve otomasyon panoları üretimi",
    link: "/pano-sistemleri",
  },
  {
    title: "Enerji Dağıtım Sistemi",
    category: "Enerji",
    image: "https://images.unsplash.com/photo-1696197302705-7c2cc6a7e8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRpc3RyaWJ1dGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3Njk4ODc1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "AG/OG şebeke projesi ve trafo merkezi kurulumu",
    link: "/enerji-dagitim-sistemi",
  },
  {
    title: "Servis & Bakım",
    category: "Bakım",
    image: servisImage,
    description: "Periyodik bakım, termal kamera kontrolleri ve arıza analizleri",
    link: "/servis-bakim",
  },
  {
    title: "Devreye Alma",
    category: "Test & Devreye Alma",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZ3xlbnwxfHx8fDE3NDExODU2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Fonksiyon testleri, koruma rölesi ayarları ve yük testleri",
    link: "/devreye-alma",
  },
  {
    title: "Otomasyon Sistemleri",
    category: "Otomasyon",
    image: otoImage,
    description: "PLC, SCADA ve HMI tabanlı otomasyon çözümleri",
    link: "/otomasyon",
  },
  {
    title: "Ticari Bina Akıllı Sistemler",
    category: "Akıllı Bina",
    image: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2OTg4NjA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Plaza binası BMS ve aydınlatma kontrol sistemleri",
    link: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">Referanslarımız</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 leading-[1.1]">Projelerimiz</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-md">Gerçekleştirdiğimiz başarılı projelerden bazıları</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const card = (
              <article className="group relative h-[380px] rounded-3xl overflow-hidden bg-gray-900">
                <img loading="lazy" src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-red-700">
                  {p.category}
                </span>
                {p.link && (
                  <span className="absolute top-5 right-5 size-10 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-colors">
                    <ArrowUpRight className="size-5" />
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1.5">{p.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{p.description}</p>
                </div>
              </article>
            );
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                viewport={{ once: true }}
              >
                {p.link ? (
                  <Link to={p.link} className="block rounded-3xl focus-visible:outline-2 focus-visible:outline-red-600 focus-visible:outline-offset-4">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
