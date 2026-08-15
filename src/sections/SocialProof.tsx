import glowUp01 from '../assets/social-proof/glow-up-01.webp'
import glowUp02 from '../assets/social-proof/glow-up-02.webp'
import glowUp03 from '../assets/social-proof/glow-up-03.webp'
import glowUp04 from '../assets/social-proof/glow-up-04.webp'

const PROOFS = [
  { src: glowUp01, alt: 'Depoimento de cliente sobre o Zyra ser organizado e completo' },
  { src: glowUp02, alt: 'Depoimento de cliente sobre se tornar uma mulher melhor e dona de si' },
  { src: glowUp03, alt: 'Depoimento de cliente sobre começar a cuidar mais de si' },
  { src: glowUp04, alt: 'Depoimento de cliente sobre o Zyra ajudar mulheres multitarefas' },
]

const LOOPED_PROOFS = [...PROOFS, ...PROOFS]

export default function SocialProof() {
  return (
    <section className="py-12 sm:py-16 overflow-hidden" style={{ background: 'var(--color-surface-page)' }}>
      <div className="max-w-5xl mx-auto px-5 mb-8 sm:mb-10 text-center">
        <h2
          className="text-[clamp(30px,4.6vw,56px)] font-semibold leading-[1.04] text-[var(--color-text-primary)]"
          style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-1.4px' }}
        >
          Elas tiveram seu{' '}
          <em className="italic text-[var(--color-brand-burgundy)]">Glow Up</em>
        </h2>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, var(--color-surface-page) 0%, transparent 100%)',
            zIndex: 2,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, var(--color-surface-page) 0%, transparent 100%)',
            zIndex: 2,
          }}
        />

        <div className="marquee-track flex w-max gap-4 sm:gap-6 px-4 pb-1">
          {LOOPED_PROOFS.map((proof, index) => (
            <figure
              key={`${proof.src}-${index}`}
              className="flex-shrink-0 w-[min(82vw,560px)] rounded-[28px]"
              style={{
                filter: 'drop-shadow(0 18px 38px rgba(43,22,14,0.10))',
              }}
            >
              <img
                src={proof.src}
                alt={proof.alt}
                className="block w-full h-[190px] sm:h-[250px] object-contain"
                draggable={false}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
