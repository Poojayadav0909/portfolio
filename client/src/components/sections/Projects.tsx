import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface Project {
  title: string;
  subtitle: string;
  github?: string;
  live?: string;
  description: ReactNode[];
}

const projects: Project[] = [
  {
    title: "VOKAI",
    subtitle: "Android-First Learning Companion",
    live: "https://docs-vokai.vercel.app",
    description: [
      "An Android-first learning companion designed for a focused, personalised 90-day coding journey.",
      "Combines a calm, distraction-free mobile learning experience with a robust backend.",
      "FastAPI backend that securely stores and manages a learner's profile, syllabus, daily check-ins, streaks, and progress garden.",
    ],
  },
  {
    title: "Rust Node Manager (rnm)",
    subtitle: "Rust Node Manager",
    github: "https://github.com/aadityakumarsah/rnm",
    description: [
      "A minimal Node.js version manager written in Rust to install, switch, and manage multiple Node.js versions.",
      "Fast & tiny — single ~1 MB Rust binary with absolutely no runtime dependencies.",
      "Per-project versions — switch dynamically per directory or globally via rnm.",
    ],
  },
  {
    title: "Clario",
    subtitle: "Your Daily Emotional Companion",
    github: "https://github.com/aadityakumarsah/Clario-Well",
    live: "https://docs-clario.pages.dev/",
    description: [
      "A full-stack mental wellness web app built for moments of anxiety, stress, or emotional fog.",
      "Listens, guides, and meets you where you are without judgment or generic advice.",
      "Weaves together AI conversation, biofeedback, and creative expression into a single daily ritual.",
    ],
  },
];

export function Projects() {
  return (
    <AnimatedSection id="projects" className="scroll-mt-16">
      <h2 className="text-xl font-bold uppercase tracking-widest text-white">Projects</h2>
      <div className="mt-8 space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-zinc-700/50 bg-zinc-900/20 p-5 hover:border-indigo-500/50 transition-colors agent-target"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <div>
                <h3 className="font-semibold leading-snug text-white">{project.title}</h3>
                <p className="mt-0.5 text-xs text-zinc-400">{project.subtitle}</p>
              </div>
              <div className="flex items-center gap-3 pt-0.5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    Docs
                    <ExternalLink className="ml-1 inline-block h-3.5 w-3.5 shrink-0 translate-y-0.5 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    <GithubIcon className="mr-1 inline-block h-3.5 w-3.5 shrink-0 translate-y-0.5" />
                    Code
                  </a>
                )}
              </div>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-normal text-zinc-300">
              {project.description.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
