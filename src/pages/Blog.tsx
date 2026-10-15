import { useEffect } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ArrowRight, Clock, Languages } from 'lucide-react'
import { posts } from '../blog/posts'
import { localizePost, blogUI } from '../blog/i18n'
import { useI18n } from '../i18n/I18nContext'
import { languages } from '../i18n/translations'

export default function Blog() {
  const { lang, setLang } = useI18n()
  const ui = blogUI[lang] ?? blogUI.en
  useEffect(() => {
    document.title = 'Blog — SnapCalo | Southeast Asian Food & Calorie Guides'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#04090c] text-stone-200 bg-grid">
      <header className="border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-main.png?v=2" alt="SnapCalo" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-emerald-300 transition px-2 py-1 rounded-lg hover:bg-white/5">
                <Languages className="w-4 h-4" />
                <span className="hidden sm:inline">{languages.find(l => l.code === lang)?.flag} {languages.find(l => l.code === lang)?.label}</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-40 bg-[#0a1216] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/5 transition ${lang === l.code ? 'text-emerald-300 font-medium bg-emerald-400/10' : 'text-stone-300'}`}
                  >
                    <span>{l.flag}</span> {l.label}
                  </button>
                ))}
              </div>
            </div>
            <Link to="/" className="flex items-center gap-2 text-sm text-stone-400 hover:text-emerald-400 transition">
              <ArrowLeft className="w-4 h-4" /> {ui.backHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">SnapCalo Blog</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {ui.heading}
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto">
            {ui.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((raw) => {
            const post = localizePost(raw, lang)
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="glass-card rounded-3xl overflow-hidden flex flex-col hover:border-emerald-400/30 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.2)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative h-44 -mx-0 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-3 right-3 text-xs font-semibold text-emerald-300 bg-black/50 backdrop-blur border border-emerald-400/20 rounded-full px-3 py-1">{post.tag}</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-emerald-300 transition">{post.title}</h2>
                <p className="text-sm text-stone-400 leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readMinutes} {ui.minRead} · {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    {ui.read} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      <footer className="border-t border-white/5 py-8">
        <p className="text-center text-xs text-stone-600">© 2026 SnapCalo · Snap Your Meal, Track Calories, Shape Your Body</p>
      </footer>
    </div>
  )
}
