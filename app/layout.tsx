import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _figtree = Figtree({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "aicofounder.com",
  description: "let's make something people actually want",
  generator: "aicofounder.com",
  icons: {
    icon: "/logotab.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
