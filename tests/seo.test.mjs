import assert from 'node:assert/strict'
import { test } from 'node:test'
import { readFileSync, existsSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

const source = readFileSync(new URL('../src/lib/canonical.ts', import.meta.url), 'utf8')
const exports = {}
vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports, URL })
const { canonicalUrl } = exports
const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')
const paths = [...readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname)
const assets = [...html.matchAll(/(?:src|href)="([^" ]+\.(?:js|css))"/g)].map(m => m[1])

test('all sitemap deep links resolve to real built assets under the root', () => {
  assert.equal(paths.length, 15)
  assert.ok(assets.some(a => a.endsWith('.js')))
  assert.ok(assets.some(a => a.endsWith('.css')))
  for (const path of paths) for (const asset of assets) {
    assert.ok(asset.startsWith('/assets/'), asset)
    assert.equal(new URL(asset, `https://www.snapcalo.me${path}`).pathname, asset)
    assert.ok(existsSync(new URL(`../dist${asset}`, import.meta.url)), asset)
    assert.equal(new URL(asset, `https://www.snapcalo.me${path.replace(/\/$/, '')}/`).pathname, asset)
  }
})
test('each article declares its own www URL, never the homepage', () => {
  for (const path of paths) assert.equal(canonicalUrl(path, 'en'), `https://www.snapcalo.me${path}`)
  assert.equal(canonicalUrl('/blog/nasi-lemak-calories/', 'en'), 'https://www.snapcalo.me/blog/nasi-lemak-calories')
})
test('six languages preserve content variants instead of collapsing translations', () => {
  for (const lang of ['en', 'ms', 'id', 'th', 'vi', 'zh']) {
    const url = new URL(canonicalUrl('/partners', lang))
    assert.equal(url.searchParams.get('lang'), lang === 'en' ? null : lang)
    assert.equal(url.origin, 'https://www.snapcalo.me')
  }
})
test('tracking and fragments cannot leak into canonical URLs', () => {
  const page = new URL('https://www.snapcalo.me/blog/nasi-lemak-calories?utm_source=tiktok&lang=zh#download')
  assert.equal(canonicalUrl(page.pathname, 'zh'), 'https://www.snapcalo.me/blog/nasi-lemak-calories?lang=zh')
  assert.ok(html.includes('rel="canonical" href="https://www.snapcalo.me/"'))
})


test('all fifteen deployed routes return nonempty pre-rendered content and their own canonical', () => {
  const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'))
  for (const path of paths) {
    const rule = config.rewrites.find(rule => rule.source === path)
    assert.ok(rule?.destination.startsWith('/prerender/'), path)
    const content = readFileSync(new URL(`../dist${rule.destination}`, import.meta.url), 'utf8')
    assert.ok(/<h[1-3]\b/.test(content), path)
    assert.ok(!content.includes('<div id="root"></div>'), path)
    assert.ok(content.includes(`rel="canonical" href="https://www.snapcalo.me${path}"`), path)
    assert.equal([...content.matchAll(/rel="canonical"/g)].length, 1, path)
    if (path.startsWith('/blog/')) {
      assert.ok(content.includes('<article'), path)
      assert.ok(content.includes('name="description"'), path)
    }
  }
})
