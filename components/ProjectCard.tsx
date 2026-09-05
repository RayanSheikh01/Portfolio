interface ProjectProps {
  title: string
  description: string
  tech: string[]
  github: string
  image?: string
}

export default function ProjectCard({ title, description, tech, github, image }: ProjectProps) {
  return (
    <article className="group flex flex-col border border-[#23272f] bg-[#101216] transition-colors hover:border-[#f5a524]/50">
      {image && (
        <div className="h-44 overflow-hidden border-b border-[#23272f]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-70 saturate-50 transition duration-300 group-hover:opacity-100 group-hover:saturate-100"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-mono text-lg font-medium text-[#e6e8eb]">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#8b939e]">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="border border-[#23272f] bg-[#161a20] px-2.5 py-1 font-mono text-xs text-[#8b939e]"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-mono text-sm text-[#f5a524] hover:underline"
        >
          view source
        </a>
      </div>
    </article>
  )
}
