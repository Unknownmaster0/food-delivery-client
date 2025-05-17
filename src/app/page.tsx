import Banner from "@/components/home/banner"
import Categories from "@/components/home/categories"
import FeaturedItems from "@/components/home/featured-items"

export default function Home() {
  return (
    <main className="container mx-auto px-4 pb-20">
      <Banner />
      <Categories />
      <FeaturedItems />
    </main>
  )
}
