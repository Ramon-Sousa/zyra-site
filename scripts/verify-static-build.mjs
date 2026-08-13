import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const distDir = 'dist'
const indexPath = join(distDir, 'index.html')
const mainPath = join('src', 'main.tsx')

function fail(message) {
  console.error(`Static build check failed: ${message}`)
  process.exitCode = 1
}

if (!existsSync(indexPath)) {
  fail('dist/index.html does not exist. Run npm run build first.')
  process.exit()
}

if (!existsSync(mainPath)) {
  fail('src/main.tsx does not exist.')
  process.exit()
}

const html = readFileSync(indexPath, 'utf8')
const mainSource = readFileSync(mainPath, 'utf8')
const localAssetRefs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((ref) => ref.includes('assets/'))

const absoluteAssetRefs = localAssetRefs.filter((ref) => ref.startsWith('/'))

if (absoluteAssetRefs.length > 0) {
  fail(
    `asset paths must be relative for Hostinger/static uploads, found: ${absoluteAssetRefs.join(', ')}`,
  )
}

for (const ref of localAssetRefs) {
  const normalizedRef = ref.replace(/^\.\//, '')
  const assetPath = join(distDir, normalizedRef)

  if (!existsSync(assetPath)) {
    fail(`referenced asset does not exist: ${ref}`)
  }
}

const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)

if (!bodyMatch) {
  fail('body tag was not found in dist/index.html')
} else if (!bodyMatch[1].includes('<noscript>')) {
  fail('Meta Pixel noscript fallback must be inside the body tag')
}

if (!process.exitCode) {
  if (!mainSource.includes('<Route path="*"')) {
    fail('React Router must include a catch-all route so Hostinger subfolder URLs render the landing page.')
  }
}

if (!process.exitCode) {
  console.log('Static build check passed.')
}
