// Infinite marquee: duplicate the array so the loop is seamless.
// CSS animation `marquee` translates from 0 → -50% (one full copy width).
// On hover the entire track pauses via animation-play-state.

import av01 from '../assets/ps/testimonials/01.jpg'
import av02 from '../assets/ps/testimonials/02.jpg'
import av03 from '../assets/ps/testimonials/03.jpg'
import av04 from '../assets/ps/testimonials/04.jpg'
import av05 from '../assets/ps/testimonials/05.jpg'
import av06 from '../assets/ps/testimonials/06.jpg'

const TESTIMONIALS = [
  { avatar: av01, name: 'Rafa Oliveira',    handle: '@rafa.oliveira',    text: 'Finalmente parei de abrir 5 apps diferentes todo dia. Agora começo o dia abrindo o Zyra e já sei tudo que precisa ser feito. Mudou minha rotina de verdade.' },
  { avatar: av02, name: 'Camila Souza',     handle: '@camila.souza',     text: 'A parte de finanças salvou meu mês. Eu nunca sabia quanto tinha de fatura pendente. Agora vejo tudo num lugar só e parei de pagar juros.' },
  { avatar: av03, name: 'Beatriz Rocha',    handle: '@beatriz.rocha',    text: 'Consegui manter sequência de hábitos por mais de 30 dias pela primeira vez na vida. A visualização do progresso é viciante do jeito certo.' },
  { avatar: av04, name: 'Julia Nascimento', handle: '@julia.nascimento', text: 'Usei Notion, Todoist, Habitica, planilha de gastos... Nenhum durava. O Zyra é o único sistema que continuei usando depois de 3 meses.' },
  { avatar: av05, name: 'Paula Cardoso',    handle: '@paula.cardoso',    text: 'Organizar minha semana agora leva 10 minutos no domingo. Antes ficava arranjando apps e no fim não organizava nada. Aqui funciona de verdade.' },
  { avatar: av06, name: 'Gui Ferreira',     handle: '@gui.ferreira',     text: 'Tava com medo de comprar mais um produto que ia largar. Comprei, usei por 1 semana e já indiquei pra 4 amigas. Vale muito mais do que o preço.' },
]

const DOUBLED = [...TESTIMONIALS, ...TESTIMONIALS]

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#C4832A">
          <path d="M6 1l1.3 3.9H11L8.2 7l1 3.9L6 8.8l-3.2 2.1 1-3.9L1 4.9h3.7L6 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-16 sm:py-24 overflow-hidden" style={{ background: 'var(--color-surface-section)' }}>
      {/* Header */}
      <div className="max-w-5xl mx-auto px-5 mb-10 sm:mb-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-burgundy)] mb-4">
          Quem já usa
        </p>
        <h2
          className="text-[clamp(26px,4vw,54px)] font-semibold text-[var(--color-text-primary)] leading-[1.06]"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1.5px' }}
        >
          O que elas dizem{' '}
          <em className="italic text-[var(--color-brand-burgundy)]">sobre o Zyra.</em>
        </h2>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-28 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--color-surface-section) 0%, transparent 100%)', zIndex: 2 }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--color-surface-section) 0%, transparent 100%)', zIndex: 2 }}
        />

        {/* Scrolling track */}
        <div className="marquee-track flex gap-4 w-max px-4 pb-1">
          {DOUBLED.map((t, i) => {
            return (
              <div
                key={`${t.handle}-${i}`}
                className="flex-shrink-0 rounded-[22px] p-6 flex flex-col"
                style={{
                  width: 340,
                  background: 'var(--color-surface-card)',
                  border: '1px solid var(--color-border-default)',
                  boxShadow: '0 2px 16px rgba(43,22,14,0.06), 0 1px 0 rgba(255,255,255,0.8) inset',
                }}
              >
                <StarRating />

                {/* Quote — strong contrast */}
                <p
                  className="text-[14px] leading-[1.75] flex-1 mb-5 font-normal"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: '1px solid var(--color-border-subtle)' }}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full flex-shrink-0 object-cover"
                    draggable={false}
                  />
                  <div>
                    <p className="text-[13px] font-semibold leading-tight text-[var(--color-text-primary)]">
                      {t.name}
                    </p>
                    <p className="text-[11px] mt-0.5 text-[var(--color-text-muted)]">
                      {t.handle}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
