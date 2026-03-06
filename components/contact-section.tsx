import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "blasala@kidsfin.kids",
      href: "mailto:blasala@kidsfin.kids",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+56 9 88135988",
      href: "tel:+56988135988",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Bahí de plata Nueva Esparta, Venezuela",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/balbino-lasala",
      color: "#0077B5",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/BALBINOJLC",
      color: "#333",
    },
    {
      icon: ExternalLink,
      label: "KidsFin",
      href: "https://kidsfin.kids",
      color: "#F5A623",
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#333]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#F5A623] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Contacto
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-balance">
            ¿Listo para conectar?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            No dudes en contactarme para conversar sobre KidsFin o cualquier otra idea.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-white font-medium hover:text-[#F5A623] transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="space-y-6">
              <div className="bg-[#F5A623] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  Sígueme en redes
                </h3>
                <p className="text-[#1a1a1a]/70 mb-6">
                  Conéctate conmigo para seguir mi trayectoria en KidsFin y otros proyectos.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                      aria-label={social.label}
                    >
                      <social.icon
                        className="w-7 h-7"
                        style={{ color: social.color }}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">
                  ¿Por qué KidsFin?
                </h3>
                <p className="text-white/70 leading-relaxed">
                  KidsFin nació de la necesidad de enseñar a los niños sobre finanzas de 
                  manera divertida y segura. Nuestro personaje Finny guía a las familias 
                  en misiones que crean hábitos financieros saludables desde temprana edad.
                </p>
                <Link
                  href="https://kidsfin.kids"
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-4 text-[#F5A623] font-semibold hover:text-[#FFD700] transition-colors"
                >
                  Conoce más sobre KidsFin
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
