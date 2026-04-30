// CSS Motion Path: icons travel along an SVG arc path behind the phone mockup.
// Each icon has a different animation-delay so they stagger naturally.
// z-index: icons = 10, phone frame = 20 → icons pass behind the phone.

import mockupMobile from '../assets/mockup-full-mobile.png'
import icon1  from '../assets/icons/icon-lp-1.png'
import icon2  from '../assets/icons/icon-lp-2.png'
import icon3  from '../assets/icons/icon-lp-3.png'
import icon4  from '../assets/icons/icon-lp-4.png'
import icon5  from '../assets/icons/icon-lp-5.png'
import icon6  from '../assets/icons/icon-lp-6.png'
import icon7  from '../assets/icons/icon-lp-7.png'
import icon8  from '../assets/icons/icon-lp-8.png'
import icon9  from '../assets/icons/icon-lp-9.png'
import icon10 from '../assets/icons/icon-lp-10.png'
import icon11 from '../assets/icons/icon-lp-11.png'

const ARC_ICONS = [
  { name: 'Todoist',   delay: 0,     icon: icon1  },
  { name: 'Notion',    delay: -2.2,  icon: icon2  },
  { name: 'Habitica',  delay: -4.4,  icon: icon3  },
  { name: 'Hevy',      delay: -6.6,  icon: icon4  },
  { name: 'Mobills',   delay: -8.8,  icon: icon5  },
  { name: 'Sheets',    delay: -11,   icon: icon6  },
  { name: 'Anki',      delay: -13.2, icon: icon7  },
  { name: 'Trello',    delay: -15.4, icon: icon8  },
  { name: 'Strava',    delay: -17.6, icon: icon9  },
  { name: 'Forest',    delay: -19.8, icon: icon10 },
  { name: 'Duolingo',  delay: -22,   icon: icon11 },
]


export default function Problem() {
  const arcPath = 'M -50 500 C 100 -50, 500 -50, 650 500'
  const duration = 22

  return (
    <section
      className="relative overflow-hidden mb-12 sm:mb-20 mx-4 sm:mx-5 rounded-3xl md:rounded-[40px]"
      style={{ background: 'var(--color-text-primary)' }}
    >
      <style>{`
        @keyframes travel-arc {
          0%   { offset-distance: 0%;   opacity: 0; }
          4%   { opacity: 1; }
          96%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .arc-icon {
          offset-path: path('${arcPath}');
          offset-rotate: 0deg;
          animation: travel-arc ${duration}s linear infinite;
          position: absolute;
          top: 0;
          left: 0;
          will-change: offset-distance, opacity;
        }
      `}</style>

      {/* Ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, #0E0501 0%, transparent 70%)' }}
      />
      {/* Ambient glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, #0A0301 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-5 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text with real contrast */}
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.22em] mb-5"
              style={{ color: 'rgba(249,246,240,0.45)' }}
            >
              O problema
            </p>

            <h2
              className="text-[clamp(32px,4.5vw,54px)] font-semibold leading-[1.06] mb-6"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: '-1.5px', color: 'var(--color-surface-page)' }}
            >
              O <em className="italic" style={{ color: '#D7C6A8' }}>custo invisível</em>
              <br />de estar em todo lugar.
            </h2>

            <p
              className="text-[15px] sm:text-[16px] sm:max-w-[40ch] leading-[1.75]"
              style={{ color: 'rgba(249,246,240,0.62)' }}
            >
              Um app pra tarefa, outro pra hábito, planilha pra treino, outro pra
              finanças. Todos esses apps te fazem perder o foco antes do dia começar.
            </p>

            {/* Stat row */}
            {/* <div className="flex items-center gap-6 mt-8 pt-8" style={{ borderTop: '1px solid rgba(249,246,240,0.08)' }}>
              {[
                { num: '15+', label: 'apps que você substitui' },
                { num: '1', label: 'sistema pra tudo' },
              ].map((s) => (
                <div key={s.num}>
                  <p className="text-[28px] font-semibold leading-none mb-1" style={{ fontFamily: "var(--font-serif)", color: 'var(--color-surface-page)' }}>
                    {s.num}
                  </p>
                  <p className="text-[12px]" style={{ color: 'rgba(249,246,240,0.4)' }}>{s.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT — Phone + animated arc icons */}
          <div className="flex items-center justify-center overflow-hidden" style={{ height: 'clamp(260px, 50vw, 440px)' }}>
            <div
              className="relative flex-shrink-0 origin-center scale-[0.52] sm:scale-[0.72] md:scale-[0.80] lg:scale-[0.88]"
              style={{ width: 600, height: 500, marginTop: 'clamp(-120px, -10vw, 0px)', marginBottom: 'clamp(-120px, -10vw, 0px)' }}
            >
              {/* Arc icons — z-index 10, behind phone */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
                {ARC_ICONS.map((icon) => (
                  <div
                    key={icon.name}
                    className="arc-icon"
                    title={icon.name}
                    style={{ animationDelay: `${icon.delay}s`, transform: 'translate(-50%, -50%)' }}
                  >
                    <img
                      src={icon.icon}
                      alt={icon.name}
                      className="rounded-[13px]"
                      style={{
                        width: 44,
                        height: 44,
                        boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
                      }}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Phone — z-index 20, in front of icons */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 20 }}>
                <img
                  src={mockupMobile}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-auto object-contain rounded-[36px]"
                  style={{ maxHeight: 480 }}
                  draggable={false}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
