import { useState, useEffect } from 'react'

const NAV_LINKS = ['Story', 'Investing', 'Building', 'Advisory']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
      <nav
        className={`liquid-glass rounded-xl flex items-center justify-between px-6 py-3.5 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-3.5'
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-semibold tracking-tight text-white no-underline"
        >
          VEX
        </a>

        {/* Links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 no-underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-white text-black rounded-lg px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-200 no-underline"
        >
          Start a Chat
        </a>
      </nav>
    </div>
  )
}
