export default function Footer() {
  return (
    <footer className="py-12 px-5 max-w-5xl mx-auto">
      <div className="border-t border-[var(--color-border-default)] pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p
            className="font-medium text-[var(--color-brand-burgundy)] text-[16px] tracking-tight mb-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Zyra
          </p>
          <p className="text-[var(--color-text-muted)] text-[13px]">
            O sistema de organização para mulheres que querem parar de viver no automático.
          </p>
        </div>
        <p className="text-[var(--color-text-muted)] text-[12px] flex-shrink-0">
          © 2026 Zyra
        </p>
      </div>
    </footer>
  )
}
