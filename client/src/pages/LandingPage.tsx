import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackToTop } from "@/components/BackToTop";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function LandingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-bold text-lg hover:text-primary transition-colors">PY</a>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      </nav>
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
      <footer className="py-8 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Pooja Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}
