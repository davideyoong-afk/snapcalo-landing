import re

path = r'C:\Users\60136\Documents\Kimi\Workspaces\AiCalories\snapcalo-app\src\pages\Home.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Insert Refer component before CTA function
refer_component = '''function Refer() {
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
          <a href="#download" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-emerald-200">
            <Sparkles className="w-5 h-5" />
            {t.refer.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

function CTA() {'''

# Replace "function CTA() {" with the Refer component + CTA
content = content.replace('function CTA() {', refer_component, 1)
print('Refer component inserted before CTA')

# Add <Refer /> in the export default, between Pricing and CTA
content = content.replace('<Pricing />\n      <CTA />', '<Pricing />\n      <Refer />\n      <CTA />', 1)
print('Refer added to page layout')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')
