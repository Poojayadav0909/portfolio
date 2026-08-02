import { AnimatedSection } from "@/components/AnimatedSection";
import typescriptIcon from "../../../public/language/typescript.png";
import rustIcon from "../../../public/language/rust.png";
import fastapiIcon from "../../../public/language/fastapi.png";
import grpcIcon from "../../../public/language/grpc.png";
import huggingFaceIcon from "../../../public/language/HuggingFaceSuite.png";
import nodejsIcon from "../../../public/language/nodejs.png";
import reactjsIcon from "../../../public/language/reactjs.png";
import kafkaIcon from "../../../public/language/kafka.png";
import dsaIcon from "../../../public/language/dsa.png";
import redisIcon from "../../../public/language/redis.png";
import systemDesignIcon from "../../../public/language/systemdesign.png";
import kubernetesIcon from "../../../public/language/kubernetes.png";
import dockerIcon from "../../../public/language/docker.png";
import polarsIcon from "../../../public/language/polars.png";
import pythonIcon from "../../../public/language/python.png";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "Rust", "Python", "Polars"],
  },
  {
    title: "Frameworks & Protocols",
    skills: ["React", "Node.js", "FastAPI", "gRPC", "Kafka"],
  },
  {
    title: "Tools & AI",
    skills: ["Hugging Face Suite", "Redis", "Docker", "Kubernetes"],
  },
  {
    title: "Concepts",
    skills: ["System Design", "DSA"],
  },
];

const skillIcons: { [key: string]: string } = {
  "TypeScript": typescriptIcon,
  "Rust": rustIcon,
  "FastAPI": fastapiIcon,
  "gRPC": grpcIcon,
  "Hugging Face Suite": huggingFaceIcon,
  "Node.js": nodejsIcon,
  "React": reactjsIcon,
  "Kafka": kafkaIcon,
  "DSA": dsaIcon,
  "Redis": redisIcon,
  "System Design": systemDesignIcon,
  "Kubernetes": kubernetesIcon,
  "Docker": dockerIcon,
  "Polars": polarsIcon,
  "Python": pythonIcon,
};

export function Skills() {
  return (
    <AnimatedSection id="skills" className="scroll-mt-16">
      <h2 className="text-xl font-bold uppercase tracking-widest text-white agent-target p-1 rounded inline-block">Tech Stack</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700/50 hover:bg-zinc-900/10 transition-colors space-y-4 agent-target"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const iconPath = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800/80 bg-zinc-900/20 hover:border-indigo-500/50 transition-colors text-sm text-zinc-300 select-none agent-target"
                  >
                    {iconPath && (
                      <img
                        src={iconPath}
                        alt={`${skill} icon`}
                        className="size-4 object-contain rounded-sm"
                      />
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
