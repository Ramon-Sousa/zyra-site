const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const

export function appendCurrentUtmParams(url: string): string {
  if (typeof window === 'undefined') return url

  try {
    const checkoutUrl = new URL(url)
    const currentParams = new URLSearchParams(window.location.search)

    for (const key of UTM_KEYS) {
      const value = currentParams.get(key)?.trim()
      if (value) checkoutUrl.searchParams.set(key, value)
    }

    return checkoutUrl.toString()
  } catch {
    return url
  }
}
