import { ALL_CATEGORIES } from "~~/shared/constants/filters";

const useCategoriesStore = () => {
  const categories = useState<string[]>("categories", () => []);

  const setCategories = (newCategories: string[]) => {
    categories.value = newCategories;
  };

  const getCategoriesWithAllOption = () => {
    return [ALL_CATEGORIES, ...categories.value];
  };

  return {
    setCategories,
    getCategoriesWithAllOption,
  };
};

export default useCategoriesStore;
