"use client"
import { slugify } from "@/lib/slugify"
import Link from "next/link"
import { useState } from "react"

const Header = ({ logo, categories }:{ logo: string, categories: string[]}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const nav = categories.map((x) => ({ title: x, path: `/category/${slugify(x)}` }))
  const navigation = [{ title: "Home", path: "/" }, ...nav]

  return (
    <header className=" bg-[#1E72BD] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium tracking-[.01em] hover:text-white/90 transition-colors">
            {logo}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navigation.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="px-4 py-2 text-sm uppercase font-medium hover:bg-white/10 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            {navigation.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="block px-4 py-2 text-sm uppercase font-medium hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

