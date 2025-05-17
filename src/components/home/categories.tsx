import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/data"

export default function Categories() {
  return (
    <section className="mb-12">
      <h2 className="mb-6">Categories</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/menu?category=${category.name.toLowerCase()}`}
            className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-md"
          >
            <div className="aspect-square relative">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-sm font-medium md:text-base">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
