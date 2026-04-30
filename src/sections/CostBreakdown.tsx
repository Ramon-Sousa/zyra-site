const COSTS = [
  {
    label: 'Apps de Produtividade',
    sub: 'Todoist, Notion, Habitica, etc.',
    price: 'R$ 350/ano',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="2.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1.5 6.5h15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M5 10h3M5 13h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Apps de Finanças',
    sub: 'Mobills, Organizze, YNAB, etc.',
    price: 'R$ 200/ano',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1.5 7.5h15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="13" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    label: 'Multas e Juros',
    sub: 'Faturas esquecidas por falta de visão.',
    price: 'R$ 120+/ano',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M9 5.5V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="9" cy="12.5" r="0.75" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function CostBreakdown() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-5">
      <div
        className="rounded-[28px] sm:rounded-[40px] px-6 sm:px-12 lg:px-20 py-14 sm:py-20 relative overflow-hidden"
        style={{ background: 'var(--color-brand-burgundy)' }}
      >
        {/* Layered ambient glows — mesmos do FinalCTA */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 60% 50% at 15% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)',
              'radial-gradient(ellipse 50% 60% at 85% 20%, rgba(255,255,255,0.03) 0%, transparent 100%)',
              'radial-gradient(ellipse 80% 40% at 50% 110%, rgba(0,0,0,0.3) 0%, transparent 100%)',
            ].join(', '),
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Header */}
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em] mb-5"
            style={{ color: 'rgba(249,246,240,0.4)' }}
          >
            O cenário atual
          </p>
          <h2
            className="text-[clamp(28px,4.5vw,60px)] font-semibold leading-[1.04] mb-4"
            style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-1.5px', color: 'var(--color-surface-page)' }}
          >
            Quanto custa a{' '}
            <em className="italic" style={{ color: '#D7C6A8' }}>desorganização?</em>
          </h2>
          <p
            className="text-[15px] sm:text-[16px] leading-[1.75] mb-10"
            style={{ color: 'rgba(249,246,240,0.52)' }}
          >
            Assinar vários apps e não ter visão do todo custa caro. Veja o impacto real de não ter tudo no mesmo lugar.
          </p>

          {/* Cost card — inner dark panel */}
          <div
            className="rounded-[20px] sm:rounded-[24px] overflow-hidden mb-6"
            style={{ background: 'rgba(0,0,0,0.28)', border: '1px solid rgba(249,246,240,0.1)' }}
          >
            {/* Label row */}
            <div
              className="px-5 sm:px-6 py-3 border-b"
              style={{ borderColor: 'rgba(249,246,240,0.08)', background: 'rgba(249,246,240,0.04)' }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: 'rgba(249,246,240,0.35)' }}>
                O Cenário Atual
              </p>
            </div>

            {/* Cost rows */}
            <div className="flex flex-col">
              {COSTS.map((c, i) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5"
                  style={{
                    borderBottom: i < COSTS.length - 1 ? '1px solid rgba(249,246,240,0.07)' : undefined,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-[12px] flex items-center justify-center"
                    style={{ background: 'rgba(249,246,240,0.08)', color: 'rgba(249,246,240,0.65)', border: '1px solid rgba(249,246,240,0.1)' }}
                  >
                    {c.icon}
                  </div>
                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] sm:text-[15px] font-semibold" style={{ color: 'rgba(249,246,240,0.9)' }}>
                      {c.label}
                    </p>
                    <p className="text-[12px] mt-0.5" style={{ color: 'rgba(249,246,240,0.38)' }}>
                      {c.sub}
                    </p>
                  </div>
                  {/* Price */}
                  <span className="flex-shrink-0 text-[14px] sm:text-[15px] font-bold" style={{ color: 'rgba(249,246,240,0.55)' }}>
                    {c.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Total row */}
            <div
              className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5"
              style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(249,246,240,0.12)' }}
            >
              <p className="text-[13px] font-medium" style={{ color: 'rgba(249,246,240,0.45)' }}>
                Custo Total Estimado
              </p>
              <p
                className="text-[clamp(24px,3.5vw,40px)] font-semibold leading-none"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-surface-page)', letterSpacing: '-1px' }}
              >
                R$ 670/ano
              </p>
            </div>
          </div>

          {/* Vs Zyra note */}
          <div
            className="flex items-center justify-between rounded-[16px] px-5 py-4"
            style={{ background: 'rgba(249,246,240,0.07)', border: '1px solid rgba(249,246,240,0.12)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(249,246,240,0.12)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3 6-6" stroke="rgba(130,200,150,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-semibold" style={{ color: 'rgba(249,246,240,0.9)' }}>Zyra — Tudo incluso</p>
                <p className="text-[11px]" style={{ color: 'rgba(249,246,240,0.4)' }}>Um único app, sem fragmentação</p>
              </div>
            </div>
            <p className="text-[18px] sm:text-[22px] font-semibold" style={{ fontFamily: 'var(--font-serif)', color: '#D7C6A8', letterSpacing: '-0.5px' }}>
              R$ 64,90/ano
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
