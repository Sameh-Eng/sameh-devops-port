import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Sameh Reda
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            DevOps Engineer & Cloud Infrastructure Specialist
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about automating workflows, building scalable cloud infrastructure, 
            and implementing robust CI/CD pipelines. I transform ideas into reliable, 
            high-performance systems that power modern applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open('https://drive.google.com/file/d/1n9s8Yvvdbm_cWofGfhteYxSv_2nerC4l/view?usp=sharing', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
          
          <div 
            className="animate-bounce cursor-pointer"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;