import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const pricingPath = new URL('../src/sections/Pricing.tsx', import.meta.url)
const specialOfferPath = new URL('../src/pages/SpecialOffer.tsx', import.meta.url)

test('renders the approved offer prices and upgrade copy', async () => {
  const [pricing, specialOffer] = await Promise.all([
    readFile(pricingPath, 'utf8'),
    readFile(specialOfferPath, 'utf8'),
  ])

  assert.match(pricing, /R\$ 32,90/)
  assert.match(pricing, /R\$ 35,90/)
  assert.match(pricing, /por apenas R\$ 3 a mais.*todos os seis b.nus/i)
  assert.match(specialOffer, /R\$ 29,90/)
})
