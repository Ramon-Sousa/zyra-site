import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { buildOfferRedirectUrl } from '../lib/offerRedirect'

const BACK_REDIRECT_STATE_KEY = 'zyraBackRedirectArmed'

export function useBackRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/') return

    const state = window.history.state as Record<string, unknown> | null

    if (state?.[BACK_REDIRECT_STATE_KEY] !== true) {
      window.history.pushState(
        { ...(state ?? {}), [BACK_REDIRECT_STATE_KEY]: true },
        '',
        window.location.href,
      )
    }

    const redirectToOffer = () => {
      navigate(buildOfferRedirectUrl(window.location.href), { replace: true })
    }

    window.addEventListener('popstate', redirectToOffer)

    return () => window.removeEventListener('popstate', redirectToOffer)
  }, [location.pathname, navigate])
}
