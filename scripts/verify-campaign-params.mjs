import { readFileSync } from 'node:fs'

const conversionSections = [
  {
    path: 'src/sections/Problem.tsx',
    required: [
      "import { appendCurrentUtmParams } from '../lib/campaignParams'",
      "appendCurrentUtmParams(CHECKOUT_URL)",
    ],
  },
  {
    path: 'src/sections/FinalCTA.tsx',
    required: [
      "import { appendCurrentUtmParams } from '../lib/campaignParams'",
      "appendCurrentUtmParams(REGISTER_URL)",
    ],
  },
  {
    path: 'src/sections/Pricing.tsx',
    required: [
      "import { appendCurrentUtmParams } from '../lib/campaignParams'",
      "appendCurrentUtmParams(CHECKOUT_URL)",
    ],
  },
]

const helperSource = readFileSync('src/lib/campaignParams.ts', 'utf8')

let failed = false

if (!helperSource.includes("key.toLowerCase().startsWith('utm_')")) {
  console.error('src/lib/campaignParams.ts must preserve every utm_* parameter, including custom campaign keys.')
  failed = true
}

if (!helperSource.includes('localStorage')) {
  console.error('src/lib/campaignParams.ts must persist paid utm_* parameters in localStorage.')
  failed = true
}

if (!helperSource.includes('utm_medium') || !helperSource.includes('organic')) {
  console.error('src/lib/campaignParams.ts must detect organic visits and avoid replacing stored paid attribution with organic UTMs.')
  failed = true
}

for (const section of conversionSections) {
  const source = readFileSync(section.path, 'utf8')

  if (section.path === 'src/sections/Problem.tsx' && source.includes("#pricing")) {
    console.error('src/sections/Problem.tsx VSL CTA must link directly to checkout for every page variant.')
    failed = true
  }

  for (const expected of section.required) {
    if (!source.includes(expected)) {
      console.error(`${section.path} must include: ${expected}`)
      failed = true
    }
  }
}

if (failed) {
  process.exit(1)
}

console.log('Campaign parameter checks passed.')
