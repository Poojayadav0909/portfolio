import me from "../../../public/me.png";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-16 flex flex-col items-center text-center">
      <img
        src={me}
        alt="Pooja Yadav"
        className="size-24 rounded-full border border-zinc-800 object-cover shadow-[0_0_40px_rgba(99,102,241,0.25)]"
      />
      <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-white">
        Pooja Yadav
      </h1>
      <h2 className="mt-4 text-2xl font-semibold text-white">
        15yo <span className="text-[#FF6600]">|</span> Core System Engineer (Rust)
      </h2>
      <p className="mt-4 text-base leading-relaxed text-zinc-300">
        learning Web3 sol(DeFi) <span className="text-[#FF6600]">|</span> Rust{" "}
        <span className="text-[#FF6600]">|</span> prev Intern @TD home decor
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        <a href="#projects" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          View Projects
        </a>
        <a href="#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
