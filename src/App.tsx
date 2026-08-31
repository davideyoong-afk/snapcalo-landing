import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { I18nProvider } from './i18n/I18nContext'

export default function App() {
  return (
    <I18nProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </I18nProvider>
  )
}
