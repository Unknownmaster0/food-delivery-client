import MenuItem from "@/components/menu/menu-item"
import type { FoodItem } from "@/lib/types"

interface MenuGridProps {
  items: FoodItem[]
}

export default function MenuGrid({ items }: MenuGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  )
}
