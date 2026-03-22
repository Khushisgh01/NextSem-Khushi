import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NextSem - Your Ultimate Student Companion",
  description: "NextSem is your all-in-one platform designed to empower students with essential tools and resources for academic success. From personalized study planners and interactive cheat sheets to engaging roadmaps and vibrant stickers, NextSem transforms the way you learn and stay organized. Whether you're tackling complex subjects or managing your daily tasks, NextSem is here to support your journey every step of the way.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}