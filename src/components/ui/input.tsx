import type * as React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#ff4500] focus:outline-none focus:ring-1 focus:ring-[#ff4500] disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-[#ff5a1f] dark:focus:ring-[#ff5a1f] ${className}`}
      {...props}
    />
  )
}
