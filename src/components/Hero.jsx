import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const trustItems = [
  { label: 'Pålitelig' },
  { label: 'Lokal' },
  { label: 'Rask respons' },
]

export default function Hero() {
  return (
    <section id="hjem" className="relative bg-white overflow-hidden">
      {/* Subtle warm radial gradient on right side */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-orange-50/60 via-orange-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <div className="text-center lg:text-left order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-500 text-white text-sm font-semibold tracking-wide shadow-lg shadow-accent-500/20">
                Oslo & Viken Område
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-navy leading-[1.15] tracking-tight"
            >
              Vi hjelper deg med{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">
                  hverdagen
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-accent-500/15 rounded-sm -skew-x-2" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base sm:text-lg text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Praktisk hjelp og fleksible hverdagstjenester du kan stole på.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                Kontakt oss
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#tjenester"
                onClick={(e) => { e.preventDefault(); document.querySelector('#tjenester')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-accent-500 text-accent-600 font-semibold text-sm hover:bg-accent-50 transition-all duration-300"
              >
                Se tjenester
              </a>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex items-center gap-5 sm:gap-7 justify-center lg:justify-start flex-wrap"
            >
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                  <span className="text-sm font-medium text-text-secondary">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Image merged with background */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 relative"
          >
            <div className="relative mx-auto lg:mx-0 max-w-[500px] lg:max-w-none">
              <div className="w-full aspect-[6/5] rounded-[2rem] overflow-hidden relative">
                <img
                  src="/images/hero2.png"
                  alt="Millenium Servicesenter — profesjonelt team i Oslo & Viken"
                  className="w-full h-full object-cover"
                />
                {/* Soft blending edges */}
                <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_60px_30px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
