import { AnimatedSection } from "@/components/AnimatedSection";
import { Trophy } from "lucide-react";
import openaiLogo from "../../../public/openai.png";
import esewaLogo from "../../../public/esewa.png";
import wwfLogo from "../../../public/wwf.png";

const achievements = [
  {
    title: "Winner, Health Theme — OpenAI Build Week",
    detail: "50,000 participants",
    logos: [openaiLogo],
  },
  {
    title: "Winner, Nepal's biggest fintech eSewa x WWF Hackathon",
    detail: "Conservation & Fintech Integration",
    logos: [esewaLogo, wwfLogo],
  },
];

export function Achievements() {
  return (
    <AnimatedSection id="achievements" className="scroll-mt-16">
      <h2 className="flex items-center gap-3 text-xl font-bold uppercase tracking-widest text-white agent-target p-1 rounded inline-block">
        <Trophy className="size-5 text-indigo-400" /> Selected Achievements
      </h2>
      <ul className="mt-8 space-y-4">
        {achievements.map((a) => (
          <li
            key={a.title}
            className="flex items-start gap-4 text-zinc-300 p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700/50 hover:bg-zinc-900/10 transition-colors agent-target"
          >
            <div className="flex gap-1.5 shrink-0 mt-0.5">
              {a.logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="achievement logo"
                  className="size-7 object-contain rounded-md bg-zinc-900/40 p-0.5"
                />
              ))}
            </div>
            <div className="space-y-1">
              <span className="block font-semibold text-white text-sm sm:text-base leading-snug">
                {a.title}
              </span>
              {a.detail && (
                <span className="block text-xs text-zinc-400 font-mono tracking-wide">
                  {a.detail}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
