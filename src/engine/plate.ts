import { DISHES } from './dishes'

/**
 * Suku Suku Separuh (KKM) / Isi Piringku plate model:
 * target = ½ veg & fruit, ¼ protein, ¼ carbs (by portion share).
 * Sauces, oils, broths and drinks are excluded from the ratio.
 */

export type PlateCat = 'carb' | 'protein' | 'veg'

const PLATE_CATEGORY: Record<string, PlateCat | 'other'> = {
  rice_cooked: 'carb',
  rice_noodles: 'carb',
  chicken_fried: 'protein',
  chicken_cooked: 'protein',
  anchovies: 'protein',
  peanuts: 'protein',
  egg_boiled: 'protein',
  beef_cooked: 'protein',
  shrimp: 'protein',
  tofu: 'protein',
  cucumber: 'veg',
  bean_sprouts: 'veg',
  oyster_mushroom: 'veg',
  spinach_cooked: 'veg',
  coconut_milk: 'other',
  sriracha: 'other',
  beef_broth: 'other',
  palm_oil: 'other',
  soy_sauce: 'other',
}

/** Fallback keyword mapping for free-text / non-dish meals. */
const NAME_HINTS: [RegExp, PlateCat | 'other'][] = [
  [/kopi|teh|coffee|tea|boba|bubble/i, 'other'],
  [/nasi|rice|roti|toast|mee|noodle|pho|ketupat|bread|bun/i, 'carb'],
  [/sayur|veg|kangkung|gado|ulam|salad|timun|cucumber/i, 'veg'],
  [/ayam|chicken|egg|telur|ikan|fish|beef|shrimp|udang|satay|rendang/i, 'protein'],
]

export interface PlateInput {
  dishId?: string
  name: string
  servings?: number
}

export interface PlateResult {
  /** actual share (0–100, sums to 100 over counted categories) */
  pct: Record<PlateCat, number>
  /** 0–100, 100 = perfect ½ ¼ ¼ match */
  score: number
  /** category furthest below its target share */
  gap: PlateCat | null
  counted: boolean
}

const TARGET: Record<PlateCat, number> = { veg: 50, protein: 25, carb: 25 }

export function plateScore(items: PlateInput[]): PlateResult {
  const grams: Record<PlateCat, number> = { carb: 0, protein: 0, veg: 0 }

  for (const it of items) {
    const scale = it.servings ?? 1
    const dish = it.dishId ? DISHES.find((d) => d.id === it.dishId) : undefined
    if (dish) {
      for (const di of dish.items) {
        const cat = PLATE_CATEGORY[di.key]
        if (cat && cat !== 'other') grams[cat] += di.grams * scale
      }
    } else {
      // no dish model: attribute a nominal 150 g portion via name hint
      const hint = NAME_HINTS.find(([re]) => re.test(it.name))?.[1]
      if (hint && hint !== 'other') grams[hint] += 150 * scale
    }
  }

  const total = grams.carb + grams.protein + grams.veg
  if (total <= 0) return { pct: { veg: 0, protein: 0, carb: 0 }, score: 0, gap: null, counted: false }

  const pct: Record<PlateCat, number> = {
    veg: Math.round((grams.veg / total) * 100),
    protein: Math.round((grams.protein / total) * 100),
    carb: 0,
  }
  pct.carb = 100 - pct.veg - pct.protein

  const dev = Math.abs(pct.veg - TARGET.veg) + Math.abs(pct.protein - TARGET.protein) + Math.abs(pct.carb - TARGET.carb)
  const score = Math.round(100 - dev / 2)

  const deficits = (Object.keys(TARGET) as PlateCat[])
    .map((c) => ({ c, d: TARGET[c] - pct[c] }))
    .filter((x) => x.d > 0)
    .sort((a, b) => b.d - a.d)

  return { pct, score, gap: deficits[0]?.c ?? null, counted: true }
}
