"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Home, Menu, ShoppingCart, X, AlignRight } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="mr-2 h-4 w-4" /> },
    { href: "/menu", label: "Menu", icon: <Menu className="mr-2 h-4 w-4" /> },
    {
      href: "/cart",
      label: "Cart",
      icon: <ShoppingCart className="mr-2 h-4 w-4" />,
      badge: totalItems > 0 ? totalItems : null,
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-[#ff4500] dark:text-[#ff5a1f]">FoodDelivery</span>
        </Link>

        <div className="flex items-center space-x-2">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <AlignRight className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button variant={pathname === link.href ? "default" : "ghost"} className="relative">
                {link.icon}
                {link.label}
                {link.badge && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff4500] text-xs text-white dark:bg-[#ff5a1f]">
                    {link.badge}
                  </span>
                )}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 md:hidden">
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="relative mb-1 flex w-full justify-start">
                  {link.icon}
                  {link.label}
                  {link.badge && (
                    <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff4500] text-xs text-white dark:bg-[#ff5a1f]">
                      {link.badge}
                    </span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
