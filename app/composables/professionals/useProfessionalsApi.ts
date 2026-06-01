import type { Professional } from "../../../shared/types/professionals";
import type { Pagination } from "../../../shared/types/pagination";

const useProfessionalsApi = () => {
  const fetchProfessionals = async (
    page: number,
    pageSize: number,
    category?: string,
    search?: string,
    sort?: string,
  ) => {
    return $fetch<{ data: Professional[]; pagination: Pagination }>(
      "/api/professionals",
      {
        method: "GET",
        params: { page, pageSize, category, search, sort },
      },
    );
  };

  return {
    fetchProfessionals,
  };
};

export default useProfessionalsApi;
