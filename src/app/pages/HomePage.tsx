import { SiteShell } from "@/app/components/SiteShell";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Services } from "@/app/components/Services";
import { Projects } from "@/app/components/Projects";
import { Process } from "@/app/components/Process";
import { Contact } from "@/app/components/Contact";

export function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Contact />
    </SiteShell>
  );
}
