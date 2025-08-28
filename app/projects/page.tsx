import ProjectCard from "@/components/ProjectCard"


export default function ProjectsPage() {
const projects = [
{
title: "Data Dashboard",
description:
"Built in Python with Plotly Dash to analyse launch records and predict landings.",
tech: ["Python", "Plotly Dash"],
github: "https://github.com/RayanSheikh01/"
},
{
title: "Inventory Management App",
description:
"Cross-organisation tool built with HTML, CSS and JavaScript during internship.",
tech: ["HTML", "CSS", "JavaScript"],
github: "https://github.com/RayanSheikh01/"
},
{
title: "News Scraper",
description:
"GUI app using Python to fetch and display top stories from multiple news RSS feeds.",
tech: ["Python", "Tkinter"],
github: "https://github.com/RayanSheikh01/newsFeedParser",
},
{title: "Employee Feedback Tracker",
  description: "Django-based web app created in a group project to monitor employee wellbeing using a traffic light system for quick insights.",
  tech: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/DigitalDaVinchi/SD_GRP_Health-check"
}
]


return (
<section className="pt-20">
<h2 className="text-3xl font-bold mb-6 text-black">Projects</h2>
<div className="grid md:grid-cols-2 gap-6">
{projects.map((p) => (
<ProjectCard key={p.title} {...p} />
))}
</div>
</section>
)
}