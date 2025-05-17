"use client"

import { useCart } from "@/lib/cart-context"
import CartItem from "@/components/cart/cart-item"
import CartSummary from "@/components/cart/cart-summary"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { cart, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-gray-400" />
        <h2 className="mb-2">Your cart is empty</h2>
        <p className="mb-8 text-gray-500">Add some delicious items to your cart</p>
        <Link href="/menu">
          <Button>Browse Menu</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="mb-8 text-center">Your Cart</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-lg border border-gray-200">
            {cart.map((item) => (
              <CartItem key={`${item.id}-${item.size}`} item={item} />
            ))}
          </div>
        </div>

        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
