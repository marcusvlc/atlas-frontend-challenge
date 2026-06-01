import { SORT_TYPES, type SortType } from "../../../shared/constants/sort";

const sortingLabels: Record<SortType, string> = {
  [SORT_TYPES.BEST_RATING]: "Melhor Avaliação",
  [SORT_TYPES.LOWEST_PRICE]: "Preço Mais Baixo",
  [SORT_TYPES.HIGHEST_PRICE]: "Preço Mais Alto",
  [SORT_TYPES.CLOSEST]: "Mais Próximo",
};

const useSortingOptions = () => {
  const getSortingOptions = () => {
    return Object.entries(sortingLabels).map(([value, label]) => ({
      value,
      label,
    }));
  };

  return {
    getSortingOptions,
  };
};

export default useSortingOptions;
