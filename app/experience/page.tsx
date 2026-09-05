type Entry = {
  title: string;
  company: string;
  location: string;
  date: string;
  kind: string;
  points: string[];
};

const experiences: Entry[] = [
  {
    title: "AI Engineer Intern",
    company: "FiveRivers Technologies",
    location: "Lahore, Pakistan",
    date: "May 2026 \u2013 July 2026",
    kind: "internship",
    points: [
      "Worked on RemixLab, a time series analytics platform, owning its anomaly detection layer.",
      "Built a tuned Isolation Forest alongside Prophet-based forecasting in PyTorch and scikit-learn, raising recall by 15% over baseline.",
      "Wrote a twelve-case test suite covering production failure modes: point spikes, level shifts and variance bursts.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Budget Plus Services LTD",
    location: "London, UK",
    date: "Sept 2023 \u2013 Aug 2024",
    kind: "internship",
    points: [
      "Developed an internal web application in HTML, CSS and JavaScript with cross-functional teams, cutting data entry errors by 15% and improving maintenance tracking.",
      "Led the migration of a legacy customer database from an on-premises server to the cloud, reducing system downtime by 40%.",
      "Collaborated with engineers to translate business requirements into delivery, improving project delivery timelines by 30%.",
    ],
  },
  {
    title: "Technology Experience Participant",
    company: "Bright Network",
    location: "Remote, UK",
    date: "June 2023",
    kind: "programme",
    points: [
      "Designed three tailored technical strategies for SME clients as part of a multidisciplinary team.",
      "Assessed each solution for feasibility and scalability across technical innovation, creativity, execution, design and business model.",
      "Attended professional development sessions on current technology and software engineering practice.",
    ],
  },
  {
    title: "Tutor",
    company: "Freelance",
    location: "Watford, UK",
    date: "2022 \u2013 Present",
    kind: "freelance",
    points: [
      "Over 800 hours tutoring computer science, maths and science across GCSE and A-level.",
      "Explaining technical material to people who do not yet have the vocabulary for it, which is the same skill security work demands when briefing non-technical stakeholders.",
    ],
  },
  {
    title: "Data Science Professional Certificate",
    company: "IBM on Coursera \u2014 with Honours",
    location: "Remote",
    date: "2022",
    kind: "certification",
    points: [
      "Built expertise in machine learning techniques including regression models, classification and tree ensembles, improving model accuracy on predictive tasks by 15%.",
      "Built an interactive Plotly Dash dashboard and trained a model predicting aircraft landing success at 98% accuracy for real-time decision-making.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: "PC & Mobile Solutions LTD",
    location: "Watford, UK",
    date: "Oct 2019",
    kind: "role",
    points: [
      "Diagnosed and resolved device hardware faults, replacing components to restore performance.",
      "Upgraded devices from HDD to SSD and to 16GB RAM, cutting boot times substantially.",
      "Tested and maintained stock quality across phones, laptops and tablets.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="pt-16 max-w-3xl">
      <p className="font-mono text-sm text-[#8b939e]">
        <span className="text-[#f5a524]">&#36;</span> history
      </p>
      <h1 className="mt-3 font-mono text-4xl font-semibold text-[#e6e8eb]">Experience</h1>
      <p className="mt-4 text-[#8b939e] leading-relaxed">
        Internships, freelance work and certifications, most recent first.
      </p>

      <ol className="mt-12 border-l border-[#23272f]">
        {experiences.map((exp) => (
          <li key={exp.title} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-[#f5a524]" />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[#8b939e]">
              <span>{exp.date}</span>
              <span className="text-[#23272f]">|</span>
              <span>{exp.location}</span>
              <span className="border border-[#23272f] bg-[#101216] px-2 py-0.5">
                {exp.kind}
              </span>
            </div>

            <h2 className="mt-3 font-mono text-lg text-[#e6e8eb]">{exp.title}</h2>
            <p className="mt-1 text-sm text-[#f5a524]">{exp.company}</p>

            <ul className="mt-4 space-y-2">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#8b939e]">
                  <span className="mt-[7px] h-1 w-1 flex-shrink-0 bg-[#f5a524]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
