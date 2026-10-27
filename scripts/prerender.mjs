// Render the same React routes for every visitor, without a browser or API calls.
import { build } from 'vite'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const template = await readFile(resolve(root, 'dist/index.html'), 'utf8')
const sitemap = await readFile(resolve(root, 'public/sitemap.xml'), 'utf8')
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]))
const config = JSON.parse(await readFile(resolve(root, 'vercel.json'), 'utf8'))
const output = resolve(root, 'node_modules/.tmp/snapcalo-prerender')
await build({ build: { ssr: 'src/prerender.tsx', outDir: output, emptyOutDir: true, copyPublicDir: false,
  rollupOptions: { output: { entryFileNames: 'renderer.mjs' } } } })
const { renderPage } = await import(pathToFileURL(resolve(output, 'renderer.mjs')).href)
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
for (const url of urls) {
  const route = config.rewrites.find(rule => rule.source === url.pathname)
  if (!route?.destination.startsWith('/prerender/')) throw new Error(`Missing static rewrite: ${url.pathname}`)
  const page = renderPage(url.pathname)
  if (!page.title || !/<h[1-3]\b/.test(page.body)) throw new Error(`Missing rendered content: ${url.pathname}`)
  let html = template.replace('<div id="root"></div>', `<div id="root">${page.body}</div>`)
  html = html.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
  const metadata = `<link rel="canonical" href="${escape(url.href)}" />` +
    (page.description ? `<meta name="description" content="${escape(page.description)}" />` : '')
  html = html.replace('</head>', `${metadata}</head>`)
  const file = resolve(root, `dist${route.destination}`)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
  // Vercel serves an existing index.html before evaluating a root rewrite.
  if (url.pathname === '/') await writeFile(resolve(root, 'dist/index.html'), html)
}
console.log(`Pre-rendered ${urls.length} public routes with content and canonical URLs.`)
