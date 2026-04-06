const SEGMENT = 'Investing · Building · Advisory · Shaping Tomorrow · VEX · '
// Six copies — two groups of three so the -50% translate loops seamlessly
const FULL = SEGMENT.repeat(6)

export function Marquee() {
  return (
    <div
      className="section-divider overflow-hidden py-5 bg-black select-none"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-xs tracking-[0.25em] uppercase text-white/25 pr-0">
          {FULL}
        </span>
        {/* Duplicate for seamless loop */}
        <span className="text-xs tracking-[0.25em] uppercase text-white/25 pr-0">
          {FULL}
        </span>
      </div>
    </div>
  )
}
