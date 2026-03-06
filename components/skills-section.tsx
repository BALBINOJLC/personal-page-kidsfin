export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "#F5A623",
      skills: ["Flutter", "Angular", "Next.js", "React"],
    },
    {
      title: "Backend",
      color: "#4A90D9",
      skills: ["NestJS", "Node.js", "Flask", "NATS (Microservicios)"],
    },
    {
      title: "Bases de Datos",
      color: "#FF8C00",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Mongoose"],
    },
    {
      title: "Cloud & DevOps",
      color: "#1a1a1a",
      skills: ["Azure", "AWS", "Docker", "CI/CD"],
    },
  ]

  const tools = [
    { name: "n8n", description: "Automatización de flujos" },
    { name: "SOLID", description: "Principios de diseño" },
    { name: "Git", description: "Control de versiones" },
    { name: "Facturación SII", description: "Integración fiscal Chile" },
  ]

  return (
    <section id="habilidades" className="py-20 bg-[#F5A623]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-balance">
            Habilidades Técnicas
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Tecnologías que utilizo para construir soluciones escalables y de alto rendimiento
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="w-3 h-3 rounded-full mb-4"
                style={{ backgroundColor: category.color }}
              />
              <h3 className="font-bold text-[#1a1a1a] text-xl mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-[#666]"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Herramientas y Metodologías
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-colors"
              >
                <h4 className="font-bold text-white text-lg mb-1">{tool.name}</h4>
                <p className="text-white/70 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Certificaciones</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="font-bold text-[#1a1a1a]">
                Microsoft Certified: Azure Fundamentals
              </span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="font-bold text-[#1a1a1a]">
                Agile Mastery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
