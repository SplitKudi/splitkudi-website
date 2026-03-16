import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why SplitKudi', href: '#why' },
]

// Compact inline badges for the navbar
function NavApple() {
  return (
    <a href="#" className="inline-flex items-center gap-1.5 border border-border hover:border-primary/40 text-[#F5F5F5] px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-bg-variant">
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.68zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      App Store
    </a>
  )
}

function NavPlay() {
  return (
    <a href="#" className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M3.18 23.76c.3.17.65.2.98.08l11.65-11.65L12 8.38 3.18 23.76z" fill="#fff" />
        <path d="M20.82 10.7l-2.87-1.63-3.47 3.47 3.47 3.47 2.9-1.65c.83-.47.83-1.2-.03-1.66z" fill="#fff" opacity=".8" />
        <path d="M3.18.24C2.83.07 2.43.1 2.1.34L15.62 12 12 8.38 3.18.24z" fill="#fff" opacity=".6" />
        <path d="M2.1.34C1.78.57 1.6.95 1.6 1.44v21.12c0 .49.18.87.5 1.1l.08.06L15.62 12 2.1.34z" fill="#fff" opacity=".4" />
      </svg>
      Google Play
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-black shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
            SK
          </div>
          <span className="font-bold text-lg text-[#F5F5F5]">SplitKudi</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop store badges */}
        <div className="hidden md:flex items-center gap-2">
          <NavApple />
          <NavPlay />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#9CA3AF] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-bg-surface/95 backdrop-blur-xl border-b border-border`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#9CA3AF] hover:text-white hover:bg-bg-variant px-3 py-2.5 rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-border flex gap-2">
            <NavApple />
            <NavPlay />
          </div>
        </div>
      </div>
    </nav>
  )
}
