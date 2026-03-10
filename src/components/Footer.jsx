import { Phone, MapPin, ArrowUp } from 'lucide-react'

const quickLinks = [
  { name: 'Hjem', href: '#hjem' },
  { name: 'Tjenester', href: '#tjenester' },
  { name: 'Om oss', href: '#om-oss' },
  { name: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-navy pt-16 lg:pt-20 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 pb-12 border-b border-white/[0.06]">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center font-heading font-bold text-white text-lg shadow-lg shadow-accent-500/25">
                M
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm">Millenium</p>
                <p className="text-white/40 text-xs">Servicesenter AS</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Ditt lokale serviceselskap for praktisk hjelp og fleksible hverdagstjenester i Oslo & Viken.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Hurtiglenker
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/40 text-sm hover:text-accent-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent-500 transition-colors duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Kontaktinfo
            </h4>
            <div className="space-y-4">
              <a href="tel:94446425" className="flex items-center gap-3 text-white/40 hover:text-accent-400 transition-colors duration-300 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-accent-500" />
                <span className="text-sm">944 46 425</span>
              </a>
              <div className="flex items-center gap-3 text-white/40 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-accent-500" />
                <span className="text-sm">Oslo & Viken Område</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © 2026 Millenium Servicesenter AS — Org.nr. 935 282 136
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-accent-400 hover:bg-white/[0.1] hover:border-accent-500/20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
