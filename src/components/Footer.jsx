import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} ervinward.com. All rights reserved.
      </p>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
