import { AnimatedSection } from "@/components/AnimatedSection";

const experiences = [
  {
    company: "TD Home Decor",
    role: "Intern",
    period: "Jan 2026 - May 2026",
    description: [
      "Search for leads for the business.",
      "Build websites for the leads.",
    ],
  },
];

export function Experience() {
  return (
    <AnimatedSection id="experience" className="scroll-mt-16">
      <h2 className="text-xl font-bold uppercase tracking-widest text-white">Experience</h2>
      <div className="relative mt-8 space-y-8 pl-8">
        <div className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-indigo-500/70 via-zinc-700/60 to-zinc-700/60" />
        {experiences.map((exp) => (
          <div key={exp.company} className="relative">
            <div className="absolute -left-8 top-[22px] h-[11px] w-[11px] rounded-full border-2 border-indigo-500 bg-black" />
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/20 p-5 hover:border-indigo-500/50 transition-colors agent-target">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold leading-snug text-white">
                  {exp.role} <span className="text-zinc-300">· {exp.company}</span>
                </h3>
                <span className="shrink-0 pt-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-normal text-zinc-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
