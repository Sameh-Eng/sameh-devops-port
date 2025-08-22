import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Kubernetes Cluster Automation",
    description: "Automated deployment and management of production Kubernetes clusters with monitoring, logging, and auto-scaling capabilities.",
    technologies: ["Kubernetes", "Terraform", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/Sameh-Eng",
    liveUrl: "#"
  },
  {
    title: "CI/CD Pipeline Framework",
    description: "Complete CI/CD pipeline solution with automated testing, security scanning, and multi-environment deployment strategies.",
    technologies: ["Jenkins", "Docker", "SonarQube", "Ansible"],
    githubUrl: "https://github.com/Sameh-Eng",
    liveUrl: "#"
  },
  {
    title: "Infrastructure as Code Templates",
    description: "Reusable Terraform modules for AWS infrastructure with best practices for security, scalability, and cost optimization.",
    technologies: ["Terraform", "AWS", "CloudWatch", "Route 53"],
    githubUrl: "https://github.com/Sameh-Eng",
    liveUrl: "#"
  },
  {
    title: "Monitoring & Alerting System",
    description: "Comprehensive monitoring solution with custom dashboards, alerting rules, and automated incident response workflows.",
    technologies: ["Prometheus", "Grafana", "AlertManager", "Slack API"],
    githubUrl: "https://github.com/Sameh-Eng",
    liveUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world DevOps solutions and infrastructure projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-accent transition-all duration-500 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  
                  {project.liveUrl !== "#" && (
                    <Button
                      size="sm"
                      className="bg-gradient-primary hover:shadow-primary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => window.open("https://github.com/Sameh-Eng", '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;