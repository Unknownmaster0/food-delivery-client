export interface FoodItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  featured: boolean
}

export interface Category {
  id: number
  name: string
  image: string
}

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  size?: string
}
