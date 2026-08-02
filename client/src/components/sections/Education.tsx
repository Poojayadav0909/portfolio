import { AnimatedSection } from "@/components/AnimatedSection";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Arniko College",
    degree: "High School (+2), Science Stream",
    location: "Biratnagar, Nepal",
    badge: "Graduated 2027",
  },
];

export function Education() {
  return (
    <AnimatedSection id="education" className="scroll-mt-16">
      <h2 className="flex items-center gap-3 text-xl font-bold uppercase tracking-widest text-white">
        <GraduationCap className="size-5 text-indigo-400" /> Education
      </h2>
      <div className="mt-8 space-y-4">
        {education.map((e) => (
          <div
            key={e.school}
            className="rounded-xl border-2 border-zinc-700/50 bg-zinc-900/20 p-6 hover:border-indigo-500/50 transition-colors"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold leading-snug text-white">{e.degree}</h3>
              <p className="text-sm text-zinc-300">
                {e.school}, {e.location}
              </p>
            </div>
            <span className="mt-4 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-indigo-400">
              {e.badge}
            </span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
