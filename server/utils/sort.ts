import { Professional } from "../../shared/types/professionals";
import { SORT_TYPES, SortType } from "../../shared/constants/sort";

function sortByBestRating(professionals: Professional[]): Professional[] {
  return [...professionals].sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }
    return b.totalReviews - a.totalReviews;
  });
}

function sortByLowestPrice(professionals: Professional[]): Professional[] {
  return [...professionals].sort((a, b) => a.hourlyRate - b.hourlyRate);
}

function sortByHighestPrice(professionals: Professional[]): Professional[] {
  return [...professionals].sort((a, b) => b.hourlyRate - a.hourlyRate);
}

function sortByClosest(professionals: Professional[]): Professional[] {
  return [...professionals].sort((a, b) => a.distance - b.distance);
}

export function applySorting(
  professionals: Professional[],
  sortType?: SortType,
): Professional[] {
  if (!sortType) {
    return professionals;
  }

  const sortMap: Record<
    SortType,
    (professionals: Professional[]) => Professional[]
  > = {
    [SORT_TYPES.BEST_RATING]: sortByBestRating,
    [SORT_TYPES.LOWEST_PRICE]: sortByLowestPrice,
    [SORT_TYPES.HIGHEST_PRICE]: sortByHighestPrice,
    [SORT_TYPES.CLOSEST]: sortByClosest,
  };

  const sortFunction = sortMap[sortType];

  if (!sortFunction) {
    return professionals;
  }

  return sortFunction(professionals);
}
