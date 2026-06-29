import { TechStack } from "./TechStack";
import { SoftSkills } from "./SoftSkills";
import { Certifications } from "./Certifications";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Index() {


  return (
    <div className=" bg-background text-foreground relative noise-overlay">
      <Navbar />
      <Hero />
      <SoftSkills />
      <Certifications />
      <TechStack />

      <Footer />
    </div>

  );
}
