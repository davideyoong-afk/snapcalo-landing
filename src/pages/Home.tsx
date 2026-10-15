import { useState, useEffect, useRef } from 'react'
import '../App.css'
import {
  Camera,
  Brain,
  TrendingUp,
  Globe,
  Flame,
  Smartphone,
  Leaf,
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Zap,
  Eye,
  Scale,
  Languages,
  Barcode,
  Bot,
  Play,
  Globe2,  Gift,
} from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { languages, type Language } from '../i18n/translations'
import qrPlay from '../assets/qr-play.svg'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.snapcalo.mobile'

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useI18n()
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const currentLang = languages.find(l => l.code === lang)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#04090c]/80 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-main.png?v=2" alt="SnapCalo" className="h-11 w-auto rounded-lg" />
        </div>

        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="nav-link text-sm font-medium text-stone-400 hover:text-white transition">{t.nav.features}</a>
          <a href="#how-it-works" className="nav-link text-sm font-medium text-stone-400 hover:text-white transition">{t.nav.howItWorks}</a>
          <a href="#accuracy" className="nav-link text-sm font-medium text-stone-400 hover:text-white transition">{t.nav.accuracy}</a>
          <a href="#foods" className="nav-link text-sm font-medium text-stone-400 hover:text-white transition">{t.nav.foods}</a>
          <a href="/blog" className="nav-link text-sm font-medium text-stone-400 hover:text-white transition">{t.nav.blog}</a>
          <a href="/faq" className="nav-link text-sm font-medium text-stone-400 hover:text-white transition">FAQ</a>

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-emerald-300 transition px-2 py-1 rounded-lg hover:bg-white/5"
            >
              <Languages className="w-4 h-4" />
              <span>{currentLang?.flag}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0a1210] rounded-xl shadow-2xl border border-white/10 py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code as Language); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/5 transition ${lang === l.code ? 'text-emerald-300 font-medium bg-emerald-400/10' : 'text-stone-300'}`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                    {lang === l.code && <CheckCircle2 className="w-3.5 h-3.5 ml-auto" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#download" className="btn-primary bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_24px_-6px_rgba(52,211,153,0.5)]">
            {t.nav.tryFree}
          </a>
        </div>

        <button className="md:hidden p-2 text-stone-300" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#04090c] border-t border-white/[0.06] px-4 py-4 space-y-3">
          <a href="#features" onClick={() => setMenuOpen(false)} className="block text-stone-300">{t.nav.features}</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block text-stone-300">{t.nav.howItWorks}</a>
          <a href="#accuracy" onClick={() => setMenuOpen(false)} className="block text-stone-300">{t.nav.accuracy}</a>
          <a href="#foods" onClick={() => setMenuOpen(false)} className="block text-stone-300">{t.nav.foods}</a>
          <a href="/blog" onClick={() => setMenuOpen(false)} className="block text-stone-300">{t.nav.blog}</a>
          <a href="/faq" onClick={() => setMenuOpen(false)} className="block text-stone-300">FAQ</a>
          <div className="pt-2 border-t border-white/[0.06]">
            <p className="text-xs text-stone-500 mb-2">Language / Bahasa</p>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code as Language); setMenuOpen(false) }}
                  className={`text-xs px-2 py-1.5 rounded-lg border transition ${lang === l.code ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300' : 'border-white/10 text-stone-400'}`}
                >
                  {l.flag} {l.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
          <a href="#download" onClick={() => setMenuOpen(false)} className="block text-emerald-300 font-medium">{t.nav.tryFree}</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden">
      {/* 科技感:网格纹理 + 翡翠/青色光晕 */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_20%,transparent_75%)] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-20 md:pt-14 md:pb-32 relative">
        {/* 上线公告横幅 */}
        <div className="mb-12 rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-emerald-500/15 via-emerald-400/10 to-cyan-500/15 p-6 md:p-8 text-center shadow-[0_0_60px_-15px_rgba(52,211,153,0.35)]">
          <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{t.hero.launchTitle}</p>
          <p className="mt-2 text-emerald-300/90 font-semibold">{t.hero.launchSub}</p>
          <div className="mt-4 space-y-2 text-sm md:text-base text-stone-300">
            <p>{t.hero.launchTrial}</p>
            <p className="text-amber-300/90">{t.hero.launchGift}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/10 text-emerald-300 text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-7">
              <Leaf className="w-3.5 h-3.5" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.02] tracking-tight mb-6">
              {t.hero.title1}<br />
              <span className="neon text-orange-400">{t.hero.titleMid}</span><br />
              <span className="neon text-gradient">{t.hero.title2}</span>
            </h1>
            <p className="text-lg text-stone-400 mb-4 max-w-md mx-auto md:mx-0 leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="mb-8 inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 font-bold px-5 py-2.5 rounded-full text-sm md:text-base">
              🎁 {t.hero.trial}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#download" className="btn-primary bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-4 rounded-full text-lg shadow-[0_0_40px_-8px_rgba(52,211,153,0.5)] flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                {t.hero.ctaPrimary}
              </a>
              <a href="#how-it-works" className="bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-lg border border-white/15 transition flex items-center justify-center gap-2">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-stone-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {t.hero.trust1}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {t.hero.trust2}</span>
            </div>
            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start text-sm text-stone-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 border-2 border-[#04090c]" />
                ))}
              </div>
              <span><strong className="text-white">2,400+</strong> {t.hero.users}</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* 手机后方的光晕 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
            <div className="relative w-[280px] md:w-[320px]">
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-emerald-500/20 ring-1 ring-white/10">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="flex justify-center pt-3 pb-1">
                    <div className="w-24 h-6 bg-gray-900 rounded-full" />
                  </div>
                  <img src="/media/share-card.png" alt="SnapCalo share card" className="w-full block" />
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-[#0a1512]/90 backdrop-blur rounded-2xl shadow-xl shadow-black/40 px-4 py-3 border border-emerald-400/20 rotate-2">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-xs font-bold text-white">AI Detected</p>
                    <p className="text-[10px] text-emerald-300/70">98.7% accuracy</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0a1512]/90 backdrop-blur rounded-2xl shadow-xl shadow-black/40 px-4 py-3 border border-white/10 -rotate-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="text-xs font-bold text-white">1,240 / 1,800 kcal</p>
                    <p className="text-[10px] text-stone-400">Today · on track</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()
  const stats = [
    { num: '10,000+', label: t.socialProof.dishes },
    { num: '2,400+', label: t.socialProof.users },
    { num: '< 2 sec', label: t.socialProof.speed },
    { num: '98.7%', label: t.socialProof.accuracy },
  ]

  return (
    <section className="py-14 border-y border-white/[0.06] bg-white/[0.02]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-extrabold text-gradient tracking-tight">{s.num}</p>
              <p className="text-stone-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MediaShowcase() {
  const { t } = useI18n()
  const { ref, visible } = useScrollReveal()
  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-20 -right-40 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.media.title}</h2>
          <p className="text-stone-400 max-w-xl mx-auto">{t.media.subtitle}</p>
        </div>
        <div className={`grid md:grid-cols-3 gap-6 items-stretch transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* 视频 */}
          <div className="glass-card rounded-3xl overflow-hidden flex flex-col hover:border-emerald-400/30 transition-all duration-300">
            <video
              src="/media/snapcalo-demo.mp4"
              className="w-full h-[420px] object-cover bg-black"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
            <p className="text-center text-sm text-emerald-300 font-semibold py-4">{t.media.videoCaption}</p>
          </div>
          {/* 宣传海报 */}
          <div className="glass-card rounded-3xl overflow-hidden flex flex-col hover:border-emerald-400/30 transition-all duration-300">
            <img src="/media/hero-food.jpg" alt="SnapCalo poster" className="w-full h-[420px] object-cover" loading="lazy" />
            <p className="text-center text-sm text-stone-400 py-4">{t.media.posterCaption}</p>
          </div>
          {/* 真实 App 截图 */}
          <div className="glass-card rounded-3xl overflow-hidden flex flex-col hover:border-emerald-400/30 transition-all duration-300">
            <img src="/media/app-screen.jpg" alt="SnapCalo app scan result" className="w-full h-[420px] object-cover object-top" loading="lazy" />
            <p className="text-center text-sm text-stone-400 py-4">{t.media.screenCaption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const { t } = useI18n()
  const { ref, visible } = useScrollReveal()
  const featureIcons = [
    { icon: <Camera className="w-5 h-5 text-emerald-400" /> },
    { icon: <Globe className="w-5 h-5 text-emerald-400" /> },
    { icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
    { icon: <Brain className="w-5 h-5 text-emerald-400" /> },
    { icon: <Barcode className="w-5 h-5 text-emerald-400" /> },
    { icon: <Bot className="w-5 h-5 text-emerald-400" /> },
  ]

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{t.features.title}</h2>
          <p className="text-stone-400 max-w-xl mx-auto leading-relaxed">{t.features.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {t.features.items.map((f, i) => (
            <div key={i} className={`group p-7 rounded-3xl glass-card hover:border-emerald-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.25)] hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-11 h-11 bg-emerald-400/10 border border-emerald-400/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-400/20 transition">
                {featureIcons[i].icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksDetailed() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()
  const stepIcons = [
    <Eye className="w-8 h-8 text-emerald-400" />,
    <Scale className="w-8 h-8 text-emerald-400" />,
    <Zap className="w-8 h-8 text-emerald-400" />,
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white/[0.02] border-y border-white/[0.06] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_70%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{t.howItWorks.title}</h2>
          <p className="text-stone-400 max-w-xl mx-auto">{t.howItWorks.subtitle}</p>
        </div>
        <div className="space-y-8">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-6 items-start p-6 md:p-8 glass-card rounded-3xl hover:border-emerald-400/30 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.2)] hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="flex items-center gap-4 md:w-16 md:flex-shrink-0">
                <div className="w-14 h-14 bg-emerald-400/10 rounded-2xl flex items-center justify-center border border-emerald-400/20">
                  {stepIcons[i]}
                </div>
                <span className="md:hidden text-xs font-bold text-emerald-400 tracking-wider">STEP {step.num}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="hidden md:inline text-xs font-bold text-emerald-400 tracking-wider">STEP {step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Accuracy() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()
  const icons = [
    <ShieldCheck className="w-7 h-7 text-emerald-400" />,
    <Scale className="w-7 h-7 text-emerald-400" />,
    <Brain className="w-7 h-7 text-emerald-400" />,
  ]

  return (
    <section id="accuracy" className="py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{t.accuracy.title}</h2>
          <p className="text-stone-400 max-w-xl mx-auto">{t.accuracy.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.accuracy.items.map((item, i) => (
            <div key={i} className={`p-7 rounded-3xl glass-card hover:border-emerald-400/30 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.2)] transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="mb-4">{icons[i]}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm text-stone-500">{t.accuracy.note}</p>
        </div>
      </div>
    </section>
  )
}

function Foods() {
  const { t } = useI18n()
  const { ref, visible } = useScrollReveal()
  const foods = [
    { emoji: '🍛', name: 'Nasi Lemak', cal: '590 kcal', country: '🇲🇾 Malaysia', tags: ['Rice', 'Coconut', 'Sambal'] },
    { emoji: '🍜', name: 'Pho Bo', cal: '450 kcal', country: '🇻🇳 Vietnam', tags: ['Noodles', 'Beef', 'Broth'] },
    { emoji: '🍝', name: 'Pad Thai', cal: '520 kcal', country: '🇹🇭 Thailand', tags: ['Noodles', 'Peanuts', 'Tofu'] },
    { emoji: '🥘', name: 'Rendang', cal: '480 kcal', country: '🇮🇩 Indonesia', tags: ['Beef', 'Coconut', 'Spices'] },
    { emoji: '🍚', name: 'Nasi Goreng', cal: '550 kcal', country: '🇮🇩 Indonesia', tags: ['Rice', 'Egg', 'Shrimp'] },
    { emoji: '🍲', name: 'Tom Yum', cal: '180 kcal', country: '🇹🇭 Thailand', tags: ['Soup', 'Shrimp', 'Lemongrass'] },
  ]

  return (
    <section id="foods" className="py-24 bg-white/[0.02] border-y border-white/[0.06]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{t.foods.title}</h2>
          <p className="text-stone-400 max-w-xl mx-auto">{t.foods.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, i) => (
            <div key={i} className={`group p-5 rounded-3xl glass-card hover:border-emerald-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.2)] hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{food.emoji}</span>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full">{food.cal}</span>
              </div>
              <h3 className="font-bold text-white mb-1">{food.name}</h3>
              <p className="text-sm text-stone-500 mb-3">{food.country}</p>
              <div className="flex flex-wrap gap-1.5">
                {food.tags.map((tag, j) => (
                  <span key={j} className="text-[11px] text-stone-400 bg-white/5 border border-white/[0.06] px-2 py-0.5 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()
  const avatars = ['/avatars/p1.jpg', '/avatars/p2.jpg', '/avatars/p3.jpg', '/avatars/p4.jpg', '/avatars/p5.jpg', '/avatars/p6.jpg']

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{t.testimonials.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className={`glass-card p-7 rounded-3xl hover:border-emerald-400/30 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.2)] hover:-translate-y-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Flame key={star} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={avatars[i % avatars.length]} alt={item.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400/30" />
                <div>
                  <p className="font-semibold text-sm text-white">{item.name}</p>
                  <p className="text-xs text-stone-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const { ref, visible } = useScrollReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useI18n()

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-3xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{t.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {t.faq.items.map((faq, i) => (
            <div key={i} className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-stone-500 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-stone-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QRDownload() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()

  return (
    <section id="download" className="py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`relative bg-gradient-to-br from-emerald-950 via-[#061410] to-black rounded-3xl p-8 md:p-16 text-white text-center overflow-hidden border border-emerald-400/20 shadow-[0_0_80px_-20px_rgba(52,211,153,0.3)] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{t.download.title}</h2>
            <p className="text-emerald-200/70 text-lg mb-10 max-w-lg mx-auto">{t.download.subtitle}</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="bg-white rounded-2xl p-5 shadow-xl shadow-emerald-500/10">
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">
                  <img src={qrPlay} alt="SnapCalo on Google Play — scan QR code" className="w-40 h-40 rounded-xl" />
                </a>
                <p className="text-gray-900 text-xs font-medium mt-3">{t.download.scan}</p>
              </div>

              <div className="flex flex-col gap-4">
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-emerald-50 text-gray-900 px-6 py-3.5 rounded-xl flex items-center gap-3 transition shadow-lg min-w-[240px]">
                  <Play className="w-7 h-7 text-emerald-600" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 leading-none">{t.download.getItOn}</p>
                    <p className="text-sm font-bold leading-tight">{t.download.googlePlay}</p>
                  </div>
                </a>
                <a href="/engine" className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3.5 rounded-xl flex items-center gap-3 transition min-w-[240px]">
                  <Globe2 className="w-7 h-7" />
                  <div className="text-left">
                    <p className="text-[10px] text-emerald-200/70 leading-none">{t.download.webDemo}</p>
                    <p className="text-sm font-bold leading-tight">{t.download.webDemoSub}</p>
                  </div>
                </a>
                <div className="flex gap-3">
                  <div className="flex-1 bg-black/60 border border-white/10 text-white px-4 py-3 rounded-xl flex items-center gap-2.5 opacity-70 cursor-not-allowed min-w-[116px]">
                    <Smartphone className="w-6 h-6 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-[9px] text-stone-500 leading-none">{t.download.appStore}</p>
                      <p className="text-xs font-bold leading-tight">{t.download.comingSoon}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-emerald-200/70">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> {t.download.tag1}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> {t.download.tag2}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> {t.download.tag3}</span>
            </div>

            <p className="mt-6 text-xs text-emerald-300/60">{t.download.whatsNew}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/[0.06]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{t.pricing.title}</h2>
          <p className="text-stone-400 max-w-xl mx-auto">{t.pricing.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className={`p-8 rounded-3xl glass-card hover:border-white/20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h3 className="text-lg font-bold text-white mb-2">{t.pricing.free.name}</h3>
            <p className="text-stone-500 text-sm mb-6">{t.pricing.free.desc}</p>
            <div className="text-4xl font-extrabold text-white mb-6">{t.pricing.free.price}<span className="text-base font-normal text-stone-500">{t.pricing.free.period}</span></div>
            <ul className="space-y-3 mb-3">
              {t.pricing.free.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />{item}
                </li>
              ))}
            </ul>
            <ul className="space-y-3 mb-8">
              {t.pricing.free.missing.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-500">
                  <X className="w-4 h-4 text-stone-600" />{item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-white/15 font-semibold text-white hover:bg-white/5 transition">{t.pricing.free.cta}</button>
          </div>

          <div className={`p-8 rounded-3xl border-2 border-emerald-400/50 bg-emerald-400/[0.06] relative shadow-[0_0_60px_-15px_rgba(52,211,153,0.4)] transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-400 text-emerald-950 text-xs font-bold px-4 py-1 rounded-full">{t.pricing.pro.badge}</div>
            <h3 className="text-lg font-bold text-white mb-2">{t.pricing.pro.name}</h3>
            <p className="text-stone-400 text-sm mb-6">{t.pricing.pro.desc}</p>
            <div className="text-4xl font-extrabold text-gradient mb-6">{t.pricing.pro.price}<span className="text-base font-normal text-stone-500">{t.pricing.pro.period}</span></div>
            <ul className="space-y-3 mb-8">
              {t.pricing.pro.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />{item}
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full py-3 rounded-full bg-emerald-500 text-emerald-950 font-bold hover:bg-emerald-400 transition shadow-[0_0_30px_-8px_rgba(52,211,153,0.6)]">{t.pricing.pro.cta}</button>
          </div>
        </div>
        <p className={`mt-8 text-center text-sm text-emerald-300/80 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{t.pricing.trialNote}</p>
      </div>
    </section>
  )
}

function Refer() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/10 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Gift className="w-3.5 h-3.5" />
            Referral Program
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{t.refer.title}</h2>
          <p className="text-stone-400 max-w-xl mx-auto">{t.refer.subtitle}</p>
        </div>

        {/* 基础规则:邀请 1 位 → 你得 1 个月,好友得 21 天 */}
        <div className={`max-w-3xl mx-auto rounded-3xl glass-card p-7 md:p-9 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-1">{t.refer.baseTitle}</p>
          <p className="text-stone-400 text-sm mb-5">{t.refer.baseWhen}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 rounded-2xl bg-emerald-400/[0.07] border border-emerald-400/20 p-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white font-semibold">{t.refer.baseYou}</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-emerald-400/[0.07] border border-emerald-400/20 p-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white font-semibold">{t.refer.baseFriend}</p>
            </div>
          </div>
        </div>

        {/* 规则说明 */}
        <div className={`max-w-3xl mx-auto mt-12 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xs font-bold text-stone-400 tracking-widest uppercase mb-4">{t.refer.rulesTitle}</p>
          <ul className="space-y-3">
            {t.refer.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />{rule}
              </li>
            ))}
          </ul>
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a href="#download" className="btn-primary inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-4 rounded-full text-lg transition shadow-[0_0_40px_-8px_rgba(52,211,153,0.5)]">
            <Sparkles className="w-5 h-5" />
            {t.refer.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

function LaunchCampaign() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02] border-y border-white/[0.06]" ref={ref}>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 text-center relative">
        <div className={`rounded-3xl border-2 border-amber-400/40 bg-gradient-to-b from-amber-400/[0.08] to-transparent p-8 md:p-12 shadow-[0_0_60px_-15px_rgba(251,191,36,0.35)] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-8">{t.launch.title}</h2>
          <ol className="space-y-4 max-w-md mx-auto text-left mb-8">
            {t.launch.steps.map((step, i) => (
              <li key={i} className="flex items-center gap-4 rounded-2xl bg-black/40 border border-white/10 px-5 py-4">
                <span className="w-8 h-8 rounded-full bg-amber-400 text-amber-950 font-extrabold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <span className="text-sm md:text-base text-white font-medium">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-2xl font-extrabold text-amber-300 mb-2">{t.launch.reward}</p>
          <p className="text-sm text-stone-400">{t.launch.limit}</p>
          <a href="https://www.tiktok.com/@snapcalo.me" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-black hover:bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            TikTok @snapcalo.me
          </a>
          <div>
            <a href="#download" className="btn-primary mt-4 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-4 rounded-full text-lg transition shadow-[0_0_40px_-8px_rgba(52,211,153,0.5)]">
              <Sparkles className="w-5 h-5" />
              {t.refer.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/[0.06]" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,black_10%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 text-center relative">
        <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {t.cta.title}
        </h2>
        <p className={`text-stone-400 text-lg mb-8 max-w-xl mx-auto transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {t.cta.subtitle}
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a href="#download" className="btn-primary bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-4 rounded-full text-lg transition shadow-[0_0_40px_-8px_rgba(52,211,153,0.5)] flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />{t.cta.ctaPrimary}
          </a>
          <a href="#how-it-works" className="bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold px-8 py-4 rounded-full text-lg transition flex items-center justify-center gap-2">
            {t.cta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-black text-stone-500 py-12 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-main.png?v=2" alt="SnapCalo" className="h-9 w-auto rounded-lg" />
            </div>
            <p className="text-sm">{t.footer.tagline}</p>
            <a href="mailto:support@snapcalo.me" className="inline-block mt-3 text-sm text-emerald-400 hover:text-emerald-300 transition">support@snapcalo.me</a>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-emerald-400 transition">{t.nav.features}</a></li>
              <li><a href="#download" className="hover:text-emerald-400 transition">{t.nav.tryFree}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">About</a></li>
              <li><a href="/blog" className="hover:text-emerald-400 transition">Blog</a></li>
              <li><a href="/faq" className="hover:text-emerald-400 transition">FAQ</a></li>
              <li><a href="https://www.tiktok.com/@snapcalo.me" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">TikTok @snapcalo.me</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61594966703226" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">Facebook Calo Snap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-emerald-400 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-8 text-sm text-center">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#04090c] text-white">
      <Navbar />
      <Hero />
      <MediaShowcase />
      <SocialProof />
      <Features />
      <HowItWorksDetailed />
      <Accuracy />
      <Foods />
      <Testimonials />
      <FAQ />
      <QRDownload />
      <Pricing />
      <Refer />
      <LaunchCampaign />
      <CTA />
      <Footer />
    </div>
  )
}
