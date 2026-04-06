import { useState, useEffect } from 'react'

const NAV_LINKS = ['Story', 'Investing', 'Building', 'Advisory']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5">
        <nav
          className={`liquid-glass rounded-xl flex items-center justify-between px-5 sm:px-6 transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-3.5'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={close}
            className="text-xl sm:text-2xl font-semibold tracking-tight text-white no-underline"
          >
            VEX
          </a>

          {/* Links — desktop only */}
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

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={close}
              className="bg-white text-black rounded-lg px-4 sm:px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-200 no-underline"
            >
              Start a Chat
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={close}
            className="text-3xl font-medium text-white/80 hover:text-white no-underline transition-all duration-200"
            style={{
              transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
            }}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          onClick={close}
          className="mt-4 bg-white text-black rounded-lg px-8 py-3 text-base font-medium hover:bg-white/90 transition-colors no-underline"
          style={{
            transitionDelay: menuOpen ? `${NAV_LINKS.length * 60}ms` : '0ms',
            opacity: menuOpen ? 1 : 0,
          }}
        >
          Start a Chat
        </a>
      </div>
    </>
  )
}
