import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Engine from './pages/Engine'
import Screens from './pages/Screens'
import { I18nProvider } from './i18n/I18nContext'

export default function App() {
  return (
    <I18nProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/screens" element={<Screens />} />
      </Routes>
    </I18nProvider>
  )
}
