import "@/app/globals.css"
import { Inter } from "next/font/google"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bloom & Brew - Plant-Filled Coffee Shop",
  description:
    "A modern, plant-filled coffee shop near campus, offering diverse drinks, snacks, and a vibrant community space.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}


import './globals.css'