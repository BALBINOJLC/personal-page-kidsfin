import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
            <span>para</span>
            <span className="font-bold text-[#F5A623]">Platanus</span>
          </div>
          
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} Balbino Lasala. Todos los derechos reservados.
          </div>
          
          <Link
            href="https://kidsfin.kids"
            target="_blank"
            className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors text-sm"
          >
            <span className="font-bold">KidsFin</span>
            <span className="text-xs bg-[#F5A623]/20 text-[#F5A623] px-2 py-1 rounded-full">
              Educación Financiera Infantil
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
