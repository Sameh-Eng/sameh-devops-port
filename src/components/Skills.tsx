import { Card, CardContent } from "@/components/ui/card";
import { Cloud, GitBranch, Container, Monitor, Shield, Zap } from "lucide-react";

const skillsData = [
  {
    category: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    color: "text-primary"
  },
  {
    category: "CI/CD & Automation",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"],
    color: "text-accent"
  },
  {
    category: "Containerization",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Helm", "OpenShift"],
    color: "text-primary-glow"
  },
  {
    category: "Monitoring & Logging",
    icon: Monitor,
    skills: ["Prometheus", "Grafana", "ELK Stack", "DataDog"],
    color: "text-accent"
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    skills: ["HashiCorp Vault", "OWASP", "SAST/DAST", "Compliance"],
    color: "text-primary"
  },
  {
    category: "Infrastructure as Code",
    icon: Zap,
    skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
    color: "text-accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive DevOps skills covering the entire software delivery lifecycle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-accent transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-8 text-center">
                <skillGroup.icon className={`h-12 w-12 mx-auto mb-6 ${skillGroup.color} transition-transform duration-300 group-hover:scale-110`} />
                
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;