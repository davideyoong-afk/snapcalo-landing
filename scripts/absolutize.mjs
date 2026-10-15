// Post-build step for Cloudflare Pages deploy only.
// Rewrites relative asset URLs ("./assets/...") to absolute ("/assets/...")
// so deep routes like /blog/:slug can load the JS/CSS bundles.
// The plain `npm run build` output keeps relative paths (safe for Capacitor).
import { readFileSync, writeFileSync } from 'node:fs'

const file = new URL('../dist/index.html', import.meta.url)
const html = readFileSync(file, 'utf-8')
const fixed = html.replace(/(src|href)="\.\//g, '$1="/')
if (fixed === html) {
  console.log('absolutize: no relative asset URLs found (already absolute?)')
} else {
  writeFileSync(file, fixed)
  console.log('absolutize: dist/index.html asset URLs rewritten to absolute paths')
}
