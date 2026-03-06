"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5A623]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-wide">
              Balbino Lasala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white font-medium hover:text-[#1a1a1a] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://kidsfin.kids"
              target="_blank"
              className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full font-bold hover:bg-[#333] transition-colors"
            >
              Ver KidsFin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white font-medium hover:text-[#1a1a1a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://kidsfin.kids"
              target="_blank"
              className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full font-bold hover:bg-[#333] transition-colors text-center"
            >
              Ver KidsFin
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
