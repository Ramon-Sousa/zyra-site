import { StickyScroll } from '../components/ui/sticky-scroll-reveal'

const imgDiet = '/img dieta.png'
const imgFinances = '/img financas.png'
const imgHabits = '/img habitos.png'
const imgJournal = '/img humor.png'
const imgJournalReflection = '/img humor-1.png'
const imgMoodControl = '/img humor.png'
const imgPomodoro = '/img pomodo.png'
const imgStudies = '/img estudos.png'
const imgTasks = '/img tarefas.png'
const imgWorkouts = '/img treinos.png'

const FEATURES = [
  {
    title: 'Hábitos',
    description:
      'Acompanhe hábitos que está adicionando ou abandonando na sua nova rotina, veja seu progresso e constância sem depender de checklists ou planners.',
    eyebrow: 'Consistência',
    content: <FeatureImage src={imgHabits} alt="Tela de hábitos do Zyra" />,
  },
  {
    title: 'Finanças',
    description:
      'Organize entradas, gastos, investimentos, assinaturas e cartões em um único lugar com alertas e recorrências.',
    eyebrow: 'Clareza',
    content: <FeatureImage src={imgFinances} alt="Tela de finanças do Zyra" />,
  },
  {
    title: 'Treinos',
    description:
      'Monte sua rotina de exercícios, registre cargas e acompanhe sua evolução física com menos atrito.',
    eyebrow: 'Corpo',
    content: <FeatureImage src={imgWorkouts} alt="Tela de treinos do Zyra" />,
  },
  {
    title: 'Journaling/Gratidões',
    description:
      'Exercite a gratidão e manifestação de suas metas, sonhos e melhorias na sua vida. Diariamente o app te traz reflexões para seu autoconhecimento.',
    eyebrow: 'Autoconhecimento',
    content: <FeatureImage src={imgJournalReflection} alt="Tela de journaling e gratidões do Zyra" />,
  },
  {
    title: 'Humor',
    description:
      'Acompanhe seu estresse a cada dia, entenda que dias ruins virão, mas eles não vão tirar você do seu foco.',
    eyebrow: 'Equilíbrio',
    content: <FeatureImage src={imgJournal} alt="Tela de humor do Zyra" />,
  },
  {
    title: 'Dieta',
    description:
      'Planeje refeições, salve receitas e acompanhe as calorias direto pelo app.',
    eyebrow: 'Nutrição',
    content: <FeatureImage src={imgDiet} alt="Tela de dieta do Zyra" />,
  },
  {
    title: 'Estudos',
    description:
      'Crie cadernos de estudos, separe suas anotações, abandone de vez os planners.',
    eyebrow: 'Aprendizado',
    content: <FeatureImage src={imgStudies} alt="Tela de estudos do Zyra" />,
  },
  {
    title: 'Pomodoro',
    description:
      'Adicione tarefas e hábitos direto do app e use ciclos de foco e pausa para proteger sua atenção.',
    eyebrow: 'Foco',
    content: <FeatureImage src={imgPomodoro} alt="Tela de pomodoro do Zyra" />,
  },
  {
    title: 'Tarefas',
    description:
      'Centralize pendências, prioridades e pequenas ações do dia para tirar peso da cabeça. O app irá fazer a priorização automática das tarefas conforme você cria.',
    eyebrow: 'Organização',
    content: <FeatureImage src={imgTasks} alt="Tela de tarefas do Zyra" />,
  },
]

const HUMOR_FEATURES = [
  {
    title: 'Journaling/Gratidões',
    description:
      'Exercite a gratidão e manifestação de suas metas, sonhos e melhorias na sua vida. Diariamente o app te traz reflexões para seu autoconhecimento.',
    eyebrow: 'Clareza emocional',
    content: <FeatureImage src={imgJournalReflection} alt="Tela de journaling e gratidões do Zyra" fit="contain" />,
  },
  {
    title: 'Humor',
    description:
      'Acompanhe seu estresse a cada dia, entenda que dias ruins virão, mas eles não vão tirar você do seu foco.',
    eyebrow: 'Humor',
    content: <FeatureImage src={imgMoodControl} alt="Tela de controle de humor do Zyra" fit="contain" />,
  },
]

function FeatureImage({ src, alt, fit = 'cover' }: { src: string; alt: string; fit?: 'cover' | 'contain' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-top drop-shadow-[0_24px_60px_rgba(0,0,0,0.16)] ${
        fit === 'contain' ? 'object-contain' : 'object-cover'
      }`}
      draggable={false}
    />
  )
}

type FeaturesProps = {
  variant?: 'default' | 'humor'
}

export default function Features({ variant = 'default' }: FeaturesProps) {
  const isHumor = variant === 'humor'
  const features = isHumor ? HUMOR_FEATURES : FEATURES

  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 px-5 bg-[var(--color-surface-page)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-burgundy)] mb-4">
            {isHumor ? 'Controle de estresse' : 'Funcionalidades'}
          </p>
          <h2
            className="text-[clamp(32px,4.2vw,56px)] font-semibold text-[var(--color-text-primary)] leading-[1.06] mb-4"
            style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-1.5px' }}
          >
            {isHumor ? (
              <>
                Entenda seu humor
                <em className="italic text-[var(--color-brand-burgundy)]"> antes do estresse dominar</em>
              </>
            ) : (
              <>
                Tudo que você precisa
                <em className="italic text-[var(--color-brand-burgundy)]"> em um só lugar</em>
              </>
            )}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-[1.75]">
            {isHumor
              ? 'Use o journal e o controle de humor para perceber gatilhos, aliviar a mente e criar uma rotina mais leve.'
              : 'Acompanhe rotina, foco, corpo, mente e planejamento em uma experiência integrada.'}
          </p>
        </div>

        <StickyScroll content={features} />
      </div>
    </section>
  )
}
