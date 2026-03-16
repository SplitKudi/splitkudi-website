import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    name: 'Chisom A.',
    role: 'Product Manager, Lagos',
    avatar: 'https://i.pravatar.cc/80?img=47',
    text: "Finally an app that handles ₦ properly! We use SplitKudi for our office lunch pool every week. Zero arguments since we started.",
    stars: 5,
  },
  {
    name: 'Emeka O.',
    role: 'Software Engineer, Abuja',
    avatar: 'https://i.pravatar.cc/80?img=33',
    text: "Went on a 10-day trip with 7 friends. SplitKudi tracked every meal, hotel, and transport. Settlement took 5 minutes at the airport.",
    stars: 5,
  },
  {
    name: 'Fatimah B.',
    role: 'Medical Student, Ibadan',
    avatar: 'https://i.pravatar.cc/80?img=22',
    text: "Our house of 5 used to argue about rent and utilities monthly. Now we just open SplitKudi. Life is so much calmer.",
    stars: 5,
  },
  {
    name: 'Seun K.',
    role: 'Entrepreneur, Port Harcourt',
    avatar: 'https://i.pravatar.cc/80?img=60',
    text: "The percentage split feature saved us on a birthday dinner where some people only had appetisers. Exactly what we needed.",
    stars: 5,
  },
  {
    name: 'Tobi M.',
    role: 'Data Analyst, London / Lagos',
    avatar: 'https://i.pravatar.cc/80?img=15',
    text: "Multi-currency support is a game changer for my diaspora friend group. We mix naira and dollars all the time.",
    stars: 5,
  },
  {
    name: 'Ngozi E.',
    role: 'Teacher, Enugu',
    avatar: 'https://i.pravatar.cc/80?img=44',
    text: "I introduced SplitKudi to my church committee and we finally have clean records of who contributed what. Bless this app.",
    stars: 5,
  },
]

function TestimonialCard({ t }) {
  return (
    <div className="gradient-border rounded-2xl bg-bg-surface p-6 w-[320px] flex-shrink-0 hover:bg-bg-variant transition-colors duration-300">
      <div className="flex gap-0.5 text-warning text-base mb-4">
        {'★'.repeat(t.stars)}
      </div>
      <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5 line-clamp-4">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border-2 border-border" />
        <div>
          <p className="text-sm font-bold text-[#F5F5F5]">{t.name}</p>
          <p className="text-xs text-[#9CA3AF]">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useReveal()
  // Duplicate for seamless scroll
  const all = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Loved by groups{' '}
            <span className="gradient-text">across Nigeria</span>
          </h2>
        </div>
      </div>

      {/* Infinite marquee — row 1 */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee w-max">
          {all.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — reversed direction */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 w-max" style={{ animation: 'marquee 36s linear infinite reverse' }}>
          {[...testimonials].reverse().concat([...testimonials].reverse()).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
