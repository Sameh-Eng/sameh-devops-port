import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, MessageCircle, Mail } from "lucide-react";

const contactData = [
  {
    platform: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sameh-reda-170911339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    description: "Professional networking and career updates",
    color: "hover:text-blue-500"
  },
  {
    platform: "GitHub",
    icon: Github,
    url: "https://github.com/Sameh-Eng",
    description: "Code repositories and open source contributions",
    color: "hover:text-white"
  },
  {
    platform: "Instagram", 
    icon: Instagram,
    url: "https://www.instagram.com/sam007.7?igsh=dXBhNXB6bjdybjBj&utm_source=qr",
    description: "Behind the scenes and personal updates",
    color: "hover:text-pink-500"
  },
  {
    platform: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/qr/4QWSOPI7DM6OM1",
    description: "Direct messaging for quick conversations",
    color: "hover:text-green-500"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next DevOps project? Let's discuss how we can build something amazing together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactData.map((contact, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-accent transition-all duration-500 hover:scale-105 group cursor-pointer"
                onClick={() => window.open(contact.url, '_blank')}
              >
                <CardContent className="p-8 text-center">
                  <contact.icon className={`h-12 w-12 mx-auto mb-4 text-muted-foreground transition-all duration-300 group-hover:scale-110 ${contact.color}`} />
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {contact.platform}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="bg-gradient-card border-border/50 shadow-card max-w-md mx-auto">
              <CardContent className="p-8">
                <Mail className="h-16 w-16 mx-auto mb-6 text-primary" />
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Ready to Start a Project?
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  I'm always interested in discussing new opportunities and challenging projects.
                </p>
                
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-primary transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('mailto:sameh.reda@msa.edu.eg', '_blank')}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;