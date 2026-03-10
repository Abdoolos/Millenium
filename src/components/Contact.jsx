import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Phone, MapPin, Clock, Send, CheckCircle2, User, MessageSquare } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Telefon', value: '944 46 425', href: 'tel:94446425' },
  { icon: MapPin, label: 'Område', value: 'Oslo & Viken Område', href: null },
  { icon: Clock, label: 'Åpningstider', value: 'Man–Fre: 08:00–18:00\nLør: 09:00–15:00', href: null },
]

const serviceOptions = [
  'Renhold og vedlikehold',
  'Reparasjoner og vaktmester',
  'Transport og levering',
  'Hagearbeid og plenklipping',
  'Avfallshåndtering og bortkjøring',
]

export default function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)
  const [formData, setFormData] = useState({ navn: '', telefon: '', tjeneste: '', melding: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ navn: '', telefon: '', tjeneste: '', melding: '' })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="kontakt" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-900 to-navy" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent-500/[0.05] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-300/[0.05] rounded-full blur-[120px]" />

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent-400 text-sm font-semibold mb-5 tracking-wide border border-white/10">
            Kontakt oss
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Klar til å{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
              komme i gang?
            </span>
          </h2>
          <p className="mt-5 text-white/50 text-lg leading-relaxed">
            Ta kontakt med oss i dag – vi gir deg et raskt og uforpliktende svar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a href={item.href} className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-accent-500/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/15 flex items-center justify-center shrink-0 group-hover:bg-accent-500/25 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-white font-semibold text-lg">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/15 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-white font-medium whitespace-pre-line leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-accent-500/15 to-accent-600/10 border border-accent-500/20 mt-8"
            >
              <p className="text-white/80 text-sm leading-relaxed">
                Trenger du hjelp raskt? Ring oss direkte på{' '}
                <a href="tel:94446425" className="text-accent-400 font-semibold hover:text-accent-300 transition-colors">
                  944 46 425
                </a>
                {' '}så hjelper vi deg umiddelbart.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/[0.08]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-3">Takk for din henvendelse!</h3>
                    <p className="text-white/50 max-w-sm">Vi tar kontakt med deg så snart som mulig.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-white/50 text-sm font-medium mb-2">Navn</label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 transition-colors duration-300 ${focused === 'navn' ? 'text-accent-400' : 'text-white/25'}`} />
                        <input
                          type="text"
                          name="navn"
                          value={formData.navn}
                          onChange={handleChange}
                          onFocus={() => setFocused('navn')}
                          onBlur={() => setFocused('')}
                          required
                          placeholder="Ditt fulle navn"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-white/50 text-sm font-medium mb-2">Telefon</label>
                      <div className="relative">
                        <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 transition-colors duration-300 ${focused === 'telefon' ? 'text-accent-400' : 'text-white/25'}`} />
                        <input
                          type="tel"
                          name="telefon"
                          value={formData.telefon}
                          onChange={handleChange}
                          onFocus={() => setFocused('telefon')}
                          onBlur={() => setFocused('')}
                          required
                          placeholder="Ditt telefonnummer"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div className="relative">
                      <label className="block text-white/50 text-sm font-medium mb-2">Tjeneste</label>
                      <select
                        name="tjeneste"
                        value={formData.tjeneste}
                        onChange={handleChange}
                        onFocus={() => setFocused('tjeneste')}
                        onBlur={() => setFocused('')}
                        required
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 appearance-none cursor-pointer ${!formData.tjeneste ? 'text-white/25' : ''}`}
                      >
                        <option value="" className="bg-navy text-white/50">Velg en tjeneste</option>
                        {serviceOptions.map(opt => (
                          <option key={opt} value={opt} className="bg-navy text-white">{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label className="block text-white/50 text-sm font-medium mb-2">Melding</label>
                      <div className="relative">
                        <MessageSquare className={`absolute left-4 top-4 w-4.5 h-4.5 transition-colors duration-300 ${focused === 'melding' ? 'text-accent-400' : 'text-white/25'}`} />
                        <textarea
                          name="melding"
                          value={formData.melding}
                          onChange={handleChange}
                          onFocus={() => setFocused('melding')}
                          onBlur={() => setFocused('')}
                          rows={4}
                          placeholder="Beskriv hva du trenger hjelp med..."
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder-white/25 focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold text-base shadow-xl shadow-accent-500/20 hover:shadow-accent-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 mt-2"
                    >
                      <Send className="w-4.5 h-4.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                      Send henvendelse
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
