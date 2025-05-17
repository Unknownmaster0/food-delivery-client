"use client"

import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
  min?: number
  max?: number
}

export default function QuantitySelector({ quantity, onQuantityChange, min = 1, max = 99 }: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1)
    }
  }

  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1)
    }
  }

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        size="sm"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="h-8 w-8 rounded-full p-0 border-gray-300 dark:border-gray-600"
      >
        <Minus className="h-3 w-3" />
        <span className="sr-only">Decrease</span>
      </Button>

      <span className="mx-2 w-6 text-center text-sm font-medium dark:text-gray-200">{quantity}</span>

      <Button
        variant="outline"
        size="sm"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="h-8 w-8 rounded-full p-0 border-gray-300 dark:border-gray-600"
      >
        <Plus className="h-3 w-3" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  )
}
