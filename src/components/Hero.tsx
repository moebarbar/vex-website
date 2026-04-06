import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

const HEADING = ['Shaping tomorrow', 'with vision and action.']

export function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const h1 = h1Ref.current
    if (!h1) return

    // Build character spans
    HEADING.forEach((line, li) => {
      ;[...line].forEach((ch) => {
        if (ch === ' ') {
          const sp = document.createElement('span')
          sp.style.display = 'inline-block'
          sp.style.width = '0.28em'
          h1.appendChild(sp)
        } else {
          const span = document.createElement('span')
          span.className = 'char'
          span.textContent = ch
          h1.appendChild(span)
        }
      })
      if (li < HEADING.length - 1) {
        h1.appendChild(document.createElement('br'))
      }
    })

    // Stagger chars
    const chars = h1.querySelectorAll<HTMLSpanElement>('.char')
    chars.forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), 200 + i * 30)
    })

    // Fade in sub-elements
    const sub = subRef.current
    const btns = btnsRef.current
    const tag = tagRef.current

    const show = (el: HTMLElement | null, delay: number) => {
      if (!el) return
      setTimeout(() => {
        el.style.transition = 'opacity 1000ms ease'
        el.style.opacity = '1'
      }, delay)
    }

    show(sub, 800)
    show(btns, 1200)
    show(tag, 1400)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_URL}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center gap-8 px-6 lg:px-12 pt-28 pb-24">
        {/* Heading + sub + buttons */}
        <div className="flex flex-col gap-7 max-w-3xl">
          <h1
            ref={h1Ref}
            className="text-4xl sm:text-5xl xl:text-7xl font-medium leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          />
          <p
            ref={subRef}
            className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-xl"
            style={{ opacity: 0 }}
          >
            We back visionaries and craft ventures that define what comes next.
          </p>
          <div
            ref={btnsRef}
            className="flex flex-wrap gap-3"
            style={{ opacity: 0 }}
          >
            <a
              href="#contact"
              className="bg-white text-black rounded-lg px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors no-underline"
            >
              Start a Chat
            </a>
            <a
              href="#story"
              className="liquid-glass rounded-lg px-6 py-3 text-sm font-normal text-white border border-white/20 hover:bg-white/10 transition-colors no-underline"
            >
              Explore Now
            </a>
          </div>
        </div>

        {/* Tag — bottom left on mobile, bottom right on lg */}
        <div className="flex lg:justify-end">
          <div
            ref={tagRef}
            className="liquid-glass rounded-xl px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg lg:text-2xl font-light text-white border border-white/20"
            style={{ opacity: 0 }}
          >
            Investing. Building. Advisory.
          </div>
        </div>
      </div>

      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  )
}
