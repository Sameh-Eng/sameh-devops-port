import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;