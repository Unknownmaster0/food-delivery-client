"use client"

import { useState } from "react"
import MenuGrid from "@/components/menu/menu-grid"
import CategoryFilter from "@/components/menu/category-filter"
import { foodItems } from "@/lib/data"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(foodItems.map((item) => item.category)))

  const filteredItems = selectedCategory ? foodItems.filter((item) => item.category === selectedCategory) : foodItems

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="mb-8 text-center">Our Menu</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <MenuGrid items={filteredItems} />
    </div>
  )
}
