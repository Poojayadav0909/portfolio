import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Server, Database, Layers } from "lucide-react";
import type { ReactNode } from "react";

const skillCategories: { title: string; icon: ReactNode; skills: string[] }[] = [
  {
    title: "Languages", icon: <Code2 className="size-5" />,
    skills: ["Java", "TypeScript", "Python", "Rust", "JavaScript", "SQL"],
  },
  {
    title: "Frontend", icon: <Palette className="size-5" />,
    skills: ["React", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend", icon: <Server className="size-5" />,
    skills: ["Node.js", "Express", "Spring Boot", "Bun", "REST APIs"],
  },
  {
    title: "Databases & Tools", icon: <Database className="size-5" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git"],
  },
  {
    title: "Concepts", icon: <Layers className="size-5" />,
    skills: ["System Design", "Distributed Systems", "DSA", "OOP"],
  },
];

export function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Tools and technologies I work with
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-primary">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
