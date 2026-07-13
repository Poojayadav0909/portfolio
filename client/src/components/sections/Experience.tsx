import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "aiEcho",
    role: "Software Engineering Intern",
    period: "2024 — 2025",
    description: [
      "Contributed to AI-powered products across the full stack.",
      "Built and maintained backend services and REST APIs.",
      "Collaborated on system design and architecture decisions.",
    ],
  },
  {
    company: "Delta",
    role: "Software Development Intern",
    period: "2023 — 2024",
    description: [
      "Developed and shipped features for core platforms.",
      "Worked on scalable microservices and database optimization.",
      "Participated in code reviews and agile development cycles.",
    ],
  },
];

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Where I've worked and grown
        </p>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative md:pl-20">
                <div className="hidden md:flex absolute left-4 top-6 size-9 rounded-full bg-background border items-center justify-center -translate-x-1/2">
                  <Briefcase className="size-4 text-primary" />
                </div>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
