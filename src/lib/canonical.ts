/** Root-domain hosting: keep each page distinct and preserve translated content. */
export function canonicalUrl(pathname: string, lang: string): string {
  const url = new URL('https://www.snapcalo.me/')
  url.pathname = pathname.replace(/\/+$/, '') || '/'
  if (lang !== 'en') url.searchParams.set('lang', lang)
  return url.href
}
