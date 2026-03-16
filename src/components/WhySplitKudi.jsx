import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    emoji: '🤝',
    title: 'Keep friendships intact',
    desc: 'Money disputes ruin relationships. SplitKudi keeps every balance transparent so no one is ever left guessing — or quietly resentful.',
    gradient: 'from-primary to-secondary',
  },
  {
    emoji: '⚡',
    title: 'No more mental math',
    desc: 'Stop calculating splits in your head or on a napkin. Add an expense once and SplitKudi instantly works out who owes what.',
    gradient: 'from-secondary to-secondary-light',
  },
  {
    emoji: '🌍',
    title: 'Built for Nigeria, ready for the world',
    desc: 'Naira-first with support for GHS, KES, ZAR, EGP and more. Built for groups across Africa.',
    gradient: 'from-warning to-amber-600',
  },
  {
    emoji: '🔒',
    title: 'Your data, your groups',
    desc: 'Only the people in your group see your shared expenses. Private by design with secure authentication and encrypted storage.',
    gradient: 'from-info to-blue-600',
  },
  {
    emoji: '📱',
    title: 'Works the way you live',
    desc: 'Whether it\'s a one-off dinner, a recurring house expense, or a week-long trip — SplitKudi handles every scenario without a learning curve.',
    gradient: 'from-success to-emerald-600',
  },
  {
    emoji: '🎯',
    title: 'Settle up, move on',
    desc: 'The goal is zero — zero awkward conversations, zero unpaid debts. SplitKudi makes it easy to close the loop and get back to enjoying life.',
    gradient: 'from-primary-light to-secondary',
  },
]

export default function WhySplitKudi() {
  const headerRef = useReveal()

  return (
    <section id="why" className="py-24 relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            Why SplitKudi
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Stop chasing people.<br />
            <span className="gradient-text">Start settling up.</span>
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-xl mx-auto">
            Every group has that one person who "forgets" to pay back. SplitKudi
            removes the awkwardness by making balances clear, fair, and automatic.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const ref = useReveal(i * 80)
            return (
              <div
                key={r.title}
                ref={ref}
                className="reveal group relative rounded-2xl bg-bg-surface border border-border p-6 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Gradient top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${r.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {r.emoji}
                </div>
                <h3 className="text-base font-bold text-[#F5F5F5] mb-2">{r.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 reveal" ref={useReveal(200)}>
          <div className="relative rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            <p className="relative text-xl sm:text-2xl font-bold text-[#F5F5F5] max-w-2xl mx-auto">
              "Splitting expenses should be the{' '}
              <span className="gradient-text">easiest part</span> of spending
              time with the people you care about."
            </p>
            <p className="relative mt-4 text-sm text-[#9CA3AF]">— The SplitKudi team</p>
          </div>
        </div>
      </div>
    </section>
  )
}
