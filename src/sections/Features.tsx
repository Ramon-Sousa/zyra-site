import imgDiet      from '../assets/features/features-diet-screen.png'
import imgFinances  from '../assets/features/features-finances-screen.png'
import imgHabits    from '../assets/features/features-habits-screen.png'
import imgJournal   from '../assets/features/features-journal-mood-screen.png'
import imgPomodoro  from '../assets/features/features-pomodoro-screen.png'
import imgStudies   from '../assets/features/features-studies-screen.png'
import imgThemes   from '../assets/features/features-themes.png'
import imgWorkouts  from '../assets/features/features-workouts-screen.png'
import { StickyScroll } from '../components/ui/sticky-scroll-reveal'

const FEATURES = [
  {
    title: 'Hábitos',
    description:
      'Crie hábitos positivos, acompanhe sua constância e veja seu progresso sem depender de planilhas ou anotações soltas.',
    eyebrow: 'Consistência',
    content: <FeatureImage src={imgHabits} alt="Tela de hábitos do Zyra" />,
  },
  {
    title: 'Finanças',
    description:
      'Organize entradas, gastos e prioridades financeiras no mesmo lugar em que você acompanha o resto da sua rotina.',
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
    title: 'Journal e Humor',
    description:
      'Registre pensamentos, gratidão e humor diário para entender melhor seus ciclos, energia e emoções.',
    eyebrow: 'Mente',
    content: <FeatureImage src={imgJournal} alt="Tela de journal do Zyra" />,
  },
  {
    title: 'Dieta',
    description:
      'Planeje refeições, organize escolhas alimentares e mantenha uma visão simples do que sustenta sua energia.',
    eyebrow: 'Nutrição',
    content: <FeatureImage src={imgDiet} alt="Tela de dieta do Zyra" />,
  },
  {
    title: 'Estudos',
    description:
      'Separe matérias, defina metas de estudo e acompanhe sessões para avançar com foco real.',
    eyebrow: 'Aprendizado',
    content: <FeatureImage src={imgStudies} alt="Tela de estudos do Zyra" />,
  },
  {
    title: 'Pomodoro',
    description:
      'Use ciclos de foco e pausa para proteger sua atenção e reduzir a sensação de rotina espalhada.',
    eyebrow: 'Foco',
    content: <FeatureImage src={imgPomodoro} alt="Tela de pomodoro do Zyra" />,
  },
  {
    title: 'Temas personalizados',
    description:
      'Ajuste cores, aparência e detalhes visuais para deixar o Zyra com a sua cara.',
    eyebrow: 'Estilo',
    content: <FeatureImage src={imgThemes} alt="Tela de temas do Zyra" />,
  },
]

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full rounded-[28px] border-[2px] border-[#F2E9DE] object-cover object-top shadow-[0_24px_80px_-12px_rgba(0,0,0,0.15)]"
      draggable={false}
    />
  )
}

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
            style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-1.5px' }}
          >
            Tudo que você precisa
            <em className="italic text-[var(--color-brand-burgundy)]"> em um só lugar</em>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-[1.75]">
            Acompanhe rotina, foco, corpo, mente e planejamento em uma experiência integrada.
          </p>
        </div>

        <StickyScroll content={FEATURES} />
      </div>
    </section>
  )
}
