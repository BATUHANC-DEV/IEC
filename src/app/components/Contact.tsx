import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { motion } from "motion/react";
import { SITE, whatsappLink } from "@/app/site";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [botField, setBotField] = useState("");

  // Form, Netlify Forms'a gönderilir (index.html'deki gizli "teklif" formu ile tanımlı).
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const body = new URLSearchParams({ "form-name": "teklif", "bot-field": botField, ...formData });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: SITE.city,
      gradient: "from-red-600 to-red-800",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: SITE.phoneDisplay,
      href: `tel:${SITE.phoneTel}`,
      gradient: "from-black to-gray-800",
    },
    {
      icon: Mail,
      title: "E-posta",
      content: SITE.email,
      href: `mailto:${SITE.email}`,
      gradient: "from-red-700 to-black",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "7/24 Hizmetinizdeyiz",
      gradient: "from-red-800 to-black",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">Bizimle İletişime Geçin</p>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-950 font-extrabold tracking-tight">
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
                          {info.href ? (
                            <a href={info.href} className="text-gray-600 hover:text-red-600 transition-colors after:absolute after:inset-0">
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.content}</p>
                          )}
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
                {status === "sent" ? (
                  <div className="text-center py-10" role="status">
                    <div className="size-16 mx-auto mb-6 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <Send className="size-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Talebiniz bize ulaştı</h3>
                    <p className="text-gray-600 mb-8">En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.</p>
                    <Button type="button" variant="outline" className="rounded-xl" onClick={() => setStatus("idle")}>
                      Yeni talep gönder
                    </Button>
                  </div>
                ) : (
                <form name="teklif" onSubmit={handleSubmit} className="space-y-6">
                  <p className="hidden">
                    <label>
                      Bu alanı boş bırakın: <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>
                  <div>
                    <Input
                      type="text"
                      name="name"
                      aria-label="Adınız Soyadınız"
                      autoComplete="name"
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
                      name="email"
                      aria-label="E-posta Adresiniz"
                      autoComplete="email"
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
                      name="phone"
                      aria-label="Telefon Numaranız"
                      autoComplete="tel"
                      placeholder="Telefon Numaranız"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 border-2 border-gray-200 focus:border-red-600 transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      aria-label="Mesajınız"
                      placeholder="Projeniz hakkında kısaca bilgi verin"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-2 border-gray-200 focus:border-red-600 transition-colors resize-none rounded-xl"
                    />
                  </div>
                  {status === "error" && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
                      Talebiniz şu anda gönderilemedi. Lütfen tekrar deneyin ya da bize{" "}
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">WhatsApp</a>{" "}
                      veya <a href={`mailto:${SITE.email}`} className="font-semibold underline">e-posta</a> ile ulaşın.
                    </div>
                  )}
                  <Button type="submit" disabled={status === "sending"} className="w-full h-14 bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-900 text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group rounded-xl disabled:opacity-70 disabled:hover:scale-100">
                    {status === "sending" ? "Gönderiliyor…" : "Gönder"}
                    <Send className="ml-2 size-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Paylaştığınız bilgiler yalnızca talebinize dönüş yapmak için kullanılır.
                  </p>
                </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
