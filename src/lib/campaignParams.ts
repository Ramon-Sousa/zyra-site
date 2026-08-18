const PAID_UTM_STORAGE_KEY = 'zyra_paid_utm_params'
const ORGANIC_MEDIUMS = new Set(['organic', 'seo', 'social', 'referral'])

function collectUtmParams(params: URLSearchParams) {
  const utms = new URLSearchParams()

  for (const [key, rawValue] of params.entries()) {
    if (!key.toLowerCase().startsWith('utm_')) continue

    const value = rawValue.trim()
    if (value) utms.set(key, value)
  }

  return utms
}

function isOrganicAttribution(params: URLSearchParams) {
  const medium = params.get('utm_medium')?.trim().toLowerCase()

  return medium ? ORGANIC_MEDIUMS.has(medium) : false
}

function hasUtmParams(params: URLSearchParams) {
  return Array.from(params.keys()).some((key) => key.toLowerCase().startsWith('utm_'))
}

function getStoredPaidUtmParams() {
  try {
    const stored = window.localStorage.getItem(PAID_UTM_STORAGE_KEY)
    return stored ? new URLSearchParams(stored) : new URLSearchParams()
  } catch {
    return new URLSearchParams()
  }
}

function storePaidUtmParams(params: URLSearchParams) {
  try {
    window.localStorage.setItem(PAID_UTM_STORAGE_KEY, params.toString())
  } catch {
    // Attribution should never block checkout URL generation.
  }
}

export function persistCurrentPaidUtmParams() {
  if (typeof window === 'undefined') return

  const currentUtms = collectUtmParams(new URLSearchParams(window.location.search))

  if (hasUtmParams(currentUtms) && !isOrganicAttribution(currentUtms)) {
    storePaidUtmParams(currentUtms)
  }
}

export function appendCurrentUtmParams(url: string): string {
  if (typeof window === 'undefined') return url

  try {
    const checkoutUrl = new URL(url)
    const currentParams = new URLSearchParams(window.location.search)
    const currentUtms = collectUtmParams(currentParams)
    const hasCurrentUtms = hasUtmParams(currentUtms)
    const currentIsOrganic = isOrganicAttribution(currentUtms)
    const storedPaidUtms = getStoredPaidUtmParams()
    const hasStoredPaidUtms = hasUtmParams(storedPaidUtms)
    const utmsToApply = !currentIsOrganic && hasCurrentUtms
      ? currentUtms
      : hasStoredPaidUtms
        ? storedPaidUtms
        : currentUtms

    if (!currentIsOrganic && hasCurrentUtms) storePaidUtmParams(currentUtms)

    for (const [key, value] of utmsToApply.entries()) {
      checkoutUrl.searchParams.set(key, value)
    }

    return checkoutUrl.toString()
  } catch {
    return url
  }
}
