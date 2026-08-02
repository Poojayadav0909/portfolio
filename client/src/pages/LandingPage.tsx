import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Background } from "@/components/Background";
import { BackToTop } from "@/components/BackToTop";
import { Mail, MapPin } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {loading && (
        <div
          className="fixed inset-0 z-[200] bg-black pointer-events-none flex flex-col items-center justify-center gap-6"
          style={{ animation: "loader-fade .6s ease-out forwards", animationDelay: "1s" }}
        >
          <div className="size-24 rounded-full bg-indigo-500/20 blur-2xl animate-pulse" />
          <span className="text-zinc-400 font-mono text-sm inline-block animate-spin">pooja</span>
        </div>
      )}
      <Background />
      <main className="relative z-10 mx-auto min-h-screen max-w-3xl px-6 py-12 md:px-12 md:py-20 lg:py-24 space-y-24">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <BackToTop />
      <footer className="relative z-10 border-t border-zinc-800/80 py-10">
        <div className="mx-auto max-w-3xl px-6 md:px-12 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-300">
            <a
              href="mailto:poojaikrahi@gmail.com"
              className="flex items-center gap-2 hover:text-indigo-300 transition-colors"
            >
              <Mail className="size-4" /> poojaikrahi@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> Nepal
            </span>
            <div className="flex items-center gap-4 ml-auto">
              <a
                href="https://github.com/Poojayadav0909"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-300 transition-colors hover:scale-110 inline-block"
                aria-label="GitHub"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/pooja-yadav-07a2b42b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-300 transition-colors hover:scale-110 inline-block"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Pooja Yadav. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
