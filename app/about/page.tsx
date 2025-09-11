export default function AboutPage() {
    const skills = [
      "Python",
      "Java",
      "SQL",
      "Cybersecurity",
      "Ethical Hacking",
      "Secure Software Development",
      "Network Security",
      "Vulnerability Assessment & Penetration Testing",
      "Linux System Security"
    ];
  
    return (
      <section className="pt-28 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 text-black">About Me</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Hi, I’m <span className="font-semibold">Rayan Sheikh</span> — a Final Year Computer Science student at the University of Westminster, passionate about cybersecurity, software engineering and building secure, impactful solutions. I’ve completed an internship at <span className="font-semibold">Budget Plus Services Limited</span>, where I developed an internal inventory management application, and I hold the <span className="font-semibold">IBM Data Science Professional Certificate with honours</span>, which strengthened my expertise in Python and analytical problem-solving.
          </p>
  
          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
  
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-200">
            <img
              src="/profile.jpg" // replace with your photo
              alt="Rayan Sheikh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  