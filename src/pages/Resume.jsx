import { Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Resume = () => {
  return (
    <section
      className="
        relative min-h-screen
        bg-background text-foreground
        py-28 px-4
        transition-colors duration-500
      "
    >
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto max-w-5xl space-y-20">

        {/* Header */}
        <header className="text-center space-y-6 opacity-0 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Ervin <span className="text-primary text-glow">Ward</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Applied Computer Science · Artificial Intelligence
          </p>

          <div className="flex justify-center gap-6 text-sm">
            <a
              href="mailto:eward27@gmu.edu"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/ewardGPT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Resume Card */}
        <div
          className="
            relative bg-card
            border border-border
            rounded-2xl
            p-10 md:p-14
            space-y-14
            shadow-xl
            opacity-0 animate-fade-in-delay-1
            transition-colors duration-500
          "
        >
          {/* Top Divider */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* Education */}
          <section className="opacity-0 animate-fade-in-delay-2">
            <h2 className="text-xl font-semibold mb-3">Education</h2>
            <p className="font-medium">George Mason University</p>
            <p className="text-sm text-muted-foreground">
              B.S. Applied Computer Science (Artificial Intelligence) · Expected Spring 2029
            </p>
          </section>

          {/* Skills */}
          <section className="opacity-0 animate-fade-in-delay-3">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                "Python",
                "JavaScript",
                "C++",
                "HTML & CSS",
                "Linux",
                "Docker",
                "Cybersecurity",
                "Networking",
                "Git",
                "React",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 rounded-md
                    bg-background border border-border
                    hover:border-primary hover:text-primary
                    transition-colors
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="opacity-0 animate-fade-in-delay-4">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>

            <div className="space-y-6 text-sm">
              <div className="group">
                <p className="font-medium group-hover:text-primary transition-colors">
                  Technical Staff Intern — FBLA
                </p>
                <p className="text-muted-foreground">
                  Provided technical support and backend assistance during leadership events
                  serving 1200+ attendees while maintaining high data accuracy.
                </p>
              </div>

              <div className="group">
                <p className="font-medium group-hover:text-primary transition-colors">
                  Intern — Science Museum of Virginia
                </p>
                <p className="text-muted-foreground">
                  Assisted with STEM exhibit technology, ticketing systems, and collaborated
                  on a coded planetarium project.
                </p>
              </div>

              <div className="group">
                <p className="font-medium group-hover:text-primary transition-colors">
                  Lead Lifeguard — Coastline Aquatics
                </p>
                <p className="text-muted-foreground">
                  Supervised teams, ensured safety operations, and coordinated digital
                  ticketing systems for large facilities.
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="opacity-0 animate-fade-in-delay-4">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>

            <div className="space-y-5 text-sm">
              <div className="card-hover p-4 rounded-lg border border-border">
                <p className="font-medium">AI Judge Game</p>
                <p className="text-muted-foreground">
                  AI-powered courtroom simulation using Ollama, encrypted data handling,
                  and scoring logic based on case performance.
                </p>
              </div>

              <div className="card-hover p-4 rounded-lg border border-border">
                <p className="font-medium">Secure Raspberry Pi Proxy & Ad-Block Gateway</p>
                <p className="text-muted-foreground">
                  Built a hardened DNS and VPN-based ad blocking gateway using Pi-hole,
                  WireGuard, and Unbound.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Download Button */}
        <div className="text-center opacity-0 animate-fade-in-delay-4">
          <a
            href="/resume/Ervin_Ward_Resume.pdf"
            className="cosmic-button inline-flex items-center gap-2 text-lg"
          >
            <Download className="h-5 w-5" />
            Download PDF Resume
          </a>
        </div>
      </div>
    </section>
  );
};
