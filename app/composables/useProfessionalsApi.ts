import type { Professional } from "../../shared/types/professionals";
import type { Pagination } from "../../shared/types/pagination";

const useProfessionalsApi = () => {
  const fetchProfessionals = async (page: number, pageSize: number) => {
    return $fetch<{ data: Professional[]; pagination: Pagination }>(
      "/api/professionals",
      {
        method: "GET",
        params: { page, pageSize },
      },
    );
  };

  return {
    fetchProfessionals,
  };
};

export default useProfessionalsApi;
