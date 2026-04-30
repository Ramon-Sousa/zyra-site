const FEATURES = [
  {
    title: 'controle de tarefas',
    desc: 'eisenhower, kanban e planner semanal. prioritize o que importa sem burocracia.',
    tag: 'foco',
    mockupSrc: '/src/assets/features/features-tasks.png',
  },
  {
    title: 'rastreador de hábitos',
    desc: 'streaks que você não quer quebrar. consistência real com números reais.',
    tag: 'consistência',
    mockupSrc: '/src/assets/features/features-habits.png',
  },
  {
    title: 'journal',
    desc: 'diário pessoal, gratidão e reflexões. um espaço seguro para sua mente.',
    tag: 'mente',
    mockupSrc: '/src/assets/features/features-journal.png',
  },
  {
    title: 'treinos',
    desc: 'monte seu programa, registre cargas e quebre seus próprios recordes.',
    tag: 'corpo',
    mockupSrc: '/src/assets/features/features-workouts.png',
  },
  {
    title: 'personalização',
    desc: 'o sistema se adapta ao seu fluxo, não o contrário. cores, ícones e layouts.',
    tag: 'estilo',
    mockupSrc: '/src/assets/features/features-themes.png',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 px-5 bg-[var(--color-surface-page)]">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-burgundy)] mb-4">
          Funcionalidades
        </p>
        <h2
          className="text-[clamp(32px,4.2vw,56px)] font-semibold text-[var(--color-text-primary)] leading-[1.06] mb-4"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1.5px' }}
        >
         Tudo que você precisa
          <em className="italic text-[var(--color-brand-burgundy)]"> em um só lugar</em>
        </h2>
       
      </div>


        {/* lista de features */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-40">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* bloco de texto */}
              <div className="flex-1 w-full max-w-full lg:max-w-[440px]">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-burgundy)] mb-4 sm:mb-6 block opacity-70">
                  {f.tag}
                </span>
                <h3
                  className="text-[clamp(22px,3vw,36px)] font-semibold leading-[1.08] mb-4 text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1px' }}
                >
                  {f.title.charAt(0).toUpperCase() + f.title.slice(1)}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[var(--color-text-secondary)] leading-[1.75]">
                  {f.desc.charAt(0).toUpperCase() + f.desc.slice(1)}
                </p>
              </div>

              {/* container do mockup */}
              <div className="flex-1 w-full max-w-full sm:max-w-[520px] lg:max-w-[580px] mx-auto relative group">
                <div className="absolute inset-0 bg-black/5 rounded-[40px] -m-4 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={f.mockupSrc}
                  alt={f.title}
                  className="relative w-full h-auto block rounded-[24px] sm:rounded-[32px] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.15)]"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
