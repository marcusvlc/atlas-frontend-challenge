const usePagination = (currentPage: number = 1, totalPages: number = 0) => {
  const page = ref(currentPage);
  const total = ref(totalPages);

  const setPage = (newPage: number) => {
    if (newPage > 0 && newPage <= total.value) {
      page.value = newPage;
    }
  };

  const setTotalPages = (totalItems: number) => {
    total.value = Math.max(0, totalItems);
  };

  return {
    page,
    total,
    setTotalPages,
    setPage,
  };
};

export default usePagination;
