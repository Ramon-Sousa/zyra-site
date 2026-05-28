const REGISTER_URL = 'https://zyra.meuglowmode.site/register'

/*
 * Cards de planos ocultos temporariamente.
 * Estratégia atual: convidar o usuário a testar a aplicação gratuitamente,
 * sem expor preços, planos ou assinaturas.
 *
 * const PLANS = [
 *   {
 *     name: 'Mensal',
 *     price: '9',
 *     cents: '90',
 *     period: 'por mês',
 *     checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=oTfeJI',
 *     badge: null,
 *     featured: false,
 *     desc: 'Comece sem compromisso e cancele quando quiser.',
 *     features: [
 *       'Desafio personalizado de rotina',
 *       'Rastreador de hábitos',
 *       'Centralizador de tarefas',
 *       'Organizador de treinos',
 *       'Journal diário',
 *       'Controle financeiro',
 *       'Temas personalizados',
 *       'Garantia de 7 dias',
 *     ],
 *   },
 *   {
 *     name: 'Semestral',
 *     price: '41',
 *     cents: '90',
 *     period: 'por semestre',
 *     checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=h65OdV',
 *     badge: 'Mais popular',
 *     featured: true,
 *     desc: 'O equilíbrio ideal entre custo e compromisso real.',
 *     features: [
 *      'Desafio personalizado de rotina',
 *       'Rastreador de hábitos',
 *       'Centralizador de tarefas',
 *       'Organizador de treinos',
 *       'Journal diário',
 *       'Controle financeiro',
 *       'Temas personalizados',
 *       'Suporte prioritário',
 *       'Garantia de 7 dias',
 *     ],
 *   },
 *   {
 *     name: 'Anual',
 *     price: '64',
 *     cents: '90',
 *     period: 'por ano',
 *     checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=SmYDBY',
 *     badge: 'Melhor custo',
 *     featured: false,
 *     desc: 'Compromisso total com a sua rotina pelo menor preço.',
 *     features: [
 *      'Desafio personalizado de rotina',
 *       'Rastreador de hábitos',
 *       'Centralizador de tarefas',
 *       'Organizador de treinos',
 *       'Journal diário',
 *       'Controle financeiro',
 *       'Temas personalizados',
 *       'Suporte prioritário',
 *       'Garantia de 7 dias',
 *       'Acesso antecipado a novas funcionalidades',
 *     ],
 *   },
 * ]
 */

const FEATURES = [
  'Acesse de quaquer dispositivo',
  'Desafio personalizado de rotina',
  'Rastreador de hábitos',
  'Centralizador de tarefas',
  'Organizador de treinos',
  'Journal diário',
  'Controle financeiro',
  'Temas personalizados',
  'Notificações em tempo real',
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-[1px]">
      <path
        d="M2.5 7l3 3 6-6"
        stroke="rgba(249,246,240,0.6)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-5 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-burgundy)] mb-4">
          Comece agora
        </p>
        <h2
          className="text-[clamp(32px,4.2vw,56px)] font-semibold text-[var(--color-text-primary)] leading-[1.06] mb-4"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1.5px' }}
        >
          Experimente o Zyra
          <em className="italic text-[var(--color-brand-burgundy)]"> de graça</em>
        </h2>
        <p className="text-[16px] text-[var(--color-text-secondary)] max-w-lg mx-auto leading-[1.75]">
          Crie sua conta gratuitamente e descubra como organizar sua rotina em um só lugar. Sem compromisso.
        </p>
      </div>

      {/* Single invite card */}
      <div className="max-w-xl mx-auto pt-6">
        <div
          className="scroll-reveal relative rounded-[28px] flex flex-col transition-transform duration-300 hover:-translate-y-1"
          style={{
            background: 'var(--color-text-primary)',
            border: '1px solid rgba(249,246,240,0.1)',
            boxShadow: '0 32px 80px rgba(28,20,16,0.3)',
          }}
        >
          {/* Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap"
              style={{ background: 'var(--color-surface-page)', color: 'var(--color-brand-burgundy)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'currentColor', opacity: 0.55 }} />
              Acesso gratuito
            </span>
          </div>

          <div className="p-7 sm:p-10 flex flex-col flex-1">
            {/* Title */}
            <p
              className="text-[clamp(26px,3.4vw,34px)] font-semibold leading-[1.12] mb-3"
              style={{ fontFamily: "var(--font-serif)", color: 'var(--color-surface-page)', letterSpacing: '-0.6px' }}
            >
              Crie sua conta grátis
            </p>
            <p
              className="text-[14px] leading-[1.7] mb-8"
              style={{ color: 'rgba(249,246,240,0.5)' }}
            >
              Teste a aplicação completa e veja na prática como o Zyra ajuda você a manter o foco no dia a dia.
            </p>

            {/* CTA */}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill flex items-center justify-center gap-2 w-full h-[52px] rounded-[24px] text-[14px] font-semibold transition-all active:scale-[0.98] mb-8"
              style={{
                background: 'var(--color-surface-page)',
                color: 'var(--color-brand-burgundy)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.22)',
              }}
            >
              Criar conta grátis
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Divider */}
            <div
              className="mb-5"
              style={{ borderTop: '1px solid rgba(249,246,240,0.09)' }}
            />

            {/* Feature label */}
            <p
              className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4"
              style={{ color: 'rgba(249,246,240,0.28)' }}
            >
              O que você vai explorar
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check />
                  <span className="text-[13px] leading-snug" style={{ color: 'rgba(249,246,240,0.62)' }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
