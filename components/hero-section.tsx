import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Github, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F5A623] via-[#FF8C00] to-[#4A90D9] overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-8 h-8 border-2 border-white/30 rotate-45" />
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-white/30 rounded-full" />
        <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-white/30" />
        <div className="absolute top-60 left-1/4 text-white/20 text-4xl font-bold">+</div>
        <div className="absolute bottom-60 right-1/4 text-white/20 text-4xl font-bold">x</div>
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-white/20 rotate-45" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#FFC107]/50 rounded-full" />
        
        {/* Cloud shapes */}
        <div className="absolute top-32 left-5 md:left-20">
          <svg width="120" height="60" viewBox="0 0 120 60" className="opacity-30">
            <ellipse cx="30" cy="40" rx="25" ry="18" fill="white"/>
            <ellipse cx="55" cy="35" rx="30" ry="22" fill="white"/>
            <ellipse cx="85" cy="40" rx="25" ry="18" fill="white"/>
          </svg>
        </div>
        <div className="absolute bottom-40 right-5 md:right-32">
          <svg width="100" height="50" viewBox="0 0 100 50" className="opacity-25">
            <ellipse cx="25" cy="30" rx="20" ry="15" fill="white"/>
            <ellipse cx="50" cy="25" rx="25" ry="18" fill="white"/>
            <ellipse cx="75" cy="30" rx="20" ry="15" fill="white"/>
          </svg>
        </div>
        
        {/* Coins */}
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-[#FFC107] rounded-full shadow-lg opacity-60" />
        <div className="absolute bottom-1/4 right-16 w-6 h-6 bg-[#FFC107] rounded-full shadow-lg opacity-50" />
        <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-[#FFD700] rounded-full shadow-lg opacity-40" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 text-balance">
              BALBINO
              <br />
              LASALA
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-6">
              CTO & Co-Fundador de KidsFin
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Full Stack Developer especializado en arquitectura de software, 
              liderando el desarrollo de una app de educación financiera infantil 
              que ya cuenta con <span className="font-bold text-[#1a1a1a]">220+ usuarios activos</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#333] transition-all hover:scale-105"
              >
                Contactar
                <ArrowRight size={20} />
              </Link>
              <Link
                href="https://kidsfin.kids"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFC107] transition-all hover:scale-105"
              >
                Ver KidsFin
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://www.linkedin.com/in/balbino-lasala"
                target="_blank"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-white" />
              </Link>
              <Link
                href="https://github.com/BALBINOJLC"
                target="_blank"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} className="text-white" />
              </Link>
              <Link
                href="mailto:blasala@kidsfin.kids"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={24} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-okldBRAQSLmGl7OvczHUwG7yw2xxGv.png"
                  alt="Balbino Lasala - CTO de KidsFin"
                  width={450}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg whitespace-nowrap">
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">
                  Chief Technology Officer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
