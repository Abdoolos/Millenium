import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Anders Johansen',
    role: 'Boligeier i Oslo',
    text: 'Fantastisk service! De kom raskt og gjorde en grundig jobb med rengjøringen. Veldig fornøyd med resultatet og den profesjonelle behandlingen.',
    rating: 5,
    initials: 'AJ',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    name: 'Maria Eriksen',
    role: 'Leilighetseier',
    text: 'Bruker Millenium jevnlig for hagearbeid og vedlikehold. Alltid pålitelige, punktlige og hyggelige. Anbefales på det sterkeste!',
    rating: 5,
    initials: 'ME',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    name: 'Thomas Berg',
    role: 'Bedriftskunde',
    text: 'Vi har brukt dem til transport og bortkjøring flere ganger. Rask levering, god kommunikasjon og konkurransedyktige priser. Topp!',
    rating: 5,
    initials: 'TB',
    color: 'bg-emerald-100 text-emerald-600',
  },
]

export default function Testimonials() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/[0.03] rounded-full blur-[120px]" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-600 text-sm font-semibold mb-5 tracking-wide">
            Anmeldelser
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
            Hva kundene{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              sier
            </span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg leading-relaxed">
            Hundrevis av fornøyde kunder stoler på oss for sine hverdagsbehov.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative bg-surface-dim rounded-3xl p-8 border border-gray-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-500/[0.05] transition-all duration-500 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-[0.07]">
                  <Quote className="w-12 h-12 text-primary-500" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-text-secondary leading-relaxed mb-8 text-[15px] italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center font-heading font-bold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm">{testimonial.name}</p>
                    <p className="text-text-muted text-xs mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
