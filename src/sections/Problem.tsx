import { useCallback, useEffect, useRef, useState } from 'react'
import { SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react'

const CHECKOUT_URL = 'https://pay.cakto.com.br/kse9sb5'
const VIDEO_URL = 'https://meuglowmode.site/server/assets/videos/vsl-lp-zyra.mp4'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

type Plateau = {
  start: number
  duration: number
}

const LEAD_FACTOR = 1.15
const FALLBACK_DURATION = 120
const PLATEAUS: Plateau[] = [
  { start: 0.32, duration: 420 },
  { start: 0.58, duration: 680 },
  { start: 0.78, duration: 360 },
]

export default function Problem() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const progressRef = useRef(0)
  const leadFactorRef = useRef(LEAD_FACTOR)
  const plateausRef = useRef(PLATEAUS)
  const plateauUntilRef = useRef(0)
  const lastPlateauIndexRef = useRef(-1)
  const isVisibleRef = useRef(true)
  const simulatedTimeRef = useRef(0)
  const lastFrameRef = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [videoAspectRatio, setVideoAspectRatio] = useState('9 / 16')

  const playVideo = useCallback(() => {
    const video = videoRef.current
    if (!video || !isVisibleRef.current || video.ended) return
    void video.play().catch(() => undefined)
  }, [])

  const handleEnableAudio = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    setIsMuted(false)
    playVideo()
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const syncProgress = () => {
      const now = performance.now()
      const lastFrame = lastFrameRef.current ?? now
      const deltaSeconds = Math.max(0, (now - lastFrame) / 1000)
      lastFrameRef.current = now

      if (!video.ended && isVisibleRef.current) {
        simulatedTimeRef.current += deltaSeconds
      }

      const hasRealDuration = Number.isFinite(video.duration) && video.duration > 0
      const duration = hasRealDuration ? video.duration : FALLBACK_DURATION
      const time = hasRealDuration ? Math.max(video.currentTime, simulatedTimeRef.current) : simulatedTimeRef.current
      const realRatio = clamp(time / duration, 0, 1)

      if (realRatio > 0 || progressRef.current > 0) {
        let target = clamp((time * leadFactorRef.current) / duration, 0, 0.95)

        plateausRef.current.forEach((plateau, index) => {
          const hasReachedPlateau = realRatio >= plateau.start
          const isNewPlateau = index > lastPlateauIndexRef.current

          if (hasReachedPlateau && isNewPlateau && now > plateauUntilRef.current) {
            plateauUntilRef.current = now + plateau.duration
            lastPlateauIndexRef.current = index
          }
        })

        if (now < plateauUntilRef.current && realRatio < 0.9) {
          target = progressRef.current
        }

        if (realRatio >= 0.9) {
          const finalRatio = clamp((realRatio - 0.9) / 0.1, 0, 1)
          const easedFinalRatio = 1 - Math.pow(1 - finalRatio, 3)
          target = clamp(0.9 + easedFinalRatio * 0.1, progressRef.current, 1)
        }

        if (!video.ended) {
          target = Math.min(target, 0.995)
        }

        progressRef.current += (target - progressRef.current) * 0.08
        const nextProgress = clamp(progressRef.current, 0, video.ended ? 1 : 0.995)

        setProgress(nextProgress)
      }

      animationRef.current = requestAnimationFrame(syncProgress)
    }

    const syncCurrentTime = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        setVideoAspectRatio(`${video.videoWidth} / ${video.videoHeight}`)
      }

      if (Number.isFinite(video.currentTime)) {
        simulatedTimeRef.current = Math.max(simulatedTimeRef.current, video.currentTime)
      }
    }

    video.addEventListener('loadedmetadata', syncCurrentTime)
    video.addEventListener('timeupdate', syncCurrentTime)
    video.addEventListener('play', syncCurrentTime)
    animationRef.current = requestAnimationFrame(syncProgress)

    return () => {
      video.removeEventListener('loadedmetadata', syncCurrentTime)
      video.removeEventListener('timeupdate', syncCurrentTime)
      video.removeEventListener('play', syncCurrentTime)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const player = playerRef.current
    if (!player) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35
        isVisibleRef.current = isVisible

        if (isVisible) {
          playVideo()
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: [0, 0.35, 0.7, 1] },
    )

    observer.observe(player)

    return () => observer.disconnect()
  }, [playVideo])

  return (
    <section
      className="relative overflow-hidden mb-12 sm:mb-20 mx-4 sm:mx-5 rounded-3xl md:rounded-[40px]"
      style={{ background: 'var(--color-text-primary)' }}
      aria-label="Video de apresentacao do Zyra"
    >
      <style>{`
        @keyframes vsl-sound-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.72; transform: scale(1.035); }
        }

        .vsl-sound-prompt {
          animation: vsl-sound-pulse 1.6s ease-in-out infinite;
        }
      `}</style>

      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, #0E0501 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, #0A0301 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em] mb-5"
            style={{ color: 'rgba(249,246,240,0.45)' }}
          >
            O problema
          </p>

          <h2
            className="text-[clamp(30px,4.2vw,52px)] font-semibold leading-[1.06] mb-8"
            style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-1.2px', color: 'var(--color-surface-page)' }}
          >
            Veja em 2 minutos como sua rotina passará a ser organizada.
          </h2>
        </div>

        <div
          ref={playerRef}
          className="relative mx-auto overflow-hidden rounded-[28px] w-full max-w-[420px]"
          style={{
            aspectRatio: videoAspectRatio,
            background: 'transparent',
            border: '1px solid rgba(249,246,240,0.12)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.38)',
            ['--vsl-progress-bg' as string]: 'rgba(249,246,240,0.18)',
            ['--vsl-progress-fill' as string]: 'var(--color-brand-burgundy)',
            ['--vsl-progress-glow' as string]: '#D7C6A8',
          }}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="absolute inset-0 block h-full w-full object-contain"
            autoPlay
            muted
            playsInline
            preload="metadata"
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            onPause={() => {
              const video = videoRef.current
              if (video && isVisibleRef.current && !video.ended) {
                playVideo()
              }
            }}
            onSeeking={() => {
              const video = videoRef.current
              if (!video || video.ended) return

              const maxAllowedTime = progressRef.current * (video.duration || 0)
              if (video.currentTime > maxAllowedTime + 1) {
                video.currentTime = Math.max(0, maxAllowedTime)
              }
            }}
            onEnded={() => {
              progressRef.current = 1
              setProgress(1)
            }}
            onCanPlay={playVideo}
          />

          {isMuted ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center px-3 sm:px-4">
              <button
                type="button"
                onClick={handleEnableAudio}
                className="vsl-sound-prompt flex w-full flex-col items-center justify-center rounded-[12px] px-4 py-3 text-center font-semibold transition-transform duration-200 hover:scale-[1.015] active:scale-[0.99]"
                style={{
                  background: 'var(--color-brand-burgundy)',
                  color: 'var(--color-surface-page)',
                  border: '1px solid rgba(249,246,240,0.72)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
                }}
                aria-label="Seu video ja comecou. Clique para ouvir"
              >
                <span className="text-[15px] sm:text-[17px] leading-none mb-2">
                  Seu vídeo já começou
                </span>
                <SpeakerSlash size={36} weight="fill" />
                <span className="text-[13px] sm:text-[15px] leading-none mt-2">
                  Clique para ouvir
                </span>
              </button>
            </div>
          ) : (
            <div
              className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full"
              style={{
                background: 'rgba(249,246,240,0.9)',
                color: 'var(--color-brand-burgundy)',
              }}
              aria-hidden="true"
            >
              <SpeakerHigh size={18} weight="bold" />
            </div>
          )}

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2"
            style={{ background: 'var(--vsl-progress-bg)' }}
            aria-hidden="true"
          >
            <div
              className="h-full rounded-r-full"
              style={{
                width: `${progress * 100}%`,
                minWidth: progress > 0 ? 8 : 0,
                background:
                  'linear-gradient(90deg, var(--vsl-progress-fill), var(--vsl-progress-glow))',
                boxShadow: progress > 0 ? '0 0 14px rgba(215,198,168,0.5)' : 'none',
                transition: 'width 260ms cubic-bezier(.2,.9,.2,1)',
              }}
            />
          </div>
        </div>

        <div className="mt-7 flex justify-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex h-[52px] w-full max-w-[420px] items-center justify-center rounded-[28px] bg-[var(--color-surface-page)] px-7 text-[14px] font-semibold text-[var(--color-brand-burgundy)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
            style={{ boxShadow: '0 8px 28px rgba(0,0,0,0.22)' }}
          >
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
