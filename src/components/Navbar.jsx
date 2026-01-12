import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NavItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect which section is in view
      const sections = NavItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpened(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary flex items-center relative z-50 hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Ervin Ward</span>{" "}
              Portfolio
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {NavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative text-foreground/80 transition-all duration-300",
                  "hover:text-primary",
                  activeSection === item.id && "text-primary font-semibold"
                )}
              >
                {item.name}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right side controls - Mobile menu toggle + Theme toggle */}
          <div className="flex items-center gap-2 relative z-50">
            {/* Theme toggle - always visible */}
            <ThemeToggle />

            {/* Mobile menu toggle - only visible on mobile */}
            <button
              onClick={() => setIsMenuOpened((prev) => !prev)}
              className="md:hidden p-2 rounded-md text-foreground hover:scale-110 transition-transform duration-300"
              aria-label={isMenuOpened ? "Close menu" : "Open menu"}
            >
              {isMenuOpened ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - render outside navbar to avoid positioning issues */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-lg z-40 md:hidden",
          "flex flex-col items-center justify-center transition-all duration-300",
          isMenuOpened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {NavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors duration-300 text-center",
                activeSection === item.id && "text-primary font-semibold scale-110"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
