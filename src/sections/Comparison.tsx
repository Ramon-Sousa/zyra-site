const ROWS = [
  { feature: 'Tudo em um só lugar', glm: true, other: false },
  { feature: 'Pagamento único', glm: true, other: false },
  { feature: 'Hábitos + Finanças + Treino', glm: true, other: false },
  { feature: 'Acesso vitalício', glm: true, other: false },
  { feature: 'Atualizações gratuitas', glm: true, other: false },
  { feature: 'Custo anual', glm: 'R$64,90', other: 'R$930+' },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="rgba(74,124,89,0.1)" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="var(--color-status-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="rgba(184,74,74,0.08)" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="var(--color-status-error)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function Comparison() {
  return (
    <section className="py-12 sm:py-24 px-5 max-w-5xl mx-auto">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-burgundy)] mb-4">
        Comparativo
      </p>
      <h2
        className="text-[clamp(28px,4vw,52px)] font-medium text-[var(--color-text-primary)] leading-[1.08] tracking-tight mb-10 sm:mb-14"
        style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1px' }}
      >
        Zyra vs.{' '}
        <em className="italic text-[var(--color-brand-burgundy)]">a bagunça atual.</em>
      </h2>

      <div
        className="rounded-[20px] sm:rounded-[28px] overflow-hidden border border-[var(--color-border-default)]"
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        {/* header */}
        <div className="grid grid-cols-[1fr_72px_88px] sm:grid-cols-[1fr_120px_120px] bg-[var(--color-surface-section)] px-4 sm:px-6 py-4 border-b border-[var(--color-border-default)]">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Funcionalidade</span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-burgundy)] text-center">Zyra</span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] text-center leading-tight">Apps sep.</span>
        </div>

        {ROWS.map((r, i) => (
          <div
            key={r.feature}
            className={`grid grid-cols-[1fr_72px_88px] sm:grid-cols-[1fr_120px_120px] px-4 sm:px-6 py-3.5 sm:py-4 items-center border-t border-[var(--color-border-subtle)] hover:bg-[rgba(68,2,6,0.02)] transition-colors ${
              i === ROWS.length - 1 ? 'bg-[rgba(68,2,6,0.03)]' : 'bg-[var(--color-surface-card)]'
            }`}
          >
            <span className="text-[13px] sm:text-[14px] text-[var(--color-text-secondary)] font-medium pr-2">{r.feature}</span>

            <span className="flex items-center justify-center">
              {typeof r.glm === 'boolean'
                ? <CheckIcon />
                : <span className="text-[12px] sm:text-[13px] text-[var(--color-status-success)] font-bold">{r.glm}</span>
              }
            </span>

            <span className="flex items-center justify-center">
              {typeof r.other === 'boolean'
                ? <XIcon />
                : <span className="text-[12px] sm:text-[13px] text-[var(--color-status-error)] font-bold">{r.other}</span>
              }
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
