import { defineEventHandler, getQuery } from "h3";
import { allProfessionals } from "../utils/data";
import { ALL_CATEGORIES } from "../../shared/constants/filters";
import { applyFilters } from "../utils/filters";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const page = Math.max(1, parseInt((query.page as string) || "1"));
  const pageSize = Math.max(1, parseInt((query.pageSize as string) || "10"));
  const category = (query.category as string) || ALL_CATEGORIES;
  const search = (query.search as string) || undefined;

  const filteredProfessionals = applyFilters(
    allProfessionals,
    category,
    search,
  );

  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  const totalPages = Math.ceil(filteredProfessionals.length / pageSize);

  if (page > totalPages && filteredProfessionals.length > 0) {
    return {
      data: [],
      pagination: {
        page,
        pageSize,
        total: filteredProfessionals.length,
        totalPages,
        hasNextPage: false,
        hasPreviousPage: page > 1,
      },
    };
  }

  const data = filteredProfessionals.slice(offset, offset + limit);

  // Adicionar delay para simular latência da API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    data,
    pagination: {
      page,
      pageSize,
      total: filteredProfessionals.length,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
});
