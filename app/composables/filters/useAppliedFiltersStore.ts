import { ALL_CATEGORIES } from "~~/shared/constants/filters";

const useAppliedFiltersStore = () => {
  const currentCategory = useState<string>(
    "currentCategory",
    () => ALL_CATEGORIES,
  );

  const currentSearchTerm = useState<string>("currentSearchTerm", () => "");

  const setCurrentCategory = (category: string) => {
    currentCategory.value = category;
  };

  const setCurrentSearchTerm = (searchTerm: string) => {
    currentSearchTerm.value = searchTerm;
  };

  return {
    currentCategory: readonly(currentCategory),
    currentSearchTerm: readonly(currentSearchTerm),
    setCurrentCategory,
    setCurrentSearchTerm,
  };
};

export default useAppliedFiltersStore;
