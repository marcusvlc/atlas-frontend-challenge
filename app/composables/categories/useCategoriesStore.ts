import { ALL_CATEGORIES } from "../../../shared/constants/filters";

const useCategoriesStore = () => {
  const categories = useState<string[]>("categories", () => []);

  const currentCategory = useState<string>(
    "currentCategory",
    () => ALL_CATEGORIES,
  );

  const setCurrentCategory = (category: string) => {
    currentCategory.value = category;
  };

  const setCategories = (newCategories: string[]) => {
    categories.value = newCategories;
  };

  const getCategoriesWithAllOption = () => {
    return [ALL_CATEGORIES, ...categories.value];
  };

  return {
    setCategories,
    getCategoriesWithAllOption,
    currentCategory,
    setCurrentCategory,
  };
};

export default useCategoriesStore;
