import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function EnerjiDagitimSistemi() {
  const services = [
    "Güç dağıtım sistemleri kurulumu",
    "Reaktif güç kompanzasyonu",
    "Enerji kalite analizleri (harmonik, gerilim dalgalanmaları)",
    "Enerji verimliliği uygulamaları",
    "Yük yönetimi ve izleme sistemleri"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
            <span>Ana Sayfaya Dön</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enerji Dağıtım Sistemi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Enerji iletim, dağıtım ve güç yönetimi sistemlerinin tasarım ve optimizasyonunu gerçekleştiriyoruz. Güç kalitesi analizi, kompanzasyon çözümleri ve enerji verimliliği uygulamaları ile işletme performansı artırılır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1758758184258-fe390c93d1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZGlzdHJpYnV0aW9uJTIwdHJhbnNmb3JtZXJ8ZW58MXx8fHwxNzczMTgwODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Enerji Dağıtım Sistemi" 
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-50 to-gray-50 rounded-full border border-red-100">
              <span className="text-red-700 text-sm font-semibold">Hizmet Kapsamımız</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Enerji Yönetimi Çözümleri
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-red-200"
              >
                <div className="flex items-start gap-4">
                  <div className="size-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="size-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed pt-2">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Projeniz İçin Bizimle İletişime Geçin
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Enerji dağıtım ve yönetim sistemleri konusunda uzman ekibimiz size yardımcı olmaya hazır.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}