import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Services } from "@/app/components/Services";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
