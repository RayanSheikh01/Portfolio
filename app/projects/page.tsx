import ProjectCard from "@/components/ProjectCard"
import { image } from "framer-motion/client"


export default function ProjectsPage() {
const projects = [
{
title: "Global Security Monitor",
description:
"Built an interactive cybersecurity dashboard that visualises global IP abuse data through real-time charts and tables using Python Dash and Plotly.",
tech: ["Python", "Dash", "Plotly", "Pandas", "Bootstrap"],
github: "https://github.com/RayanSheikh01/GlobalSecMonitor",
image: "/GlobalMonitorImage.png"
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
title: "Catch The Phish – Phishing Detection Simulator",
description:
"Catch The Phish is an interactive React + TypeScript quiz that helps users identify phishing emails by testing their ability to spot suspicious senders, subjects and content.",
tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "JSON"],
github: "https://github.com/RayanSheikh01/CatchThePhish",
image: "/CTPscreenshot.png"

},
{title: "Employee Feedback Tracker",
  description: "Django-based web app created in a group project to monitor employee wellbeing using a traffic light system for quick insights. \n Note: As this is a university assessed project, the code is private.",
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