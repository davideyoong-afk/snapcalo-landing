import type { IngredientKey } from './foods'

export interface DishItem {
  key: IngredientKey | string
  /** grams of this ingredient at the dish's reference portion */
  grams: number
}

export interface DishSpec {
  id: string
  name: string
  local: string
  flag: string
  country: string
  /** reference hawker portion, grams — SnapCalo L1 portion prior (estimate) */
  refGrams: number
  aliases: string[]
  items: DishItem[]
}

/**
 * SnapCalo hawker portion model (L1 prior) — engineering estimates to be
 * calibrated by field sampling. Grams per ingredient at the reference portion;
 * everything scales linearly with the user-entered total grams.
 */
export const DISHES: DishSpec[] = [
  {
    id: 'nasi-lemak',
    name: 'Nasi Lemak',
    local: 'Nasi Lemak',
    flag: '🇲🇾',
    country: 'Malaysia',
    refGrams: 300,
    aliases: ['nasi lemak', '椰浆饭', '辣死你妈'],
    items: [
      { key: 'rice_cooked', grams: 140 },
      { key: 'coconut_milk', grams: 20 },
      { key: 'chicken_fried', grams: 60 },
      { key: 'sriracha', grams: 25 },
      { key: 'egg_boiled', grams: 45 },
      { key: 'anchovies', grams: 5 },
      { key: 'peanuts', grams: 3 },
      { key: 'cucumber', grams: 2 },
    ],
  },
  {
    id: 'pho-bo',
    name: 'Pho Bo (Beef Pho)',
    local: 'Phở Bò',
    flag: '🇻🇳',
    country: 'Vietnam',
    refGrams: 500,
    aliases: ['pho', 'pho bo', 'phở', 'beef pho', '越南河粉'],
    items: [
      { key: 'rice_noodles', grams: 150 },
      { key: 'beef_cooked', grams: 80 },
      { key: 'beef_broth', grams: 250 },
      { key: 'bean_sprouts', grams: 20 },
    ],
  },
  {
    id: 'pad-thai',
    name: 'Pad Thai',
    local: 'ผัดไทย',
    flag: '🇹🇭',
    country: 'Thailand',
    refGrams: 300,
    aliases: ['pad thai', 'ผัดไทย', '泰式炒河粉'],
    items: [
      { key: 'rice_noodles', grams: 130 },
      { key: 'shrimp', grams: 50 },
      { key: 'tofu', grams: 40 },
      { key: 'egg_boiled', grams: 40 },
      { key: 'bean_sprouts', grams: 20 },
      { key: 'peanuts', grams: 10 },
      { key: 'palm_oil', grams: 10 },
    ],
  },
  {
    id: 'rendang',
    name: 'Beef Rendang',
    local: 'Rendang Daging',
    flag: '🇮🇩',
    country: 'Indonesia',
    refGrams: 150,
    aliases: ['rendang', '仁当', '巴东牛肉'],
    items: [
      { key: 'beef_cooked', grams: 90 },
      { key: 'coconut_milk', grams: 45 },
      { key: 'palm_oil', grams: 10 },
      { key: 'sriracha', grams: 5 },
    ],
  },
  {
    id: 'nasi-goreng',
    name: 'Nasi Goreng',
    local: 'Nasi Goreng',
    flag: '🇮🇩',
    country: 'Indonesia',
    refGrams: 300,
    aliases: ['nasi goreng', '印尼炒饭'],
    items: [
      { key: 'rice_cooked', grams: 180 },
      { key: 'chicken_fried', grams: 50 },
      { key: 'egg_boiled', grams: 50 },
      { key: 'palm_oil', grams: 15 },
      { key: 'soy_sauce', grams: 5 },
    ],
  },
  {
    id: 'tom-yum',
    name: 'Tom Yum Goong',
    local: 'ต้มยำกุ้ง',
    flag: '🇹🇭',
    country: 'Thailand',
    refGrams: 350,
    aliases: ['tom yum', 'tom yam', 'ต้มยำ', '冬阴功', '冬荫功'],
    items: [
      { key: 'shrimp', grams: 80 },
      { key: 'oyster_mushroom', grams: 60 },
      { key: 'beef_broth', grams: 195 },
      { key: 'sriracha', grams: 15 },
    ],
  },
  {
    id: 'nasi-putih',
    name: 'Nasi Putih (Steamed Rice)',
    local: 'Nasi Putih',
    flag: '🇲🇾',
    country: 'Malaysia',
    refGrams: 150,
    aliases: ['nasi putih', 'steamed rice', 'white rice', '白饭'],
    items: [{ key: 'rice_cooked', grams: 150 }],
  },
  {
    id: 'ayam-kari',
    name: 'Ayam Kari (Curry Chicken)',
    local: 'Ayam Kari',
    flag: '🇲🇾',
    country: 'Malaysia',
    refGrams: 120,
    aliases: ['ayam kari', 'curry chicken', '咖喱鸡'],
    items: [
      { key: 'chicken_cooked', grams: 80 },
      { key: 'coconut_milk', grams: 30 },
      { key: 'palm_oil', grams: 10 },
    ],
  },
  {
    id: 'kangkung-goreng',
    name: 'Kangkung Goreng (Stir-fried)',
    local: 'Kangkung Goreng',
    flag: '🇲🇾',
    country: 'Malaysia',
    refGrams: 80,
    aliases: ['kangkung', 'water spinach', '空心菜', '蕹菜'],
    items: [
      { key: 'spinach_cooked', grams: 70 },
      { key: 'palm_oil', grams: 10 },
    ],
  },
  {
    id: 'telur-sambal',
    name: 'Telur Sambal (Sambal Egg)',
    local: 'Telur Sambal',
    flag: '🇲🇾',
    country: 'Malaysia',
    refGrams: 60,
    aliases: ['telur sambal', 'sambal egg', '叁巴蛋'],
    items: [
      { key: 'egg_boiled', grams: 45 },
      { key: 'sriracha', grams: 15 },
    ],
  },
]

export function findDish(query: string): DishSpec | undefined {
  const q = query.trim().toLowerCase()
  if (!q) return undefined
  return DISHES.find(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.local.toLowerCase().includes(q) ||
      d.aliases.some((a) => a.toLowerCase().includes(q) || q.includes(a.toLowerCase())),
  )
}

/**
 * Dish-level model flags (part of the hawker portion prior):
 * cooking-method / taste knowledge that nutrient math alone can't see.
 */
export const DISH_FLAGS: Record<string, Array<'fried' | 'sugary' | 'salty'>> = {
  'nasi-lemak': ['fried'],
  'pho-bo': [],
  'pad-thai': ['sugary'],
  rendang: [],
  'nasi-goreng': ['fried', 'salty'],
  'tom-yum': ['salty'],
  'nasi-putih': [],
  'ayam-kari': [],
  'kangkung-goreng': [],
  'telur-sambal': ['sugary'],
}
