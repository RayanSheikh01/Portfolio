interface ProjectProps {
    title: string
    description: string
    tech: string[]
    github: string
  }
  
  export default function ProjectCard({ title, description, tech, github }: ProjectProps) {
    return (
      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg hover:bg-blue-50 transform hover:scale-105 transition duration-300">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
        <a href={github} target="_blank" className="text-blue-600 hover:underline">
          View on GitHub
        </a>
      </div>
    )
  }
  