import { ArrowRight } from 'lucide-react'
import PhoneMockup from './PhoneMockup'
import { AppStoreBadge, PlayStoreBadge } from './StoreBadges'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px] animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/5 rounded-full blur-[140px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(204,85,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(204,85,0,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div ref={ref} className="reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary-light">Now in public beta — try for free</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-balance">
              Split bills.{' '}
              <br />
              <span className="gradient-text">No drama.</span>
            </h1>

            <p className="mt-6 text-lg text-[#9CA3AF] leading-relaxed max-w-lg">
              SplitKudi makes group spending painless. Track shared expenses,
              split by any method, and settle up instantly — so friendships
              stay intact.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <PlayStoreBadge />
              <AppStoreBadge />
            </div>
            <a
              href="#how-it-works"
              className="group mt-4 inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200 font-medium"
            >
              See how it works
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {['₦ NGN · ₵ GHS · KSh KES · R ZAR', 'Equal, % & Custom splits', 'Free to get started'].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9CA3AF] bg-bg-variant border border-border px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              <PhoneMockup />

              {/* Floating notification chips */}
              <div className="absolute -left-8 top-1/4 bg-bg-surface border border-border rounded-2xl px-4 py-3 shadow-xl shadow-black/50 animate-float flex items-center gap-2.5 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success text-base flex-shrink-0">✅</div>
                <div>
                  <p className="text-xs font-semibold text-[#F5F5F5]">Ada settled up</p>
                  <p className="text-[11px] text-[#9CA3AF]">₦5,000 received</p>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/3 bg-bg-surface border border-border rounded-2xl px-4 py-3 shadow-xl shadow-black/50 animate-float-delay flex items-center gap-2.5 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center text-base flex-shrink-0">🎉</div>
                <div>
                  <p className="text-xs font-semibold text-[#F5F5F5]">Group settled!</p>
                  <p className="text-[11px] text-[#9CA3AF]">Ibadan Trip · Done</p>
                </div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 to-secondary/10 rounded-[40px] blur-3xl scale-90 translate-y-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
