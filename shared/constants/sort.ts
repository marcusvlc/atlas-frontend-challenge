export const SORT_TYPES = {
  BEST_RATING: "best_rating",
  LOWEST_PRICE: "lowest_price",
  HIGHEST_PRICE: "highest_price",
  CLOSEST: "closest",
} as const;

export type SortType = (typeof SORT_TYPES)[keyof typeof SORT_TYPES];
