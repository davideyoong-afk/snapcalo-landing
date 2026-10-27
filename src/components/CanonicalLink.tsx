import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useI18n } from '../i18n/I18nContext'
import { canonicalUrl } from '../lib/canonical'

/** No homepage canonical in the shared HTML: deep pages declare their own URL. */
export default function CanonicalLink() {
  const { pathname } = useLocation()
  const { lang } = useI18n()
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'canonical'
    link.href = canonicalUrl(pathname, lang)
    document.head.appendChild(link)
    document.documentElement.lang = lang
    return () => { link.remove() }
  }, [pathname, lang])
  return null
}
