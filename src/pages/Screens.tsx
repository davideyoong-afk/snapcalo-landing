import type { ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router'
import { ArrowLeft } from 'lucide-react'

/* ---------- shared primitives ---------- */

function Phone({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl border border-gray-800">
        <div className="bg-gray-50 rounded-[1.7rem] overflow-hidden w-[230px] h-[480px] flex flex-col relative text-gray-900">
          <div className="flex justify-center pt-2 pb-1 shrink-0 bg-transparent z-10">
            <div className="w-14 h-3.5 bg-gray-900 rounded-full" />
          </div>
          <div className="flex-1 overflow-hidden flex flex-col px-3 pb-2">{children}</div>
        </div>
      </div>
      <p className="text-[11px] font-medium text-gray-400">{label}</p>
    </div>
  )
}

function GreenBtn({ children, ghost = false }: { children: ReactNode; ghost?: boolean }) {
  return (
    <div className={`rounded-full text-center text-[10px] font-bold py-2 ${
      ghost ? 'border-2 border-gray-200 text-gray-600' : 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
    }`}>
      {children}
    </div>
  )
}

function MealRow({ e, n, k, sub }: { e: string; n: string; k: string; sub?: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-2 flex items-center gap-2">
      <span className="text-base">{e}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold truncate">{n}</p>
        {sub && <p className="text-[8px] text-gray-400">{sub}</p>}
      </div>
      <span className="text-[10px] font-bold text-gray-700 shrink-0">{k}</span>
    </div>
  )
}

function TabBar({ active }: { active: number }) {
  const items = [
    { icon: '🏠', label: 'Today' },
    { icon: '📸', label: 'Snap' },
    { icon: '🕘', label: 'History' },
    { icon: '👤', label: 'Profile' },
  ]
  return (
    <div className="mt-auto shrink-0 bg-white border-t border-gray-100 -mx-3 -mb-2 px-2 pt-1.5 pb-2 grid grid-cols-4">
      {items.map((it, i) => (
        <div key={it.label} className="flex flex-col items-center gap-0.5">
          {i === 1 ? (
            <div className="w-8 h-8 -mt-4 rounded-full bg-emerald-500 flex items-center justify-center text-sm shadow-md">📸</div>
          ) : (
            <span className={`text-sm ${i === active ? '' : 'opacity-40 grayscale'}`}>{it.icon}</span>
          )}
          <span className={`text-[7px] font-medium ${i === active || i === 1 ? 'text-emerald-600' : 'text-gray-400'}`}>{it.label}</span>
        </div>
      ))}
    </div>
  )
}

function Ring({ pct, big, small }: { pct: number; big: string; small: string }) {
  const r = 40
  const c = 2 * Math.PI * r
  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg viewBox="0 0 96 96" className="w-full h-full -rotate-90">
        <circle cx="48" cy="48" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle cx="48" cy="48" r={r} fill="none" stroke="#10b981" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-extrabold text-gray-900">{big}</span>
        <span className="text-[7px] text-gray-400">{small}</span>
      </div>
    </div>
  )
}

function MacroRow() {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {[['110g', 'Carbs', 'text-emerald-600 bg-emerald-50'], ['55g', 'Protein', 'text-blue-600 bg-blue-50'], ['34g', 'Fat', 'text-orange-600 bg-orange-50']].map(([v, l, cls]) => (
        <div key={l} className={`rounded-lg p-1.5 text-center ${cls}`}>
          <p className="text-[9px] font-bold">{v}</p>
          <p className="text-[7px] opacity-80">{l}</p>
        </div>
      ))}
    </div>
  )
}

function ConfBar({ pct }: { pct: number }) {
  return (
    <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${pct}%` }} />
    </div>
  )
}

function Toggle({ on }: { on: boolean }) {
  return (
    <div className={`w-8 h-4.5 h-[18px] rounded-full p-0.5 flex ${on ? 'bg-emerald-500 justify-end' : 'bg-gray-200 justify-start'}`}>
      <div className="w-3.5 h-3.5 rounded-full bg-white shadow" />
    </div>
  )
}

/* ---------- screens ---------- */

function SWelcome() {
  return (
    <Phone label="01 · Onboarding — Welcome">
      <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-2xl mb-1">📸</div>
        <p className="text-base font-extrabold">SnapCalo</p>
        <p className="text-[9px] text-gray-500 px-4">Snap Your Meal.<br />Know Your Calories.</p>
        <div className="flex gap-1 mt-2">
          {['🇲🇾', '🇮🇩', '🇹🇭', '🇻🇳', '🇬🇧'].map((f) => (
            <span key={f} className="text-sm bg-white border border-gray-200 rounded-full px-1 py-0.5">{f}</span>
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        <GreenBtn>Get Started</GreenBtn>
        <p className="text-center text-[8px] text-gray-400">Already have an account? <span className="text-emerald-600 font-bold">Log in</span></p>
      </div>
    </Phone>
  )
}

function SGoal() {
  return (
    <Phone label="02 · Onboarding — Goal">
      <p className="text-center text-[8px] text-emerald-500 font-bold mt-1">STEP 1 OF 3</p>
      <p className="text-sm font-extrabold text-center mb-2">Your goal?</p>
      <div className="space-y-2">
        {[['📉', 'Lose weight', '1,800 kcal/day', true], ['⚖️', 'Maintain', '2,100 kcal/day', false], ['💪', 'Gain muscle', '2,400 kcal/day', false]].map(([e, t, s, on]) => (
          <div key={t as string} className={`flex items-center gap-2 p-2.5 rounded-xl border-2 ${on ? 'border-emerald-500 bg-emerald-50' : 'border-gray-100 bg-white'}`}>
            <span className="text-lg">{e}</span>
            <div className="flex-1">
              <p className="text-[10px] font-bold">{t}</p>
              <p className="text-[8px] text-gray-400">{s}</p>
            </div>
            {on ? <span className="text-emerald-500 text-xs">✓</span> : null}
          </div>
        ))}
      </div>
      <div className="mt-auto space-y-1.5">
        <div className="flex justify-center gap-1"><span className="w-4 h-1 rounded bg-emerald-500" /><span className="w-4 h-1 rounded bg-gray-200" /><span className="w-4 h-1 rounded bg-gray-200" /></div>
        <GreenBtn>Continue</GreenBtn>
      </div>
    </Phone>
  )
}

function SStats() {
  return (
    <Phone label="03 · Onboarding — Body Stats">
      <p className="text-center text-[8px] text-emerald-500 font-bold mt-1">STEP 2 OF 3</p>
      <p className="text-sm font-extrabold text-center mb-2">About you</p>
      <div className="space-y-1.5">
        {[['⚖️', 'Weight', '68 kg'], ['🏁', 'Target', '63 kg'], ['📏', 'Height', '165 cm'], ['🎂', 'Age', '29'], ['🚻', 'Sex', 'Female']].map(([e, l, v]) => (
          <div key={l} className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl p-2.5">
            <span className="text-sm">{e}</span>
            <span className="flex-1 text-[10px] text-gray-500">{l}</span>
            <span className="text-[10px] font-bold">{v}</span>
            <span className="text-gray-300 text-[10px]">›</span>
          </div>
        ))}
      </div>
      <div className="mt-auto space-y-1.5">
        <div className="flex justify-center gap-1"><span className="w-4 h-1 rounded bg-gray-200" /><span className="w-4 h-1 rounded bg-emerald-500" /><span className="w-4 h-1 rounded bg-gray-200" /></div>
        <GreenBtn>Continue</GreenBtn>
      </div>
    </Phone>
  )
}

function STrial() {
  return (
    <Phone label="04 · Onboarding — Trial Offer">
      <p className="text-center text-[8px] text-emerald-500 font-bold mt-1">STEP 3 OF 3</p>
      <div className="text-center my-2">
        <span className="text-2xl">👑</span>
        <p className="text-sm font-extrabold">Try Pro free for 7 days</p>
      </div>
      <div className="space-y-1.5 mb-2">
        {['Unlimited AI snaps', 'Economy-rice dish split', 'Weekly AI report', 'No ads'].map((f) => (
          <div key={f} className="flex items-center gap-2 text-[9px] text-gray-600 bg-white border border-gray-100 rounded-lg p-2">
            <span className="text-emerald-500">✓</span>{f}
          </div>
        ))}
      </div>
      <div className="mt-auto space-y-1.5">
        <GreenBtn>Start Free Trial</GreenBtn>
        <p className="text-center text-[8px] text-gray-400">Then $3.99/month · Cancel anytime</p>
        <p className="text-center text-[8px] text-gray-400 underline">Continue with Free</p>
      </div>
    </Phone>
  )
}

function SToday() {
  return (
    <Phone label="05 · Today — Dashboard">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-[11px] font-bold">Good morning, Aisyah</p>
          <p className="text-[7px] text-gray-400">Tue, Aug 26</p>
        </div>
        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center">A</div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-2 mb-2">
        <Ring pct={0.43} big="770" small="kcal left · of 1,800" />
        <div className="mt-1.5"><MacroRow /></div>
      </div>
      <p className="text-[9px] font-bold text-gray-700 mb-1">Today's meals</p>
      <div className="space-y-1.5">
        <MealRow e="🍞" n="Kaya Toast & Kopi" k="380 kcal" sub="Breakfast" />
        <MealRow e="🍛" n="Nasi Lemak" k="590 kcal" sub="Lunch" />
        <div className="border-2 border-dashed border-emerald-300 text-emerald-600 rounded-lg py-1.5 text-center text-[9px] font-semibold">+ Snap a meal</div>
      </div>
      <TabBar active={0} />
    </Phone>
  )
}

function SCamera() {
  return (
    <Phone label="06 · Snap — Camera">
      <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-900 to-gray-800 mb-2">
        <div className="absolute inset-0 flex items-center justify-center text-5xl">🍛</div>
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/70 rounded-tl" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/70 rounded-tr" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/70 rounded-bl" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/70 rounded-br" />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/40 text-white text-[7px] px-2 py-0.5 rounded-full">Point at your meal</div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px]">🖼️</div>
          <div className="w-11 h-11 rounded-full bg-white border-4 border-emerald-500 shadow-lg" />
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px]">⚡</div>
        </div>
      </div>
      <TabBar active={1} />
    </Phone>
  )
}

function SAnalyzing() {
  return (
    <Phone label="07 · Snap — AI Analyzing">
      <div className="relative flex-1 rounded-xl overflow-hidden bg-gray-900 mb-2">
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">🍛</div>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2">
          <div className="w-8 h-8 border-[3px] border-emerald-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-white text-[9px] font-medium">Analyzing your meal...</p>
          <div className="space-y-0.5">
            {[['Detecting dishes', true], ['Estimating portions', true], ['Calculating nutrition', false]].map(([s, done]) => (
              <div key={s as string} className={`flex items-center gap-1.5 text-[7px] ${done ? 'text-emerald-300' : 'text-gray-500'}`}>
                <span>{done ? '✓' : '●'}</span>{s}
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar active={1} />
    </Phone>
  )
}

function SResult() {
  return (
    <Phone label="08 · Snap — Result (Economy Rice Split)">
      <div className="bg-emerald-500 text-white rounded-xl p-2 flex items-center gap-1.5 mb-2">
        <span className="text-[9px]">✓</span>
        <p className="text-[9px] font-bold flex-1">4 dishes detected</p>
        <span className="text-[7px] bg-white/20 px-1.5 py-0.5 rounded-full">AI</span>
      </div>
      <div className="space-y-1.5">
        {[['🍚', 'Nasi Putih (Steamed Rice)', 96, '205'], ['🍗', 'Ayam Kari (Curry Chicken)', 94, '285'], ['🥬', 'Kangkung Goreng', 91, '90'], ['🥚', 'Telur Sambal', 89, '95']].map(([e, n, c, k]) => (
          <div key={n as string} className="bg-white rounded-lg border border-gray-100 p-2 flex items-center gap-2">
            <span className="text-base">{e}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-semibold truncate">{n}</p>
              <div className="flex items-center gap-1 mt-0.5"><ConfBar pct={c as number} /><span className="text-[6px] text-gray-400">{c}%</span></div>
            </div>
            <span className="text-[9px] font-bold">{k} kcal</span>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-2 flex justify-between mt-1.5">
        <span className="text-[9px] font-bold text-gray-500">Total</span>
        <span className="text-[10px] font-extrabold text-emerald-600">675 kcal</span>
      </div>
      <div className="mt-auto grid grid-cols-3 gap-1.5">
        <div className="col-span-1"><GreenBtn ghost>Retake</GreenBtn></div>
        <div className="col-span-2"><GreenBtn>+ Add to diary</GreenBtn></div>
      </div>
    </Phone>
  )
}

function SPortion() {
  return (
    <Phone label="09 · Meal — Portion Editor (Sheet)">
      <div className="flex-1 bg-gray-900/40 rounded-xl relative flex flex-col justify-end">
        <div className="bg-white rounded-t-2xl p-3 space-y-2">
          <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍗</span>
            <div>
              <p className="text-[10px] font-bold">Ayam Kari (Curry Chicken)</p>
              <p className="text-[7px] text-gray-400">94% confidence</p>
            </div>
          </div>
          <MacroRow />
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="w-6 h-6 rounded-full bg-gray-100 text-center text-xs font-bold leading-6">−</span>
            <span className="text-sm font-extrabold w-16 text-center">1.5 servings</span>
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-center text-xs font-bold leading-6">+</span>
          </div>
          <p className="text-center text-lg font-extrabold text-emerald-600">428 kcal</p>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="col-span-1 rounded-xl bg-red-50 text-red-600 text-[9px] font-bold text-center py-2">Delete</div>
            <div className="col-span-2"><GreenBtn>Done</GreenBtn></div>
          </div>
        </div>
      </div>
    </Phone>
  )
}

function SHistory() {
  return (
    <Phone label="10 · History — Week View">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[11px] font-bold">This week</p>
        <span className="bg-orange-50 text-orange-600 text-[7px] font-bold px-1.5 py-0.5 rounded-full">🔥 6 day streak</span>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-2 mb-2">
        <div className="flex items-end justify-between gap-1 h-20">
          {[1850, 2100, 1730, 1950, 2200, 1680, 1030].map((k, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
              <div className={`w-full rounded-t ${i === 6 ? 'bg-emerald-500' : k > 1800 ? 'bg-orange-300' : 'bg-emerald-200'}`} style={{ height: `${(k / 2400) * 100}%` }} />
              <span className="text-[6px] text-gray-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-dashed border-gray-200 mt-1 pt-1 flex justify-between">
          <span className="text-[7px] text-gray-400">avg kcal/day</span>
          <span className="text-[7px] font-bold">1,834</span>
        </div>
      </div>
      <div className="space-y-1.5">
        <MealRow e="🍜" n="Pho Bo" k="450 kcal" />
        <MealRow e="🍝" n="Pad Thai" k="520 kcal" />
        <MealRow e="🥘" n="Rendang + Rice" k="610 kcal" />
      </div>
      <TabBar active={2} />
    </Phone>
  )
}

function SReport() {
  return (
    <Phone label="11 · Report — Weekly Insight">
      <p className="text-[11px] font-bold mb-2">Weekly Report</p>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-2 mb-2">
        <Ring pct={0.76} big="1,834" small="avg kcal/day" />
      </div>
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        {[['🎯', '5/7 days on target'], ['🔥', '6 day streak'], ['🍗', 'Protein up 12%'], ['🧋', '3 sugary drinks']].map(([e, t]) => (
          <div key={t} className="bg-white border border-gray-100 rounded-lg p-2 flex items-center gap-1.5">
            <span className="text-sm">{e}</span>
            <span className="text-[8px] font-semibold">{t}</span>
          </div>
        ))}
      </div>
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2 mb-2">
        <p className="text-[8px] font-bold text-emerald-700 mb-0.5">🤖 AI Tip</p>
        <p className="text-[8px] text-gray-600 leading-snug">Your Teh Tarik habit adds ~360 kcal/week. Try "kurang manis" (less sugar) to stay on target.</p>
      </div>
      <div className="mt-auto"><GreenBtn>Share Report</GreenBtn></div>
    </Phone>
  )
}

function SProfile() {
  return (
    <Phone label="12 · Profile">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-9 h-9 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center">A</div>
        <div>
          <p className="text-[11px] font-bold">Aisyah</p>
          <span className="bg-amber-50 text-amber-600 text-[7px] font-bold px-1.5 py-0.5 rounded-full">👑 Pro · Trial</span>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-100">
        {[['🎯', 'Goal', 'Lose 5 kg'], ['🔥', 'Daily target', '1,800 kcal'], ['⚖️', 'Current', '68 kg'], ['🏁', 'Target', '63 kg'], ['🌐', 'Language', 'Bahasa Melayu'], ['👑', 'Plan', 'Pro · Trial']].map(([e, l, v]) => (
          <div key={l} className="flex items-center gap-2 px-2.5 py-2">
            <span className="text-xs">{e}</span>
            <span className="text-[9px] text-gray-500 flex-1">{l}</span>
            <span className="text-[9px] font-bold">{v}</span>
            <span className="text-gray-300 text-[9px]">›</span>
          </div>
        ))}
      </div>
      <TabBar active={3} />
    </Phone>
  )
}

function SSettings() {
  return (
    <Phone label="13 · Settings — Reminders">
      <p className="text-[11px] font-bold mb-2">Notifications</p>
      <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100 mb-2">
        {[['🍳', 'Breakfast reminder', '8:00 AM', true], ['🍱', 'Lunch reminder', '12:30 PM', true], ['🍜', 'Dinner reminder', '7:00 PM', true], ['📊', 'Weekly report', 'Sun 9:00 AM', true], ['🔥', 'Streak alerts', '', false]].map(([e, l, t, on]) => (
          <div key={l as string} className="flex items-center gap-2 px-2.5 py-2">
            <span className="text-xs">{e}</span>
            <div className="flex-1">
              <p className="text-[9px] font-semibold">{l}</p>
              {t ? <p className="text-[7px] text-gray-400">{t}</p> : null}
            </div>
            <Toggle on={on as boolean} />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
        {[['⚖️', 'Weight reminders', true], ['💧', 'Water reminders', false]].map(([e, l, on]) => (
          <div key={l as string} className="flex items-center gap-2 px-2.5 py-2">
            <span className="text-xs">{e}</span>
            <p className="text-[9px] font-semibold flex-1">{l}</p>
            <Toggle on={on as boolean} />
          </div>
        ))}
      </div>
      <TabBar active={3} />
    </Phone>
  )
}

function SPaywall() {
  return (
    <Phone label="14 · Paywall — Upgrade to Pro">
      <div className="text-center mt-2 mb-2">
        <span className="text-3xl">👑</span>
        <p className="text-sm font-extrabold mt-1">SnapCalo Pro</p>
        <p className="text-[8px] text-gray-400">Unlock the full AI coach</p>
      </div>
      <div className="space-y-1 mb-2">
        {['Unlimited snaps', 'Economy-rice dish split', 'AI meal recommendations', 'Weekly AI report', 'Export data · No ads'].map((f) => (
          <div key={f} className="flex items-center gap-1.5 text-[8px] text-gray-600">
            <span className="text-emerald-500 text-[9px]">✓</span>{f}
          </div>
        ))}
      </div>
      <div className="space-y-1.5 mb-2">
        <div className="border-2 border-emerald-500 bg-emerald-50 rounded-xl p-2 flex items-center justify-between">
          <div><p className="text-[9px] font-bold">Yearly</p><p className="text-[7px] text-emerald-600 font-bold">SAVE 58%</p></div>
          <p className="text-[10px] font-extrabold">$24.99/yr</p>
        </div>
        <div className="border-2 border-gray-100 rounded-xl p-2 flex items-center justify-between">
          <p className="text-[9px] font-bold">Monthly</p>
          <p className="text-[10px] font-extrabold">$3.99/mo</p>
        </div>
      </div>
      <div className="mt-auto space-y-1">
        <GreenBtn>Start 7-Day Free Trial</GreenBtn>
        <p className="text-center text-[7px] text-gray-400 underline">Restore purchase</p>
      </div>
    </Phone>
  )
}

function SQuickAdd() {
  return (
    <Phone label="15 · Quick Add — Text Search">
      <p className="text-[11px] font-bold mb-2">Add meal</p>
      <div className="bg-white border-2 border-emerald-400 rounded-xl px-2.5 py-2 flex items-center gap-2 mb-2">
        <span className="text-xs">🔍</span>
        <span className="text-[9px] text-gray-700">1 bowl laksa</span>
      </div>
      <p className="text-[8px] font-bold text-gray-400 mb-1">RESULTS</p>
      <div className="space-y-1.5 mb-2">
        <MealRow e="🍜" n="Laksa (curry noodle)" k="580 kcal" sub="AI estimate" />
        <MealRow e="🍜" n="Laksa Johor" k="520 kcal" />
        <MealRow e="🍜" n="Sarawak Laksa" k="545 kcal" />
      </div>
      <p className="text-[8px] font-bold text-gray-400 mb-1">RECENT</p>
      <div className="flex flex-wrap gap-1">
        {['Nasi Lemak', 'Teh Tarik', 'Roti Canai'].map((r) => (
          <span key={r} className="text-[8px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{r}</span>
        ))}
      </div>
      <div className="mt-auto"><GreenBtn>📸 Or snap a photo</GreenBtn></div>
    </Phone>
  )
}

/* ---------- gallery ---------- */

const SCREENS: { id: string; label: string; el: ReactNode }[] = [
  { id: 'welcome', label: 'welcome', el: <SWelcome /> },
  { id: 'goal', label: 'goal', el: <SGoal /> },
  { id: 'stats', label: 'stats', el: <SStats /> },
  { id: 'trial', label: 'trial', el: <STrial /> },
  { id: 'today', label: 'today', el: <SToday /> },
  { id: 'camera', label: 'camera', el: <SCamera /> },
  { id: 'analyzing', label: 'analyzing', el: <SAnalyzing /> },
  { id: 'result', label: 'result', el: <SResult /> },
  { id: 'portion', label: 'portion', el: <SPortion /> },
  { id: 'history', label: 'history', el: <SHistory /> },
  { id: 'report', label: 'report', el: <SReport /> },
  { id: 'profile', label: 'profile', el: <SProfile /> },
  { id: 'settings', label: 'settings', el: <SSettings /> },
  { id: 'paywall', label: 'paywall', el: <SPaywall /> },
  { id: 'quickadd', label: 'quickadd', el: <SQuickAdd /> },
]

export default function Screens() {
  const [params] = useSearchParams()
  const only = params.get('only')
  const single = SCREENS.find((s) => s.id === only)

  if (single) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center py-8">
        {single.el}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-2">
          <Link to="/prototype" className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to prototype
          </Link>
          <Link to="/" className="text-sm text-gray-400 hover:text-emerald-400 transition">Home</Link>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-1">
          SnapCalo <span className="text-emerald-400">Screen Map</span>
        </h1>
        <p className="text-sm text-gray-400 mb-10">All 15 app screens · EN preview · full user flow from onboarding to paywall</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
          {SCREENS.map((s) => (
            <div key={s.id}>{s.el}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
