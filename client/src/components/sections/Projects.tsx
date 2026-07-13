import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FolderGit2 } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack application built with React, Node.js, and PostgreSQL. Features real-time data processing and a responsive dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "https://github.com/poojayadav/project-alpha",
    live: "https://project-alpha.vercel.app",
  },
  {
    title: "Rust CLI Tool",
    description: "A command-line utility in Rust for efficient file processing and analysis. Focus on performance and memory safety.",
    tags: ["Rust", "CLI", "Systems Programming"],
    github: "https://github.com/poojayadav/rust-cli",
  },
  {
    title: "System Design Library",
    description: "A curated collection of system design patterns, architectures, and implementations in Java and Python.",
    tags: ["Java", "Python", "System Design", "Distributed Systems"],
    github: "https://github.com/poojayadav/system-design",
  },
];

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Things I've built
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <FolderGit2 className="size-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-4" /> Code
                  </a>
                </Button>
                {project.live && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4" /> Live
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
