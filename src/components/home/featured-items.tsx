import Link from "next/link"
import { Button } from "@/components/ui/button"
import MenuItem from "@/components/menu/menu-item"
import { foodItems } from "@/lib/data"

export default function FeaturedItems() {
  // Get 4 featured items
  const featuredItems = foodItems.filter((item) => item.featured).slice(0, 4)

  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2>Popular Items</h2>
        <Link href="/menu">
          <Button variant="outline">View All</Button>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
