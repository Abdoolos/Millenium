import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SprayCan, Wrench, Truck, Trees, Trash2, ArrowRight, ImageIcon } from 'lucide-react'

const services = [
  {
    icon: SprayCan,
    title: 'Renhold og vedlikehold',
    description: 'Vi holder hjemmet og arbeidsplassen din ren og velstelt med grundig og profesjonell rengjøring.',
    lightColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    imageLabel: 'Service Image: Clean bright room or person cleaning',
    image: '/images/cleaning card.png',
  },
  {
    icon: Wrench,
    title: 'Reparasjoner og vaktmester',
    description: 'Raske og pålitelige fikseoppgaver – fra små reparasjoner til vedlikeholdsarbeid.',
    lightColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    imageLabel: 'Service Image: Handyman repairing or fixing',
    image: '/images/Reparasjoner.jpg',
  },
  {
    icon: Truck,
    title: 'Transport og levering',
    description: 'Vi henter og leverer det du trenger, raskt og trygt til avtalt tid.',
    lightColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    imageLabel: 'Service Image: Delivery van or transport',
    image: '/images/Transport.jpg',
  },
  {
    icon: Trees,
    title: 'Hagearbeid og plenklipping',
    description: 'Vi tar vare på utearealet ditt hele sesongen – klipping, stell og planlegging.',
    lightColor: 'bg-green-50',
    iconColor: 'text-green-600',
    imageLabel: 'Service Image: Garden work or lawn mowing',
    image: '/images/Hagearbeid.jpg',
  },
  {
    icon: Trash2,
    title: 'Avfallshåndtering og bortkjøring',
    description: 'Rask og miljøvennlig rydding – vi tar oss av alt fra småavfall til større opprydding.',
    lightColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    imageLabel: 'Service Image: Waste removal or clean environment',
    image: '/images/Avfallshåndtering.jpg',
  },
]

export default function Services() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  return (
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
              className={`group relative bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:shadow-primary-500/[0.08] hover:scale-[1.02] transition-all duration-500 overflow-hidden ${
                index >= 3 ? 'sm:col-span-1 lg:col-span-1' : ''
              } ${index === 3 ? 'sm:justify-self-end' : ''} ${index === 4 ? 'sm:justify-self-start' : ''}`}
            >
              {/* Image Area */}
              <div className="w-full h-[200px] bg-[#F3F4F6] flex flex-col items-center justify-center border-b border-gray-100 overflow-hidden">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <ImageIcon className="w-8 h-8 text-gray-300 mb-2" />
                    <p className="text-gray-400 text-xs font-medium text-center px-4 leading-relaxed">
                      {service.imageLabel}
                    </p>
                    <p className="text-gray-300 text-[10px] mt-1">Full width × 200px</p>
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
  )
}
