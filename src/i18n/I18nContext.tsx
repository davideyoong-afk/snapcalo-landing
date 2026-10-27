import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Language } from './translations'
import { translations } from './translations'

interface I18nContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof translations.en
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

const SUPPORTED: Language[] = ['en', 'ms', 'id', 'vi', 'th', 'zh']

/** 按浏览器/手机系统语言猜默认语言:马来文→ms、印尼→id、泰→th、越→vi、中文→zh,其余→en */
function detectDeviceLang(): Language {
  const nav = (navigator.language || 'en').toLowerCase()
  if (nav.startsWith('ms')) return 'ms'
  if (nav.startsWith('id')) return 'id'
  if (nav.startsWith('th')) return 'th'
  if (nav.startsWith('vi')) return 'vi'
  if (nav.startsWith('zh')) return 'zh'
  return 'en'
}

/** 首次打开:① 网址 ?lang=xx ② 上次手动选过的 ③ 设备系统语言 */
function initialLang(): Language {
  if (typeof window === 'undefined') return 'en'
  const fromUrl = new URLSearchParams(window.location.search).get('lang') as Language | null
  if (fromUrl && SUPPORTED.includes(fromUrl)) return fromUrl
  const saved = localStorage.getItem('snapcalo-lang') as Language | null
  if (saved && SUPPORTED.includes(saved)) return saved
  return detectDeviceLang()
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(initialLang)
  const t = translations[lang]

  /** 手动切换后记住选择,下次直接用这个 */
  const setLang = (l: Language) => {
    localStorage.setItem('snapcalo-lang', l)
    setLangState(l)
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
