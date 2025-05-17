"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";

interface DeliveryFormProps {
  setIsFormFilled: (isFormFilled: boolean) => void;
}

export default function DeliveryForm({ setIsFormFilled }: DeliveryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    instructions: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsFormFilled(true);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
        Delivery Information
      </h2>

      <div className="grid gap-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Address
          </label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              City
            </label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="New York"
              required
            />
          </div>

          <div>
            <label
              htmlFor="zipCode"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              ZIP Code
            </label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="10001"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            required
          />
        </div>

        <div>
          <label
            htmlFor="instructions"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Delivery Instructions (Optional)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="E.g., Ring the doorbell, leave at the door, etc."
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#ff4500] focus:outline-none focus:ring-1 focus:ring-[#ff4500] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-[#ff5a1f] dark:focus:ring-[#ff5a1f]"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
