import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SprayCan, Wrench, Truck, Trees, Trash2, ArrowRight, X, CheckCircle2, ImageIcon } from 'lucide-react'

const services = [
  {
    icon: SprayCan,
    title: 'Renhold og vedlikehold',
    description: 'Vi holder hjemmet og arbeidsplassen din ren og velstelt med grundig og profesjonell rengjøring.',
    lightColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    image: '/images/cleaning card.png',
    details: {
      intro: 'Et rent miljø er grunnlaget for trivsel og produktivitet. Vi leverer skreddersydd renhold tilpasset dine behov — enten det gjelder bolig, kontor eller næringslokaler.',
      points: [
        'Daglig, ukentlig eller månedlig rengjøring',
        'Hovedrengjøring og flyttevask',
        'Vindusvask innvendig og utvendig',
        'Kontorrenhold og fellsareal-vedlikehold',
        'Miljøvennlige rengjøringsmidler',
      ],
      cta: 'Vi tilpasser renholdsplanen etter dine ønsker og tidsplan.',
    },
  },
  {
    icon: Wrench,
    title: 'Reparasjoner og vaktmester',
    description: 'Raske og pålitelige fikseoppgaver – fra små reparasjoner til vedlikeholdsarbeid.',
    lightColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    image: '/images/Reparasjoner.jpg',
    details: {
      intro: 'Ting som går i stykker bør fikses raskt og ordentlig. Våre vaktmestere har lang erfaring med alt fra småjobber til større vedlikeholdsprosjekter.',
      points: [
        'Montering av møbler, hyller og utstyr',
        'Rørlegger- og elektrikerarbeid (enklere oppgaver)',
        'Dør- og låsreparasjoner',
        'Maling og sparkling',
        'Generelt vedlikehold for borettslag og bedrifter',
      ],
      cta: 'Ring oss – vi kommer raskt og fikser problemet effektivt.',
    },
  },
  {
    icon: Truck,
    title: 'Transport og levering',
    description: 'Vi henter og leverer det du trenger, raskt og trygt til avtalt tid.',
    lightColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    image: '/images/Transport.jpg',
    details: {
      intro: 'Trenger du hjelp med frakt, henting eller levering? Vi stiller med bil og mannskap, klare til å flytte det du trenger — trygt og til riktig tid.',
      points: [
        'Småflytting og møbeltransport',
        'Henting og levering av varer',
        'Varetransport for bedrifter',
        'Fleksible tidspunkter — også kvelder og helger',
        'Forsikret transport med forsiktig håndtering',
      ],
      cta: 'Bestill transport enkelt — vi tar oss av resten.',
    },
  },
  {
    icon: Trees,
    title: 'Hagearbeid og plenklipping',
    description: 'Vi tar vare på utearealet ditt hele sesongen – klipping, stell og planlegging.',
    lightColor: 'bg-green-50',
    iconColor: 'text-green-600',
    image: '/images/Hagearbeid.jpg',
    details: {
      intro: 'En velholdt hage gir verdi, trivsel og et flott førsteinntrykk. Vi tilbyr komplett hagestell gjennom hele sesongen.',
      points: [
        'Plenklipping og kantklipping',
        'Hekklipping og beskjæring',
        'Planting av blomster, busker og trær',
        'Vårklargjøring og høstrydding',
        'Vedlikehold av uteareal for borettslag',
      ],
      cta: 'La oss ta vare på hagen din — kontakt oss for en uforpliktende vurdering.',
    },
  },
  {
    icon: Trash2,
    title: 'Avfallshåndtering og bortkjøring',
    description: 'Rask og miljøvennlig rydding – vi tar oss av alt fra småavfall til større opprydding.',
    lightColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    image: '/images/Avfallshåndtering.jpg',
    details: {
      intro: 'Vi gjør det enkelt å bli kvitt avfall, rot og ting du ikke lenger trenger. Alt håndteres på en miljøvennlig og ansvarlig måte.',
      points: [
        'Bortkjøring av møbler og hvitevarer',
        'Bygge- og renoveringsavfall',
        'Tømming av garasjer, loft og boder',
        'Kildesortering og gjenvinning',
        'Rask respons — ofte samme dag',
      ],
      cta: 'Trenger du rydding? Vi kommer og tar alt — du trenger bare å ringe.',
    },
  },
]

function ServiceModal({ service, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image */}
        {service.image && (
          <div className="w-full h-[220px] sm:h-[260px] overflow-hidden rounded-t-3xl relative">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-white transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-12 h-12 rounded-xl ${service.lightColor} flex items-center justify-center shrink-0`}>
              <service.icon className={`w-6 h-6 ${service.iconColor}`} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary">
              {service.title}
            </h3>
          </div>

          <p className="text-text-secondary leading-relaxed text-[15px] sm:text-base mb-6">
            {service.details.intro}
          </p>

          <div className="space-y-3 mb-7">
            {service.details.points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm sm:text-[15px] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-accent-50 border border-accent-100 mb-6">
            <p className="text-accent-700 text-sm font-medium leading-relaxed">
              {service.details.cta}
            </p>
          </div>

          <a
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }), 300) }}
            className="group inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:scale-[1.01] transition-all duration-300"
          >
            Kontakt oss for denne tjenesten
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)
  const [activeService, setActiveService] = useState(null)

  return (
    <>
      <section id="tjenester" className="relative py-16 sm:py-24 lg:py-32 bg-surface-dim overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/[0.03] rounded-full blur-[100px]" />

        <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-600 text-sm font-semibold mb-5 tracking-wide">
              Våre tjenester
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
              Alt du trenger,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                på ett sted
              </span>
            </h2>
            <p className="mt-5 text-text-secondary text-lg leading-relaxed">
              Vi tilbyr et bredt spekter av tjenester for å gjøre hverdagen din enklere og bedre.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveService(service)}
                className={`group relative bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:shadow-primary-500/[0.08] hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer ${
                  index >= 3 ? 'sm:col-span-1 lg:col-span-1' : ''
                } ${index === 3 ? 'sm:justify-self-end' : ''} ${index === 4 ? 'sm:justify-self-start' : ''}`}
              >
                {/* Image Area */}
                <div className="w-full h-[200px] bg-[#F3F4F6] flex flex-col items-center justify-center border-b border-gray-100 overflow-hidden">
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <>
                      <ImageIcon className="w-8 h-8 text-gray-300 mb-2" />
                      <p className="text-gray-400 text-xs font-medium text-center px-4 leading-relaxed">
                        {service.title}
                      </p>
                    </>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl ${service.lightColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className={`w-5.5 h-5.5 ${service.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-text-secondary leading-relaxed text-[15px] mb-5">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-accent-500 font-semibold text-sm group-hover:gap-2.5 transition-all duration-300">
                    <span>Les mer</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
