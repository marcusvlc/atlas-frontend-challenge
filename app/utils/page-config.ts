import type { Pagination } from "../../shared/types/pagination";

export const PROFESSIONALS_PER_PAGE = 8;

export const buildDefaultPagination: () => Pagination = () => {
  return {
    page: 1,
    pageSize: PROFESSIONALS_PER_PAGE,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  };
};
