import { useMemo, useState } from 'react'
import { DISHES, findDish, type DishSpec } from '../engine/dishes'
import { computeMeal, dailyTarget, type Activity, type Goal, type Sex } from '../engine/calc'
import type { Nutrients } from '../engine/foods'

const fmtKcal = (v: number) => Math.round(v).toLocaleString()
const fmtG = (v: number) => v.toFixed(1)

function MacroBar({ label, grams, kcalShare, color }: { label: string; grams: number; kcalShare: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-600">{label}</span>
        <span className="font-semibold text-slate-900">{fmtG(grams)} g</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${Math.min(100, kcalShare)}%` }} />
      </div>
      <div className="text-xs text-slate-400 mt-0.5">{kcalShare.toFixed(0)}% of kcal</div>
    </div>
  )
}

interface LiveFood {
  fdcId: number
  description: string
  per100g: Nutrients
}

export default function Engine() {
  const [query, setQuery] = useState('Nasi Lemak')
  const [dish, setDish] = useState<DishSpec | undefined>(() => findDish('Nasi Lemak'))
  const [grams, setGrams] = useState(300)

  // daily target form
  const [sex, setSex] = useState<Sex>('male')
  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(170)
  const [age, setAge] = useState(30)
  const [activity, setActivity] = useState<Activity>('light')
  const [goal, setGoal] = useState<Goal>('maintain')

  // live FDC lookup
  const [liveQuery, setLiveQuery] = useState('')
  const [liveKey, setLiveKey] = useState('DEMO_KEY')
  const [liveResults, setLiveResults] = useState<LiveFood[]>([])
  const [liveError, setLiveError] = useState('')
  const [liveLoading, setLiveLoading] = useState(false)

  const result = useMemo(() => (dish ? computeMeal(dish, grams) : null), [dish, grams])
  const target = useMemo(
    () => dailyTarget(sex, weight, height, age, activity, goal),
    [sex, weight, height, age, activity, goal],
  )

  const pick = (d: DishSpec) => {
    setDish(d)
    setQuery(d.name)
    setGrams(d.refGrams)
  }

  const onQuery = (v: string) => {
    setQuery(v)
    const found = findDish(v)
    if (found) {
      setDish(found)
      setGrams(found.refGrams)
    }
  }

  const liveSearch = async () => {
    if (!liveQuery.trim()) return
    setLiveLoading(true)
    setLiveError('')
    setLiveResults([])
    try {
      const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(
        liveKey,
      )}&query=${encodeURIComponent(liveQuery)}&pageSize=5&dataType=SR%20Legacy,Foundation`
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status} — likely API quota exhausted`)
      const data = await res.json()
      const foods: LiveFood[] = (data.foods ?? []).map((f: any) => {
        const get = (ids: number[]) =>
          f.foodNutrients?.find((n: any) => ids.includes(n.nutrientId))?.value ?? 0
        return {
          fdcId: f.fdcId,
          description: f.description,
          per100g: {
            kcal: get([1008]) || get([2047, 2048]),
            protein: get([1003]),
            carbs: get([1005]),
            fat: get([1004]),
          },
        }
      })
      if (!foods.length) setLiveError('No results')
      setLiveResults(foods)
    } catch (e: any) {
      setLiveError(e.message ?? 'Request failed')
    } finally {
      setLiveLoading(false)
    }
  }

  const step = dish ? dish.refGrams : 300

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍛</span>
            <span className="font-bold">SnapCalo</span>
            <span className="text-slate-400">·</span>
            <span className="font-semibold text-emerald-600">Nutrition Engine Demo</span>
          </div>
          <a href="/" className="text-sm text-slate-500 hover:text-emerald-600">← Back to site</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* pipeline */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { n: '①', t: 'Dish input', ok: !!dish, s: dish ? dish.name : 'type a dish name' },
            { n: '②', t: 'Portion model', ok: !!dish, s: dish ? `ref ${dish.refGrams} g → ${grams} g` : '—' },
            { n: '③', t: 'Nutrient match', ok: !!result, s: result ? `${result.rows.length} ingredients · USDA FDC` : '—' },
            { n: '④', t: 'Weighted sum', ok: !!result, s: result ? `${fmtKcal(result.total.kcal)} kcal` : '—' },
          ].map((p) => (
            <div key={p.t} className={`rounded-xl border p-3 bg-white ${p.ok ? 'border-emerald-200' : 'border-slate-200'}`}>
              <div className="text-xs text-slate-400">{p.n} {p.t}</div>
              <div className={`text-sm font-semibold truncate ${p.ok ? 'text-emerald-700' : 'text-slate-400'}`}>{p.s}</div>
            </div>
          ))}
        </section>

        <div className="grid lg:grid-cols-[380px,1fr] gap-6 items-start">
          {/* left column */}
          <div className="space-y-6">
            {/* input card */}
            <section className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
              <h2 className="font-bold">Input</h2>
              <div>
                <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Dish name</label>
                <input
                  value={query}
                  onChange={(e) => onQuery(e.target.value)}
                  placeholder="e.g. nasi lemak / 冬阴功 / phở"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {DISHES.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => pick(d)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition ${
                        dish?.id === d.id
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-slate-200 hover:border-emerald-400 text-slate-600'
                      }`}
                    >
                      {d.flag} {d.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Portion (grams)</label>
                <div className="flex items-center gap-3 mt-1">
                  <input
                    type="number"
                    min={10}
                    max={1500}
                    value={grams}
                    onChange={(e) => setGrams(Math.max(10, Number(e.target.value) || 10))}
                    className="w-24 rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-400">g</span>
                  <input
                    type="range"
                    min={50}
                    max={900}
                    step={10}
                    value={grams}
                    onChange={(e) => setGrams(Number(e.target.value))}
                    className="flex-1 accent-emerald-500"
                  />
                </div>
                {dish && (
                  <div className="flex gap-1.5 mt-2">
                    {[0.5, 0.75, 1, 1.5, 2, 3].map((m) => (
                      <button
                        key={m}
                        onClick={() => setGrams(Math.round(step * m))}
                        className={`text-xs px-2 py-1 rounded-lg border transition ${
                          grams === Math.round(step * m)
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                            : 'border-slate-200 text-slate-500 hover:border-emerald-300'
                        }`}
                      >
                        {m}×
                      </button>
                    ))}
                    <span className="text-xs text-slate-400 self-center ml-1">of {step} g ref</span>
                  </div>
                )}
              </div>
            </section>

            {/* daily target card */}
            <section className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
              <h2 className="font-bold">Daily target <span className="text-xs font-normal text-slate-400">Mifflin-St Jeor</span></h2>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <select value={sex} onChange={(e) => setSex(e.target.value as Sex)} className="rounded-lg border border-slate-300 px-2 py-1.5">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <select value={activity} onChange={(e) => setActivity(e.target.value as Activity)} className="rounded-lg border border-slate-300 px-2 py-1.5">
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Lightly active</option>
                  <option value="moderate">Moderately active</option>
                </select>
                {([
                  ['Weight kg', weight, setWeight],
                  ['Height cm', height, setHeight],
                  ['Age', age, setAge],
                ] as const).map(([label, val, set]) => (
                  <label key={label} className="flex items-center gap-2 rounded-lg border border-slate-300 px-2 py-1.5">
                    <span className="text-xs text-slate-400 whitespace-nowrap">{label}</span>
                    <input type="number" value={val} onChange={(e) => set(Number(e.target.value) || 0)} className="w-full focus:outline-none" />
                  </label>
                ))}
                <select value={goal} onChange={(e) => setGoal(e.target.value as Goal)} className="rounded-lg border border-slate-300 px-2 py-1.5">
                  <option value="lose">Lose fat</option>
                  <option value="maintain">Maintain</option>
                  <option value="gain">Gain muscle</option>
                </select>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 text-sm space-y-1">
                <div className="flex justify-between"><span className="text-slate-500">BMR</span><span className="font-medium">{fmtKcal(target.bmr)} kcal</span></div>
                <div className="flex justify-between"><span className="text-slate-500">TDEE</span><span className="font-medium">{fmtKcal(target.tdee)} kcal</span></div>
                <div className="flex justify-between text-emerald-700"><span className="font-medium">Daily target</span><span className="font-bold">{fmtKcal(target.targetKcal)} kcal</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Protein target</span><span className="font-medium">{Math.round(target.proteinG)} g</span></div>
              </div>
            </section>

            {/* live lookup card */}
            <section className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
              <h2 className="font-bold">Live USDA lookup <span className="text-xs font-normal text-slate-400">optional</span></h2>
              <p className="text-xs text-slate-500">
                Queries FoodData Central directly from your browser. Free key:{' '}
                <a className="text-emerald-600 underline" href="https://fdc.nal.usda.gov/api-key-signup" target="_blank" rel="noreferrer">api.data.gov signup</a>.
              </p>
              <input
                value={liveQuery}
                onChange={(e) => setLiveQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && liveSearch()}
                placeholder="any food, e.g. coconut rice"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div className="flex gap-2">
                <input
                  value={liveKey}
                  onChange={(e) => setLiveKey(e.target.value)}
                  placeholder="FDC API key"
                  className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={liveSearch}
                  disabled={liveLoading}
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 disabled:opacity-50"
                >
                  {liveLoading ? '…' : 'Search'}
                </button>
              </div>
              {liveError && <p className="text-xs text-red-500">⚠ {liveError} — embedded seed data above keeps working offline.</p>}
              {liveResults.map((f) => (
                <div key={f.fdcId} className="rounded-xl border border-slate-200 p-3 text-sm">
                  <div className="font-medium leading-snug">{f.description}</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    FDC {f.fdcId} · per 100 g: {fmtKcal(f.per100g.kcal)} kcal · P {fmtG(f.per100g.protein)} · C {fmtG(f.per100g.carbs)} · F {fmtG(f.per100g.fat)}
                  </div>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    at {grams} g → {fmtKcal((f.per100g.kcal * grams) / 100)} kcal
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* right column */}
          <div className="space-y-6">
            {!result ? (
              <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400">
                Type a dish name or pick one of the 6 dishes to run the engine
              </div>
            ) : (
              <>
                {/* totals */}
                <section className="bg-white rounded-2xl border border-slate-200 p-6">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-500">
                        {dish!.flag} {dish!.name} <span className="text-slate-400">· {dish!.local} · {grams} g</span>
                      </div>
                      <div className="text-5xl font-extrabold text-slate-900 mt-1">
                        {fmtKcal(result.total.kcal)} <span className="text-xl font-semibold text-slate-400">kcal</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {((result.total.kcal / target.targetKcal) * 100).toFixed(0)}% of your {fmtKcal(target.targetKcal)} kcal daily target
                      </div>
                    </div>
                    <div
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                        result.atwater.pass ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      Atwater check: {result.atwater.deviationPct >= 0 ? '+' : ''}
                      {result.atwater.deviationPct.toFixed(1)}% {result.atwater.pass ? '✓ within ±25%' : '⚠ low confidence'}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <MacroBar label="Protein" grams={result.total.protein} kcalShare={(result.total.protein * 4 * 100) / result.total.kcal} color="bg-sky-500" />
                    <MacroBar label="Carbs" grams={result.total.carbs} kcalShare={(result.total.carbs * 4 * 100) / result.total.kcal} color="bg-amber-500" />
                    <MacroBar label="Fat" grams={result.total.fat} kcalShare={(result.total.fat * 9 * 100) / result.total.kcal} color="bg-rose-500" />
                  </div>
                </section>

                {/* breakdown */}
                <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-bold">Ingredient breakdown</h2>
                    <span className="text-xs text-slate-400">portion prior scales linearly · ref {dish!.refGrams} g</span>
                  </div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs text-slate-400 border-b border-slate-100">
                        <th className="px-5 py-2 font-medium">Ingredient</th>
                        <th className="px-3 py-2 font-medium text-right">grams</th>
                        <th className="px-3 py-2 font-medium text-right">kcal/100g</th>
                        <th className="px-3 py-2 font-medium text-right">kcal</th>
                        <th className="px-3 py-2 font-medium text-right">P</th>
                        <th className="px-3 py-2 font-medium text-right">C</th>
                        <th className="px-5 py-2 font-medium text-right">F</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.rows.map((r) => (
                        <tr key={r.key} className="border-b border-slate-50 hover:bg-slate-50/60">
                          <td className="px-5 py-2.5">
                            <div>{r.label}</div>
                            {r.entry && (
                              <a
                                href={r.entry.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-emerald-600 hover:underline"
                                title={r.entry.description}
                              >
                                FDC {r.entry.fdcId} ↗
                              </a>
                            )}
                          </td>
                          <td className="px-3 py-2.5 text-right text-slate-500">{r.grams.toFixed(0)}</td>
                          <td className="px-3 py-2.5 text-right text-slate-500">{fmtKcal(r.per100g.kcal)}</td>
                          <td className="px-3 py-2.5 text-right font-semibold">{fmtKcal(r.contrib.kcal)}</td>
                          <td className="px-3 py-2.5 text-right text-sky-700">{fmtG(r.contrib.protein)}</td>
                          <td className="px-3 py-2.5 text-right text-amber-700">{fmtG(r.contrib.carbs)}</td>
                          <td className="px-5 py-2.5 text-right text-rose-700">{fmtG(r.contrib.fat)}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50 font-bold">
                        <td className="px-5 py-2.5">Total</td>
                        <td className="px-3 py-2.5 text-right">{result.rows.reduce((a, r) => a + r.grams, 0).toFixed(0)}</td>
                        <td />
                        <td className="px-3 py-2.5 text-right">{fmtKcal(result.total.kcal)}</td>
                        <td className="px-3 py-2.5 text-right">{fmtG(result.total.protein)}</td>
                        <td className="px-3 py-2.5 text-right">{fmtG(result.total.carbs)}</td>
                        <td className="px-5 py-2.5 text-right">{fmtG(result.total.fat)}</td>
                      </tr>
                    </tbody>
                  </table>
                </section>

                {/* provenance */}
                <section className="bg-white rounded-2xl border border-slate-200 p-5 text-xs text-slate-500 space-y-1.5">
                  <h3 className="font-bold text-slate-700 text-sm">Data provenance</h3>
                  <p>
                    • Nutrient values: <b>USDA FoodData Central</b> (SR Legacy / Foundation), fetched live from the official
                    FDC data service on 2026-08-26 — each row links to its FDC entry.
                  </p>
                  <p>
                    • Portion split: <b>SnapCalo hawker portion prior</b> (engineering estimate, to be field-calibrated) — the
                    L1 layer in calorie-engine.md §2.
                  </p>
                  <p>
                    • Proxies: sambal→sriracha, kecap manis→soy sauce, tom yum broth→beef broth. Production replaces these
                    with MyFCD / TKPI / Thai &amp; Vietnamese FCT dish-level entries.
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
