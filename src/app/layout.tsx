import type React from "react"
import { CartProvider } from "@/lib/cart-context"
import { ThemeProvider } from "@/lib/theme-provider"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Food Delivery App",
  description: "Order delicious food from our restaurant",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
