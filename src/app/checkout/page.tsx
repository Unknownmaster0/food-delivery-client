"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import DeliveryForm from "@/components/checkout/delivery-form";
import OrderSummary from "@/components/checkout/order-summary";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Toast from "@/lib/toast";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  if (cart.length === 0 && !isOrderPlaced) {
    router.push("/menu");
    return null;
  }

  const handlePlaceOrder = () => {
    if (!isFormFilled) {
      Toast("error", "Please fill in the delivery details", "");
    } else {
      setIsSubmitting(true);

      // Simulate order processing
      setTimeout(() => {
        setIsSubmitting(false);
        setIsOrderPlaced(true);
        clearCart();
      }, 1500);
    }
  };

  if (isOrderPlaced) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="mb-2">Order Placed Successfully!</h1>
        <p className="mb-8 text-gray-500">
          Thank you for your order. Your food will be delivered soon.
        </p>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="mb-8 text-center">Checkout</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <DeliveryForm setIsFormFilled={setIsFormFilled} />
        </div>

        <div>
          <OrderSummary
            onPlaceOrder={handlePlaceOrder}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
}
