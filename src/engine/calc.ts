import { FOOD_DB, INGREDIENT_LABELS, type FoodEntry, type Nutrients } from './foods'
import type { DishSpec } from './dishes'

export interface MealRow {
  key: string
  label: string
  grams: number
  per100g: Nutrients
  contrib: Nutrients
  entry?: FoodEntry
}

export interface MealResult {
  rows: MealRow[]
  total: Nutrients
  atwater: { estimatedKcal: number; deviationPct: number; pass: boolean }
}

export function scaleNutrients(per100g: Nutrients, grams: number): Nutrients {
  const f = grams / 100
  return {
    kcal: per100g.kcal * f,
    protein: per100g.protein * f,
    carbs: per100g.carbs * f,
    fat: per100g.fat * f,
    sodium: (per100g.sodium ?? 0) * f,
    sugar: (per100g.sugar ?? 0) * f,
    fiber: (per100g.fiber ?? 0) * f,
  }
}

/**
 * Core engine: dish + total grams → ingredient scaling → weighted sum.
 * Mirrors calorie-engine.md §4. Atwater cross-check flags anomalies (>25%).
 */
export function computeMeal(dish: DishSpec, totalGrams: number): MealResult {
  const ratio = totalGrams / dish.refGrams
  const rows: MealRow[] = dish.items.map((item) => {
    const entry = FOOD_DB[item.key]
    const grams = item.grams * ratio
    const per100g = entry?.per100g ?? { kcal: 0, protein: 0, carbs: 0, fat: 0 }
    return {
      key: item.key,
      label: INGREDIENT_LABELS[item.key] ?? item.key,
      grams,
      per100g,
      contrib: scaleNutrients(per100g, grams),
      entry,
    }
  })

  const total = rows.reduce<Nutrients>(
    (acc, r) => ({
      kcal: acc.kcal + r.contrib.kcal,
      protein: acc.protein + r.contrib.protein,
      carbs: acc.carbs + r.contrib.carbs,
      fat: acc.fat + r.contrib.fat,
      sodium: (acc.sodium ?? 0) + (r.contrib.sodium ?? 0),
      sugar: (acc.sugar ?? 0) + (r.contrib.sugar ?? 0),
      fiber: (acc.fiber ?? 0) + (r.contrib.fiber ?? 0),
    }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0, sodium: 0, sugar: 0, fiber: 0 },
  )

  const estimatedKcal = total.protein * 4 + total.carbs * 4 + total.fat * 9
  const deviationPct = total.kcal > 0 ? ((estimatedKcal - total.kcal) / total.kcal) * 100 : 0

  return {
    rows,
    total,
    atwater: {
      estimatedKcal,
      deviationPct,
      pass: Math.abs(deviationPct) <= 25,
    },
  }
}

export type Sex = 'male' | 'female'
export type Activity = 'sedentary' | 'light' | 'moderate'
export type Goal = 'lose' | 'maintain' | 'gain'

export interface DailyTarget {
  bmr: number
  tdee: number
  targetKcal: number
  proteinG: number
}

/** Mifflin-St Jeor — calorie-engine.md §5. */
export function dailyTarget(
  sex: Sex,
  weightKg: number,
  heightCm: number,
  age: number,
  activity: Activity,
  goal: Goal,
): DailyTarget {
  const bmr =
    sex === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161

  const activityFactor = { sedentary: 1.2, light: 1.375, moderate: 1.55 }[activity]
  const tdee = bmr * activityFactor

  const goalFactor = { lose: 0.85, maintain: 1.0, gain: 1.1 }[goal]
  const floor = sex === 'female' ? 1200 : 1500
  const targetKcal = Math.max(tdee * goalFactor, floor)

  const proteinPerKg = { lose: 1.6, maintain: 1.2, gain: 2.0 }[goal]

  return { bmr, tdee, targetKcal, proteinG: weightKg * proteinPerKg }
}

/* ---------- BMI & weight-goal advice (WHO Asia-Pacific cutoffs) ---------- */

export type BmiCategory = 'underweight' | 'healthy' | 'overweight' | 'obese'

export function bmi(weightKg: number, heightCm: number): number {
  const m = heightCm / 100
  return weightKg / (m * m)
}

/** WHO Asia-Pacific: <18.5 under · 18.5–22.9 healthy · 23–27.4 over · ≥27.5 obese */
export function bmiCategory(value: number): BmiCategory {
  if (value < 18.5) return 'underweight'
  if (value < 23) return 'healthy'
  if (value < 27.5) return 'overweight'
  return 'obese'
}

export interface WeightAdvice {
  bmi: number
  category: BmiCategory
  /** kg to lose (positive) or gain (negative); 0 when already healthy */
  deltaKg: number
  /** suggested target body weight, kg */
  targetWeightKg: number
  /** recommended goal derived from BMI */
  goal: Goal
}

/**
 * Suggest a target weight: mid-healthy BMI 21 for overweight/obese,
 * BMI 20 for underweight. deltaKg = current − suggested (positive = lose).
 */
export function weightAdvice(weightKg: number, heightCm: number): WeightAdvice {
  const value = bmi(weightKg, heightCm)
  const category = bmiCategory(value)
  const m = heightCm / 100
  const targetWeightKg =
    category === 'underweight' ? 20 * m * m : category === 'healthy' ? weightKg : 21 * m * m
  const deltaKg = Math.round((weightKg - targetWeightKg) * 10) / 10
  const goal: Goal =
    category === 'underweight' ? 'gain' : category === 'healthy' ? 'maintain' : 'lose'
  return {
    bmi: Math.round(value * 10) / 10,
    category,
    deltaKg,
    targetWeightKg: Math.round(targetWeightKg * 10) / 10,
    goal,
  }
}

/**
 * Goal date range: healthy rate 0.25–0.5 kg/week.
 * Returns the earliest/latest date the weight goal is reachable, or null
 * when no weight change is needed.
 */
export function goalDateRange(deltaKg: number, from = new Date()): { start: Date; end: Date } | null {
  if (deltaKg <= 0) return null
  const weekMs = 7 * 86400000
  return {
    start: new Date(from.getTime() + (deltaKg / 0.5) * weekMs),
    end: new Date(from.getTime() + (deltaKg / 0.25) * weekMs),
  }
}

/* ---------- Two-way food tags (health ✓ / risk ⚠️) ---------- */

export type TagKey = 'highProtein' | 'light' | 'highFat' | 'highCarb' | 'fried' | 'sugary' | 'salty'

export interface FoodTags {
  good: TagKey[]
  risk: TagKey[]
}

/**
 * Tags computed from engine nutrient totals (honest, data-driven):
 *  good: 💪 highProtein ≥ 20 g/serving · 🥬 light < 300 kcal
 *  risk: ⚠️ highFat > 35% of kcal · ⚠️ highCarb > 60% of kcal
 *        + dish-level model flags (fried / sugary / salty) from DISH_FLAGS
 */
export function foodTags(total: Nutrients, flags: string[] = []): FoodTags {
  const good: TagKey[] = []
  const risk: TagKey[] = []
  if (total.protein >= 20) good.push('highProtein')
  if (total.kcal > 0 && total.kcal < 300) good.push('light')
  if (total.kcal > 0) {
    if ((total.fat * 9) / total.kcal > 0.35) risk.push('highFat')
    if ((total.carbs * 4) / total.kcal > 0.6) risk.push('highCarb')
  }
  for (const f of flags) {
    if (f === 'fried' || f === 'sugary' || f === 'salty') risk.push(f)
  }
  return { good, risk }
}
