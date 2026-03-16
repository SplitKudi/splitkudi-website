import { useReveal } from '../hooks/useReveal'

const highlights = [
  { icon: '💳', label: 'Equal, percentage & custom splits' },
  { icon: '🌍', label: 'NGN, GHS, KES, ZAR & more' },
  { icon: '👥', label: 'Up to 50 members per group' },
  { icon: '🔔', label: 'Push & email payment reminders' },
]

export default function Stats() {
  const ref = useReveal()

  return (
    <section ref={ref} className="reveal relative py-14 border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {h.icon}
              </div>
              <p className="text-sm font-medium text-[#9CA3AF] leading-snug max-w-[140px]">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
