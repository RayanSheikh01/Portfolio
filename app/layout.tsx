import "./globals.css"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/next"

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
})

export const metadata = {
  title: "Rayan Sheikh | Cyber Security",
  description:
    "Cyber security analyst focused on threat detection, phishing analysis and security tooling.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#08090b] text-[#e6e8eb]">
        <Navbar />
        <main className="relative z-10 flex-grow container mx-auto px-6 pb-20">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}
