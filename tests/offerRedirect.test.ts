import assert from 'node:assert/strict'
import test from 'node:test'

test('buildOfferRedirectUrl preserves campaign parameters when moving to the last-chance offer', async () => {
  const module = await import('../src/lib/offerRedirect.ts').catch(() => null)

  assert.ok(module)
  assert.equal(
    module.buildOfferRedirectUrl('https://zyra.com.br/?utm_source=meta&utm_campaign=launch&fbclid=abc123'),
    '/ofertaespecial?utm_source=meta&utm_campaign=launch&fbclid=abc123',
  )
})

test('buildOfferRedirectUrl keeps the offer route free from a trailing question mark without parameters', async () => {
  const module = await import('../src/lib/offerRedirect.ts').catch(() => null)

  assert.ok(module)
  assert.equal(module.buildOfferRedirectUrl('https://zyra.com.br/'), '/ofertaespecial')
})
