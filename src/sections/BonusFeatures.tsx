const imgDiet = '/img/dieta.webp'
const imgFinances = '/img/financas.webp'
const imgHabits = '/img/habitos.webp'
const imgPomodoro = '/img/pomodo.webp'
const imgStudies = '/img/estudos.webp'
const imgTasks = '/img/tarefas.webp'
const imgWorkouts = '/img/treinos.webp'

const BONUS_FEATURES = [
  {
    title: 'Hábitos',
    description:
      'Acompanhe hábitos que está adicionando ou abandonando na sua nova rotina, veja seu progresso e constância sem depender de checklists ou planners.',
    image: imgHabits,
    featured: true,
  },
  {
    title: 'Finanças',
    description:
      'Organize entradas, gastos, investimentos, assinaturas e cartões em um único lugar com alertas e recorrências.',
    image: imgFinances,
  },
  {
    title: 'Treinos',
    description: 'Monte sua rotina de exercícios, registre cargas e acompanhe sua evolução física com menos atrito.',
    image: imgWorkouts,
  },
  {
    title: 'Dieta',
    description: 'Planeje refeições, salve receitas e acompanhe as calorias direto pelo app.',
    image: imgDiet,
  },
  {
    title: 'Estudos',
    description: 'Crie cadernos de estudos, separe suas anotações, abandone de vez os planners.',
    image: imgStudies,
  },
  {
    title: 'Pomodoro',
    description: 'Adicione tarefas e hábitos direto do app e use ciclos de foco e pausa para proteger sua atenção.',
    image: imgPomodoro,
  },
  {
    title: 'Tarefas',
    description:
      'Centralize pendências, prioridades e pequenas ações do dia para tirar peso da cabeça. O app irá fazer a priorização automática das tarefas conforme você cria.',
    image: imgTasks,
  },
]

export default function BonusFeatures() {
  return (
    <section id="bonus" className="scroll-mt-24 px-5 pb-16 sm:pb-24 bg-[var(--color-surface-page)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-burgundy)] mb-4">
              Bônus incluso
            </p>
            <h2
              className="text-[clamp(30px,4vw,50px)] font-semibold text-[var(--color-text-primary)] leading-[1.06] max-w-2xl"
              style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-1.2px' }}
            >
              Mais recursos para aliviar a rotina
              <em className="italic text-[var(--color-brand-burgundy)]"> dentro do mesmo acesso.</em>
            </h2>
          </div>

          <a
            href="#pricing"
            className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-[26px] bg-[var(--color-brand-burgundy)] px-6 text-[14px] font-semibold text-[var(--color-surface-page)] transition-all hover:-translate-y-0.5 active:scale-[0.97]"
            style={{ boxShadow: '0 8px 28px rgba(68,2,6,0.2)' }}
          >
            Ver oferta
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BONUS_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className={`flex min-h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(68,2,6,0.16)] bg-[#FFF9F1] shadow-[0_18px_48px_-28px_rgba(68,2,6,0.45)] ${
                feature.featured ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex h-[320px] items-center justify-center overflow-hidden p-0 sm:h-[280px] lg:h-[250px]">
                <img
                  src={feature.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain object-center drop-shadow-[0_16px_26px_rgba(68,2,6,0.18)]"
                  draggable={false}
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3
                    className="text-[22px] font-semibold leading-tight text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-0.4px' }}
                  >
                    {feature.title}
                  </h3>
                  <div className="inline-flex shrink-0 items-center rounded-full bg-[var(--color-brand-burgundy)] px-3 py-1 text-[11px] font-bold text-[var(--color-surface-page)]">
                    Incluso
                  </div>
                </div>
                <p className="text-[13px] leading-[1.65] text-[rgba(38,29,24,0.72)]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
