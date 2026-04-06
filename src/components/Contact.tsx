import { useInView } from '../hooks/useInView'
import { useState } from 'react'

export function Contact() {
  const { ref, inView } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-divider relative overflow-hidden py-28 px-6 lg:px-20 bg-black">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C8A465]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-2xl mx-auto">
        <div
          className="mb-12 text-center transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-accent/70 uppercase block mb-4">
            Start a Chat
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight" style={{ letterSpacing: '-0.03em' }}>
            Let's talk about what you're building.
          </h2>
        </div>

        {submitted ? (
          <div
            className="liquid-glass rounded-xl border border-white/10 p-12 text-center transition-all duration-700"
            style={{ opacity: inView ? 1 : 0 }}
          >
            <p className="text-xl font-medium mb-2">Message received.</p>
            <p className="text-gray-400 text-sm">We'll be in touch within 48 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transitionDelay: '200ms',
            }}
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="liquid-glass rounded-lg px-5 py-3.5 text-sm text-white placeholder-white/30 border border-white/10 bg-transparent outline-none focus:border-white/30 transition-colors w-full"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="liquid-glass rounded-lg px-5 py-3.5 text-sm text-white placeholder-white/30 border border-white/10 bg-transparent outline-none focus:border-white/30 transition-colors w-full"
            />
            <textarea
              placeholder="Tell us about your venture..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="liquid-glass rounded-lg px-5 py-3.5 text-sm text-white placeholder-white/30 border border-white/10 bg-transparent outline-none focus:border-white/30 transition-colors w-full resize-none"
            />
            <button
              type="submit"
              className="bg-white text-black rounded-lg px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors self-start"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
