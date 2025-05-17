import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">FoodDelivery</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Delicious food delivered to your doorstep.</p>
          </div>

          <div>
            <h4 className="mb-4 text-md font-bold text-gray-900 dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#ff4500] dark:text-gray-400 dark:hover:text-[#ff5a1f]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-gray-600 hover:text-[#ff4500] dark:text-gray-400 dark:hover:text-[#ff5a1f]"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-gray-600 hover:text-[#ff4500] dark:text-gray-400 dark:hover:text-[#ff5a1f]"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-md font-bold text-gray-900 dark:text-gray-100">Contact Us</h4>
            <address className="not-italic">
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">Park street</p>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">Kolkata, India</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phone: +91 1234 567890</p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} FoodDelivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
