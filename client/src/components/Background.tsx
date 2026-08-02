import { useEffect, useState } from "react";

function LeafParticle() {
  const [style] = useState(() => {
    const tx = (Math.random() * 160 - 80).toFixed(0);
    const ty = (Math.random() * -220 - 60).toFixed(0);
    const rot = (Math.random() * 540 - 270).toFixed(0);
    const duration = (Math.random() * 10 + 6).toFixed(2);
    return {
      left: `${Math.random() * 100}%`,
      bottom: "-2rem",
      "--tx": `${tx}px`,
      "--ty": `${ty}px`,
      "--rot": `${rot}deg`,
      "--duration": `${duration}s`,
    } as React.CSSProperties;
  });

  return (
    <span
      className="bg-leaf-particle block size-2.5 rounded-sm bg-indigo-400/30"
      style={style}
    />
  );
}

export function Background() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      setParticles((p) => [...p.slice(-14), Date.now()]);
    }, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute -top-40 -left-40 size-[30rem] rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 size-[28rem] rounded-full bg-amber-600/10 blur-[120px]" />
      <div className="absolute -bottom-40 left-1/3 size-[26rem] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute top-1/4 left-1/2 size-[20rem] rounded-full bg-indigo-500/10 blur-[120px]" />
      {particles.map((id) => (
        <LeafParticle key={id} />
      ))}
    </div>
  );
}
