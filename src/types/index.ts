export type CapType = 'cap_kecil' | 'cap_besar';

export type SkuCode = 'SKU-01' | 'SKU-02' | 'SKU-03' | 'SKU-04';

export type IngredientIconId = 'peanut' | 'chili' | 'sugar' | 'tamarind' | 'salt';

export type TasteIconId = 'spicy' | 'sweet' | 'crunchy';

export type ResellerIconId = 'price' | 'box' | 'wholesale' | 'legal';

export interface ProductVariant {
  id: string;
  sku: SkuCode;
  name: string;
  shortName: string;
  packCount: string;
  netWeightGrams: number;
  priceIDR: number;
  capType: CapType;
  capLabel: string;
  image: string;
  imageAlt: string;
  isPlaceholder: boolean;
  isFeatured?: boolean;
  badge: string;
  segmentTag: string;
  description: string;
  waMessageTemplate: string;
}

export interface TastePillar {
  id: string;
  iconId: TasteIconId;
  title: string;
  subtitle: string;
  description: string;
}

export interface IngredientItem {
  name: string;
  role: string;
  iconId: IngredientIconId;
}

export interface ResellerBenefit {
  iconId: ResellerIconId;
  title: string;
  description: string;
}

export interface StoryMoment {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
