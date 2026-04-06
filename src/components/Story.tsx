import { useInView } from '../hooks/useInView'

export function Story() {
  const { ref, inView } = useInView()

  return (
    <section id="story" className="section-divider relative overflow-hidden py-28 px-6 lg:px-20 bg-black">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C8A465]/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Decorative background number */}
      <span className="absolute top-4 right-6 text-[clamp(8rem,20vw,16rem)] font-bold text-white/[0.025] leading-none select-none pointer-events-none">
        01
      </span>

      <div ref={ref} className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div
          className="flex flex-col gap-6 transition-all duration-1000"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-accent/70 uppercase">
            Our Story
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight" style={{ letterSpacing: '-0.03em' }}>
            Built for the bold.<br />Designed for what's next.
          </h2>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            VEX was founded on a single belief: the most important companies of the next decade haven't been built yet. We exist to accelerate that future — as investors, builders, and strategic partners to the founders who will define it.
          </p>
          <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
            We don't just write checks. We co-create, challenge assumptions, and build alongside the teams we back — from first principles to first revenue and beyond.
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 gap-6 transition-all duration-1000 delay-200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
            transitionDelay: '200ms',
          }}
        >
          {[
            { value: '40+', label: 'Portfolio companies' },
            { value: '$200M+', label: 'Capital deployed' },
            { value: '12', label: 'Ventures built in-house' },
            { value: '3', label: 'Unicorns backed' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="liquid-glass rounded-xl p-6 border border-white/10 flex flex-col gap-2"
            >
              <span className="text-3xl font-medium tracking-tight text-accent">
                {value}
              </span>
              <span className="text-sm text-gray-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
