import seed from './usdaSeed.json'

export interface Nutrients {
  kcal: number
  protein: number
  carbs: number
  fat: number
  /** mg per reference portion */
  sodium?: number
  /** g total sugars */
  sugar?: number
  /** g dietary fiber */
  fiber?: number
}

export interface FoodEntry {
  query: string
  fdcId: number
  description: string
  dataType: string
  per100g: Nutrients
  source: string
  url: string
}

export type IngredientKey = keyof typeof seed

/** Real per-100g nutrient values fetched from USDA FoodData Central (see fetch_usda.py). */
export const FOOD_DB = seed as Record<string, FoodEntry>

/** Human-friendly labels for ingredient keys (shown in the breakdown table). */
export const INGREDIENT_LABELS: Record<string, string> = {
  rice_cooked: 'White rice, cooked',
  coconut_milk: 'Coconut milk',
  chicken_fried: 'Fried chicken',
  sriracha: 'Sambal / chili paste (sriracha proxy)',
  anchovies: 'Ikan bilis (anchovies in oil)',
  peanuts: 'Roasted peanuts',
  egg_boiled: 'Boiled egg',
  cucumber: 'Cucumber',
  rice_noodles: 'Rice noodles, cooked',
  beef_cooked: 'Beef, lean, braised',
  beef_broth: 'Broth (beef broth proxy)',
  shrimp: 'Shrimp, cooked',
  tofu: 'Tofu, firm',
  bean_sprouts: 'Bean sprouts',
  palm_oil: 'Palm oil',
  soy_sauce: 'Kecap manis (soy sauce proxy)',
  oyster_mushroom: 'Mushrooms (oyster)',
  spinach_cooked: 'Kangkung (spinach proxy)',
  chicken_cooked: 'Chicken, stewed (dark meat)',
}
