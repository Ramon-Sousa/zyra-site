import { useState, useEffect } from 'react'

type Tab = 'visao' | 'habitos' | 'financas' | 'tarefas' | 'treinos' | 'estudos'

interface Habit {
  id: number
  name: string
  done: boolean
  streak: string
}

// SVG icon set — replaces all emoji
function IconHome() {
  return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1.5 6.5L7 1.5l5.5 5v6h-4V9H6.5v2.5H2.5v-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
}
function IconFlame() {
  return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 12.5c-2.485 0-4.5-2.015-4.5-4.5 0-1.8.8-3 2-4 0 1.5 1 2 1 2 .5-2 2.5-4 4-4.5-.3 1.5.5 2.5.5 2.5C11 5 11.5 6.5 11.5 8c0 2.485-2.015 4.5-4.5 4.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
}
function IconWallet() {
  return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3.5" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1.5 6h11M9.5 8.5h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
}
function IconCheck() {
  return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function IconDumbbell() {
  return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1.5 7h11M4 5v4M10 5v4M2.5 5.5v3M11.5 5.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
}
function IconBook() {
  return <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 2.5h5a1 1 0 011 1v8a1 1 0 01-1 1h-5V2.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M8.5 4.5h2a1 1 0 011 1v5a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
}
function IconDot() {
  return <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="2.5" fill="currentColor"/></svg>
}

const NAV_ITEMS: { id: Tab; icon: React.ReactNode; label: string }[] = [
  { id: 'visao',    icon: <IconHome />,     label: 'Visão Geral' },
  { id: 'habitos',  icon: <IconFlame />,    label: 'Hábitos' },
  { id: 'financas', icon: <IconWallet />,   label: 'Finanças' },
  { id: 'tarefas',  icon: <IconCheck />,    label: 'Tarefas' },
  { id: 'treinos',  icon: <IconDumbbell />, label: 'Treinos' },
  { id: 'estudos',  icon: <IconBook />,     label: 'Estudos' },
]

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1 rounded-full bg-[var(--color-surface-section)] overflow-hidden mt-2">
      <div
        className="h-full rounded-full bg-[var(--color-brand-burgundy)] transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

function StatCard({
  label, value, sub, variant = 'default',
}: {
  label: string; value: string; sub?: string; variant?: 'default' | 'green' | 'burgundy'
}) {
  const base = 'rounded-[14px] p-3 border'
  const variants = {
    default:  `${base} bg-[var(--color-surface-page)] border-[var(--color-border-default)]`,
    green:    `${base} bg-[var(--color-surface-page)] border-[var(--color-border-default)]`,
    burgundy: `${base} bg-[var(--color-brand-burgundy)] border-transparent`,
  }
  const textValue = {
    default:  'text-[var(--color-text-primary)]',
    green:    'text-[var(--color-status-success)]',
    burgundy: 'text-white',
  }
  return (
    <div className={variants[variant]}>
      <p className={`text-[9px] font-bold uppercase tracking-[0.12em] mb-1.5 ${variant === 'burgundy' ? 'text-white/45' : 'text-[var(--color-text-muted)]'}`}>
        {label}
      </p>
      <p className={`text-[18px] font-semibold tracking-tight leading-none ${textValue[variant]}`} style={{ fontFamily: "var(--font-serif)" }}>
        {value}
      </p>
      {sub && (
        <p className={`text-[10px] mt-1 ${variant === 'burgundy' ? 'text-white/55' : 'text-[var(--color-text-secondary)]'}`}>{sub}</p>
      )}
    </div>
  )
}

function HabitRow({ habit, onToggle }: { habit: Habit; onToggle: (id: number) => void }) {
  return (
    <button
      onClick={() => onToggle(habit.id)}
      className="flex items-center gap-2 px-3 py-2 rounded-[10px] border border-[var(--color-border-default)] bg-[var(--color-surface-page)] hover:border-[var(--color-brand-burgundy)] transition-all text-left w-full cursor-pointer"
    >
      <span
        className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          habit.done
            ? 'bg-[var(--color-status-success)] border-[var(--color-status-success)] text-white'
            : 'border-[var(--color-border-default)]'
        }`}
      >
        {habit.done && (
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M1.5 4.5l2.5 2.5 4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
      <span className="flex-1 text-[11px] font-semibold text-[var(--color-text-primary)]">{habit.name}</span>
      <span className="text-[10px] text-[var(--color-text-muted)] font-medium">{habit.streak}</span>
    </button>
  )
}

function PanelVisao() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <StatCard label="Hábitos hoje" value="4/6" sub="67% completo" />
        <ProgressBar value={67} />
      </div>
      <StatCard label="Saldo total" value="R$12.847" sub="+12% este mês" variant="green" />
      <StatCard label="Tarefas" value="3/8" sub="5 pendentes" />
      <StatCard label="Sequência" value="9 dias" sub="Recorde pessoal" variant="burgundy" />
    </div>
  )
}

function PanelHabitos() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: 'Beber 3L de água',    done: true,  streak: '9d' },
    { id: 2, name: 'Meditar 10 min',      done: true,  streak: '5d' },
    { id: 3, name: 'Ler 30 páginas',      done: true,  streak: '3d' },
    { id: 4, name: 'Sem redes até 9h',    done: false, streak: '2d' },
    { id: 5, name: 'Plano alimentar',     done: false, streak: '4d' },
    { id: 6, name: 'Escrita matinal',     done: false, streak: '1d' },
  ])
  const toggle = (id: number) =>
    setHabits((h) => h.map((x) => (x.id === id ? { ...x, done: !x.done } : x)))
  return (
    <div className="flex flex-col gap-1.5">
      {habits.map((h) => <HabitRow key={h.id} habit={h} onToggle={toggle} />)}
    </div>
  )
}

function PanelFinancas() {
  const rows = [
    { label: 'Alimentação', value: '42%' },
    { label: 'Transporte',  value: '23%' },
    { label: 'Assinaturas', value: '15%' },
    { label: 'Compras',     value: '12%' },
  ]
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <StatCard label="Receita" value="R$9.847" sub="+12% este mês" variant="green" />
        <div className="rounded-[14px] p-3 border bg-[var(--color-surface-page)] border-[var(--color-border-default)]">
          <p className="text-[9px] font-bold uppercase tracking-[0.12em] mb-1.5 text-[var(--color-text-muted)]">Despesas</p>
          <p className="text-[18px] font-semibold tracking-tight leading-none text-[var(--color-status-error)]" style={{ fontFamily: "var(--font-serif)" }}>R$4.762</p>
          <p className="text-[10px] mt-1 text-[var(--color-text-secondary)]">-8% vs. anterior</p>
        </div>
      </div>
      <div className="rounded-[14px] p-3 border bg-[var(--color-surface-page)] border-[var(--color-border-default)]">
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] mb-2 text-[var(--color-text-muted)]">Por categoria</p>
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between py-1.5 border-b border-[var(--color-border-subtle)] last:border-0 text-[11px]">
            <span className="text-[var(--color-text-secondary)] flex items-center gap-2">
              <IconDot />
              {r.label}
            </span>
            <span className="font-bold text-[var(--color-text-primary)]">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PanelTarefas() {
  const [tasks, setTasks] = useState<Habit[]>([
    { id: 1, name: 'Finalizar proposta cliente', done: false, streak: 'Urgente' },
    { id: 2, name: 'Enviar relatório semanal',   done: false, streak: 'Trabalho' },
    { id: 3, name: 'Ligar pra minha mãe',        done: true,  streak: 'Família' },
    { id: 4, name: 'Pagar Netflix',               done: true,  streak: 'Finanças' },
  ])
  const toggle = (id: number) =>
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)))
  return (
    <div className="flex flex-col gap-1.5">
      {tasks.map((t) => <HabitRow key={t.id} habit={t} onToggle={toggle} />)}
    </div>
  )
}

function PanelTreinos() {
  const exercises = [
    { name: 'Supino Reto 3×10',    done: true,  detail: '70kg · PR 80kg' },
    { name: 'Crucifixo 3×12',      done: true,  detail: '20kg' },
    { name: 'Tríceps Pulley 4×12', done: false, detail: '35kg' },
  ]
  return (
    <div className="rounded-[14px] p-3 border bg-[var(--color-surface-page)] border-[var(--color-border-default)]">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] font-bold text-[var(--color-text-primary)]">Treino A · Peito e Tríceps</p>
        <span className="text-[9px] font-bold px-2 py-0.5 rounded-[8px] bg-[rgba(61,107,74,0.1)] text-[var(--color-status-success)]">Em andamento</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {exercises.map((e) => (
          <div key={e.name} className="flex items-center gap-2 px-3 py-2 rounded-[10px] border border-[var(--color-border-default)] bg-white text-[11px]">
            <span
              className={`w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 ${
                e.done ? 'bg-[var(--color-status-success)] text-white' : 'border-2 border-[var(--color-border-default)]'
              }`}
            >
              {e.done && (
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 4.5l2.5 2.5 4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            <span className="flex-1 font-semibold text-[var(--color-text-primary)]">{e.name}</span>
            <span className="text-[var(--color-text-muted)]">{e.detail}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PanelEstudos() {
  const [items, setItems] = useState<Habit[]>([
    { id: 1, name: 'TypeScript — Generics',   done: true,  streak: '20:00–21:00' },
    { id: 2, name: 'Revisar Anki (20 cards)',  done: false, streak: '20:30' },
    { id: 3, name: 'Ler capítulo 5',           done: false, streak: '5:00–6:00' },
  ])
  const toggle = (id: number) =>
    setItems((i) => i.map((x) => (x.id === id ? { ...x, done: !x.done } : x)))
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <StatCard label="Horas esta semana" value="4h 30m" sub="Meta: 7h" />
        <StatCard label="Sequência" value="5 dias" sub="Continue!" variant="burgundy" />
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((i) => <HabitRow key={i.id} habit={i} onToggle={toggle} />)}
      </div>
    </div>
  )
}

const PANELS: Record<Tab, React.ReactNode> = {
  visao:    <PanelVisao />,
  habitos:  <PanelHabitos />,
  financas: <PanelFinancas />,
  tarefas:  <PanelTarefas />,
  treinos:  <PanelTreinos />,
  estudos:  <PanelEstudos />,
}

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<Tab>('visao')
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const now = new Date()
    const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
    setDateStr(`${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`)
  }, [])

  const greeting = (() => {
    const h = new Date().getHours()
    return h < 12 ? 'Bom dia, Raquel' : h < 18 ? 'Boa tarde, Raquel' : 'Boa noite, Raquel'
  })()

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 relative">
      {/* Glow */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-[55%] h-48 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(68,2,6,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Window chrome */}
      <div
        className="relative rounded-[24px] border border-[var(--color-border-default)] overflow-hidden"
        style={{ boxShadow: '0 24px 80px -12px rgba(43,22,14,0.13), 0 4px 20px rgba(0,0,0,0.05)', background: '#fff' }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-surface-subtle)] border-b border-[var(--color-border-default)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="flex-1 text-center text-[11px] font-semibold text-[var(--color-text-muted)] mr-8">
            Zyra — Dashboard
          </span>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-[160px_1fr] min-h-[360px]">
          {/* Sidebar */}
          <div className="bg-[var(--color-surface-subtle)] border-r border-[var(--color-border-default)] p-3 hidden sm:block">
            {/* User */}
            <div className="flex items-center gap-2 p-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #C8A880, #E8B8A0)', color: '#2B1209' }}
              >
                R
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--color-text-primary)] leading-none">Raquel</p>
                <p className="text-[9px] text-[var(--color-text-muted)] mt-0.5 font-medium">Zyra Pro</p>
              </div>
            </div>

            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)] px-2 mb-2">Principal</p>
            <div className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-[10px] text-[11px] font-medium transition-all text-left cursor-pointer w-full ${
                    activeTab === item.id
                      ? 'bg-[var(--color-brand-burgundy)] text-white'
                      : 'text-[var(--color-text-secondary)] hover:bg-[rgba(68,2,6,0.06)] hover:text-[var(--color-brand-burgundy)]'
                  }`}
                >
                  <span className="w-4 flex items-center justify-center">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile tab bar */}
          <div className="sm:hidden col-span-2 flex overflow-x-auto gap-1 p-2 bg-[var(--color-surface-subtle)] border-b border-[var(--color-border-default)]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-[var(--color-brand-burgundy)] text-white'
                    : 'text-[var(--color-text-secondary)]'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[13px] font-semibold text-[var(--color-text-primary)]">{greeting}</p>
              <p className="text-[10px] text-[var(--color-text-muted)] font-medium">{dateStr}</p>
            </div>
            {PANELS[activeTab]}
          </div>
        </div>
      </div>
    </div>
  )
}
