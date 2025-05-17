import { Button } from "@/components/ui/button"
import Link from "next/link"

// hero-section banner at the home page
export default function Banner() {
  return (
    <div className="relative mb-12 mt-6 overflow-hidden rounded-xl bg-gradient-to-r from-[#ff4500] to-[#ff7e54] p-6 text-white dark:from-[#ff5a1f] dark:to-[#ff8c66] md:p-8">
      <div className="relative z-10 max-w-xl">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Delicious Food Delivered To Your Door</h1>
        <p className="mb-6 text-lg opacity-90">Enjoy 30% off on your first order with code: WELCOME30</p>
        <Link href="/menu">
          <Button className="bg-white text-[#ff4500] hover:bg-gray-100 dark:bg-gray-800 dark:text-[#ff5a1f] dark:hover:bg-gray-700">
            Order Now
          </Button>
        </Link>
      </div>

      <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/10 md:h-80 md:w-80"></div>
      <div className="absolute -top-20 right-20 h-40 w-40 rounded-full bg-white/10"></div>
    </div>
  )
}
