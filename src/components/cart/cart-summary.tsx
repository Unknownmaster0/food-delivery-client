import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartSummary() {
  const { totalPrice } = useCart()

  const deliveryFee = 2.99
  const subtotal = totalPrice
  const total = subtotal + deliveryFee

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">Order Summary</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="text-gray-900 dark:text-gray-100">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
          <span className="text-gray-900 dark:text-gray-100">${deliveryFee.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 pt-2 dark:border-gray-700">
          <div className="flex justify-between font-bold">
            <span className="text-gray-900 dark:text-gray-100">Total</span>
            <span className="text-gray-900 dark:text-gray-100">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Link href="/checkout" className="mt-4 block w-full">
        <Button className="w-full">Proceed to Checkout</Button>
      </Link>
    </div>
  )
}
