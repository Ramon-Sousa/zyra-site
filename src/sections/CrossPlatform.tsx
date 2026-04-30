

// Wireframe Desktop - Estilo Outline com toques de Burgundy
function DesktopWireframe() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-t-[24px] border-x border-t border-[rgba(249,246,240,0.1)] bg-black/20 overflow-hidden" style={{ padding: '5%' }}>
      {/* Traffic Lights */}
      <div className="flex items-center gap-[2%] opacity-30" style={{ marginBottom: '5%' }}>
        <div className="w-[3%] aspect-square rounded-full bg-[var(--color-surface-page)]" />
        <div className="w-[3%] aspect-square rounded-full bg-[var(--color-surface-page)]" />
        <div className="w-[3%] aspect-square rounded-full bg-[var(--color-surface-page)]" />
      </div>

      <div className="grid grid-cols-[22%_1fr] gap-[4%] h-[80%]">
        {/* Sidebar */}
        <div className="flex flex-col gap-[8%]">
          <div className="h-[8%] w-[70%] bg-[var(--color-brand-burgundy)] opacity-20 rounded-md" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-[3%] w-full bg-[rgba(249,246,240,0.05)] rounded-full" />
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[6%] h-full">
          <div className="grid grid-cols-3 gap-[4%] h-[35%]">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl border border-[rgba(249,246,240,0.08)] bg-[rgba(249,246,240,0.02)]" />
            ))}
          </div>
          {/* Gráfico Desktop */}
          <div className="flex-1 rounded-xl border border-[rgba(249,246,240,0.08)] bg-[rgba(249,246,240,0.02)] p-[3%] flex items-end gap-[1.5%]">
            {[30, 60, 40, 85, 55, 25, 50, 75, 40, 65, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === 7 ? 'var(--color-brand-burgundy)' : 'rgba(249,246,240,0.1)',
                  opacity: i === 7 ? 0.8 : 1
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Base do Laptop */}
      <div className="absolute -bottom-3 left-[-4%] right-[-4%] h-3 bg-[#0a0a0a] border border-[rgba(249,246,240,0.15)] rounded-b-2xl shadow-2xl" />
    </div>
  )
}

// Wireframe Mobile - O ponto de destaque
function MobileWireframe() {
  return (
    <div className="w-full aspect-[9/18.5] rounded-[clamp(16px,5vw,45px)] border-[3px] border-[rgba(249,246,240,0.15)] bg-[#050505] p-[clamp(8px,2vw,20px)] flex flex-col gap-[clamp(8px,1.5vw,20px)] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Notch */}
      <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[40%] h-[3%] bg-[rgba(249,246,240,0.05)] rounded-full" />

      {/* Conteúdo — tudo em % para escalar com o container */}
      <div className="mt-[12%] flex flex-col gap-[5%] flex-1">
        <div className="h-[6%] w-[60%] bg-[var(--color-brand-burgundy)] opacity-40 rounded-full" />

        <div className="flex flex-col gap-[4%] flex-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex-1 w-full rounded-xl border border-[rgba(249,246,240,0.08)] bg-[rgba(249,246,240,0.02)] flex items-center px-[8%] gap-[8%]">
              <div className="aspect-square h-[45%] rounded-full bg-[rgba(249,246,240,0.06)]" />
              <div className="h-[15%] flex-1 bg-[rgba(249,246,240,0.04)] rounded-full" />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="flex-[1.2] rounded-xl border border-[rgba(249,246,240,0.1)] bg-[rgba(249,246,240,0.02)] p-[6%] flex items-end gap-[3%]">
          {[35, 55, 90, 70, 45, 30].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                backgroundColor: i < 4 ? 'var(--color-brand-burgundy)' : 'rgba(249,246,240,0.08)',
                opacity: i < 4 ? 0.85 : 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CrossPlatform() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 px-5 mx-4 sm:mx-5 rounded-3xl md:rounded-[40px]"
      style={{ background: 'var(--color-text-primary)' }}
    >
      {/* Ambient glow top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, #0E0501 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[rgba(249,246,240,0.3)] mb-6">
            Multiplataforma
          </p>
          <h2
            className="text-[clamp(28px,4.5vw,54px)] font-semibold leading-[1.06] text-[var(--color-surface-page)] mb-6"
            style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-1.5px' }}
          >
            Uma experiência.<br />
            <em className="italic" style={{ color: '#D7C6A8' }}>Todas as telas.</em>
          </h2>
          <p className="text-[15px] sm:text-[16px] max-w-[46ch] mx-auto leading-[1.75] text-[rgba(249,246,240,0.45)]">
            Windows, Mac, iPhone, Android ou Linux. O Zyra roda perfeitamente no navegador de qualquer dispositivo. Seus dados sincronizados em tempo real.
          </p>
        </div>

        {/* Composição de Dispositivos — flex, sem absolute, proporcional */}
        <div className="flex items-end gap-3 sm:gap-4 w-full overflow-hidden">
          {/* Laptop — ocupa a maior parte */}
          <div className="flex-[3] min-w-0 opacity-70 hover:opacity-90 transition-opacity duration-500">
            <DesktopWireframe />
          </div>

          {/* Celular — proporcional, alinhado ao fundo do laptop */}
          <div className="flex-1 min-w-0 max-w-[22%] sm:max-w-[20%] hover:scale-[1.02] transition-transform duration-500">
            <MobileWireframe />
          </div>
        </div>
      
        
        {/* Platform pills — HowItWorks card style */}
        {/* <div className="flex flex-col gap-3">
          {PLATFORMS.map((p, i) => (
            <div
              key={p.name}
              className={`scroll-reveal stagger-${i + 1} flex items-center gap-5 rounded-[20px] px-6 py-4`}
              style={{
                background: 'rgba(249,246,240,0.06)',
                border: '1px solid rgba(249,246,240,0.09)',
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-[12px] flex items-center justify-center"
                style={{
                  background: i === 0 ? 'rgba(68,2,6,0.65)' : i === 2 ? 'rgba(68,2,6,0.45)' : 'rgba(249,246,240,0.07)',
                  color: 'rgba(249,246,240,0.85)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {p.icon}
              </div>
              <span
                className="text-[15px] font-semibold flex-1"
                style={{ color: 'rgba(249,246,240,0.88)' }}
              >
                {p.name}
              </span>
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                style={{ background: 'rgba(74,124,89,0.15)', color: 'rgba(130,200,150,0.9)', border: '1px solid rgba(74,124,89,0.25)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(130,200,150,0.8)' }} />
                Compatível
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

