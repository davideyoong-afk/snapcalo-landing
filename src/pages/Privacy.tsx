export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-emerald-100">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold">S</div>
            <span className="font-bold text-xl text-gray-900">SnapCalo</span>
          </a>
          <a href="/" className="text-sm text-emerald-600 hover:underline">← Back to home</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: 1 September 2026</p>

        <Section title="1. Who we are">
          SnapCalo ("we", "our", "the app") is an AI-powered calorie tracking application focused on
          Southeast Asian food, operated from Malaysia. If you have questions about this policy,
          contact us at <a className="text-emerald-600 underline" href="mailto:support@snapcalo.me">support@snapcalo.me</a>.
        </Section>

        <Section title="2. What data we collect">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Meal photos</strong> — photos you take or upload are sent to our AI provider
              (Google Gemini) solely to recognize the dish and estimate nutrition. Photos are
              transmitted over HTTPS and are not used for advertising.</li>
            <li><strong>Profile information you enter</strong> — name, birthday, height, weight,
              goal and activity level, used to calculate your BMI and daily calorie target.</li>
            <li><strong>Meal history &amp; weight log</strong> — stored locally on your device.</li>
            <li><strong>Referral code</strong> — a random code generated from your name, used only
              for the refer-a-friend reward.</li>
          </ul>
        </Section>

        <Section title="3. What we do NOT collect">
          We do not collect your contacts, precise location, device identifiers for advertising,
          or any data for sale to third parties. There are no third-party advertising SDKs in the app.
        </Section>

        <Section title="4. Where your data is stored">
          Your profile, meal history and settings are stored <strong>locally on your device</strong>.
          Meal photos are processed through our secure proxy (Cloudflare Workers) and forwarded to
          Google Gemini for recognition; we do not maintain a user-account database.
        </Section>

        <Section title="5. Third-party processors">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Gemini API</strong> — dish recognition and AI coach replies
              (<a className="text-emerald-600 underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>).</li>
            <li><strong>Cloudflare</strong> — API proxy and website hosting
              (<a className="text-emerald-600 underline" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">Cloudflare Privacy Policy</a>).</li>
          </ul>
        </Section>

        <Section title="6. Data security">
          All network traffic is encrypted in transit with HTTPS/TLS. Because your data lives on
          your device, uninstalling the app deletes it.
        </Section>

        <Section title="7. Your rights &amp; data deletion">
          You may delete all your data at any time by clearing the app storage or uninstalling the
          app. No server-side account exists, so no further deletion request is needed. For any
          privacy request, email <a className="text-emerald-600 underline" href="mailto:support@snapcalo.me">support@snapcalo.me</a>.
        </Section>

        <Section title="8. Children">
          SnapCalo is not directed at children under 13, and we do not knowingly collect data from them.
        </Section>

        <Section title="9. Changes to this policy">
          If we update this policy, the new version will be posted at this URL with a revised date.
        </Section>
      </main>

      <footer className="bg-gray-950 text-gray-500 py-8 text-center text-sm">
        2026 SnapCalo.ai · Made with love for Southeast Asia
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
      <div className="text-sm space-y-2">{children}</div>
    </section>
  )
}
