import { useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { languages, type Language } from '../i18n/translations'
import { partnerCopy, partnerLabels } from '../i18n/partners'
import './Partners.css'

export default function Partners() {
  const { lang, setLang } = useI18n()
  const p = partnerCopy[lang]
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${partnerLabels[lang]} · SnapCalo`
    return () => { document.title = previousTitle }
  }, [lang])
  const home = `/?lang=${lang}`
  return (
    <div className="partners-page">
      <header className="partners-header">
        <nav className="partners-wrap partners-nav" aria-label={partnerLabels[lang]}>
          <a href={home} className="partners-logo"><img src="/logo-dark.png?v=4" alt="SnapCalo" /></a>
          <a href={home} className="partners-nav-home">{p.home}</a>
          <a href="#benefits" className="partners-nav-extra">{p.why}</a>
          <a href="#how" className="partners-nav-extra">{p.how}</a>
          <span aria-current="page" className="partners-current">{partnerLabels[lang]}</span>
          <select aria-label="Language / Bahasa / 语言" value={lang} onChange={e => setLang(e.target.value as Language)}>
            {languages.map(l => <option value={l.code} key={l.code}>{l.label}</option>)}
          </select>
        </nav>
      </header>
      <main className="partners-wrap">
        <section className="partners-hero">
          <div>
            <div className="partners-eyebrow">{p.eyebrow}</div>
            <h1>{p.title}<br /><em>{p.accent}</em></h1>
            <p className="partners-intro">{p.intro}</p>
            <div className="partners-actions"><a className="partners-button" href="#contact">{p.explore} →</a><a className="partners-button partners-ghost" href="#how">{p.seeHow} ↓</a></div>
            <ul className="partners-facts">{p.facts.map(f => <li key={f}>{f}</li>)}</ul>
          </div>
          <div className="partners-visual">
            <img className="partners-food" src="/media/hero-food.jpg" alt={p.foodAlt} />
            <span className="partners-visual-title">{p.visual}</span>
            <div className="partners-phone"><img src="/media/partners-today.png" alt={p.screenAlt} /></div>
            <div className="partners-board">
              <div className="partners-board-title"><strong>{p.group}</strong><span>{p.demo}</span></div>
              <p>GYM-DEMO · {p.board}</p>
              {[['A', 21], ['S', 18], ['J', 16]].map(([initial, days], i) => (
                <div className="partners-member" key={initial}><span>{i + 1}</span><span className="partners-avatar">{initial}</span><span>{initial}***</span><strong>{days} {p.days}</strong></div>
              ))}
            </div>
            <span className="partners-visual-caption">{p.imageNote}</span>
          </div>
        </section>
        <div className="partners-stats">{['01', '100', '06'].map((number, i) => <div key={number}><b>{number}</b><span>{p.stats[i]}</span></div>)}</div>
        <p className="partners-availability">{p.availability}</p>
        <section id="benefits" className="partners-section">
          <div className="partners-section-head"><div><div className="partners-eyebrow">{p.beyond}</div><h2>{p.benefitsTitle}</h2></div><p>{p.benefitsIntro}</p></div>
          <div className="partners-benefits">{p.benefits.map((b, i) => <article key={b.title}><span className="partners-number">0{i + 1} / {['SNAP', 'CONNECT', 'REPEAT'][i]}</span><h3>{b.title}</h3><p>{b.text}</p></article>)}</div>
        </section>
        <section id="how" className="partners-workflow">
          <div><div className="partners-eyebrow">{p.start}</div><h2>{p.startTitle}</h2><p>{p.rules}</p></div>
          <ol>{p.steps.map((s, i) => <li key={s.title}><span>{i + 1}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></li>)}</ol>
        </section>
        <section id="contact" className="partners-section">
          <div className="partners-cta"><div><div className="partners-eyebrow">{p.grow}</div><h2>{p.ctaTitle}</h2><p>{p.ctaText}</p></div><div><a className="partners-button" href="mailto:support@snapcalo.me?subject=SnapCalo%20Gym%20Partnership">{p.email} ↗</a><p className="partners-contact-email">support@snapcalo.me</p><small>{p.emailNote}</small></div></div>
        </section>
      </main>
      <footer className="partners-footer"><div className="partners-wrap"><span>© 2026 SnapCalo · {p.footer}</span><a href={`/privacy?lang=${lang}`}>{p.privacy}</a><a href={home}>{p.home} ↗</a></div></footer>
    </div>
  )
}
