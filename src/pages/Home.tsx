import { useState, useEffect, useRef } from 'react'
import '../App.css'
import {
  Camera,
  Brain,
  TrendingUp,
  Globe,
  Apple,
  Flame,
  Target,
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
  Download,
  Globe2,  Share2,  Gift,  Star,  Ticket,
} from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { languages, type Language } from '../i18n/translations'
import qrApk from '../assets/qr-apk.svg'

const APK_URL = 'https://expo.dev/artifacts/eas/_0WIP5-s5vkVv4We13rnhbbWZRYUBHQtBQR6evkgoI4.apk'

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
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-emerald-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-main.png" alt="SnapCalo" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-600 hover:text-emerald-600 transition">{t.nav.features}</a>
          <a href="#how-it-works" className="text-sm text-gray-600 hover:text-emerald-600 transition">{t.nav.howItWorks}</a>
          <a href="#accuracy" className="text-sm text-gray-600 hover:text-emerald-600 transition">{t.nav.accuracy}</a>
          <a href="#foods" className="text-sm text-gray-600 hover:text-emerald-600 transition">{t.nav.foods}</a>

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-emerald-600 transition px-2 py-1 rounded-lg hover:bg-gray-50"
            >
              <Languages className="w-4 h-4" />
              <span>{currentLang?.flag}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code as Language); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 transition ${lang === l.code ? 'text-emerald-600 font-medium bg-emerald-50' : 'text-gray-700'}`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                    {lang === l.code && <CheckCircle2 className="w-3.5 h-3.5 ml-auto" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#download" className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition">
            {t.nav.tryFree}
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#features" onClick={() => setMenuOpen(false)} className="block text-gray-600">{t.nav.features}</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block text-gray-600">{t.nav.howItWorks}</a>
          <a href="#accuracy" onClick={() => setMenuOpen(false)} className="block text-gray-600">{t.nav.accuracy}</a>
          <a href="#foods" onClick={() => setMenuOpen(false)} className="block text-gray-600">{t.nav.foods}</a>
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-2">Language / Bahasa</p>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code as Language); setMenuOpen(false) }}
                  className={`text-xs px-2 py-1.5 rounded-lg border transition ${lang === l.code ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600'}`}
                >
                  {l.flag} {l.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
          <a href="#download" onClick={() => setMenuOpen(false)} className="block text-emerald-600 font-medium">{t.nav.tryFree}</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Leaf className="w-3.5 h-3.5" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              {t.hero.title1}
              <span className="text-emerald-500"> {t.hero.title2}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4 max-w-md mx-auto md:mx-0">
              {t.hero.desc}
            </p>
            <div className="mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold px-5 py-2.5 rounded-full shadow-lg shadow-emerald-200 text-sm md:text-base">
              🎁 {t.hero.trial}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#download" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                {t.hero.ctaPrimary}
              </a>
              <a href="#how-it-works" className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-full text-lg border-2 border-gray-200 transition flex items-center justify-center gap-2">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> {t.hero.trust1}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> {t.hero.trust2}</span>
            </div>
            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 border-2 border-white" />
                ))}
              </div>
              <span><strong>2,400+</strong> {t.hero.users}</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-[280px] md:w-[320px]">
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="flex justify-center pt-3 pb-1">
                    <div className="w-24 h-6 bg-gray-900 rounded-full" />
                  </div>
                  <div className="px-5 pb-8 pt-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/logo-main.png" alt="SnapCalo" className="h-5 w-auto" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-100" />
                    </div>

                    <div className="relative bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 opacity-50" />
                      <div className="relative text-center">
                        <div className="w-16 h-16 mx-auto bg-emerald-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Tap to snap your meal</p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-400 animate-pulse" />
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">🍛</div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">Nasi Lemak</p>
                          <p className="text-xs text-gray-500">Malaysian · 1 serving</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white rounded-lg p-2 text-center">
                          <Flame className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                          <p className="text-xs font-bold text-gray-900">590</p>
                          <p className="text-[10px] text-gray-500">kcal</p>
                        </div>
                        <div className="bg-white rounded-lg p-2 text-center">
                          <Apple className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                          <p className="text-xs font-bold text-gray-900">68g</p>
                          <p className="text-[10px] text-gray-500">carbs</p>
                        </div>
                        <div className="bg-white rounded-lg p-2 text-center">
                          <Target className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                          <p className="text-xs font-bold text-gray-900">18g</p>
                          <p className="text-[10px] text-gray-500">protein</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100 animate-bounce">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">AI Detected</p>
                    <p className="text-[10px] text-gray-500">98.7% accuracy</p>
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
    <section className="py-12 bg-emerald-500" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-extrabold text-white">{s.num}</p>
              <p className="text-emerald-100 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const { t } = useI18n()
  const { ref, visible } = useScrollReveal()
  const featureIcons = [
    { icon: <Camera className="w-6 h-6 text-white" />, bg: 'bg-emerald-500' },
    { icon: <Globe className="w-6 h-6 text-white" />, bg: 'bg-orange-500' },
    { icon: <TrendingUp className="w-6 h-6 text-white" />, bg: 'bg-blue-500' },
    { icon: <Brain className="w-6 h-6 text-white" />, bg: 'bg-purple-500' },
    { icon: <Barcode className="w-6 h-6 text-white" />, bg: 'bg-rose-500' },
    { icon: <Bot className="w-6 h-6 text-white" />, bg: 'bg-cyan-500' },
  ]

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{t.features.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {t.features.items.map((f, i) => (
            <div key={i} className={`group p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-500 bg-white ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`w-12 h-12 ${featureIcons[i].bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                {featureIcons[i].icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
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
    <Eye className="w-8 h-8 text-emerald-500" />,
    <Scale className="w-8 h-8 text-purple-500" />,
    <Zap className="w-8 h-8 text-blue-500" />,
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.howItWorks.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{t.howItWorks.subtitle}</p>
        </div>
        <div className="space-y-8">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-6 items-start p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="flex items-center gap-4 md:w-16 md:flex-shrink-0">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                  {stepIcons[i]}
                </div>
                <span className="md:hidden text-xs font-bold text-emerald-500 tracking-wider">STEP {step.num}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="hidden md:inline text-xs font-bold text-emerald-500 tracking-wider">STEP {step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
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
    <ShieldCheck className="w-7 h-7 text-emerald-500" />,
    <Scale className="w-7 h-7 text-blue-500" />,
    <Brain className="w-7 h-7 text-purple-500" />,
  ]

  return (
    <section id="accuracy" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.accuracy.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{t.accuracy.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.accuracy.items.map((item, i) => (
            <div key={i} className={`p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="mb-4">{icons[i]}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm text-gray-500">{t.accuracy.note}</p>
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
    <section id="foods" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.foods.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{t.foods.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, i) => (
            <div key={i} className={`group p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-500 bg-white ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{food.emoji}</span>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{food.cal}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{food.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{food.country}</p>
              <div className="flex flex-wrap gap-1.5">
                {food.tags.map((tag, j) => (
                  <span key={j} className="text-[11px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">{tag}</span>
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

  return (
    <section className="py-20 bg-emerald-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.testimonials.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Flame key={star} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">{item.name[0]}</div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.location}</p>
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {t.faq.items.map((faq, i) => (
            <div key={i} className={`border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
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
    <section id="download" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`bg-emerald-500 rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.download.title}</h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-lg mx-auto">{t.download.subtitle}</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="bg-white rounded-2xl p-5 shadow-xl">
                <img src={qrApk} alt="SnapCalo Android APK download QR code" className="w-40 h-40 rounded-xl" />
                <p className="text-gray-900 text-xs font-medium mt-3">{t.download.scan}</p>
              </div>

              <div className="flex flex-col gap-4">
                <a href={APK_URL} className="bg-white hover:bg-emerald-50 text-gray-900 px-6 py-3.5 rounded-xl flex items-center gap-3 transition shadow-lg min-w-[240px]">
                  <Download className="w-7 h-7 text-emerald-600" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 leading-none">{t.download.apk}</p>
                    <p className="text-sm font-bold leading-tight">{t.download.apkSub}</p>
                  </div>
                </a>
                <a href="/engine" className="bg-emerald-400/20 hover:bg-emerald-400/30 border border-white/40 text-white px-6 py-3.5 rounded-xl flex items-center gap-3 transition min-w-[240px]">
                  <Globe2 className="w-7 h-7" />
                  <div className="text-left">
                    <p className="text-[10px] text-emerald-100 leading-none">{t.download.webDemo}</p>
                    <p className="text-sm font-bold leading-tight">{t.download.webDemoSub}</p>
                  </div>
                </a>
                <div className="flex gap-3">
                  <div className="flex-1 bg-gray-900/80 text-white px-4 py-3 rounded-xl flex items-center gap-2.5 opacity-70 cursor-not-allowed min-w-[116px]">
                    <Smartphone className="w-6 h-6 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-[9px] text-gray-400 leading-none">{t.download.appStore}</p>
                      <p className="text-xs font-bold leading-tight">{t.download.comingSoon}</p>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-900/80 text-white px-4 py-3 rounded-xl flex items-center gap-2.5 opacity-70 cursor-not-allowed min-w-[116px]">
                    <Smartphone className="w-6 h-6 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-[9px] text-gray-400 leading-none">{t.download.googlePlay}</p>
                      <p className="text-xs font-bold leading-tight">{t.download.comingSoon}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-emerald-100">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> {t.download.tag1}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> {t.download.tag2}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> {t.download.tag3}</span>
            </div>
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
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.pricing.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{t.pricing.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className={`p-8 rounded-2xl border border-gray-200 bg-white transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t.pricing.free.name}</h3>
            <p className="text-gray-500 text-sm mb-6">{t.pricing.free.desc}</p>
            <div className="text-4xl font-extrabold text-gray-900 mb-6">{t.pricing.free.price}<span className="text-base font-normal text-gray-500">{t.pricing.free.period}</span></div>
            <ul className="space-y-3 mb-8">
              {t.pricing.free.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />{item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-gray-200 font-semibold text-gray-900 hover:bg-gray-50 transition">{t.pricing.free.cta}</button>
          </div>

          <div className={`p-8 rounded-2xl border-2 border-emerald-500 bg-emerald-50/50 relative transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">{t.pricing.pro.badge}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t.pricing.pro.name}</h3>
            <p className="text-gray-500 text-sm mb-6">{t.pricing.pro.desc}</p>
            <div className="text-4xl font-extrabold text-gray-900 mb-6">{t.pricing.pro.price}<span className="text-base font-normal text-gray-500">{t.pricing.pro.period}</span></div>
            <ul className="space-y-3 mb-8">
              {t.pricing.pro.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />{item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200">{t.pricing.pro.cta}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Refer() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()

  const stepIcons = [
    <Share2 className="w-6 h-6 text-emerald-500" />,
    <Gift className="w-6 h-6 text-purple-500" />,
    <Star className="w-6 h-6 text-orange-500" />,
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Gift className="w-3.5 h-3.5" />
            Referral Program
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.refer.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">{t.refer.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.refer.steps.map((step, i) => (
            <div key={i} className={`text-center p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-500 bg-white ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 mx-auto mb-4">
                {stepIcons[i]}
              </div>
              <span className="text-xs font-bold text-emerald-500 tracking-wider mb-2 block">STEP {step.num}</span>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-lg">
            <Ticket className="w-5 h-5 text-emerald-400" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Example Invite Code</p>
              <p className="text-lg font-bold tracking-widest">VOUCHER</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">Your actual code will be generated in the app</p>
        </div>

        <div className={`mt-8 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a href="#download" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-emerald-200">
            <Sparkles className="w-5 h-5" />
            {t.refer.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  const { ref, visible } = useScrollReveal()
  const { t } = useI18n()

  return (
    <section className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {t.cta.title}
        </h2>
        <p className={`text-gray-400 text-lg mb-8 max-w-xl mx-auto transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {t.cta.subtitle}
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a href="#download" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-emerald-900/50 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />{t.cta.ctaPrimary}
          </a>
          <a href="#how-it-works" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition flex items-center justify-center gap-2">
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
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-main.png" alt="SnapCalo" className="h-7 w-auto" />
            </div>
            <p className="text-sm">{t.footer.tagline}</p>
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
              <li><a href="#" className="hover:text-emerald-400 transition">Blog</a></li>
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
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
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
      <CTA />
      <Footer />
    </div>
  )
}
