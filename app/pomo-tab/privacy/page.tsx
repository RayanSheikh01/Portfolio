export const metadata = {
  title: "Pomo Tab Privacy Policy | Rayan Sheikh",
  description: "How the Pomo Tab Chrome extension handles your data.",
}

const services = [
  { name: "Todoist", sent: "Your Todoist API token, and tasks you add or complete", why: "To list today's and overdue tasks, add tasks and mark them done" },
  { name: "Google Calendar", sent: "A Google access token (read-only calendar permission)", why: "To show today's events. Pomo Tab cannot change your calendar" },
  { name: "Calendar addresses you add", sent: "A request to the iCal address you entered", why: "To show today's events from that calendar" },
  { name: "Open-Meteo", sent: "Approximate coordinates, or the city name you typed", why: "Weather forecast and looking up a city" },
  { name: "BigDataCloud", sent: "Approximate coordinates", why: "To show the name of your town next to the weather" },
  { name: "AlAdhan", sent: "Approximate coordinates and your chosen calculation method", why: "Prayer times for your location" },
  { name: "Bing", sent: "A standard request for the photo of the day", why: "Background photos on the new tab" },
  { name: "Your search engine", sent: "Text you type in the search box", why: "Searches run through Chrome's default search engine, as if typed in the address bar" },
]

const h2 = "mt-12 mb-4 font-mono text-sm text-[#f5a524]"
const p = "mt-4 text-[#8b939e] leading-relaxed"
const a = "text-[#f5a524] hover:underline"

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 text-[#8b939e] leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="font-mono text-[#f5a524]">-</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PomoTabPrivacyPage() {
  return (
    <article className="pt-16 max-w-3xl">
      <p className="font-mono text-sm text-[#8b939e]">
        <span className="text-[#f5a524]">&#36;</span> cat ~/projects/pomo-tab/PRIVACY
      </p>
      <h1 className="mt-3 font-mono text-4xl font-semibold text-[#e6e8eb]">Pomo Tab Privacy Policy</h1>
      <p className="mt-2 font-mono text-xs text-[#8b939e]">Last updated: 31 October 2026</p>

      <p className={p}>
        Pomo Tab is a Chrome extension that replaces the new tab page with a clock, weather, prayer
        times, today&apos;s calendar and focus sounds, and adds a Pomodoro timer page that shows your
        Todoist tasks.
      </p>
      <p className="mt-6 border-l-2 border-[#f5a524] bg-[#101216] px-5 py-4 text-[#e6e8eb] leading-relaxed">
        <strong>In short:</strong> everything Pomo Tab stores stays in your own browser. The developer
        does not run a server, does not collect analytics, and never receives your data. The extension
        only talks directly to the services listed below, to show you your own information.
      </p>

      <h2 className={h2}>{"// what is stored, and where"}</h2>
      <p className="text-[#8b939e] leading-relaxed">
        Pomo Tab saves its settings and data in Chrome&apos;s local extension storage on your device.
        This includes your timer settings and history of focus time, your Todoist API token, your Google
        sign-in access token and email address, calendar addresses you enter, your weather and prayer
        location setting, and recent copies of your tasks, events, weather and prayer times so pages load
        quickly. None of this is synced or sent to the developer. Removing the extension deletes it.
      </p>

      <h2 className={h2}>{"// services pomo tab connects to"}</h2>
      <div className="border border-[#23272f] bg-[#101216] divide-y divide-[#23272f] text-sm">
        <div className="hidden md:grid grid-cols-[11rem_1fr_1fr] gap-6 px-5 py-3 font-mono text-xs text-[#8b939e]">
          <span>service</span>
          <span>what is sent</span>
          <span>why</span>
        </div>
        {services.map((s) => (
          <div key={s.name} className="grid gap-1 md:grid-cols-[11rem_1fr_1fr] md:gap-6 px-5 py-4">
            <span className="font-mono text-[#e6e8eb]">{s.name}</span>
            <span className="text-[#8b939e]">{s.sent}</span>
            <span className="text-[#8b939e]">{s.why}</span>
          </div>
        ))}
      </div>
      <p className={p}>
        Each of these services handles requests under its own privacy policy. Location is only used if
        you allow it when Chrome asks, or if you type a city in settings.
      </p>

      <h2 className={h2}>{"// what pomo tab does not do"}</h2>
      <List
        items={[
          "It does not sell, share or transfer your data to anyone.",
          "It does not use your data for advertising, credit checks or any purpose unrelated to showing it to you.",
          "It does not read the websites you visit or your browsing history.",
          "It does not load or run code from the internet. Focus sounds are generated inside the extension.",
        ]}
      />

      <h2 className={h2}>{"// google user data"}</h2>
      <p className="text-[#8b939e] leading-relaxed">
        Pomo Tab&apos;s use of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" className={a}>
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. It requests read-only access to your calendars, uses it
        only to display today&apos;s events to you, and keeps the access token in your browser. You can
        disconnect at any time in Pomo settings, or remove access from your Google Account under
        Security, Third-party connections.
      </p>

      <h2 className={h2}>{"// your choices"}</h2>
      <List
        items={[
          "Every connection is optional. Leave Todoist, Google or calendar addresses blank and those parts stay empty.",
          "Deny location and type a city instead, or leave both blank.",
          "Disconnect Google or clear your Todoist token in settings, or remove the extension to delete everything it stored.",
        ]}
      />

      <h2 className={h2}>{"// changes and contact"}</h2>
      <p className="text-[#8b939e] leading-relaxed">
        If this policy changes, the date at the top will change with it. Questions:{" "}
        <a href="mailto:rayansheikh121@gmail.com" className={a}>
          rayansheikh121@gmail.com
        </a>
        .
      </p>
    </article>
  )
}
