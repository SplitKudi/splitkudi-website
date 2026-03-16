import { useReveal } from '../hooks/useReveal'

const features = [
  {
    id: 'split',
    icon: '⚡',
    iconBg: 'from-primary to-secondary',
    title: 'Flexible Splitting',
    desc: 'Equal splits, custom amounts, or percentage-based — you decide how the bill is shared. Works for any scenario.',
    size: 'large',
    extra: (
      <div className="mt-6">
        <div className="flex rounded-xl overflow-hidden h-10 text-xs font-bold">
          <div className="flex items-center justify-center bg-primary text-white" style={{ width: '33%' }}>33%</div>
          <div className="flex items-center justify-center bg-secondary text-white" style={{ width: '25%' }}>25%</div>
          <div className="flex items-center justify-center bg-secondary-light text-bg" style={{ width: '42%' }}>42%</div>
        </div>
        <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-1.5 px-0.5">
          <span>Chidi</span><span>Ada</span><span>Tunde</span>
        </div>
      </div>
    ),
  },
  {
    id: 'settle',
    icon: '✅',
    iconBg: 'from-success to-emerald-600',
    title: 'Instant Settle Up',
    desc: 'Clear balances with a tap. Real-time green/red indicators show who owes who at a glance.',
    size: 'normal',
  },
  {
    id: 'history',
    icon: '📋',
    iconBg: 'from-info to-blue-600',
    title: 'Payment History',
    desc: 'Full activity log with Pending / Settled filters so you always know the status of every expense.',
    size: 'normal',
  },
  {
    id: 'groups',
    icon: '👥',
    iconBg: 'from-warning to-amber-600',
    title: 'Group Management',
    desc: 'Create unlimited groups for any occasion. Add up to 50 members with admin controls.',
    size: 'normal',
  },
  {
    id: 'currency',
    icon: '💱',
    iconBg: 'from-primary-light to-secondary',
    title: 'African Currencies',
    desc: 'Switch between NGN, GHS, KES, ZAR, EGP and more. Built for groups across the continent.',
    size: 'wide',
    extra: (
      <div className="flex flex-wrap gap-2 mt-4">
        {['₦ NGN', '₵ GHS', 'KSh KES', 'R ZAR', 'E£ EGP'].map((c) => (
          <span key={c} className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold">
            {c}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: 'reminders',
    icon: '🔔',
    iconBg: 'from-purple-500 to-violet-700',
    title: 'Smart Reminders',
    desc: 'Push and email reminders nudge members to settle up so you never have to chase anyone.',
    size: 'normal',
  },
]

function FeatureCard({ feature, delay }) {
  const ref = useReveal(delay)

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay ? 1 : 0} group gradient-border rounded-2xl bg-bg-surface p-6 hover:bg-bg-variant transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 ${
        feature.size === 'large' ? 'lg:row-span-2' : ''
      } ${feature.size === 'wide' ? 'lg:col-span-2' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">{feature.title}</h3>
      <p className="text-sm text-[#9CA3AF] leading-relaxed">{feature.desc}</p>
      {feature.extra}
    </div>
  )
}

export default function Features() {
  const headerRef = useReveal()

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Everything you need to{' '}
            <span className="gradient-text">split without stress</span>
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-xl mx-auto">
            Built for groups of every kind — housemates, travel crews, office teams, and friend squads.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
