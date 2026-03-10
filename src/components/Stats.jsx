import { motion } from 'framer-motion'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'
import { Users, CalendarCheck, UserCheck, MapPin } from 'lucide-react'

const stats = [
  { icon: CalendarCheck, end: 0, suffix: '', label: 'Års erfaring', displayText: 'Lang' },
  { icon: UserCheck, end: 0, suffix: '', label: 'Arbeidere', displayText: 'Proffe' },
  { icon: MapPin, end: 0, suffix: '', label: 'Oslo & Viken', displayText: 'Lokalt' },
]

function StatCard({ stat, index, isVisible }) {
  const count = useCountUp(stat.end, 2200, 0, isVisible)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative group text-center"
    >
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-accent-500/20 group-hover:border-accent-500/20 transition-all duration-500">
          <stat.icon className="w-7 h-7 text-accent-400" strokeWidth={1.5} />
        </div>
        <div className="font-heading font-bold text-4xl lg:text-5xl text-white mb-2">
          {stat.displayText ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
              {stat.displayText}
            </span>
          ) : (
            <>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                {count}
              </span>
              <span className="text-accent-400">{stat.suffix}</span>
            </>
          )}
        </div>
        <p className="text-white/60 text-sm font-medium tracking-wide">{stat.label}</p>
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2)

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-900 to-navy" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-500/[0.06] rounded-full blur-[120px]" />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-10 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
