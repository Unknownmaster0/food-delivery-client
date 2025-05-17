"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import type { FoodItem } from "@/lib/types"
import { Plus, Check } from "lucide-react"

interface MenuItemProps {
  item: FoodItem
}

export default function MenuItem({ item }: MenuItemProps) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="relative aspect-square">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {item.featured && (
          <span className="absolute left-2 top-2 rounded-full bg-[#ff4500] px-2 py-1 text-xs font-medium text-white dark:bg-[#ff5a1f]">
            Popular
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-1 font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">${item.price.toFixed(2)}</span>
          <Button onClick={handleAddToCart} className="h-9 w-9 rounded-full p-0" disabled={isAdded}>
            {isAdded ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
