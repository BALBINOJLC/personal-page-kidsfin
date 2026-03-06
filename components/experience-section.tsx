import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ExperienceSection() {
  const experiences = [
    {
      company: "KidsFin",
      role: "CTO & Co-Fundador",
      period: "Septiembre 2025 - Presente",
      duration: "7 meses",
      location: "Chile",
      description:
        "Lideré el desarrollo y lanzamiento del MVP desde cero, diseñando la arquitectura completa (Frontend, Backend, BD e Infraestructura).",
      highlights: [
        "Producto lanzado en tiempo récord",
        "220 usuarios activos",
        "Arquitectura escalable cloud-native",
      ],
      techStack: ["Flutter", "Node.js (NestJS)", "PostgreSQL", "Azure"],
      link: "https://kidsfin.kids",
      isCurrent: true,
    },
    {
      company: "GUX Technologies",
      role: "Desarrollador de Aplicaciones",
      period: "Diciembre 2023 - Febrero 2026",
      duration: "2 años 3 meses",
      location: "Chile",
      description:
        "Desarrollador web y mobile apasionado por crear experiencias digitales impactantes. Comprometido con la excelencia en el código y la innovación tecnológica.",
      highlights: [
        "Desarrollo web y mobile",
        "Experiencias digitales impactantes",
        "Innovación tecnológica",
      ],
      techStack: ["Angular", "React", "Node.js", "TypeScript"],
      isCurrent: false,
    },
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#F5A623] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-6 text-balance">
            Experiencia Profesional
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-12 ${
                index !== experiences.length - 1 ? "border-l-2 border-[#F5A623]/30" : ""
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[-9px] w-4 h-4 rounded-full ${
                  exp.isCurrent ? "bg-[#F5A623]" : "bg-[#F5A623]/50"
                }`}
              />

              {/* Card */}
              <div
                className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 ${
                  exp.isCurrent ? "border-[#F5A623]" : "border-gray-100"
                } hover:shadow-xl transition-shadow`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-[#F5A623]" />
                      <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="bg-[#F5A623] text-white text-xs font-bold px-3 py-1 rounded-full">
                          Actual
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-[#666]">{exp.role}</p>
                  </div>
                  {exp.link && (
                    <Link
                      href={exp.link}
                      target="_blank"
                      className="flex items-center gap-2 text-[#F5A623] hover:text-[#FF8C00] font-medium transition-colors"
                    >
                      Visitar <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#666]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period} ({exp.duration})
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                <p className="text-[#666] mb-4 leading-relaxed">{exp.description}</p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a1a1a] mb-2">Logros destacados:</h4>
                  <ul className="grid sm:grid-cols-3 gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-center gap-2 text-sm text-[#666]"
                      >
                        <span className="w-2 h-2 bg-[#F5A623] rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="bg-[#F5A623]/10 text-[#F5A623] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
