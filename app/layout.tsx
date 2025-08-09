import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "optional",
})
const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "optional",
})

export const metadata: Metadata = {
  title: "Japan Airlines Design",
  description: "Domestic and International pages",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${noto.className}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

