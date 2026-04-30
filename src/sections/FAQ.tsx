import { useState } from 'react'

const FAQS = [
  {
    q: 'Posso testar antes de assinar?',
    a: 'Sim. Ao criar sua conta gratuita você já tem acesso ao Zyra e pode explorar o app, configurar seu desafio e testar as primeiras funcionalidades antes de assinar qualquer plano.',
  },
  {
    q: 'Como funciona a assinatura?',
    a: 'O Zyra funciona por assinatura recorrente — mensal, semestral ou anual. O valor é cobrado automaticamente no período escolhido e você pode cancelar quando quiser, sem multa.',
  },
  {
    q: 'Funciona no celular e no computador?',
    a: 'Sim. O Zyra é um aplicativo web que funciona perfeitamente no celular (iOS e Android), tablet e computador (Mac, Windows, Linux). Seus dados sincronizam em tempo real entre todos os dispositivos.',
  },
  {
    q: 'E se eu não me adaptar?',
    a: 'Você tem 7 dias de garantia em todos os planos. Se não gostar por qualquer motivo, é só entrar em contato e devolvemos 100% do valor. Sem perguntas, sem burocracia. Risco zero.',
  },
  {
    q: 'Quais funcionalidades são gratuitas?',
    a: 'No plano gratuito você pode criar e concluir o primeiro hábito e a primeira tarefa do dia. Funcionalidades como journal, treinos, temas personalizados, streaks completos e desafios avançados são exclusivas dos planos pagos.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim, sem pegadinhas. Você pode cancelar sua assinatura a qualquer momento pelo próprio app. Seu acesso permanece ativo até o fim do período já pago.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 sm:py-24 px-5 max-w-5xl mx-auto">
      <div className="">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-burgundy)] mb-4">
          Dúvidas
        </p>
        <h2
          className="text-[clamp(28px,4vw,52px)] font-medium text-[var(--color-text-primary)] leading-[1.08] mb-10 sm:mb-14"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1px' }}
        >
          Perguntas{' '}
          <em className="italic text-[var(--color-brand-burgundy)]">frequentes.</em>
        </h2>

      <div className="flex flex-col border-t border-[var(--color-border-default)]">
        {FAQS.map((faq, i) => (
          <div key={faq.q} className={`scroll-reveal stagger-${Math.min(i + 1, 6)} border-b border-[var(--color-border-default)] py-5`}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex items-start justify-between gap-4 w-full text-left cursor-pointer group"
            >
              <span className="text-[15px] font-semibold text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-brand-burgundy)] transition-colors">
                {faq.q}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-0.5 ${
                  open === i
                    ? 'bg-[var(--color-brand-burgundy)] text-white rotate-45'
                    : 'bg-[var(--color-surface-section)] text-[var(--color-text-secondary)]'
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: open === i ? '300px' : '0' }}
            >
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed pt-3 pr-10">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
