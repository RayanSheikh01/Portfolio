const skillGroups = [
  {
    label: "security operations",
    skills: ["Threat Intelligence", "Log Analysis", "Phishing Analysis", "Incident Triage", "MITRE ATT&CK"],
  },
  {
    label: "offensive security",
    skills: ["Ethical Hacking", "Penetration Testing", "Vulnerability Assessment", "CTF (Web & Recon)", "Network Security"],
  },
  {
    label: "engineering",
    skills: ["Python", "Java", "SQL", "Linux Security", "Docker", "Secure Development"],
  },
];

export default function AboutPage() {
  return (
    <section className="pt-16 max-w-5xl">
      <p className="font-mono text-sm text-[#8b939e]">
        <span className="text-[#f5a524]">&#36;</span> whoami --verbose
      </p>
      <h1 className="mt-3 font-mono text-4xl font-semibold text-[#e6e8eb]">About</h1>

      <div className="mt-10 flex flex-col md:flex-row gap-12">
        <div className="flex-1 max-w-2xl space-y-5 text-[#8b939e] leading-relaxed">
                          <p>
          I&rsquo;m <span className="text-[#e6e8eb]">Rayan Sheikh</span>. I graduated with
          a First in Computer Science from the University of Westminster and I&rsquo;m now
          studying for an MSc in Cyber Security at{" "}
          <span className="text-[#e6e8eb]">King&rsquo;s College London</span>, heading
          towards security operations and detection engineering.
        </p>
        <p>
          Most of what I build is defensive. A <span className="text-[#e6e8eb]">global threat intelligence dashboard</span> that
          maps IP abuse reports to high-risk regions. A <span className="text-[#e6e8eb]">phishing awareness trainer</span> that
          teaches people to spot spoofed senders. An autonomous agent that works through
          web and reconnaissance CTF challenges inside a sandboxed container. Lately
          I&rsquo;ve turned to the <span className="text-[#e6e8eb]">security of AI systems</span> themselves, probing
          retrieval-augmented pipelines with counterfactual facts to see whether their
          answers are grounded in retrieved evidence or quietly fabricated - a
          natural follow-on from spending the summer building them.
        </p>
        <p>
          Recently, I completed an AI Engineer internship at{" "}
          <span className="text-[#e6e8eb]">FiveRivers Technologies</span>, working
          with their Lahore team on RemixLab, a time series analytics platform. I built its
          anomaly detection layer in PyTorch, scikit-learn and Prophet and a tuned
          Isolation Forest that lifted recall by 15% - then wrote twelve test cases
          to pin down how it behaved against point spikes, level shifts and variance
          bursts. Before that I interned at{" "}
          <span className="text-[#e6e8eb]">Budget Plus Services Limited</span>, building an
          internal inventory management application. I also hold the{" "}
          <span className="text-[#e6e8eb]">
            IBM Data Science Professional Certificate with honours
          </span>
          , which is where the Python and analysis habits I now point at security data came
          from.
        </p>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="h-56 w-56 overflow-hidden border border-[#23272f]">
              <img src="/profile.jpg" alt="Rayan Sheikh" className="h-full w-full object-cover" />
            </div>
            <span className="absolute -top-px -left-px h-5 w-5 border-t-2 border-l-2 border-[#f5a524]" />
            <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#f5a524]" />
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-8">
        {skillGroups.map((group) => (
          <div key={group.label} className="border-l border-[#23272f] pl-5">
            <h2 className="font-mono text-sm text-[#f5a524]">{"// "}{group.label}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#23272f] bg-[#101216] px-3 py-1 font-mono text-xs text-[#8b939e]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
