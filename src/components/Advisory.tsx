import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    title: 'Go-to-Market Strategy',
    desc: 'From ICP definition to channel selection, we help founders build repeatable growth engines.',
  },
  {
    title: 'Fundraising Architecture',
    desc: "Narrative, positioning, data room, and investor targeting — we've been on both sides of the table.",
  },
  {
    title: 'Talent & Org Design',
    desc: 'Early hiring decisions define culture. We help founders build teams that scale without breaking.',
  },
  {
    title: 'Product & Vision',
    desc: 'Pressure-testing product strategy, roadmap sequencing, and long-horizon product-market fit.',
  },
  {
    title: 'Operating Model',
    desc: 'Defining cadences, metrics, and decision frameworks that keep companies focused as they scale.',
  },
  {
    title: 'Exit & Liquidity',
    desc: 'Strategic M&A advisory, secondary transactions, and pre-IPO positioning for founder liquidity.',
  },
]

export function Advisory() {
  const { ref, inView } = useInView()

  return (
    <section id="advisory" className="section-divider relative overflow-hidden py-28 px-6 lg:px-20 bg-black">
      {/* Decorative background number */}
      <span className="absolute top-4 right-6 text-[clamp(8rem,20vw,16rem)] font-bold text-white/[0.025] leading-none select-none pointer-events-none">
        04
      </span>

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <div
          className="mb-16 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-accent/70 uppercase block mb-4">
            Advisory
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight max-w-2xl" style={{ letterSpacing: '-0.03em' }}>
            Counsel from operators, not spectators.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ title, desc }, i) => (
            <div
              key={title}
              className="liquid-glass rounded-xl p-6 border border-white/10 flex flex-col gap-3 transition-all duration-700 group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transitionDelay: `${i * 80 + 200}ms`,
              }}
            >
              <h3 className="text-base font-medium text-white">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              <span className="text-sm text-white/0 group-hover:text-white/50 transition-all duration-300 mt-auto pt-2 -translate-x-1 group-hover:translate-x-0 inline-block">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
