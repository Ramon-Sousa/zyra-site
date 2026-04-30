import logoWhite from '../assets/logo-h-brand.png'

const NAV_LINKS = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Planos', href: '#pricing' },
  { label: 'Como acessar', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

const PILL_STYLE = {
  background: 'rgba(26,20,16,0.96)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  boxShadow: '0 12px 36px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06) inset',
} as const

export default function Nav() {
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
        className="hidden md:flex items-center rounded-full p-1.5 whitespace-nowrap"
        style={PILL_STYLE}
      >
        {/* Logo — no background circle, just the image */}
        <img
          src={logoWhite}
          alt="Zyra"
          style={{ backgroundColor: '#FEFCF9' }}
          className="w-22 h-8 object-contain flex-shrink-0 mr-6 ml-0.5 rounded-full"
        />

        {/* Nav links */}
        <ul className="flex items-center gap-6 text-[13px] font-medium" style={{ color: 'rgba(249,246,240,0.6)' }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[rgba(249,246,240,1)] transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider + actions */}
        <div
          className="flex items-center gap-3 ml-6 pl-6 flex-shrink-0"
          style={{ borderLeft: '1px solid rgba(249,246,240,0.12)' }}
        >
          <a
            href="https://zyra.meuglowmode.site/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium px-1 transition-colors duration-150 hover:text-[rgba(249,246,240,1)]"
            style={{ color: 'rgba(249,246,240,0.55)' }}
          >
            Entrar
          </a>
          <a
            href="https://zyra.meuglowmode.site/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-surface-page)] text-[var(--color-text-primary)] px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] leading-none whitespace-nowrap flex-shrink-0"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.14)' }}
          >
            Criar conta grátis
          </a>
        </div>
      </nav>

      {/* Mobile pill — full width minus padding */}
      <nav
        className="flex md:hidden items-center justify-between rounded-full px-3 py-2 w-full max-w-sm"
        style={PILL_STYLE}
      >
        <img src={logoWhite} 
          style={{ backgroundColor: '#FEFCF9' }} alt="Zyra" className="w-20 h-7 object-contain flex-shrink-0 rounded-full" />
        <a
          href="https://zyra.meuglowmode.site/register"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--color-surface-page)] text-[var(--color-text-primary)] px-4 py-2 rounded-full text-[13px] font-bold leading-none active:scale-[0.97] transition-transform flex-shrink-0"
        >
          Criar conta grátis
        </a>
      </nav>
    </div>
  )
}
