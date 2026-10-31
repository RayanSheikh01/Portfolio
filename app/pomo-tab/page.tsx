import Link from "next/link"

export const metadata = {
  title: "Pomo Tab | Rayan Sheikh",
  description:
    "A calm new tab with clock, weather, prayer times, calendar and focus sounds, plus a Pomodoro timer with your Todoist tasks.",
}

const features = [
  {
    key: "new tab",
    items: [
      "Clock and date over a daily landscape photo",
      "Local weather, prayer times and today's calendar",
      "Search, a quote of the day and ambient focus sounds",
    ],
  },
  {
    key: "pomo page",
    items: [
      "Pomodoro timer that keeps running when the tab is closed",
      "Today's and overdue Todoist tasks in P1 to P4 columns",
      "Pomodoro estimates per task and a pop-out timer window",
    ],
  },
  {
    key: "privacy",
    items: [
      "Everything is stored in your own browser",
      "No account, no server and no tracking",
      "Todoist, Google Calendar and location are all optional",
    ],
  },
]

const tech = ["Chrome Extension", "Manifest V3", "JavaScript", "Web Audio", "Todoist API", "Google Calendar API"]

export default function PomoTabPage() {
  return (
    <div className="pt-16">
      <p className="font-mono text-sm text-[#8b939e]">
        <span className="text-[#f5a524]">&#36;</span> cat ~/projects/pomo-tab/README
      </p>
      <div className="mt-3 flex items-center gap-4">
        <img src="/pomo-tab/icon.png" alt="" width={48} height={48} className="h-12 w-12" />
        <h1 className="font-mono text-4xl font-semibold text-[#e6e8eb]">Pomo Tab</h1>
      </div>
      <p className="mt-4 max-w-2xl text-[#8b939e] leading-relaxed">
        A Chrome extension that turns every new tab into a calm, minimal start page, with a
        Pomodoro timer and your Todoist tasks one click away.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="border border-[#23272f] bg-[#161a20] px-2.5 py-1 font-mono text-xs text-[#8b939e]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          { src: "/pomo-tab/home.png", alt: "Pomo Tab new tab page with clock, weather and prayer times" },
          { src: "/pomo-tab/pomo.png", alt: "Pomo page with timer and Todoist task columns" },
        ].map((s) => (
          <div key={s.src} className="overflow-hidden border border-[#23272f] bg-[#101216]">
            <img src={s.src} alt={s.alt} className="w-full" />
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <section key={f.key} className="border border-[#23272f] bg-[#101216] p-6">
            <h2 className="font-mono text-sm text-[#f5a524]">{`// ${f.key}`}</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#8b939e]">
              {f.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-mono text-[#f5a524]">-</span>
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Link
        href="/pomo-tab/privacy"
        className="mt-10 inline-block font-mono text-sm text-[#f5a524] hover:underline"
      >
        privacy policy
      </Link>
    </div>
  )
}
