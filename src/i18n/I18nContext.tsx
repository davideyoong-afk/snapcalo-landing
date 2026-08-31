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

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const t = translations[lang]

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
