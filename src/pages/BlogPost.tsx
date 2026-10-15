import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, Clock, Camera } from 'lucide-react'
import { getPost, type Block } from '../blog/posts'
import { localizePost, blogUI } from '../blog/i18n'
import { useI18n } from '../i18n/I18nContext'

// minimal **bold** inline renderer
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
      : part
  )
}

function BlockView({ block }: { block: Block }) {
  if (block.type === 'h2') {
    return <h2 className="text-2xl font-bold text-white tracking-tight mt-10 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{block.text}</h2>
  }
  if (block.type === 'list') {
    return (
      <ul className="space-y-2.5 mb-6">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-stone-300 leading-relaxed">
            <span className="text-emerald-400 mt-1.5 shrink-0">▸</span>
            <span>{renderText(item)}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (block.type === 'table') {
    return (
      <div className="overflow-x-auto mb-6 rounded-2xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5">
              {block.head.map((h, i) => (
                <th key={i} className="text-left font-semibold text-emerald-300 px-4 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className="border-t border-white/5">
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-2.5 ${j === row.length - 1 ? 'text-emerald-300 font-semibold whitespace-nowrap' : 'text-stone-300'}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return <p className="text-stone-300 leading-relaxed mb-6">{renderText(block.text)}</p>
}

export default function BlogPost() {
  const { slug } = useParams()
  const { lang } = useI18n()
  const ui = blogUI[lang] ?? blogUI.en
  const raw = slug ? getPost(slug) : undefined
  const post = raw ? localizePost(raw, lang) : undefined

  useEffect(() => {
    if (post) document.title = `${post.title} — SnapCalo Blog`
    window.scrollTo(0, 0)
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen bg-[#04090c] text-stone-200 bg-grid flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-400 mb-4">{ui.notFound}</p>
          <Link to="/blog" className="text-emerald-400 hover:underline">← {ui.allArticles}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#04090c] text-stone-200 bg-grid">
      <header className="border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-dark.png?v=4" alt="SnapCalo" className="h-11 w-auto" />
          </Link>
          <Link to="/blog" className="flex items-center gap-2 text-sm text-stone-400 hover:text-emerald-400 transition">
            <ArrowLeft className="w-4 h-4" /> {ui.allArticles}
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-14">
        <div className="mb-10">
          <span className="text-xs font-semibold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">{post.tag}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-5 mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {post.title}
          </h1>
          <p className="flex items-center gap-1.5 text-xs text-stone-500">
            <Clock className="w-3.5 h-3.5" /> {post.readMinutes} {ui.minRead} · {post.date}
          </p>
        </div>

        <img src={post.image} alt={post.title} className="w-full rounded-3xl border border-white/10 mb-10 object-cover max-h-96" />

        <article>
          {post.blocks.map((block, i) => <BlockView key={i} block={block} />)}
        </article>

        <div className="glass-card rounded-3xl p-8 mt-12 text-center border border-emerald-400/20">
          <Camera className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">{ui.ctaTitle}</h3>
          <p className="text-sm text-stone-400 mb-6 max-w-md mx-auto">
            {ui.ctaSub}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm px-6 py-3 rounded-full transition"
          >
            {ui.ctaBtn}
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8">
        <p className="text-center text-xs text-stone-600">© 2026 SnapCalo · Snap Your Meal, Track Calories, Shape Your Body</p>
      </footer>
    </div>
  )
}
