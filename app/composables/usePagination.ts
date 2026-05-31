import { PROFESSIONALS_PER_PAGE } from "~/utils/page-config";

const usePagination = (currentPage: number = 1, totalPages: number = 0) => {
  const page = ref(currentPage);
  const total = ref(totalPages);

  const setPage = (newPage: number) => {
    if (newPage > 0 && newPage <= total.value) {
      page.value = newPage;
    }
  };

  return {
    page,
    total,
    setPage,
  };
};

export default usePagination;
