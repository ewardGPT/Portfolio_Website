import { Cloud, Code, Server, Wrench, Rocket, Brain } from "lucide-react";

// Group skills by architectural domain rather than percentages
const skillDomains = [
    {
        id: "cloud",
        name: "Cloud & Infrastructure",
        icon: Cloud,
        skills: ["AWS", "Azure", "Docker", "Linux", "Proxmox", "Infrastructure as Code"],
    },
    {
        id: "devops",
        name: "DevOps & Automation",
        icon: Rocket,
        skills: ["CI/CD Pipelines", "Git/GitHub", "Bash", "Monitoring (Prometheus/Grafana)", "Container Orchestration"],
    },
    {
        id: "development",
        name: "Full-Stack Development",
        icon: Code,
        skills: ["Python", "JavaScript", "React", "Node.js", "HTML/CSS", "RESTful APIs"],
    },
    {
        id: "systems",
        name: "Systems & Networking",
        icon: Server,
        skills: ["Linux Systems", "Networking Fundamentals", "VPN & DNS", "Security Hardening", "Load Balancing"],
    },
    {
        id: "ai",
        name: "AI & Machine Learning",
        icon: Brain,
        skills: ["LLM Integration", "TensorFlow", "AI System Design", "Prompt Engineering", "ML Operations"],
    },
    {
        id: "tools",
        name: "Tools & Technologies",
        icon: Wrench,
        skills: ["VS Code", "Cybersecurity Tools", "Database Management", "Version Control", "Agile/Scrum"],
    },
];

export const SkillsSection = () => {
    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30 scroll-mt-24"
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Technical <span className="text-primary">Expertise</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Focused on designing scalable cloud architectures, distributed systems, and production-grade infrastructure
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillDomains.map((domain) => {
                        const IconComponent = domain.icon;
                        return (
                            <div
                                key={domain.id}
                                className="bg-card p-6 rounded-lg shadow-xs card-hover border border-border group"
                            >
                                {/* Domain Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <IconComponent className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-lg">{domain.name}</h3>
                                </div>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2">
                                    {domain.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm rounded-full 
                                 bg-secondary/70 text-foreground
                                 border border-border/50
                                 hover:border-primary hover:text-primary
                                 transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Optional: Add a note about proficiency */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Continuously expanding expertise through hands-on projects and production deployments
                    </p>
                </div>
            </div>
        </section>
    );
};