import { useState } from 'react'

type AreaId = 'habitos' | 'financas' | 'treino' | 'tarefas'

interface Area {
  id: AreaId
  label: string
  emoji: string
  title: string
  titleEm: string
  desc: string
  features: string[]
  previewTitle: string
  previewBadge: string
  previewBadgeType: 'success' | 'warning'
  rows: { icon: string; name: string; detail: string }[]
}

const AREAS: Area[] = [
  {
    id: 'habitos',
    label: 'Hábitos',
    emoji: '🔥',
    title: 'Sua sequência cresce.',
    titleEm: 'Você não quer parar.',
    desc: 'Cada dia marcado vira pressão positiva pra não quebrar. O Zyra registra seus hábitos e mostra sua consistência com números reais.',
    features: ['Tracker de streaks e recordes', 'Heatmap mensal de atividade', 'Pular dia sem quebrar sequência', 'Hábitos por horário configurável'],
    previewTitle: '🔥 Hábitos — Hoje',
    previewBadge: '4/6 feitos',
    previewBadgeType: 'success',
    rows: [
      { icon: '✅', name: 'Beber 3L de água', detail: '🔥 9 dias' },
      { icon: '✅', name: 'Meditar 10 min', detail: '🔥 5 dias' },
      { icon: '✅', name: 'Ler 30 páginas', detail: '🔥 3 dias' },
      { icon: '⬜', name: 'Plano alimentar', detail: '2.000 kcal' },
    ],
  },
  {
    id: 'financas',
    label: 'Finanças',
    emoji: '💰',
    title: 'Suas finanças.',
    titleEm: 'Controle total, de verdade.',
    desc: 'Controle saldo, faturas de cartões, compras parceladas e gastos recorrentes. Tudo no lugar onde você já organiza sua rotina.',
    features: ['Faturas de cartão de crédito', 'Parcelamento automático em 36x', 'Multi-conta e multi-câmbio', 'Orçamento e relatório PDF'],
    previewTitle: '💰 Próximas contas',
    previewBadge: '2 vencendo',
    previewBadgeType: 'warning',
    rows: [
      { icon: '📺', name: 'Netflix', detail: 'R$39,90 · 5 Abr' },
      { icon: '💳', name: 'Fatura Nubank 3/12', detail: 'R$1.240 · 10 Abr' },
      { icon: '🏠', name: 'Aluguel', detail: 'R$2.800 · 1 Mai' },
    ],
  },
  {
    id: 'treino',
    label: 'Treino',
    emoji: '💪',
    title: 'Registre cada série.',
    titleEm: 'Quebre seus recordes.',
    desc: 'Monte seu programa uma vez. Execute, registre carga e reps em segundos. O Zyra avisa quando você bater o PR.',
    features: ['Templates de treino reutilizáveis', 'Progressão de carga e recordes', 'Séries, reps, peso e descanso', 'Histórico completo de sessões'],
    previewTitle: '💪 Treino A · Peito',
    previewBadge: 'Em andamento',
    previewBadgeType: 'success',
    rows: [
      { icon: '✅', name: 'Supino Reto 3×10', detail: '70kg · PR 80kg' },
      { icon: '✅', name: 'Crucifixo 3×12', detail: '20kg' },
      { icon: '⬜', name: 'Tríceps Pulley 4×12', detail: '35kg' },
    ],
  },
  {
    id: 'tarefas',
    label: 'Tarefas',
    emoji: '✅',
    title: 'Priorize o que importa.',
    titleEm: 'Eisenhower + Kanban.',
    desc: 'Tudo que precisa ser feito, organizado de forma visual. Arraste, mova e veja o progresso sem pensar duas vezes.',
    features: ['Matriz de Eisenhower', 'Quadro Kanban visual', 'Tarefas recorrentes com horário', '4 níveis de prioridade'],
    previewTitle: '✅ Hoje — A Fazer',
    previewBadge: '5 pendentes',
    previewBadgeType: 'warning',
    rows: [
      { icon: '🔴', name: 'Finalizar proposta', detail: '9:00–11:00' },
      { icon: '🟡', name: 'Reunião semanal', detail: '14:00–15:00' },
      { icon: '⚪', name: 'Revisar PRs GitHub', detail: 'Repo frontend' },
    ],
  },
]

export default function Areas() {
  const [active, setActive] = useState<AreaId>('habitos')
  const area = AREAS.find(a => a.id === active)!

  return (
    <section className="py-16 sm:py-20 px-5 max-w-5xl mx-auto">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-burgundy)] mb-4">
        Veja de perto
      </p>
      <h2
        className="text-[clamp(28px,4vw,52px)] font-medium text-[var(--color-text-primary)] leading-[1.08] mb-7 sm:mb-8 tracking-tight"
        style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1px' }}
      >
        <em className="italic text-[var(--color-brand-burgundy)]">Cada módulo</em>
        <br />tem tudo que você precisa.
      </h2>

      {/* Tabs — scroll horizontal on mobile */}
      <div className="flex overflow-x-auto gap-2 mb-7 sm:mb-8 pb-1 -mx-1 px-1 sm:flex-wrap sm:overflow-visible">
        {AREAS.map(a => (
          <button
            key={a.id}
            onClick={() => setActive(a.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-[20px] text-[13px] font-semibold border transition-all cursor-pointer ${
              active === a.id
                ? 'bg-[var(--color-brand-burgundy)] border-[var(--color-brand-burgundy)] text-[var(--color-surface-page)]'
                : 'bg-transparent border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-burgundy)] hover:text-[var(--color-brand-burgundy)]'
            }`}
          >
            {a.emoji} {a.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-center">
        {/* Text */}
        <div>
          <h3
            className="text-[clamp(20px,3vw,32px)] font-semibold leading-[1.2] mb-3 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {area.title}
            <br />
            <em className="italic text-[var(--color-brand-burgundy)]">{area.titleEm}</em>
          </h3>
          <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-5 sm:mb-6">{area.desc}</p>
          <div className="flex flex-col gap-2">
            {area.features.map(f => (
              <div key={f} className="flex items-center gap-2.5 text-[13px] text-[var(--color-text-secondary)] font-medium px-3 py-2 bg-[var(--color-surface-subtle)] rounded-[12px]">
                <span className="w-5 h-5 rounded-full bg-[var(--color-status-success)] flex items-center justify-center text-white text-[10px] font-black flex-shrink-0">✓</span>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div
          className="bg-[var(--color-surface-card)] border border-[var(--color-border-default)] rounded-[24px] sm:rounded-[32px] p-5 sm:p-6"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          <div className="flex items-center justify-between mb-4 gap-2">
            <p className="text-[12px] sm:text-[13px] font-bold text-[var(--color-text-primary)] truncate">{area.previewTitle}</p>
            <span className={`flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-[10px] ${
              area.previewBadgeType === 'success'
                ? 'bg-[rgba(74,124,89,0.1)] text-[var(--color-status-success)]'
                : 'bg-[rgba(217,160,91,0.12)] text-[var(--color-status-warning)]'
            }`}>
              {area.previewBadge}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {area.rows.map(row => (
              <div key={row.name} className="flex items-center gap-3 px-3 py-2.5 bg-[var(--color-surface-page)] border border-[var(--color-border-subtle)] rounded-[12px] text-[12px]">
                <span className="text-base w-5 text-center flex-shrink-0">{row.icon}</span>
                <span className="flex-1 font-semibold text-[var(--color-text-primary)] min-w-0 truncate">{row.name}</span>
                <span className="text-[var(--color-text-muted)] flex-shrink-0 ml-2">{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
