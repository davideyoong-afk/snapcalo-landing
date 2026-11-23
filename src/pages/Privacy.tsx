export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-emerald-100">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-main.png?v=4" alt="SnapCalo" className="h-11 w-auto" />
          </a>
          <a href="/" className="text-sm text-emerald-600 hover:underline">← Back to home</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: 22 November 2026</p>

        <Section title="1. Who we are">
          SnapCalo ("we", "our", "the app") is an AI-powered calorie tracking application focused on
          Southeast Asian food, operated by TOTAL LEGACY SDN BHD in Malaysia. If you have questions about this policy,
          contact us at <a className="text-emerald-600 underline" href="mailto:support@snapcalo.me">support@snapcalo.me</a>.
        </Section>

        <Section title="2. What data we collect">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Meal photos</strong> — photos you take or upload are sent to our AI provider
              (Google Gemini) solely to recognize the dish and estimate nutrition. Photos are
              transmitted over HTTPS and are not used for advertising.</li>
            <li><strong>Profile information you enter</strong> — name, birthday, height, weight,
              goal and activity level, used to calculate your BMI and daily calorie target.</li>
            <li><strong>Account information</strong> — when you register or sign in, Supabase processes
              your email address and authentication information to provide your account.</li>
            <li><strong>Meal history, weight log &amp; settings</strong> — saved on your device.
              When you sign in, your app records can also be backed up to your account in Supabase,
              including your profile, meal records, weight log and saved daily activity totals.</li>
            <li><strong>AI Coach requests</strong> — when you use AI Coach, your question and relevant
              profile and nutrition context, such as your name, goal, height, weight and daily nutrition
              totals, are sent to the AI service to prepare a response.</li>
            <li><strong>Optional health connections</strong> — with your permission, SnapCalo reads
              steps, active calories, sleep and weight from Apple Health (HealthKit) on iOS or supported
              health services on Android. We use these records to display activity and sleep, adjust your
              calorie budget and import weight into Progress. Saved activity totals and imported weight
              records can be included in your signed-in cloud backup. Health access is read-only;
              SnapCalo does not write or modify your Apple Health records.</li>
            <li><strong>Referral code</strong> — a random code generated from your name, used only
              for the refer-a-friend reward.</li>
            <li><strong>Groups, challenges &amp; sharing</strong> — when you use these features,
              the service processes membership, display names and check-in information. Information
              you choose to share with a group or a nutrition professional is visible to those recipients.</li>
            <li><strong>Subscriptions</strong> — Apple or Google handles payment. RevenueCat processes
              app user identifiers, transaction and entitlement information to manage Pro access.</li>
          </ul>
        </Section>

        <Section title="3. What we do NOT collect">
          We do not collect your contacts, precise location, device identifiers for advertising,
          or any data for sale to third parties. There are no third-party advertising SDKs in the app.
          Health data is not used for advertising or sold to third parties.
        </Section>

        <Section title="4. Where your data is stored">
          Your profile, meal history and settings are stored <strong>locally on your device</strong>.
          If you sign in, app records can also be stored in your Supabase account to restore your
          history on another device. Account, group, challenge and sharing features use server-side
          records. Meal photos are sent to Google Gemini over HTTPS, either directly or through our
          Cloudflare Workers fallback proxy. Photo references in a backup do not by themselves upload
          the original photo files. AI responses and nutrition values are estimates.
        </Section>

        <Section title="5. Third-party processors">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Gemini API</strong> — dish recognition and AI coach replies
              (<a className="text-emerald-600 underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>).</li>
            <li><strong>Cloudflare</strong> — API proxy and website delivery
              (<a className="text-emerald-600 underline" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">Cloudflare Privacy Policy</a>).</li>
            <li><strong>Supabase</strong> — account authentication, app-record backup and social or sharing features
              (<a className="text-emerald-600 underline" href="https://supabase.com/privacy" target="_blank" rel="noreferrer">Supabase Privacy Policy</a>).</li>
            <li><strong>RevenueCat</strong> — subscription and Pro-entitlement management
              (<a className="text-emerald-600 underline" href="https://www.revenuecat.com/privacy/" target="_blank" rel="noreferrer">RevenueCat Privacy Policy</a>).</li>
            <li><strong>Apple and Google</strong> — platform services and in-app subscription purchases,
              subject to their respective privacy policies.</li>
            <li><strong>Vercel and Cloudflare website services</strong> — website hosting and visit analytics,
              including page visits, referral sources and technical usage information
              (<a className="text-emerald-600 underline" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">Vercel Privacy Policy</a>).</li>
          </ul>
        </Section>

        <Section title="6. Data security">
          App service requests use HTTPS/TLS in transit. Account backups use access controls intended
          to restrict access to the relevant account. Uninstalling the app or clearing its storage
          removes local records; it does not delete your account or server-side records.
        </Section>

        <Section title="7. Your rights &amp; data deletion">
          You can clear local app data through your device settings. To request account deletion,
          use <strong>Profile &gt; Delete account</strong>. For deletion of group, challenge, referral
          or other shared records, contact us at the address below. Uninstalling
          alone does not request account deletion. You can disconnect health access in the app and
          revoke it in your device's Health permissions. Disconnecting does not itself erase records
          already saved in your app history or backup. Manage or cancel subscriptions through your
          Apple or Google account; deleting SnapCalo does not cancel a subscription. For help with
          access, correction or deletion of your records, email <a className="text-emerald-600 underline" href="mailto:support@snapcalo.me">support@snapcalo.me</a>.
        </Section>

        <Section title="8. Children">
          SnapCalo is not directed at children under 13, and we do not knowingly collect data from them.
        </Section>

        <Section title="9. Changes to this policy">
          If we update this policy, the new version will be posted at this URL with a revised date.
        </Section>
      </main>

      <footer className="bg-gray-950 text-gray-500 py-8 text-center text-sm">
        2026 SnapCalo · Made with love for Southeast Asia
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
