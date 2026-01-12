import { Code, User, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 relative scroll-mt-24"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Cloud & AI Systems <span className="text-primary">Architect</span>
            </h3>

            <p className="text-muted-foreground">
              I'm an Applied Computer Science student with a concentration in
              Artificial Intelligence, focused on building practical and
              well-engineered software. My interests include cybersecurity,
              full-stack development, and applied AI, and I enjoy working on
              projects that emphasize performance, security, and clean system
              design.
            </p>

            <p className="text-muted-foreground">
              Outside of coursework, I spend my time designing production-style
              infrastructure projects like <strong>observability platforms</strong> and <strong>hardened security gateways</strong>,
              strengthening my fundamentals in cloud architecture, distributed systems, and Infrastructure as Code.
              I'm driven by building resilient, automated solutions that scale.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* INTERNAL ROUTE — MUST use Link */}
              <Link to="/resume" className="cosmic-button">
                View Resume
              </Link>

              {/* STATIC FILE — OK to use <a> */}
              <a
                href="/resume/Ervin_Ward_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary
                           hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 gap-6">
            {/* Cloud Architecture */}
            <div className="gradient-border p-6 card-hover bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Architecture</h4>
                  <p className="text-muted-foreground">
                    Design and deploy production-grade cloud infrastructure using
                    container orchestration, Infrastructure as Code, and automated
                    CI/CD pipelines on Linux-based environments.
                  </p>
                </div>
              </div>
            </div>

            {/* IT / User Support */}
            <div className="gradient-border p-6 card-hover bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">IT / User Support</h4>
                  <p className="text-muted-foreground">
                    Provided technical support by troubleshooting system issues,
                    resolving access problems, and ensuring smooth day-to-day
                    operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Led the design and development of a Roblox-based project,
                    managing game systems, coordinating testing, and making
                    technical and creative decisions from concept to deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
