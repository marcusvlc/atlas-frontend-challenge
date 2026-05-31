import { defineEventHandler, getQuery } from "h3";
import { generateProfessionals } from "../utils/professionals";

const allProfessionals = generateProfessionals(500);

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const page = Math.max(1, parseInt((query.page as string) || "1"));
  const pageSize = Math.max(1, parseInt((query.pageSize as string) || "10"));

  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  const totalPages = Math.ceil(allProfessionals.length / pageSize);

  if (page > totalPages && allProfessionals.length > 0) {
    return {
      data: [],
      pagination: {
        page,
        pageSize,
        total: allProfessionals.length,
        totalPages,
        hasNextPage: false,
        hasPreviousPage: page > 1,
      },
    };
  }

  const data = allProfessionals.slice(offset, offset + limit);

  return {
    data,
    pagination: {
      page,
      pageSize,
      total: allProfessionals.length,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
});
