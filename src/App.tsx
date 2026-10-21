import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Engine from './pages/Engine'
import Screens from './pages/Screens'
import Privacy from './pages/Privacy'
import DeleteAccount from './pages/DeleteAccount'
import Faq from './pages/Faq'
import Partners from './pages/Partners'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import { I18nProvider } from './i18n/I18nContext'

export default function App() {
  return (
    <I18nProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/screens" element={<Screens />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </I18nProvider>
  )
}
