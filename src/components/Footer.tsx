const LINKS = {
  Company: ['Story', 'Investing', 'Building', 'Advisory'],
  Connect: ['LinkedIn', 'Twitter / X', 'AngelList'],
  Legal: ['Privacy Policy', 'Terms of Use'],
}

export function Footer() {
  return (
    <footer className="section-divider relative overflow-hidden py-16 px-6 lg:px-20 bg-black">
      {/* Background wordmark */}
      <span className="absolute bottom-0 left-0 text-[clamp(6rem,18vw,14rem)] font-bold text-white/[0.03] leading-none select-none pointer-events-none tracking-tight">
        VEX
      </span>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <span className="text-2xl font-semibold tracking-tight text-white">VEX</span>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Shaping tomorrow with vision and action.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-[0.15em] text-white/30 uppercase">
                {group}
              </span>
              <ul className="flex flex-col gap-2.5 list-none">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors no-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} VEX. All rights reserved.
          </p>

          {/* Moe Barbar credit */}
          <a
            href="https://www.instagram.com/immoebarbar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 no-underline"
            aria-label="Moe Barbar on Instagram"
          >
            {/* Circular avatar badge */}
            <div className="relative flex-shrink-0">
              {/* Spinning dashed ring */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin"
                style={{ animationDuration: '8s' }}
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="rgba(200,164,101,0.35)"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
              </svg>
              {/* Static outer ring */}
              <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-accent/40 transition-colors duration-300 flex items-center justify-center">
                {/* Instagram icon */}
                <svg
                  className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300 leading-none">
                Built with ❤️ by
              </span>
              <span className="text-sm font-medium text-white/70 group-hover:text-accent transition-colors duration-300 leading-none tracking-tight">
                Moe Barbar
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
