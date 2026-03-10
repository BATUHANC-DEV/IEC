import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form gönderildi! Bu bir demo uygulamasıdır.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "Maslak Mahallesi, Ahi Evran Caddesi No:42/8 Sarıyer/İSTANBUL",
      gradient: "from-red-600 to-red-800",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 (212) 123 45 67",
      gradient: "from-black to-gray-800",
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@iecmuhendislik.com",
      gradient: "from-red-700 to-black",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      gradient: "from-red-800 to-black",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-50 to-gray-50 rounded-full border border-red-100">
            <span className="text-red-700 text-sm font-semibold">Bizimle İletişime Geçin</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 font-bold">
            İletişim
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapalım.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      <CardContent className="flex items-start gap-5 p-8 relative">
                        <div className={`size-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <Icon className="size-8 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-2 text-gray-900 font-semibold text-lg">{info.title}</h3>
                          <p className="text-gray-600">{info.content}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-100 to-transparent rounded-bl-full opacity-50"></div>
              <CardHeader className="relative">
                <CardTitle className="text-3xl">Teklif Formu</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 border-2 border-gray-200 focus:border-red-600 transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14 border-2 border-gray-200 focus:border-red-600 transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Telefon Numaranız"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 border-2 border-gray-200 focus:border-red-600 transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Mesajınız"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-2 border-gray-200 focus:border-red-600 transition-colors resize-none rounded-xl"
                    />
                  </div>
                  <Button type="submit" className="w-full h-14 bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-900 text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group rounded-xl">
                    Gönder
                    <Send className="ml-2 size-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}