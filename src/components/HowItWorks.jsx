import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    number: '01',
    emoji: '👥',
    title: 'Create a Group',
    desc: 'Name your group, invite friends by email or link. Supports up to 50 members per group with admin roles.',
    gradient: 'from-primary to-secondary',
  },
  {
    number: '02',
    emoji: '🧾',
    title: 'Add an Expense',
    desc: 'Enter what was spent, who paid, and choose Equal, Percentage, or Custom splitting. Balances update instantly.',
    gradient: 'from-secondary to-secondary-light',
  },
  {
    number: '03',
    emoji: '🎉',
    title: 'Settle Up',
    desc: "Tap Settle Up, confirm the amount, and the debt is cleared. Everyone's dashboard reflects it in real-time.",
    gradient: 'from-success to-emerald-600',
  },
]

export default function HowItWorks() {
  const headerRef = useReveal()

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal text-center mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            From expense to settled{' '}
            <span className="gradient-text">in three steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-success opacity-30" />
            <div
              className="absolute inset-0 h-full"
              style={{
                background: 'linear-gradient(90deg, #0EA5E9, #38BDF8, #4ADE80)',
                backgroundSize: '200% 100%',
                animation: 'gradientShift 3s linear infinite',
                opacity: 0.6,
              }}
            />
          </div>

          {steps.map((step, i) => {
            const ref = useReveal(i * 150)
            return (
              <div
                key={step.number}
                ref={ref}
                className="reveal flex flex-col items-center text-center group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Circle with number */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.emoji}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-bg border-2 border-border flex items-center justify-center">
                    <span className="text-[9px] font-black text-[#9CA3AF]">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">{step.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Split type showcase */}
        <div className="mt-20 grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Equal Split', desc: 'Everyone pays the same — simple and fair.', example: '₦10,000 ÷ 4 = ₦2,500 each', color: 'primary' },
            { label: 'Percentage Split', desc: 'Assign custom percentages to each person.', example: '40% · 35% · 25%', color: 'secondary' },
            { label: 'Custom Amount', desc: 'Specify exact naira amounts per person.', example: '₦5k · ₦3k · ₦2k', color: 'success' },
          ].map((t, i) => {
            const ref = useReveal(i * 100)
            return (
              <div
                key={t.label}
                ref={ref}
                className="reveal gradient-border rounded-2xl bg-bg-surface p-5 hover:bg-bg-variant transition-all hover:-translate-y-1 duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className={`text-xs font-bold uppercase tracking-widest text-${t.color === 'success' ? '[#4ADE80]' : t.color === 'secondary' ? 'secondary' : 'primary-light'} mb-2`}>
                  {t.label}
                </p>
                <p className="text-[#9CA3AF] text-sm mb-3">{t.desc}</p>
                <div className="bg-bg rounded-xl px-3 py-2">
                  <code className="text-xs font-mono text-[#F5F5F5]/70">{t.example}</code>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
