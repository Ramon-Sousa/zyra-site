import { appendCurrentUtmParams } from '../lib/campaignParams'
import offerCardVisual from '../assets/offer/offer-card-visual.png'

const CHECKOUT_URL = 'https://pay.cakto.com.br/kse9sb5'

/*
 * Cards de planos ocultos temporariamente.
 * Estratégia anterior: cards de planos recorrentes ocultos enquanto a página
 * destaca a oferta de acesso vitalício.
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
  'Acesse de qualquer dispositivo',
  'Desafio personalizado de rotina',
  'Rastreador de hábitos',
  'Centralizador de tarefas',
  'Organizador de treinos',
  'Journal diário',
  'Controle financeiro',
  'Temas personalizados',
  'Notificações em tempo real',
]

const HUMOR_FEATURES = [
  'Journal diário para esvaziar a mente',
  'Controle de humor e estresse',
  'Registro de gatilhos emocionais',
  'Rotina organizada em um único app',
  'Rastreador de hábitos',
  'Centralizador de tarefas',
  'Organizador de treinos',
  'Controle financeiro',
  'Estudos e Pomodoro',
  'Temas personalizados',
  'Notificações em tempo real',
  'Acesso pelo celular e computador',
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

type PricingProps = {
  variant?: 'default' | 'humor'
}

export default function Pricing({ variant = 'default' }: PricingProps) {
  const isHumor = variant === 'humor'
  const checkoutUrl = appendCurrentUtmParams(CHECKOUT_URL)
  const features = isHumor ? HUMOR_FEATURES : FEATURES

  return (
    <section id="pricing" className="py-16 sm:py-24 px-5 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-burgundy)] mb-4">
          Acesso vitalício
        </p>
        <h2
          className="text-[clamp(32px,4.2vw,56px)] font-semibold text-[var(--color-text-primary)] leading-[1.06] mb-4"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1.5px' }}
        >
          {isHumor ? (
            <>
              Controle seu estresse.
              <em className="italic text-[var(--color-brand-burgundy)]"> Acompanhe seu humor.</em>
            </>
          ) : (
            <>
              Organize sua rotina.
              <em className="italic text-[var(--color-brand-burgundy)]"> Viva com mais leveza.</em>
            </>
          )}
        </h2>
        <p className="text-[16px] text-[var(--color-text-secondary)] max-w-lg mx-auto leading-[1.75]">
          {isHumor
            ? 'Use o Zyra para entender seus gatilhos, registrar sua rotina emocional e reduzir a carga mental do dia.'
            : 'Tenha o Zyra para sempre e reúna hábitos, tarefas, treinos e planos em um só lugar.'}
        </p>
      </div>

      {/* Single invite card */}
      <div className="max-w-xl mx-auto pt-6">
        <div
          className="relative rounded-[28px] flex flex-col transition-transform duration-300 hover:-translate-y-1"
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
              Acesso vitalício
            </span>
          </div>

          <div className="p-7 sm:p-10 flex flex-col flex-1">
            <div className="grid gap-7 sm:grid-cols-[1.05fr_0.95fr] sm:items-center mb-8">
              <div>
                {/* Title */}
                <p
                  className="text-[clamp(26px,3.4vw,34px)] font-semibold leading-[1.12] mb-3"
                  style={{ fontFamily: "var(--font-serif)", color: 'var(--color-surface-page)', letterSpacing: '-0.6px' }}
                >
                  {isHumor ? 'Comece hoje a aliviar sua rotina.' : 'Invista uma única vez e tenha acesso para sempre!'}
                </p>
                <p
                  className="text-[14px] leading-[1.7] mb-6"
                  style={{ color: 'rgba(249,246,240,0.5)' }}
                >
                  {isHumor
                    ? 'Journal, humor e organização pessoal em uma experiência simples.'
                    : 'Economize mais de R$642,10 em assinaturas e retrabalhos centralizando tudo no Zyra.'}
                </p>
              </div>

              <div className="relative flex justify-center sm:justify-end">
                <div
                  className="absolute inset-x-10 bottom-3 h-16 rounded-full blur-2xl"
                  style={{ background: 'rgba(249,246,240,0.14)' }}
                />
                <img
                  src={offerCardVisual}
                  alt="Prévia do Zyra com rotinas, alimentação, treino e autocuidado"
                  className="relative w-full max-w-[260px] sm:max-w-[320px] h-auto drop-shadow-[0_24px_32px_rgba(0,0,0,0.35)]"
                  draggable={false}
                />
              </div>
            </div>

            {/* Price */}
            <div
              className="mb-8 rounded-[24px] px-5 py-5 sm:px-6 sm:py-6"
              style={{
                background: 'linear-gradient(180deg, rgba(249,246,240,0.085), rgba(249,246,240,0.045))',
                border: '1px solid rgba(249,246,240,0.13)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-[12px] font-medium" style={{ color: 'rgba(249,246,240,0.42)' }}>
                    De
                  </span>
                  <span
                    className="text-[16px] font-semibold leading-none line-through decoration-[rgba(249,246,240,0.45)] decoration-2"
                    style={{ color: 'rgba(249,246,240,0.42)', fontVariantNumeric: 'tabular-nums' }}
                  >
                    R$ 670/ano
                  </span>
                </div>
                <span
                  className="text-left text-[11px] font-bold uppercase tracking-[0.14em] sm:text-right"
                  style={{ color: '#D7C6A8' }}
                >
                  acesso vitalício
                </span>
              </div>

              <div className="mb-5" style={{ borderTop: '1px solid rgba(249,246,240,0.1)' }} />

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p
                    className="mb-1 text-[13px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: 'rgba(249,246,240,0.5)' }}
                  >
                    Até 3x de
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-[clamp(28px,4vw,38px)] font-semibold leading-none"
                      style={{ fontFamily: "var(--font-serif)", color: 'var(--color-surface-page)' }}
                    >
                      R$
                    </span>
                    <span
                      className="text-[clamp(58px,9vw,82px)] font-semibold leading-[0.86]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: 'var(--color-surface-page)',
                        letterSpacing: '-1px',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      9,30
                    </span>
                  </div>
                </div>

                <div className="pb-1 text-right">
                  <p className="text-[12px] font-medium" style={{ color: 'rgba(249,246,240,0.42)' }}>
                    à vista
                  </p>
                  <p
                    className="text-[18px] font-semibold leading-tight"
                    style={{ color: '#D7C6A8', fontVariantNumeric: 'tabular-nums' }}
                  >
                    R$ 27,90
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill checkout-cta mb-8 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[24px] px-4 py-3 text-center text-[14px] font-semibold leading-tight transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Estou pronta para começar!
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
              {isHumor ? 'Incluso no acesso' : 'O que você vai explorar'}
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
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
