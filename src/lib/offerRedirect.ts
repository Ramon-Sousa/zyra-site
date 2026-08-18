export function buildOfferRedirectUrl(currentUrl: string) {
  const url = new URL(currentUrl)

  return `/ofertaespecial${url.search}`
}
