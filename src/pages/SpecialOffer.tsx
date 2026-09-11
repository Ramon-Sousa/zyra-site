import { useEffect, useMemo, useState } from 'react'
import { appendCurrentUtmParams } from '../lib/campaignParams'
import offerCardVisual from '../assets/offer/offer-card-visual.webp'

const CHECKOUT_URL = 'https://pay.lowify.com.br/go.php?offer=31af78ea'
const INITIAL_TIME_IN_SECONDS = 15 * 60

const BENEFITS = [
  'Acesso imediato',
  'Mesmos bônus',
  'Mesma entrega',
  'Tudo igual à oferta original',
]

function formatRemainingTime(timeInSeconds: number) {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0')
  const seconds = (timeInSeconds % 60).toString().padStart(2, '0')

  return `${minutes}:${seconds}`
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.1 3.1L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-2.9 8.5-7 10-4.1-1.5-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m8.8 12 2.1 2.1 4.3-4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SpecialOffer() {
  const [remainingTime, setRemainingTime] = useState(INITIAL_TIME_IN_SECONDS)
  const checkoutUrl = useMemo(() => appendCurrentUtmParams(CHECKOUT_URL), [])

  useEffect(() => {
    const existingMeta = document.querySelector('meta[name="robots"]')
    const previousContent = existingMeta?.getAttribute('content') ?? null
    const robotsMeta = existingMeta ?? document.createElement('meta')

    robotsMeta.setAttribute('name', 'robots')
    robotsMeta.setAttribute('content', 'noindex, nofollow, noarchive')
    if (!existingMeta) document.head.appendChild(robotsMeta)

    return () => {
      if (existingMeta) {
        if (previousContent === null) existingMeta.removeAttribute('content')
        else existingMeta.setAttribute('content', previousContent)
      } else {
        robotsMeta.remove()
      }
    }
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingTime((time) => Math.max(time - 1, 0))
    }, 1_000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-surface-page)] px-5 py-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 flex items-center justify-center animate-fade-up">
          <span className="font-medium text-[var(--color-brand-burgundy)] text-[22px] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Zyra
          </span>
        </header>

        <section className="text-center animate-fade-up" aria-labelledby="special-offer-title">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(68,2,6,0.16)] bg-[var(--color-surface-subtle)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-burgundy)]">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[var(--color-brand-burgundy)]" />
            Oferta liberada agora
          </div>
          <h1 id="special-offer-title" className="mx-auto max-w-2xl text-[clamp(38px,6vw,68px)] font-semibold leading-[0.98] tracking-[-1.8px] text-[var(--color-text-primary)]">
            🎁 Oferta Especial de Última Chance – <em className="text-[var(--color-brand-burgundy)]">50% OFF</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.65] text-[var(--color-text-secondary)]">
            Você quase saiu… então liberamos algo exclusivo para você. O mesmo produto pela metade do preço da oferta original.
          </p>
        </section>

        <section className="relative mt-10 overflow-hidden rounded-[30px] border border-[rgba(249,246,240,0.1)] bg-[var(--color-text-primary)] p-6 shadow-[0_32px_80px_rgba(28,20,16,0.3)] sm:p-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[rgba(143,0,8,0.34)] blur-3xl" />
          <div className="relative">
            <div className="flex flex-col justify-between gap-5 border-b border-[rgba(249,246,240,0.12)] pb-7 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[rgba(249,246,240,0.5)]">Condição exclusiva</p>
                <p className="mt-2 font-semibold text-[var(--color-surface-page)]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(25px, 4vw, 34px)' }}>Metade de tudo que você já viu.</p>
              </div>
              <div className="rounded-2xl border border-[rgba(249,246,240,0.15)] bg-[rgba(249,246,240,0.08)] px-5 py-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(249,246,240,0.5)]">Disponível por</p>
                <p className="mt-1 text-[30px] font-semibold leading-none tracking-[0.04em] text-[#D7C6A8]" aria-label={`Tempo restante: ${formatRemainingTime(remainingTime)}`}>{formatRemainingTime(remainingTime)}</p>
              </div>
            </div>

            <div className="grid gap-8 py-8 sm:grid-cols-[1.05fr_0.95fr] sm:items-center">
              <div>
                <p className="text-[15px] leading-[1.75] text-[rgba(249,246,240,0.64)]">
                  Sim, é isso mesmo. Você sabe quanto custa o valor original. Agora você pode garantir por 50% do preço – oferta única, exclusiva e que não estará disponível novamente. Se você recusar aqui, o preço volta ao normal.
                </p>
                <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#D7C6A8]">A única diferença é o preço reduzido pela metade.</p>
                <p className="mt-3 text-[36px] font-semibold leading-none text-[var(--color-surface-page)]" style={{ fontFamily: 'var(--font-serif)' }}>R$ 29,90</p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="relative flex justify-center"><div className="absolute inset-x-8 bottom-3 h-14 rounded-full bg-[rgba(249,246,240,0.14)] blur-2xl" /><img src={offerCardVisual} alt="Prévia do Zyra" className="relative w-full max-w-[200px] drop-shadow-[0_24px_32px_rgba(0,0,0,0.35)]" loading="lazy" draggable={false} /></div>
                <ul className="grid w-full gap-3 rounded-[22px] border border-[rgba(249,246,240,0.11)] bg-[rgba(249,246,240,0.045)] p-5">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-[14px] text-[rgba(249,246,240,0.76)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(215,198,168,0.14)] text-[#D7C6A8]"><CheckIcon /></span>
                    {benefit}
                  </li>
                ))}
                </ul>
              </div>
            </div>

            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn-fill checkout-cta flex min-h-[60px] w-full items-center justify-center gap-2 rounded-[22px] px-5 py-4 text-center text-[15px] font-bold transition-all hover:-translate-y-0.5 active:scale-[0.98]">
              🔒 Garantir Agora por 50% do Preço
            </a>

            <div className="mt-6 flex items-center justify-center gap-2 text-center text-[12px] text-[rgba(249,246,240,0.55)]">
              <span className="text-[#D7C6A8]"><ShieldIcon /></span>
              Compra segura. Seu acesso é liberado imediatamente após a confirmação.
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
