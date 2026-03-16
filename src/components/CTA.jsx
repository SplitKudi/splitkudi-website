import { useReveal } from '../hooks/useReveal'

function WhiteAppleBadge() {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-3 bg-white hover:bg-white/90 text-[#0A0A0A] text-left px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-black/20"
    >
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.68zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div>
        <p className="text-[10px] text-black/50 leading-none mb-0.5">Download on the</p>
        <p className="text-sm font-bold leading-none">App Store</p>
      </div>
    </a>
  )
}

function WhitePlayBadge() {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-3 bg-white hover:bg-white/90 text-[#0A0A0A] text-left px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-black/20"
    >
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M3.18 23.76c.3.17.65.2.98.08l11.65-11.65L12 8.38 3.18 23.76z" fill="#EA4335" />
        <path d="M20.82 10.7l-2.87-1.63-3.47 3.47 3.47 3.47 2.9-1.65c.83-.47.83-1.2-.03-1.66z" fill="#FBBC04" />
        <path d="M3.18.24C2.83.07 2.43.1 2.1.34L15.62 12 12 8.38 3.18.24z" fill="#4285F4" />
        <path d="M2.1.34C1.78.57 1.6.95 1.6 1.44v21.12c0 .49.18.87.5 1.1l.08.06L15.62 12 2.1.34z" fill="#34A853" />
      </svg>
      <div>
        <p className="text-[10px] text-black/50 leading-none mb-0.5">Get it on</p>
        <p className="text-sm font-bold leading-none">Google Play</p>
      </div>
    </a>
  )
}

export default function CTA() {
  const ref = useReveal()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className="reveal max-w-4xl mx-auto relative rounded-3xl overflow-hidden"
      >
        {/* Animated gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #AA4400, #CC5500, #E85D2E, #FF9E6B, #E85D2E, #CC5500)',
            backgroundSize: '300% 300%',
            animation: 'gradientShift 6s ease infinite',
          }}
        />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />

        {/* Orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        {/* Content */}
        <div className="relative z-10 text-center py-16 px-8 sm:px-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Ready to split smarter?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
            Download SplitKudi and start tracking group expenses in minutes.
            Available on iOS and Android.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <WhitePlayBadge />
            <WhiteAppleBadge />
          </div>
        </div>
      </div>
    </section>
  )
}
