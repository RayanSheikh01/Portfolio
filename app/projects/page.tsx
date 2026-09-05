import ProjectCard from "@/components/ProjectCard"

export const metadata = {
  title: "Projects | Rayan Sheikh",
  description: "Security engineering, threat intelligence and offensive security projects.",
}

const security = [
  {
    title: "Global Security Monitor",
    description:
      "Threat intelligence dashboard that ingests worldwide IP abuse reports and surfaces high-risk regions and attack trends. Live API ingestion with a simulation mode for offline analysis.",
    tech: ["Python", "Dash", "Plotly", "Pandas", "Threat Intel", "AbuseIPDB"],
    github: "https://github.com/RayanSheikh01/GlobalSecMonitor",
    image: "/GlobalMonitorImage.png",
  },
  {
    title: "Catch The Phish",
    description:
      "Security awareness trainer that drills users on real phishing indicators: spoofed sender domains, deceptive display names and urgency cues. Scored rounds with immediate feedback.",
    tech: ["React", "TypeScript", "TailwindCSS", "Phishing Analysis", "Security Awareness"],
    github: "https://github.com/RayanSheikh01/CatchThePhish",
    image: "/CTPscreenshot.png",
  },
  {
    title: "AI CTF Solver",
    description:
      "Autonomous agent that solves web and reconnaissance CTF challenges inside a sandboxed Docker container, then publishes its own write-up of the exploitation path.",
    tech: ["Python", "LangGraph", "Docker", "Offensive Security", "CTF", "pytest"],
    github: "https://github.com/RayanSheikh01/AICTFSolver",
  },
  {
    title: "RagProbe",
    description:
      "Evaluation harness for retrieval-augmented LLM systems. Injects counterfactual facts into the corpus so a correct answer can only come from retrieval, never pretraining, then scores retrieval rank, answer correctness and groundedness. A separate judge model rules on entailment to avoid self-grading bias.",
    tech: ["Python", "RAG Evaluation", "LLM-as-Judge", "Counterfactual Probes", "NumPy"],
    github: "https://github.com/RayanSheikh01/RagProbe",
  },
]

const other = [
  {
    title: "UK Fuel Dashboard",
    description:
      "Data pipeline and dashboard tracking UK fuel prices from public retailer feeds, with cleaning, aggregation and regional comparison.",
    tech: ["Python", "Data Engineering", "Dashboards"],
    github: "https://github.com/RayanSheikh01/UKFuelDashboard",
    image: "/UKFuelDashboard.png",
  },
  {
    title: "Weighted Blackjack Simulator",
    description:
      "Monte Carlo simulation of blackjack strategies under weighted deck conditions, used to model expected value across thousands of hands.",
    tech: ["Python", "Jupyter", "Monte Carlo"],
    github: "https://github.com/RayanSheikh01/WeightedBlackjackSimulator",
    image: "/WeightedBlackjackSimImage.png",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <p className="font-mono text-sm text-[#8b939e]">
        <span className="text-[#f5a524]">&#36;</span> ls ~/projects
      </p>
      <h1 className="mt-3 font-mono text-4xl font-semibold text-[#e6e8eb]">Projects</h1>
      <p className="mt-4 max-w-2xl text-[#8b939e] leading-relaxed">
        Security tooling built end to end: threat intelligence, phishing defence,
        offensive automation and AI system security.
      </p>

      <h2 className="mt-14 mb-6 font-mono text-sm text-[#f5a524]">{"// security"}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {security.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <h2 className="mt-16 mb-6 font-mono text-sm text-[#f5a524]">{"// other engineering"}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {other.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  )
}
