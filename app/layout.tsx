import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
title: "Rayan Sheikh | Portfolio",
description: "Computer Science Student Portfolio Website",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="flex flex-col min-h-screen bg-white text-black">

<Navbar />
<main className="flex-grow container mx-auto px-6 py-12">{children} <Analytics /></main>
<Footer />
</body>
</html>
)
}