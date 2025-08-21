export default function ExperiencePage() {
    const experiences = [
      {
        title: "Software Engineering Intern",
        company: "Budget Plus Services Limited",
        date: "2023 – 2024",
        description:
          "Developed a cross-organisational application to manage inventory using HTML, CSS and JavaScript.",
      },
      {
        title: "Data Science Professional Certificate",
        company: "IBM (with Honours)",
        date: "2022",
        description:
          "Completed professional-level training in Python, data analysis and machine learning.",
      },
      {
        title: "Tutor",
        company: "Freelance",
        date: "2022 – Present",
        description:
          "Over 800 hours of tutoring in computer science, maths and science.",
      },
    ];
  
    return (
      <section className="relative max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Experience</h2>
        <div className="relative border-l-2 border-blue-200 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Timeline Dot */}
              <span className="absolute -left-4 top-0 w-3 h-3 bg-blue-600 rounded-full border border-white"></span>
              
              <h3 className="text-xl font-semibold text-black">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} ({exp.date})</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  