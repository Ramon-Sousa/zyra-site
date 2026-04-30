export default function FinalCTA() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-5 mb-16 sm:mb-24">
      <div
        className="rounded-[28px] sm:rounded-[40px] px-6 sm:px-16 py-14 sm:py-20 relative overflow-hidden flex flex-col items-center text-center gap-6"
        style={{ background: 'var(--color-brand-burgundy)' }}
      >
        {/* Layered ambient glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 60% 50% at 15% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)',
              'radial-gradient(ellipse 50% 60% at 85% 20%, rgba(255,255,255,0.03) 0%, transparent 100%)',
              'radial-gradient(ellipse 80% 40% at 50% 110%, rgba(0,0,0,0.25) 0%, transparent 100%)',
            ].join(', '),
          }}
        />

        <div className="relative z-10">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em] mb-6"
            style={{ color: 'rgba(249,246,240,0.4)' }}
          >
            Não adie seu progresso
          </p>

          <h2
            className="text-[clamp(28px,4.5vw,60px)] font-semibold text-[var(--color-surface-page)] leading-[1.04] mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1.5px' }}
          >
            Sua rotina não vai
            <br />se organizar{' '}
            <em className="italic" style={{ color: '#D7C6A8' }}>sozinha.</em>
          </h2>

          <p
            className="text-[15px] sm:text-[16px] leading-[1.75] mb-8 sm:mb-10 max-w-[44ch] mx-auto"
            style={{ color: 'rgba(249,246,240,0.58)' }}
          >
            Um único lugar pra tudo que você precisa fazer. Sem fricção, sem complexidade.
          </p>

          <a
            href="https://zyra.meuglowmode.site/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2.5 bg-[var(--color-surface-page)] text-[var(--color-brand-burgundy)] text-[15px] font-semibold rounded-[28px] h-[54px] px-8 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
            style={{ boxShadow: '0 10px 36px rgba(0,0,0,0.22)' }}
          >
            Quero começar agora
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="text-[12px] mt-5" style={{ color: '#D7C6A8' }}>
            7 dias de garantia · Cancele quando quiser
          </p>
        </div>
      </div>
    </div>
  )
}
