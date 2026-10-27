import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useI18n } from '../i18n/I18nContext'
import { canonicalUrl } from '../lib/canonical'

/** No homepage canonical in the shared HTML: deep pages declare their own URL. */
export default function CanonicalLink() {
  const { pathname } = useLocation()
  const { lang } = useI18n()
  useEffect(() => {
    const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const link = existing ?? document.createElement('link')
    link.rel = 'canonical'
    link.href = canonicalUrl(pathname, lang)
    if (!existing) document.head.appendChild(link)
    document.documentElement.lang = lang
    return () => { if (!existing) link.remove() }
  }, [pathname, lang])
  return null
}
