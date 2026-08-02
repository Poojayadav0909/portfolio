import { AnimatedSection } from "@/components/AnimatedSection";
import clarioImage from "../../../public/clario.png";

export function About() {
  return (
    <AnimatedSection id="about" className="scroll-mt-16">
      <h2 className="text-xl font-bold uppercase tracking-widest text-white agent-target p-1 rounded inline-block">About</h2>
      <p className="mt-4 leading-relaxed text-zinc-300">
        I'm a Software Engineer passionate about building scalable systems and delightful
        user experiences. My expertise spans the <strong className="text-white">MERN stack</strong>,{" "}
        <strong className="text-white">Java</strong>, <strong className="text-white">Python</strong>,
        and <strong className="text-white">system design</strong>.
      </p>
      <p className="mt-4 leading-relaxed text-zinc-300">
        Currently working on systems programming with <strong className="text-white">Rust</strong>, I enjoy
        the full spectrum of development — from REST APIs to performant
        low-level code.
      </p>
      <p className="mt-4 leading-relaxed text-zinc-300">
        Previously interned at <strong className="text-white">TD Home Decor</strong>, where I
        searched for leads and built websites for them.
      </p>
      <a
        href="https://docs-clario.pages.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-zinc-700/50 bg-zinc-900/20 p-5 hover:border-indigo-500/50 transition-colors group"
      >
        <img
          src={clarioImage}
          alt="Clario"
          className="size-20 shrink-0 rounded-xl object-cover border border-zinc-700/50"
        />
        <p className="leading-relaxed text-zinc-300">
          I've built and maintained <strong className="text-white">Clario</strong>, serving{" "}
          <strong className="text-white">5,000+ active users</strong>. My expertise lies at the
          intersection of robust backend infrastructure and delightful user experiences.
        </p>
      </a>
    </AnimatedSection>
  );
}
