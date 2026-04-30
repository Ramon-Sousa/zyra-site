import illustrationHero from '../assets/illustration-hero.png'
import pf01 from '../assets/ps/hero/pf_01.webp'
import pf02 from '../assets/ps/hero/pf_02.webp'
import pf03 from '../assets/ps/hero/pf_03.webp'
import pf04 from '../assets/ps/hero/pf_04.webp'

const HERO_AVATARS = [pf01, pf02, pf03, pf04]

export default function Hero() {
  return (
    <section className="min-h-[100dvh] px-5 pt-24 sm:pt-28 pb-12 sm:pb-16 max-w-5xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

        {/* Esquerda — texto */}
        <div>
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-[20px] px-3.5 py-1.5 mb-8 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{
              animationDelay: '200ms',
              background: 'rgba(68,2,6,0.07)',
              color: 'var(--color-brand-burgundy)',
              border: '1px solid rgba(68,2,6,0.14)',
            }}
          >
            <span className="animate-pulse-dot w-1.5 h-1.5 rounded-full bg-[var(--color-brand-burgundy)]" />
            Sistema de organização
          </div>

          <h1
            className="animate-fade-up text-[clamp(24px,5.8vw,48px)] font-semibold leading-[1.01] tracking-[-2.5px] text-[var(--color-text-primary)] mb-6"
            style={{ animationDelay: '300ms', fontFamily: 'var(--font-serif)' }}
          >
            Desperte a mulher que você mais admira em{' '}
            <em className="text-[var(--color-brand-burgundy)] not-italic block">
              apenas 21 dias.
            </em>
          </h1>

          <p
            className="animate-fade-up text-[clamp(15px,1.6vw,18px)] text-[var(--color-text-secondary)] max-w-[42ch] leading-relaxed mb-10 font-normal"
            style={{ animationDelay: '420ms' }}
          >
            Um sistema completo para um glow up em todas as áreas da sua vida. Mesmo que seu dia pareça curto demais.
          </p>

          <div
            className="animate-fade-up flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ animationDelay: '520ms' }}
          >
            <a
              href="#pricing"
              className="btn-fill inline-flex items-center gap-2 bg-[var(--color-brand-burgundy)] text-[var(--color-surface-page)] text-[15px] font-semibold rounded-[28px] h-[52px] px-7 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
              style={{ boxShadow: '0 8px 28px rgba(68,2,6,0.25)' }}
            >
              Começar agora
            </a>
          </div>

          {/* Social proof */}
          <div
            className="animate-fade-up flex items-center gap-3 mt-7 sm:mt-10 pt-6 sm:pt-8"
            style={{
              animationDelay: '620ms',
              borderTop: '1px solid var(--color-border-default)',
            }}
          >
            <div className="flex -space-x-2">
              {HERO_AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-[var(--color-surface-page)] flex-shrink-0 object-cover"
                  draggable={false}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#D4A05B">
                    <path d="M6 1l1.3 3.9H11L8.2 7l1 3.9L6 8.8l-3.2 2.1 1-3.9L1 4.9h3.7L6 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] text-[var(--color-text-secondary)] font-medium">+3520 avaliações</p>
            </div>
          </div>
        </div>

        {/* Direita — ilustração, sem corte */}
        <div
          className="animate-fade-up flex items-center justify-center w-full lg:overflow-visible"
          style={{ animationDelay: '400ms' }}
        >
          <img
            src={illustrationHero}
            alt=""
            aria-hidden="true"
            className="w-full h-auto block lg:scale-[1.40] lg:translate-x-8"
            draggable={false}
          />
        </div>

      </div>
    </section>
  )
}
