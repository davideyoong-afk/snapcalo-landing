const FAQS: { q: string; a: string }[] = [
  {
    q: 'How many calories are in nasi lemak?',
    a: 'A classic plate of nasi lemak (coconut rice, sambal, fried egg, ikan bilis, peanuts, cucumber) is around 500 kcal. Adding fried chicken brings it to roughly 800 kcal. The biggest variables are the rice portion, oil in the sambal, and extra side dishes.',
  },
  {
    q: 'How many calories should I eat a day to lose weight?',
    a: 'Eat 300–500 kcal less than your body burns daily. For most Malaysians this means about 1,400–1,600 kcal for women and 1,700–2,000 kcal for men, which loses roughly 0.5 kg per week. One kilogram of body fat equals about 7,700 kcal.',
  },
  {
    q: 'What is suku suku separuh?',
    a: 'Suku suku separuh is Malaysia\'s official healthy plate guideline from KKM (Ministry of Health): fill half your plate with vegetables and fruit, a quarter with protein (fish, chicken, tofu), and a quarter with carbohydrates (rice, noodles). It naturally controls calories without counting.',
  },
  {
    q: 'Is there a calorie app that understands Malaysian and Southeast Asian food?',
    a: 'Yes. SnapCalo is built specifically for Southeast Asian food — nasi lemak, pho, pad thai, rendang, nasi goreng, tom yum and kopitiam drinks. Snap a photo and the AI recognizes local dishes that Western apps often miss.',
  },
  {
    q: 'How does photo calorie tracking work?',
    a: 'Take a photo of your meal. SnapCalo\'s AI identifies the dish, estimates the portion size, then calculates calories, protein, carbs and fat using verified nutrition databases (MyFCD, USDA). The whole process takes a few seconds.',
  },
  {
    q: 'How many calories are in teh tarik and kopitiam drinks?',
    a: 'A teh tarik is about 150 kcal with 5–6 teaspoons of sugar. Kopi O kosong is nearly 0 kcal; kopi with condensed milk is ~120 kcal; Milo dinosaur reaches ~400 kcal; boba milk tea is ~400 kcal per medium cup.',
  },
  {
    q: 'Is SnapCalo free?',
    a: 'Yes. The free plan includes 3 AI photo scans per day and 3 days of history. SnapCalo Pro (US$4.99/month) unlocks unlimited scans, 60-day history and the AI coach. New users get 14 days of Pro free.',
  },
  {
    q: 'Which languages does SnapCalo support?',
    a: 'SnapCalo supports six languages: English, Bahasa Melayu, Bahasa Indonesia, Thai, Vietnamese and Chinese — covering the whole Southeast Asian market.',
  },
  {
    q: 'Does SnapCalo connect to Apple Watch, Samsung or other fitness trackers?',
    a: 'Yes. SnapCalo syncs with Apple Health and Health Connect (Android), so calories burned from workouts recorded by Apple Watch, Samsung Galaxy Watch and other trackers are automatically added to your daily budget.',
  },
  {
    q: 'How accurate is AI calorie estimation from a photo?',
    a: 'Independent studies put AI photo estimation within roughly 10–20% of true values — similar to careful manual logging, and far better than guessing, which typically underestimates intake by 30–50%. SnapCalo also lets you adjust portions to refine the estimate.',
  },
]

/** FAQPage 结构化数据:抢谷歌精选摘要/富媒体展示 */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Faq() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-emerald-100">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-main.png?v=2" alt="SnapCalo" className="h-8 w-auto" />
          </a>
          <a href="/" className="text-sm text-emerald-600 hover:underline">← Back to home</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-sm text-gray-400 mb-10">
          Calories in Malaysian &amp; Southeast Asian food, weight loss basics, and how SnapCalo works.
        </p>

        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-emerald-100 bg-emerald-50/40 open:bg-white open:shadow-sm transition">
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-gray-900 flex items-center justify-between gap-4">
                {f.q}
                <span className="text-emerald-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="px-5 pb-5 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-emerald-600 text-white p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Still guessing your calories?</h2>
          <p className="text-emerald-100 text-sm mb-5">Snap a photo. Know your calories. Free to download.</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.snapcalo.mobile"
            className="inline-block rounded-full bg-white text-emerald-700 font-bold px-6 py-3 text-sm hover:bg-emerald-50 transition"
          >
            Get SnapCalo Free
          </a>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-500 py-8 text-center text-sm">
        2026 SnapCalo · Made with love for Southeast Asia
      </footer>
    </div>
  )
}
