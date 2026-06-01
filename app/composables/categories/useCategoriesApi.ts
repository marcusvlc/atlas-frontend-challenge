const useCategoriesApi = () => {
  const fetchCategories = () => {
    return $fetch("/api/categories");
  };

  return {
    fetchCategories,
  };
};

export default useCategoriesApi;
