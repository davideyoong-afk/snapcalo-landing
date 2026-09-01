import { useState } from 'react'

export default function DeleteAccount() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-emerald-100">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-main.png" alt="SnapCalo" className="h-8 w-auto" />
          </a>
          <a href="/" className="text-sm text-emerald-600 hover:underline">← Back to home</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Delete Your Account</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: 1 September 2026</p>

        <Section title="Option 1: Delete from the App">
          <p className="mb-3">The quickest way to delete your data:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Open the SnapCalo app on your phone</li>
            <li>Go to <strong>Settings → Account → Delete Account</strong></li>
            <li>Confirm the deletion — all your data will be removed immediately</li>
          </ul>
        </Section>

        <Section title="Option 2: Request Deletion by Email">
          <p className="mb-3">
            If you cannot access the app, email us and we will process your request within 7 business days.
          </p>
          <p className="text-sm mb-4">
            Send an email to <a className="text-emerald-600 underline" href="mailto:support@snapcalo.me">support@snapcalo.me</a> with the subject <strong>"Delete Account"</strong> and your registered email address.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-700 text-sm">
              Thank you. We have received your request and will process it within 7 business days.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition"
              >
                Request Account Deletion
              </button>
            </form>
          )}
        </Section>

        <Section title="What data will be deleted?">
          <p className="text-sm">
            Deleting your account permanently removes your profile, meal history, weight logs, and settings. Photos you uploaded are not retained on our servers. If you change your mind, you will need to create a new account.
          </p>
        </Section>

        <Section title="Need help?">
          <p className="text-sm">
            Contact us at{' '}
            <a className="text-emerald-600 underline" href="mailto:support@snapcalo.me">support@snapcalo.me</a>{' '}
            and we will be happy to assist.
          </p>
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
