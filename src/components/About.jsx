import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CheckCircle2, ArrowRight, Award, Clock, Users, MapPin } from 'lucide-react'

const checkpoints = [
  { icon: Clock, text: 'Rask respons' },
  { icon: MapPin, text: 'Lokalt selskap' },
  { icon: Award, text: 'Fleksible løsninger' },
]

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="om-oss" className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary-500/[0.03] rounded-full blur-[100px]" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full aspect-[6/5] rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50">
                <img
                  src="/images/about.png"
                  alt="Millenium Servicesenter teamet"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-accent-500/10 to-primary-500/10" />

              {/* Experience Badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-2xl p-5 shadow-2xl shadow-black/8 border border-gray-50"
              >
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">
                    Lang
                  </div>
                  <p className="text-xs font-medium text-text-secondary mt-1">Erfaring</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-5 tracking-wide">
              Om oss
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-text-primary leading-tight">
              Ditt lokale{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                serviceselskap
              </span>
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              Millenium Servicesenter AS er et lokalt serviceselskap som tilbyr praktisk hjelp og
              fleksible hverdagstjenester i Oslo og Viken-området. Vi er tilgjengelige,
              pålitelige og alltid klare til å hjelpe.
            </p>

            <div className="mt-8 space-y-4">
              {checkpoints.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-dim transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent-600" />
                  </div>
                  <span className="font-medium text-text-primary">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                Kontakt oss
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
