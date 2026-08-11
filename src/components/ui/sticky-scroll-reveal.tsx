import type { ReactNode } from 'react'
import { useMemo, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

type StickyScrollItem = {
  title: string
  description: string
  eyebrow?: string
  content?: ReactNode
}

type StickyScrollProps = {
  content: StickyScrollItem[]
  contentClassName?: string
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

export function StickyScroll({ content, contentClassName }: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  const cardBreakpoints = useMemo(
    () => content.map((_, index) => index / Math.max(content.length, 1)),
    [content],
  )

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const closestBreakpointIndex = cardBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      return distance < Math.abs(latest - cardBreakpoints[acc]) ? index : acc
    }, 0)

    setActiveCard((current) => (current === closestBreakpointIndex ? current : closestBreakpointIndex))
  })

  if (content.length === 0) {
    return null
  }

  return (
    <>
      <div className="flex flex-col gap-12 lg:hidden">
        {content.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="flex flex-col gap-5"
          >
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-burgundy)] opacity-70">
                {item.eyebrow}
              </p>
              <h3
                  className="mb-3 text-[26px] font-semibold leading-[1.08] text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-0.5px' }}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
            </div>
            <div className="overflow-hidden rounded-[24px]">{item.content}</div>
          </article>
        ))}
      </div>

      <div
        ref={ref}
        data-active-title={content[activeCard]?.title}
        className="relative hidden lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-16"
      >
        <div className="relative min-w-0 py-[18vh]">
          <div className="max-w-md">
            {content.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex min-h-[48vh] flex-col justify-center py-10"
              >
                {item.eyebrow ? (
                  <p
                    className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-burgundy)] transition-opacity duration-300"
                    style={{ opacity: activeCard === index ? 0.72 : 0.22 }}
                  >
                    {item.eyebrow}
                  </p>
                ) : null}
                <h3
                  className="text-[clamp(30px,3.2vw,44px)] font-semibold leading-[1.04] text-[var(--color-text-primary)] transition-opacity duration-300"
                  style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-1px', opacity: activeCard === index ? 1 : 0.28 }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-5 max-w-md text-[15px] leading-[1.8] text-[var(--color-text-secondary)] transition-opacity duration-300"
                  style={{ opacity: activeCard === index ? 1 : 0.32 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="sticky top-28 flex h-[calc(100vh-8rem)] max-h-[34rem] min-h-[28rem] items-center">
            <div
              className={cn(
                'h-full w-full overflow-hidden rounded-[28px]',
                contentClassName,
              )}
            >
              {content[activeCard]?.content}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
