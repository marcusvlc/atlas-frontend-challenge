import { allProfessionals } from "../utils/data";

export default defineEventHandler(() => {
  const categories = Array.from(
    new Set(allProfessionals.map((professional) => professional.category)),
  ).sort();

  return categories;
});
