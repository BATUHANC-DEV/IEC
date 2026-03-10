import { CheckCircle, Award, Users, TrendingUp, Target, Eye } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const stats = [
    { icon: Award, value: "10+", label: "Yıllık Tecrübe" },
    { icon: Users, value: "100+", label: "Tamamlanan Proje" },
    { icon: TrendingUp, value: "50+", label: "Mutlu Müşteri" },
  ];

  const features = [
    "Deneyimli ve Sertifikalı Mühendis Kadrosu",
    "7/24 Teknik Destek",
    "Yüksek Kaliteli Malzeme Kullanımı",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Main About Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-50 to-gray-50 rounded-full border border-red-100">
              <span className="text-red-700 text-sm font-semibold">Kurumsal Kimlik</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl mb-8 text-gray-900 leading-tight font-bold">
              Hakkımızda
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Şirketimiz, müşterilerimizin orta ve uzun vadeli büyüme hedeflerini merkeze alarak tüm yeni tesisleri için fizibilite, maliyet optimizasyonu, enerji verimliliği ile insan ve çevre odaklı sürdürülebilirlik ilkeleri ışığında planlar ve hayata geçirir. Mevcut tesisleri ise yalnızca korumakla yetinmez; güçlü proje disiplini ve sürekli gelişim anlayışıyla daha verimli, daha güvenli ve kesintisiz üretim sağlayan modern bir altyapıya dönüştürür.
            </p>

            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-red-50 hover:to-gray-50 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="size-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle className="size-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="size-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Icon className="size-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent mb-2 font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-red-500/20 to-black/20 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMGVuZ2luZWVyaW5nJTIwdGVhbXxlbnwxfHx8fDE3NzMxODA4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="IEC Elektrik Mühendislik"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vizyonumuz */}
          <motion.div
            className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-10 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="size-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Eye className="size-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-red-700 mb-6">Vizyonumuz</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Yeni yatırımları hayata geçiren, mevcut enerji altyapılarını modernize ederek performansını yükselten ve sürdürülebilir çözümlerle sektörde yön veren öncü bir mühendislik firması olmak.
            </p>
          </motion.div>

          {/* Misyonumuz */}
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="size-16 bg-gradient-to-br from-gray-700 to-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="size-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Müşterilerimizin hem yeni yatırımlarını en doğru şekilde hayata geçirmek hem de mevcut tesislerini daha verimli, güvenli ve sürdürülebilir hale getirmek için güçlü mühendislik, kaliteli uygulama ve sürekli iyileştirme anlayışıyla hizmet sunmak.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}