const channels = [
  { key: "email", value: "rayansheikh121@gmail.com", href: "mailto:rayansheikh121@gmail.com" },
  { key: "linkedin", value: "linkedin.com/in/rayan-sheikh", href: "https://linkedin.com/in/rayan-sheikh" },
  { key: "github", value: "github.com/RayanSheikh01", href: "https://github.com/RayanSheikh01" },
];

export default function ContactPage() {
  return (
    <section className="pt-16 max-w-2xl">
      <p className="font-mono text-sm text-[#8b939e]">
        <span className="text-[#f5a524]">&#36;</span> cat contact.txt
      </p>
      <h1 className="mt-3 font-mono text-4xl font-semibold text-[#e6e8eb]">Get in touch</h1>
      <p className="mt-4 text-[#8b939e] leading-relaxed">
        Open to SOC analyst and security engineering roles, and happy to talk about any
        of the tooling on this site.
      </p>

      <dl className="mt-10 border border-[#23272f] bg-[#101216] divide-y divide-[#23272f]">
        {channels.map((c) => (
          <div key={c.key} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-5 py-4">
            <dt className="font-mono text-xs text-[#8b939e] sm:w-24">{c.key}</dt>
            <dd>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-mono text-sm text-[#e6e8eb] hover:text-[#f5a524] transition-colors"
              >
                {c.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
