import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Judge Game",
    description:
      "An AI-powered game that simulates a judge making decisions based on player inputs.",
    tags: ["Python", "TensorFlow", "Flask"],
    image: `${import.meta.env.BASE_URL}projects/AI_game_photo.png`,
    githubURL: "https://github.com/ewardGPT/AI-Judge-Game",
  },
  {
    id: 2,
    title: "Arch Setup",
    description:
      "A comprehensive guide and scripts for setting up Arch Linux with a focus on security and performance.",
    tags: ["Bash", "Linux", "Arch"],
    image: `${import.meta.env.BASE_URL}projects/Arch_Setup.jpg`,
    githubURL:
      "https://github.com/ewardGPT/OptiPlex-9020-Revive-Arch-Linux-Hyperland-Workstation-Build",
  },
  {
    id: 3,
    title: "Manhunt Roblox Game",
    description:
      "A multiplayer Roblox game where players engage in thrilling manhunt scenarios.",
    tags: ["Roblox", "Lua", "Game Development"],
    image: `${import.meta.env.BASE_URL}projects/Roblox_Game.png`,
  },
  {
    id: 4,
    title: "Home Cloud Observability Platform",
    description:
      "A production-style observability stack deployed on a Proxmox VM.",
    tags: ["Docker", "Prometheus", "VM", "Grafana", "Kubernetes", "Linux"],
    image: `${import.meta.env.BASE_URL}projects/pve_grafana.png`,
    githubURL: "https://github.com/ewardGPT/home-cloud-observability",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my notable projects that showcase my skills in software
          development, AI, and cybersecurity.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs border border-border card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full
                                 bg-secondary text-secondary-foreground
                                 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-auto flex items-center gap-4">
                  {project.demoURL && (
                    <a
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary
                                 transition-colors duration-300"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {project.githubURL && (
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary
                                 transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/ewardGPT" target="_blank">
            Check My GitHub for More Projects! <ArrowRight size={16} className="inline-block ml-1" />
          </a>

        </div>
      </div>
    </section>
  );
};
