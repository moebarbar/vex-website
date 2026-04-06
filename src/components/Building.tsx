import { useInView } from '../hooks/useInView'

const VENTURES = [
  {
    name: 'Foundry',
    category: 'AI Infrastructure',
    stage: 'Live',
    desc: 'Developer tools for building, deploying, and monitoring production AI systems at scale.',
  },
  {
    name: 'Meridian',
    category: 'FinTech',
    stage: 'Live',
    desc: 'Embedded financial infrastructure for the next generation of marketplace companies.',
  },
  {
    name: 'Orbit',
    category: 'Future of Work',
    stage: 'Building',
    desc: 'Async-first operating system for distributed teams who build products, not just manage tasks.',
  },
  {
    name: 'Lumen',
    category: 'Health Tech',
    stage: 'Stealth',
    desc: 'Precision wellness platform using longitudinal biomarkers to personalize human performance.',
  },
]

function StageBadge({ stage }: { stage: string }) {
  if (stage === 'Live') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400/80">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
        Live
      </span>
    )
  }
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
        stage === 'Building'
          ? 'bg-white/10 text-white/40'
          : 'bg-white/5 text-white/30'
      }`}
    >
      {stage}
    </span>
  )
}

export function Building() {
  const { ref, inView } = useInView()

  return (
    <section id="building" className="section-divider relative overflow-hidden py-28 px-6 lg:px-20 bg-black">
      {/* Decorative background number */}
      <span className="absolute top-4 right-6 text-[clamp(8rem,20vw,16rem)] font-bold text-white/[0.025] leading-none select-none pointer-events-none">
        03
      </span>

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <div
          className="mb-16 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-accent/70 uppercase block mb-4">
            Building
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight max-w-2xl" style={{ letterSpacing: '-0.03em' }}>
            Ventures we create from scratch.
          </h2>
        </div>

        <div className="flex flex-col gap-px border border-white/10 rounded-xl overflow-hidden">
          {VENTURES.map(({ name, category, stage, desc }, i) => (
            <div
              key={name}
              className="liquid-glass flex flex-col sm:flex-row sm:items-center gap-4 px-7 py-6 border-b border-white/10 last:border-0 transition-all duration-700 group hover:bg-white/5"
              style={{
                opacity: inView ? 1 : 0,
                transitionDelay: `${i * 80 + 200}ms`,
              }}
            >
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium text-white">{name}</h3>
                  <StageBadge stage={stage} />
                </div>
                <p className="text-sm text-gray-400 max-w-xl leading-relaxed">{desc}</p>
              </div>
              <span className="text-sm text-gray-500 sm:text-right whitespace-nowrap">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
