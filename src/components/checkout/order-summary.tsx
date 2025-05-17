"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { IndianRupee, Loader2 } from "lucide-react"

interface OrderSummaryProps {
  onPlaceOrder: () => void
  isSubmitting: boolean
}

export default function OrderSummary({ onPlaceOrder, isSubmitting }: OrderSummaryProps) {
  const { cart, totalPrice } = useCart()

  const deliveryFee = 2.99
  const subtotal = totalPrice
  const total = subtotal + deliveryFee

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">Order Summary</h2>

      <div className="mb-4 max-h-60 overflow-y-auto">
        {cart.map((item) => (
          <div key={`${item.id}-${item.size}`} className="mb-2 flex justify-between text-sm">
            <span className="text-gray-700 dark:text-gray-300">
              {item.quantity} x {item.name}
            </span>
            <span className="text-gray-900 dark:text-gray-100"><IndianRupee className="inline h-4" />{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t border-gray-200 pt-2 dark:border-gray-700">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="text-gray-900 dark:text-gray-100"><IndianRupee className="inline h-4" />{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
          <span className="text-gray-900 dark:text-gray-100"><IndianRupee className="inline h-4" />{deliveryFee.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 pt-2 dark:border-gray-700">
          <div className="flex justify-between font-bold">
            <span className="text-gray-900 dark:text-gray-100">Total</span>
            <span className="text-gray-900 dark:text-gray-100"><IndianRupee className="inline h-4" />{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Button onClick={onPlaceOrder} disabled={isSubmitting} className="mt-4 w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Place Order"
        )}
      </Button>
    </div>
  )
}
