import { type SortType, SORT_TYPES } from "~~/shared/constants/sort";

const useSortingStore = () => {
  const currentSort = useState<SortType>(
    "currentSort",
    () => SORT_TYPES.BEST_RATING,
  );

  const setCurrentSort = (sort: SortType) => {
    currentSort.value = sort;
  };

  return {
    currentSort: readonly(currentSort),
    setCurrentSort,
  };
};

export default useSortingStore;
