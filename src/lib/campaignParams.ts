export function appendCurrentUtmParams(url: string): string {
  if (typeof window === 'undefined') return url

  try {
    const checkoutUrl = new URL(url)
    const currentParams = new URLSearchParams(window.location.search)

    for (const [key, rawValue] of currentParams.entries()) {
      if (!key.toLowerCase().startsWith('utm_')) continue

      const value = rawValue.trim()
      if (value) checkoutUrl.searchParams.set(key, value)
    }

    return checkoutUrl.toString()
  } catch {
    return url
  }
}
