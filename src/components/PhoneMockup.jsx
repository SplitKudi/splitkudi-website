// Faithful recreation of the actual HomeDashboardPage Flutter screen

const StatCard = ({ label, value, icon, color, gradient }) => (
  <div
    className="rounded-2xl p-3 flex flex-col gap-2"
    style={{
      background: gradient
        ? `linear-gradient(135deg, ${color}22, ${color}0d)`
        : '#141414',
      border: `1px solid ${color}4d`,
    }}
  >
    <div
      className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
      style={{ background: `${color}33` }}
    >
      <span style={{ color }}>{icon}</span>
    </div>
    <p className="text-[#F5F5F5] text-sm font-bold leading-none">{value}</p>
    <p className="text-[#9CA3AF] text-[9px] leading-tight">{label}</p>
  </div>
)

const OverviewRow = ({ label, value, icon, color }) => (
  <div className="flex items-center gap-2">
    <div
      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs flex-shrink-0"
      style={{ background: `${color}22` }}
    >
      <span style={{ color }}>{icon}</span>
    </div>
    <span className="flex-1 text-[#9CA3AF] text-[9px]">{label}</span>
    <span className="text-[#F5F5F5] text-[10px] font-semibold">{value}</span>
  </div>
)

export default function PhoneMockup() {
  return (
    <div className="relative w-[272px]">
      {/* Phone shell */}
      <div className="relative bg-[#1C1C1C] rounded-[44px] p-[10px] shadow-2xl shadow-black/70 border border-white/10">
        {/* Screen */}
        <div className="bg-[#0A0A0A] rounded-[36px] overflow-hidden" style={{ height: 600 }}>

          {/* ── SLIVER APP BAR (gradient header) ── */}
          <div
            className="relative px-4 pt-8 pb-4"
            style={{ background: 'linear-gradient(135deg, #0284C7, #0EA5E9)' }}
          >
            {/* Top row: avatar + name/date + bell */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <span className="text-white text-base">👤</span>
                </div>
                <div>
                  <p className="text-white text-[12px] font-bold leading-none">Hi, Ifeoluwa 👋</p>
                  <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>Sunday, Mar 15</p>
                </div>
              </div>
              <div className="w-7 h-7 flex items-center justify-center">
                <span className="text-white text-base">🔔</span>
              </div>
            </div>

            {/* Balance card */}
            <div
              className="rounded-2xl p-3"
              style={{
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-[10px] mb-1" style={{ color: 'rgba(255,255,255,0.9)' }}>Total Balance</p>
              <p className="text-white text-2xl font-black leading-none">₦20,983</p>
              <p className="text-[9px] mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                You owe ₦12,500 · Others owe you ₦8,483
              </p>
            </div>
          </div>

          {/* ── SCROLLABLE BODY ── */}
          <div className="px-3 py-3 flex flex-col gap-3 overflow-hidden">

            {/* Stats Grid 2x2 */}
            <div className="grid grid-cols-2 gap-2">
              <StatCard label="Total Groups"     value="12"      icon="👥" color="#0EA5E9" gradient />
              <StatCard label="Pending Payments" value="5"       icon="⏳" color="#FBBF24" />
              <StatCard label="This Month"       value="₦45,200" icon="📅" color="#60A5FA" />
              <StatCard label="Settled"          value="23"      icon="✅" color="#4ADE80" />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: '➕', label: 'Add Expense' },
                { icon: '👥', label: 'Create Group' },
              ].map((a) => (
                <div
                  key={a.label}
                  className="rounded-2xl p-3 flex flex-col items-center gap-2"
                  style={{ background: '#141414', border: '1px solid rgba(14,165,233,0.3)' }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-base"
                    style={{ background: 'rgba(14,165,233,0.1)' }}
                  >
                    {a.icon}
                  </div>
                  <p className="text-[#F5F5F5] text-[10px] font-semibold">{a.label}</p>
                </div>
              ))}
            </div>

            {/* Monthly Overview */}
            <div
              className="rounded-2xl p-3"
              style={{ background: '#141414', border: '1px solid #2D2D2D' }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-[#F5F5F5] text-[11px] font-bold">Monthly Overview</p>
                <span
                  className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(14,165,233,0.1)', color: '#0EA5E9' }}
                >
                  Mar 2026
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <OverviewRow label="Total Expenses"  value="₦45,200" icon="🧾" color="#0EA5E9" />
                <OverviewRow label="Amount Paid"     value="₦28,700" icon="💸" color="#4ADE80" />
                <OverviewRow label="Still Owe"       value="₦12,500" icon="↑"  color="#F87171" />
                <OverviewRow label="Others Owe You"  value="₦8,483"  icon="↓"  color="#60A5FA" />
              </div>
              {/* Progress callout */}
              <div
                className="mt-2.5 rounded-xl px-2.5 py-2 flex items-center gap-2"
                style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)' }}
              >
                <span className="text-[#4ADE80] text-[10px]">📈</span>
                <p className="text-[#9CA3AF] text-[9px] leading-tight">You've settled 65% of expenses this month!</p>
              </div>
            </div>
          </div>

          {/* ── BOTTOM NAV ── */}
          <div
            className="absolute bottom-0 left-0 right-0 flex justify-around items-center px-2 py-2"
            style={{ background: '#141414', borderTop: '1px solid #2D2D2D' }}
          >
            {[
              { icon: '🏠', label: 'Home',     active: true  },
              { icon: '👥', label: 'Groups',   active: false },
              { icon: '💳', label: 'Payments', active: false },
              { icon: '👤', label: 'Profile',  active: false },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-0.5 relative">
                <span className={`text-base ${item.active ? '' : 'opacity-40'}`}>{item.icon}</span>
                <span
                  className="text-[8px] font-medium"
                  style={{ color: item.active ? '#0EA5E9' : '#9CA3AF' }}
                >
                  {item.label}
                </span>
                {item.active && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Physical side buttons */}
      <div className="absolute right-0 top-28 w-[3px] h-14 bg-white/10 rounded-l-full translate-x-[1px]" />
      <div className="absolute left-0 top-24 w-[3px] h-9 bg-white/10 rounded-r-full -translate-x-[1px]" />
      <div className="absolute left-0 top-36 w-[3px] h-9 bg-white/10 rounded-r-full -translate-x-[1px]" />
    </div>
  )
}
