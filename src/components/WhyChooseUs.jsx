import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Globe, Clock, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Lokal ekspertise',
    description: 'Vi kjenner Norge godt. Vår tilstedeværelse gir deg rask og effektiv service uansett hvor du er.',
    gradient: 'from-primary-500 to-primary-700',
    light: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
  {
    icon: Clock,
    title: 'Fleksible tider',
    description: 'Vi tilpasser oss din timeplan. Bestill tjenester når det passer deg – vi er tilgjengelige og fleksible.',
    gradient: 'from-accent-500 to-accent-600',
    light: 'bg-accent-50',
    iconColor: 'text-accent-600',
  },
  {
    icon: ShieldCheck,
    title: 'Trygg og pålitelig',
    description: 'Alle ansatte er grundig sjekket og kvalifisert. Du kan stole på oss for en trygg og profesjonell jobb.',
    gradient: 'from-emerald-500 to-emerald-600',
    light: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
]

export default function WhyChooseUs() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-surface-dim overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/[0.02] rounded-full blur-[120px]" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-600 text-sm font-semibold mb-5 tracking-wide">
            Hvorfor oss
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
            Hvorfor velge{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">
              Millenium?
            </span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg leading-relaxed">
            Vi kombinerer profesjonalitet med personlig service for å gi deg den beste opplevelsen.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-transparent shadow-sm hover:shadow-2xl hover:shadow-primary-500/[0.08] transition-all duration-500 h-full overflow-hidden">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`} />

                <div className={`w-16 h-16 rounded-2xl ${feature.light} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} strokeWidth={1.5} />
                </div>

                <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                  {feature.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
