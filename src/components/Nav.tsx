const PILL_STYLE = {
  background: 'rgba(26,20,16,0.96)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  boxShadow: '0 12px 36px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06) inset',
} as const

const MONTHS = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

function getDiscountDateText() {
  const today = new Date()
  const days = [-2, -1, 0].map((offset) => {
    const date = new Date(today)
    date.setDate(today.getDate() + offset)
    return date
  })
  const sameMonth = days.every(
    (date) => date.getMonth() === days[0].getMonth() && date.getFullYear() === days[0].getFullYear(),
  )

  if (sameMonth) {
    const [first, second, third] = days.map((date) => date.getDate())
    return `Desconto válido nos dias ${first}, ${second} e ${third} de ${MONTHS[days[2].getMonth()]}.`
  }

  const formattedDays = days.map((date) => `${date.getDate()} de ${MONTHS[date.getMonth()]}`)
  return `Desconto válido nos dias ${formattedDays[0]}, ${formattedDays[1]} e ${formattedDays[2]}.`
}

export default function Nav() {
  const discountText = getDiscountDateText()

  return (
    <div
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      style={{
        animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
        animationDelay: '80ms',
      }}
    >
      {/* Desktop pill */}
      <nav
        className="relative hidden min-w-[720px] items-center justify-center rounded-full p-1.5 whitespace-nowrap"
        style={PILL_STYLE}
      >
        <p className="px-36 text-center text-[13px] font-semibold" style={{ color: 'rgba(249,246,240,0.76)' }}>
          {discountText}
        </p>

        <div
          className="absolute right-1.5 top-1/2 -translate-y-1/2 pl-6"
          style={{ borderLeft: '1px solid rgba(249,246,240,0.12)' }}
        >
          <a
            href="#pricing"
            className="bg-[var(--color-surface-page)] text-[var(--color-text-primary)] px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] leading-none whitespace-nowrap flex-shrink-0"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.14)' }}
          >
            Garantir acesso
          </a>
        </div>
      </nav>

      {/* Mobile pill — full width minus padding */}
      <nav
        className="flex md:hidden items-center justify-center rounded-[22px] px-4 py-2 w-full max-w-sm"
        style={PILL_STYLE}
      >
        <a
          href="#pricing"
          className="min-w-0 text-center text-[11px] font-semibold leading-snug active:scale-[0.99] transition-transform"
          style={{ color: 'rgba(249,246,240,0.8)' }}
        >
          {discountText}
        </a>
      </nav>
    </div>
  )
}
