"use client"

import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import QuantitySelector from "@/components/ui/quantity-selector"
import { Trash2, IndianRupee } from "lucide-react"
import type { CartItem as CartItemType } from "@/lib/types"

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity)
  }

  return (
    <div className="flex border-b border-gray-200 p-4 last:border-0 dark:border-gray-700">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" sizes="80px" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
          <p className="font-medium text-gray-900 dark:text-gray-100"><IndianRupee className="inline h-4"/>{(item.price * item.quantity).toFixed(2)}</p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400"><IndianRupee className="inline h-4"/>{item.price.toFixed(2)} each</p>

        <div className="mt-auto flex items-center justify-between">
          <QuantitySelector quantity={item.quantity} onQuantityChange={handleQuantityChange} min={1} max={10} />

          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeFromCart(item.id)}
            className="h-8 w-8 rounded-full p-0 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
