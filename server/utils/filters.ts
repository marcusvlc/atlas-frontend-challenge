import { Professional } from "../../shared/types/professionals";
import { ALL_CATEGORIES } from "../../shared/constants/filters";

export function filterByCategory(
  professionals: Professional[],
  category: string,
): Professional[] {
  if (category === ALL_CATEGORIES) {
    return professionals;
  }

  return professionals.filter(
    (professional) => professional.category === category,
  );
}

export function filterBySearch(
  professionals: Professional[],
  search: string,
): Professional[] {
  if (!search || search.trim() === "") {
    return professionals;
  }

  const searchLower = search.toLowerCase().trim();

  return professionals.filter((professional) => {
    const nameMatch = professional.name.toLowerCase().includes(searchLower);
    const professionMatch = professional.profession
      .toLowerCase()
      .includes(searchLower);

    return nameMatch || professionMatch;
  });
}

export function applyFilters(
  professionals: Professional[],
  category: string,
  search?: string,
): Professional[] {
  let filtered = filterByCategory(professionals, category);

  if (search) {
    filtered = filterBySearch(filtered, search);
  }

  return filtered;
}
