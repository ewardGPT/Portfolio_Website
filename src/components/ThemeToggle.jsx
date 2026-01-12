import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // If no saved preference, default to dark mode
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // Default to dark or use saved dark preference
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      if (!savedTheme) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full relative z-50",
        "bg-card border border-border transition-all duration-300",
        "hover:scale-110 hover:border-primary",
        "focus:outline-none"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-6 w-6 text-blue-600 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
