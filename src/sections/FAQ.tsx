import { useState } from 'react'

const FAQS = [
  {
    q: 'Preciso baixar algum app na loja?',
    a: 'Não. O Zyra funciona direto no navegador do celular e do computador, e pode ser instalado na tela inicial como qualquer outro app. Você abre e usa na hora.',
  },
  {
    q: 'Funciona no iPhone e no Android?',
    a: 'Sim. O Zyra funciona no iPhone, Android, tablet e computador. Seus dados ficam sincronizados para você acessar sua rotina de qualquer dispositivo.',
  },
  {
    q: 'É pagamento único mesmo, sem mensalidade?',
    a: 'Sim. A oferta atual é de acesso vitalício com pagamento único, sem mensalidade recorrente.',
  },
  {
    q: 'Preciso entender de tecnologia?',
    a: 'Não. O Zyra foi feito para ser simples: você acessa, organiza suas áreas e acompanha sua rotina sem configurações complicadas.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem 7 dias de garantia. Se não gostar por qualquer motivo, é só entrar em contato e devolvemos 100% do valor.',
  },
  {
    q: 'Meus dados ficam guardados?',
    a: 'Sim. Seus dados ficam salvos na sua conta e sincronizados para você continuar de onde parou sempre que acessar o Zyra.',
  },
  {
    q: 'Como garanto meu acesso?',
    a: 'Você garante seu acesso pelo checkout seguro e recebe a liberação do Zyra para explorar o app, configurar seu desafio e organizar sua rotina em um só lugar.',
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
    q: 'O que está incluso no acesso?',
    a: 'O acesso inclui desafio personalizado, hábitos, tarefas, journal, treinos, controle financeiro, temas personalizados e recursos para acompanhar sua evolução dentro do Zyra.',
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
