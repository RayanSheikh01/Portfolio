import ProjectCard from "@/components/ProjectCard"


export default function ProjectsPage() {
const projects = [
{
title: "UK Fuel Prices Dashboard",
description:
"Interactive UK Fuel Prices Dashboard built with Python, Dash and Bootstrap, visualising regional fuel trends with dynamic charts and KPIs.",
tech: ["Python", "Plotly Dash", "Bootstrap", "Pandas", "CSV"],
github: "https://github.com/RayanSheikh01/UKFuelDashboard",
image: "/UKFuelDashboard.png"
},
{
title: "Analysis of a Biased Dealer using Python and Q-Learning",
description:
"Python simulation to train a Q-learning agent that successfully learned to overcome a statistically biased Blackjack dealer, boosting the player's win rate from 37% to 45%.",
tech: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Q-Learning"],
github: "https://github.com/RayanSheikh01/WeightedBlackjackSimulator",
image: "/WeightedBlackjackSimImage.png"
},
{
title: "News Scraper",
description:
"GUI app using Python to fetch and display top stories from multiple news RSS feeds.",
tech: ["Python", "Tkinter"],
github: "https://github.com/RayanSheikh01/newsFeedParser",
image: "/UKFuelDashboard.png"
},
{title: "Employee Feedback Tracker",
  description: "Django-based web app created in a group project to monitor employee wellbeing using a traffic light system for quick insights.",
  tech: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/DigitalDaVinchi/SD_GRP_Health-check",
  image: "/EmployeeFeedbackTrackerScreenshot.png"
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