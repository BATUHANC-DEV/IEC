import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "motion/react";
import { Link } from "react-router";

export function Projects() {
  const projects = [
    {
      title: "Pano Sistemleri",
      category: "Pano Üretimi",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjB3b3JrZXJ8ZW58MXx8fHwxNzQxMTg1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzQxMTg1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGNvbnRyb2x8ZW58MXx8fHwxNzY5ODg3NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-50 to-gray-50 rounded-full border border-red-100">
            <span className="text-red-700 text-sm font-semibold">Referanslarımız</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 font-bold">
            Projelerimiz
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Gerçekleştirdiğimiz başarılı projelerden bazıları
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const cardContent = (
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 h-full bg-white">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-white text-red-600 border-0 shadow-lg">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 text-gray-900 font-semibold group-hover:text-red-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.link ? (
                  <Link to={project.link} className="block cursor-pointer">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}