import { Rocket, Users, Zap, Award } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Rocket,
      title: "MVP en Tiempo Récord",
      description: "Lideré el desarrollo del MVP de KidsFin desde cero hasta el lanzamiento.",
    },
    {
      icon: Users,
      title: "220+ Usuarios Activos",
      description: "Producto validado con usuarios reales y crecimiento constante.",
    },
    {
      icon: Zap,
      title: "Arquitectura Completa",
      description: "Frontend, Backend, Base de Datos e Infraestructura diseñados por mí.",
    },
    {
      icon: Award,
      title: "Azure Certified",
      description: "Microsoft Certified: Azure Fundamentals + experiencia práctica.",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#F5A623] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Sobre Mí
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-6 text-balance">
            Construyendo el futuro de la
            <br />
            <span className="text-[#F5A623]">educación financiera infantil</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-[#666] leading-relaxed mb-6">
              Soy <span className="font-bold text-[#1a1a1a]">CTO y Co-Fundador de KidsFin</span>, 
              una startup que está revolucionando cómo los niños aprenden sobre finanzas a través 
              del juego. Nuestro personaje Finny guía a padres e hijos en misiones que crean 
              hábitos de ahorro, gasto e inversión desde la infancia.
            </p>
            <p className="text-lg text-[#666] leading-relaxed mb-6">
              Con más de <span className="font-bold text-[#1a1a1a]">2 años de experiencia</span> como 
              desarrollador Full Stack, he trabajado con tecnologías como Flutter, NestJS, Angular, 
              Next.js y arquitecturas de microservicios. Mi enfoque está en crear soluciones 
              escalables que generen impacto real.
            </p>
            <p className="text-lg text-[#666] leading-relaxed">
              Mi pasión por crear experiencias digitales impactantes me llevó a combinar mis 
              habilidades técnicas con mi deseo de educar a las nuevas generaciones en finanzas 
              personales, un tema que considero fundamental para su futuro.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
              ¿Qué buscamos?
            </h3>
            <p className="text-[#666] leading-relaxed mb-4">
              Buscamos comunidad y mentoría para llevar KidsFin al siguiente nivel.
              Queremos rodearnos de personas y equipos que compartan nuestra visión de
              construir startups tecnológicas con impacto social real.
            </p>
            <p className="text-[#666] leading-relaxed">
              Conectar con otros founders, acceder a recursos estratégicos y aprender
              de quienes ya han recorrido este camino nos permitirá escalar nuestra
              solución a más familias en Latinoamérica.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#F5A623]/20 rounded-2xl p-6 hover:border-[#F5A623] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F5A623] transition-colors">
                <item.icon className="w-7 h-7 text-[#F5A623] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">{item.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
