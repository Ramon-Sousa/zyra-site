const REGISTER_URL = 'https://zyra.meuglowmode.site/register'

const PLANS = [
  {
    name: 'Mensal',
    price: '9',
    cents: '90',
    period: 'por mês',
    checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=oTfeJI',
    badge: null,
    featured: false,
    desc: 'Comece sem compromisso e cancele quando quiser.',
    features: [
      'Desafio personalizado de rotina',
      'Rastreador de hábitos',
      'Centralizador de tarefas',
      'Organizador de treinos',
      'Journal diário',
      'Controle financeiro',
      'Temas personalizados',
      'Garantia de 7 dias',
    ],
  },
  {
    name: 'Semestral',
    price: '41',
    cents: '90',
    period: 'por semestre',
    checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=h65OdV',
    badge: 'Mais popular',
    featured: true,
    desc: 'O equilíbrio ideal entre custo e compromisso real.',
    features: [
     'Desafio personalizado de rotina',
      'Rastreador de hábitos',
      'Centralizador de tarefas',
      'Organizador de treinos',
      'Journal diário',
      'Controle financeiro',
      'Temas personalizados',
      'Suporte prioritário',
      'Garantia de 7 dias',
    ],
  },
  {
    name: 'Anual',
    price: '64',
    cents: '90',
    period: 'por ano',
    checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=SmYDBY',
    badge: 'Melhor custo',
    featured: false,
    desc: 'Compromisso total com a sua rotina pelo menor preço.',
    features: [
     'Desafio personalizado de rotina',
      'Rastreador de hábitos',
      'Centralizador de tarefas',
      'Organizador de treinos',
      'Journal diário',
      'Controle financeiro',
      'Temas personalizados',
      'Suporte prioritário',
      'Garantia de 7 dias',
      'Acesso antecipado a novas funcionalidades',
    ],
  },
]

function Check({ featured }: { featured: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-[1px]">
      <path
        d="M2.5 7l3 3 6-6"
        stroke={featured ? 'rgba(249,246,240,0.6)' : 'var(--color-status-success)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-5 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-burgundy)] mb-4">
          Investimento
        </p>
        <h2
          className="text-[clamp(32px,4.2vw,56px)] font-semibold text-[var(--color-text-primary)] leading-[1.06] mb-4"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1.5px' }}
        >
         Como deseja se 
          <em className="italic text-[var(--color-brand-burgundy)]"> organizar?</em>
        </h2>
        <p className="text-[16px] text-[var(--color-text-secondary)] max-w-lg mx-auto leading-[1.75]">
          Escolha o plano que combina com o seu ritmo. Cancele quando quiser. Garantia de 7 dias em todos.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch pt-6">
        {PLANS.map((plan, idx) => (
          <div
            key={plan.name}
            className={`scroll-reveal stagger-${idx + 1} relative rounded-[28px] flex flex-col transition-transform duration-300 hover:-translate-y-1`}
            style={
              plan.featured
                ? {
                    background: 'var(--color-text-primary)',
                    border: '1px solid rgba(249,246,240,0.1)',
                    boxShadow: '0 32px 80px rgba(28,20,16,0.3)',
                  }
                : {
                    background: 'var(--color-surface-card)',
                    border: '1px solid var(--color-border-default)',
                    boxShadow: 'var(--shadow-card)',
                  }
            }
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap"
                  style={
                    plan.featured
                      ? { background: 'var(--color-surface-page)', color: 'var(--color-brand-burgundy)' }
                      : { background: 'var(--color-brand-burgundy)', color: 'var(--color-surface-page)' }
                  }
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'currentColor', opacity: 0.55 }} />
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              {/* Plan name */}
              <p
                className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4"
                style={{ color: plan.featured ? 'rgba(249,246,240,0.4)' : 'var(--color-text-muted)' }}
              >
                {plan.name}
              </p>

              {/* Price — large, editorial */}
              <div className="flex items-end gap-0.5 mb-1">
                <span
                  className="text-[17px] font-semibold mb-2.5"
                  style={{ color: plan.featured ? 'rgba(249,246,240,0.45)' : 'var(--color-text-secondary)' }}
                >
                  R$
                </span>
                <span
                  className="text-[clamp(52px,6.5vw,68px)] font-semibold leading-none tracking-[-2px]"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: plan.featured ? 'var(--color-surface-page)' : 'var(--color-text-primary)',
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-[24px] font-semibold mb-2.5"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: plan.featured ? 'rgba(249,246,240,0.65)' : 'var(--color-text-secondary)',
                  }}
                >
                  ,{plan.cents}
                </span>
              </div>
              <p
                className="text-[13px] mb-2 font-medium"
                style={{ color: plan.featured ? 'rgba(249,246,240,0.3)' : 'var(--color-text-muted)' }}
              >
                {plan.period}
              </p>

              {/* Desc */}
              <p
                className="text-[14px] leading-[1.7] mb-7"
                style={{ color: plan.featured ? 'rgba(249,246,240,0.5)' : 'var(--color-text-secondary)' }}
              >
                {plan.desc}
              </p>

              {/* CTA */}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill flex items-center justify-center gap-2 w-full h-[52px] rounded-[24px] text-[14px] font-semibold transition-all active:scale-[0.98] mb-7"
                style={
                  plan.featured
                    ? {
                        background: 'var(--color-surface-page)',
                        color: 'var(--color-brand-burgundy)',
                        boxShadow: '0 8px 28px rgba(0,0,0,0.22)',
                      }
                    : {
                        background: 'var(--color-brand-burgundy)',
                        color: 'var(--color-surface-page)',
                        boxShadow: '0 6px 24px rgba(68,2,6,0.26)',
                      }
                }
              >
                Começar agora
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Divider */}
              <div
                className="mb-5"
                style={{ borderTop: `1px solid ${plan.featured ? 'rgba(249,246,240,0.09)' : 'var(--color-border-subtle)'}` }}
              />

              {/* Feature label */}
              <p
                className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4"
                style={{ color: plan.featured ? 'rgba(249,246,240,0.28)' : 'var(--color-text-muted)' }}
              >
                Incluso
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check featured={plan.featured} />
                    <span
                      className="text-[13px] leading-snug"
                      style={{ color: plan.featured ? 'rgba(249,246,240,0.62)' : 'var(--color-text-secondary)' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Guarantee note */}
              <p
                className="text-[11px] text-center mt-6 pt-5"
                style={{
                  color: plan.featured ? 'rgba(249,246,240,0.2)' : 'var(--color-text-muted)',
                  borderTop: `1px solid ${plan.featured ? 'rgba(249,246,240,0.06)' : 'var(--color-border-subtle)'}`,
                }}
              >
                Garantia de 7 dias · Cancele quando quiser
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-[13px] text-[var(--color-text-muted)] mt-8">
        Todos os planos incluem acesso completo ao Zyra
      </p>
    </section>
  )
}
