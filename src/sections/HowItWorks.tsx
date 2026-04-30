const STEPS = [
  {
    number: '01',
    title: 'Crie sua conta gratuita',
    desc: 'Basta um e-mail e uma senha. Em menos de um minuto você já está dentro do Zyra — sem burocracia.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 8h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 12h4M6 15h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Acesse e conheça o Zyra',
    desc: 'Explore o app, configure seu desafio personalizado e veja como hábitos, tarefas e treinos ficam organizados em um só lugar.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Conclua sua assinatura',
    desc: 'Escolha o plano que combina com você — mensal, semestral ou anual. O acesso premium é liberado na hora, com garantia de 7 dias.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 11.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 11C3 7.134 6.134 4 10 4h2a8 8 0 010 16h-2C6.134 20 3 16.866 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Acesse de qualquer dispositivo',
    desc: 'Celular, tablet ou computador. Seus dados sincronizam automaticamente — sua rotina está sempre com você.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 9h3a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="13.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-16 sm:py-24 px-5 mb-0 mx-4 sm:mx-5 rounded-3xl md:rounded-[40px]"
      style={{ background: 'var(--color-text-primary)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, #0E0501 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5"
            style={{ color: 'rgba(249,246,240,0.35)' }}
          >
            Seu acesso
          </p>
          <h2
            className="text-[clamp(28px,4vw,48px)] font-medium leading-[1.08] mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: '-1px',
              color: 'var(--color-surface-page)',
            }}
          >
            Como você começa{' '}
            <em className="italic" style={{ color: '#D7C6A8' }}>a usar o Zyra</em>
          </h2>
          <p
            className="text-[16px] max-w-[42ch] mx-auto leading-relaxed"
            style={{ color: 'rgba(249,246,240,0.4)' }}
          >
            Simples, seguro e direto.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-3">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1
            return (
              <div
                key={step.number}
                className={`scroll-reveal stagger-${i + 1} flex items-start gap-5 rounded-[20px] px-6 py-5`}
                style={{
                  background: isLast
                    ? 'rgba(249,246,240,0.04)'
                    : 'rgba(249,246,240,0.06)',
                  border: `1px solid ${isLast ? 'rgba(249,246,240,0.06)' : 'rgba(249,246,240,0.09)'}`,
                }}
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-[14px] flex items-center justify-center"
                  style={{
                    background: i === 0
                      ? 'rgba(68,2,6,0.7)'
                      : i === 1
                      ? 'rgba(74,124,89,0.25)'
                      : i === 2
                      ? 'rgba(68,2,6,0.5)'
                      : 'rgba(249,246,240,0.08)',
                    color: isLast ? 'rgba(249,246,240,0.4)' : 'rgba(249,246,240,0.85)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[16px] font-semibold mb-1 leading-snug"
                    style={{ color: isLast ? 'rgba(249,246,240,0.45)' : 'rgba(249,246,240,0.9)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: isLast ? 'rgba(249,246,240,0.3)' : 'rgba(249,246,240,0.45)' }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Step number */}
                <span
                  className="flex-shrink-0 text-[11px] font-bold tabular-nums mt-0.5"
                  style={{ color: 'rgba(249,246,240,0.18)', fontVariantNumeric: 'tabular-nums' }}
                >
                  {step.number}
                </span>
              </div>
            )
          })}
        </div>

        {/* Security note — last row, muted */}
        <div
          className="flex items-center gap-3 mt-3 rounded-[16px] px-5 py-4"
          style={{
            background: 'rgba(249,246,240,0.03)',
            border: '1px solid rgba(249,246,240,0.05)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
            <path d="M7 1L2 3.5v4C2 10.09 4.24 12.82 7 13.5c2.76-.68 5-3.41 5-6V3.5L7 1z" stroke="rgba(249,246,240,0.3)" strokeWidth="1.2" strokeLinejoin="round"/>
            <path d="M4.5 7l2 2 3-3" stroke="rgba(249,246,240,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p
            className="text-[13px] leading-relaxed"
            style={{ color: 'rgba(249,246,240,0.25)' }}
          >
            Seus dados são criptografados e protegidos. Não armazenamos senhas — cada sessão é verificada com segurança.
          </p>
        </div>
      </div>
    </section>
  )
}
