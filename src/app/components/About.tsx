import { Check, Target, Eye } from "lucide-react";
import { motion } from "motion/react";
import aboutImage from "../../assets/da27febbb4800b8ba4de1fb4ec3cb2925c57a748.png";

const features = [
  "Deneyimli ve Sertifikalı Mühendis Kadrosu",
  "7/24 Teknik Destek",
  "Yüksek Kaliteli Malzeme Kullanımı",
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div {...reveal} className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img loading="lazy" src={aboutImage} alt="IEC Elektrik Mühendislik" className="w-full h-[420px] md:h-[560px] object-cover" />
            </div>
            <div className="absolute -bottom-6 right-4 md:-right-6 bg-red-700 text-white rounded-2xl px-6 py-5 shadow-xl shadow-red-900/30">
              <div className="text-4xl font-extrabold leading-none">10+</div>
              <div className="text-sm text-white/80 mt-1">yıllık saha tecrübesi</div>
            </div>
            <div className="hidden md:block absolute -top-6 -left-6 size-32 rounded-3xl border-2 border-red-200 -z-10" />
          </motion.div>

          <motion.div {...reveal} className="lg:col-span-6 order-1 lg:order-2">
            <p className="eyebrow mb-4">Kurumsal Kimlik</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 leading-[1.1] mb-7">Hakkımızda</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Şirketimiz, müşterilerimizin orta ve uzun vadeli büyüme hedeflerini merkeze alarak tüm yeni tesisleri için fizibilite, maliyet optimizasyonu, enerji verimliliği ile insan ve çevre odaklı sürdürülebilirlik ilkeleri ışığında planlar ve hayata geçirir. Mevcut tesisleri ise yalnızca korumakla yetinmez; güçlü proje disiplini ve sürekli gelişim anlayışıyla daha verimli, daha güvenli ve kesintisiz üretim sağlayan modern bir altyapıya dönüştürür.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-800 font-medium">
                  <span className="size-6 rounded-full bg-red-700 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <dl className="grid grid-cols-3 border-y border-gray-200 divide-x divide-gray-200">
              {[
                ["100+", "Tamamlanan Proje"],
                ["50+", "Mutlu Müşteri"],
                ["7/24", "Teknik Destek"],
              ].map(([v, l]) => (
                <div key={l} className="py-5 px-3 first:pl-0">
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-3xl font-extrabold text-gray-950">{v}</dd>
                  <dd className="text-sm text-gray-500 mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div {...reveal} className="relative overflow-hidden rounded-3xl bg-gray-950 text-white p-10">
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-red-700/30 blur-2xl" />
            <Eye className="relative size-9 text-red-500 mb-6" />
            <h3 className="relative text-2xl font-bold mb-4">Vizyonumuz</h3>
            <p className="relative text-gray-300 leading-relaxed text-lg">
              Yeni yatırımları hayata geçiren, mevcut enerji altyapılarını modernize ederek performansını yükselten ve sürdürülebilir çözümlerle sektörde yön veren öncü bir mühendislik firması olmak.
            </p>
          </motion.div>
          <motion.div {...reveal} className="rounded-3xl bg-red-50 border border-red-100 p-10">
            <Target className="size-9 text-red-700 mb-6" />
            <h3 className="text-2xl font-bold text-gray-950 mb-4">Misyonumuz</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Müşterilerimizin hem yeni yatırımlarını en doğru şekilde hayata geçirmek hem de mevcut tesislerini daha verimli, güvenli ve sürdürülebilir hale getirmek için güçlü mühendislik, kaliteli uygulama ve sürekli iyileştirme anlayışıyla hizmet sunmak.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
