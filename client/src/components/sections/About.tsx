import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Server, BookOpen } from "lucide-react";

const stats = [
  { icon: Code2, label: "Languages", value: "4+" },
  { icon: Server, label: "Projects", value: "10+" },
  { icon: Brain, label: "DSA Problems", value: "500+" },
  { icon: BookOpen, label: "System Design", value: "Deep Dive" },
];

export function About() {
  return (
    <AnimatedSection id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          A quick glance at my journey so far
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Software Engineer passionate about building scalable systems and delightful
              user experiences. My expertise spans the <strong>MERN stack</strong>,{" "}
              <strong>Java</strong>, <strong>Python</strong>, and <strong>system design</strong>.
            </p>
            <p>
              Currently exploring systems programming with <strong>Rust</strong>, I enjoy the full
              spectrum of development — from REST APIs and distributed systems to performant low-level code.
            </p>
            <p>
              Previously at <strong>aiEcho</strong> and <strong>Delta</strong>, I contributed to
              impactful projects across the stack.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <stat.icon className="size-6 text-primary" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
