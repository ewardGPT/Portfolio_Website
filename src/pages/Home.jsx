import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ContactSection } from "@/components/ContactSection";
import{Footer} from "@/components/Footer"

export const Home = () => {
    
    return(
     <div className="relative z-10 min-h-screen bg-background text-foreground overflow-x-hidden overflow-y-auto">
        {/* Theme Toggle*/}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

    </div>
    );
};