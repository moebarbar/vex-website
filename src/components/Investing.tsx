import { useInView } from '../hooks/useInView'

const THESIS = [
  {
    title: 'Pre-Seed & Seed',
    desc: 'We back founders before the market sees what they see. Our earliest investments are driven by founder conviction and category potential, not metrics.',
  },
  {
    title: 'Deep Tech',
    desc: 'From AI infrastructure to frontier biotech, we invest in technologies that require patience, expertise, and a long-term horizon.',
  },
  {
    title: 'Category Creation',
    desc: "We seek companies that don't fit existing boxes — those redefining entire industries rather than competing within them.",
  },
  {
    title: 'Global Operators',
    desc: 'We back founders building for the world, not just one market. Our network spans 30+ countries and three decades of operator experience.',
  },
]

export function Investing() {
  const { ref, inView } = useInView()

  return (
    <section id="investing" className="section-divider relative overflow-hidden py-28 px-6 lg:px-20 bg-black">
      {/* Decorative background number */}
      <span className="absolute top-4 right-6 text-[clamp(8rem,20vw,16rem)] font-bold text-white/[0.025] leading-none select-none pointer-events-none">
        02
      </span>

      <div ref={ref} className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-accent/70 uppercase block mb-4">
            Investing
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight max-w-2xl" style={{ letterSpacing: '-0.03em' }}>
            Capital with conviction.
          </h2>
        </div>

        {/* Thesis cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {THESIS.map(({ title, desc }, i) => (
            <div
              key={title}
              className="liquid-glass rounded-xl p-7 border border-white/10 flex flex-col gap-4 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(24px)',
                transitionDelay: `${i * 100 + 200}ms`,
              }}
            >
              <span className="text-xs font-medium tracking-[0.15em] text-accent/60 uppercase">
                0{i + 1}
              </span>
              <h3 className="text-xl font-medium text-white">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
