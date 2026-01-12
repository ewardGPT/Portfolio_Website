import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Judge Game",
    description:
      "Architected a modular AI courtroom simulation using LLM integration and encrypted data pipelines. Implemented scoring algorithms and secure case performance evaluation.",
    tags: ["Python", "TensorFlow", "Flask"],
    image: `${import.meta.env.BASE_URL}projects/AI_game_photo.png`,
    githubURL: "https://github.com/ewardGPT/AI-Judge-Game",
  },
  {
    id: 2,
    title: "Arch Setup",
    description:
      "Production-ready Arch Linux deployment with automated security hardening, performance optimization, and comprehensive system configuration for Hyperland workstation environments.",
    tags: ["Bash", "Linux", "Arch"],
    image: `${import.meta.env.BASE_URL}projects/Arch_Setup.jpg`,
    githubURL:
      "https://github.com/ewardGPT/OptiPlex-9020-Revive-Arch-Linux-Hyperland-Workstation-Build",
  },
  {
    id: 3,
    title: "Manhunt Roblox Game",
    description:
      "Led full-stack game development managing distributed systems, real-time multiplayer architecture, and end-to-end technical implementation from concept to deployment.",
    tags: ["Roblox", "Lua", "Game Development"],
    image: `${import.meta.env.BASE_URL}projects/Roblox_Game.png`,
  },
  {
    id: 4,
    title: "Home Cloud Observability Platform",
    description:
      "Architected production-grade observability stack using Prometheus, Grafana, and Kubernetes on Proxmox VMs. Automated monitoring for 20+ services with real-time alerting and distributed metrics collection.",
    tags: ["Docker", "Prometheus", "VM", "Grafana", "Kubernetes", "Linux"],
    image: `${import.meta.env.BASE_URL}projects/pve_grafana.png`,
    githubURL: "https://github.com/ewardGPT/home-cloud-observability",
  },
];

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 relative scroll-mt-24"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Production-grade systems demonstrating cloud architecture, distributed systems, and AI integration
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs border border-border 
                         transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 
                         hover:-translate-y-2 hover:border-primary/50 flex flex-col"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent 
                               opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full
                                 bg-secondary text-foreground
                                 border border-border
                                 hover:border-primary hover:text-primary
                                 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex items-center gap-4">
                  {project.demoURL && (
                    <a
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary 
                                 hover:underline hover:gap-3 transition-all duration-300"
                    >
                      View Live <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubURL && (
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 
                                 hover:text-primary hover:gap-3 transition-all duration-300"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
