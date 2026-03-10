import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export function Services() {
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);
  const [isProjectManagementOpen, setIsProjectManagementOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isRenewableEnergyOpen, setIsRenewableEnergyOpen] = useState(false);

  const projectManagementServices = [
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
    "Güvenlik Sistemleri"
  ];

  const contractServices = [
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
    "Sismik Tedbirler"
  ];

  const engineeringServices = [
    {
      title: "Yüksek Gerilim İşletme Sorumluluğu",
      items: [
        "OG/YG tesislerin işletme sorumluluğunun üstlenilmesi",
        "İşletme güvenliği ve mevzuat uygunluğu",
        "Periyodik kontroller ve raporlama",
        "Enerji sürekliliği ve risk yönetimi"
      ]
    },
    {
      title: "Proje Müşavirlik Hizmetleri",
      items: [
        "Teknik danışmanlık ve proje değerlendirme",
        "Şartname ve proje uygunluk kontrolleri",
        "Uygulama süreci teknik denetimi",
        "Yatırım ve sistem optimizasyon danışmanlığı"
      ]
    },
    {
      title: "Demontaj & Montaj / Makine Kurulumu",
      items: [
        "Elektrik ekipmanlarının söküm ve yeniden montajı",
        "Endüstriyel makine enerji bağlantıları",
        "Hat ve kablo sistemlerinin taşınması",
        "Devreye alma öncesi mekanik & elektriksel kontroller"
      ]
    },
    {
      title: "Ölçme & Değerlendirme",
      items: [
        "Enerji analizleri ve güç kalitesi ölçümleri",
        "Termal kamera ve yük analizleri",
        "Topraklama ve izolasyon ölçümleri",
        "Performans ve verimlilik raporlaması"
      ]
    }
  ];

  const renewableEnergyServices = [
    "GES (Güneş Enerji Sistemleri) kurulumu",
    "Şebeke bağlantılı ve hibrit sistemler",
    "İnverter ve enerji depolama çözümleri",
    "Enerji üretim izleme sistemleri",
    "Fizibilite ve geri dönüş analizi"
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-50 to-gray-50 rounded-full border border-red-100">
            <span className="text-red-700 text-sm font-semibold">Uzmanlık Alanlarımız</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <img 
                src="https://images.unsplash.com/photo-1765883958852-786edf3ca505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzczMTgwODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Proje Yönetimi" 
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <div className="md:w-2/3">
              <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 font-bold">
                Proje Yönetimi
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed">
                Elektrik projeleri; keşif, mühendislik tasarımı, uygulama ve teslim süreçleri boyunca teknik standartlar ve iş güvenliği gereklilikleri doğrultusunda yönetilir. Zaman, maliyet ve kalite kontrolü entegre şekilde yürütülür.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project Management Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <button
              onClick={() => setIsProjectManagementOpen(!isProjectManagementOpen)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 group"
            >
              <span className="font-semibold text-lg">
                {isProjectManagementOpen ? 'Hizmetleri Gizle' : 'Proje Yönetim Hizmetleri'}
              </span>
              {isProjectManagementOpen ? (
                <ChevronUp className="size-5 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="size-5 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>

          <AnimatePresence>
            {isProjectManagementOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {projectManagementServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-red-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="size-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="size-5 text-white" />
                        </div>
                        <p className="text-gray-700 text-sm font-medium leading-snug pt-1">{service}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contract Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20"></div>
          
          {/* Contract Section Header */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/3"
              >
                <img 
                  src="https://images.unsplash.com/photo-1767514536570-83d70c024247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwZWxlY3RyaWNhbCUyMHdvcmt8ZW58MXx8fHwxNzczMTgwODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Taahhüt" 
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 font-bold">
                  Taahhüt
                </h2>
                <p className="text-gray-600 max-w-4xl text-xl leading-relaxed mb-10">
                  Alçak ve orta gerilim elektrik tesisleri için anahtar teslim taahhüt hizmetleri sunuyoruz. Keşif, projelendirme, malzeme temini, montaj, test ve devreye alma süreçleri teknik şartnamelere uygun olarak yürütülür.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setIsContractOpen(!isContractOpen)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 group"
              >
                <span className="font-semibold text-lg">
                  {isContractOpen ? 'Hizmetleri Gizle' : 'Hizmet Süreçleri'}
                </span>
                {isContractOpen ? (
                  <ChevronUp className="size-5 group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown className="size-5 group-hover:translate-y-1 transition-transform" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isContractOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {contractServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-red-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="size-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="size-5 text-white" />
                        </div>
                        <p className="text-gray-700 text-sm font-medium leading-snug pt-1">{service}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Engineering Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20"></div>
          
          {/* Engineering Section Header */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/3"
              >
                <img 
                  src="https://images.unsplash.com/photo-1769442263053-a60acf73f00a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwc3lzdGVtc3xlbnwxfHx8fDE3NzMxODA4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Mühendislik Hizmetleri" 
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl mb-8 text-gray-900 font-bold">
                  Mühendislik Hizmetleri
                </h2>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setIsEngineeringOpen(!isEngineeringOpen)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 group"
              >
                <span className="font-semibold text-lg">
                  {isEngineeringOpen ? 'Hizmetleri Gizle' : 'Hizmetlerimizi Keşfedin'}
                </span>
                {isEngineeringOpen ? (
                  <ChevronUp className="size-5 group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown className="size-5 group-hover:translate-y-1 transition-transform" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isEngineeringOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  {engineeringServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-red-200"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="size-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="size-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 pt-2">{service.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="size-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Renewable Energy Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20"></div>
          
          {/* Renewable Energy Section Header */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/3"
              >
                <img 
                  src="https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwcmVuZXdhYmxlJTIwZW5lргyfGVufDF8fHx8MTc3MzE4MDg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Yenilenebilir Enerji" 
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 font-bold">
                  Yenilenebilir Enerji
                </h2>
                <p className="text-gray-600 max-w-4xl text-xl leading-relaxed mb-8">
                  Güneş enerjisi başta olmak üzere yenilenebilir enerji sistemlerinin projelendirme, kurulum ve entegrasyon hizmetlerini sağlıyoruz. Şebeke bağlantılı ve hibrit sistem çözümleri uygulanmaktadır.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setIsRenewableEnergyOpen(!isRenewableEnergyOpen)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 group"
              >
                <span className="font-semibold text-lg">
                  {isRenewableEnergyOpen ? 'Hizmetleri Gizle' : 'Sürdürülebilir Enerji Sistemleri'}
                </span>
                {isRenewableEnergyOpen ? (
                  <ChevronUp className="size-5 group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown className="size-5 group-hover:translate-y-1 transition-transform" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isRenewableEnergyOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                  {renewableEnergyServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-red-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="size-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="size-5 text-white" />
                        </div>
                        <p className="text-gray-700 text-sm font-medium leading-snug pt-1">{service}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}