<template>
  <div class="flex flex-col h-screen p-4 gap-4">
    <FilterBar />

    <UPagination
      class="ml-auto"
      :disabled="isLoading"
      v-model:page="page"
      :total="totalPages"
      @update:page="onPageChange"
    />

    <SkeletonPage v-if="isLoading" />

    <div class="flex flex-col flex-1 items-center gap-4 w-full" v-else>
      <CardProfessionalList :professionals="professionals" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PROFESSIONALS_PER_PAGE,
  buildDefaultPagination,
} from "~/utils/page-config";

const { fetchCategories } = useCategoriesApi();
const { fetchProfessionals } = useProfessionalsApi();
const { page, total: totalPages, setTotalPages } = usePagination();
const { professionals, setProfessionals, setProfessionalsTotalCount } =
  useProfessionalsStore();
const { setCategories } = useCategoriesStore();
const toast = useToast();
const { isLoading, setLoading } = useLayoutLoadingStore();
const { currentCategory, currentSearchTerm } = useAppliedFiltersStore();
const { currentSort } = useSortingStore();

onMounted(async () => {
  const [professionalsData, categories] = await Promise.all([
    getProfissionals(),
    getCategories(),
  ]);
  const { data, pagination } = professionalsData;

  setCategories(categories);
  setProfessionals(data);
  setTotalPages(pagination.totalPages);
  setProfessionalsTotalCount(pagination.total);
});

const getCategories = async () => {
  try {
    const categories = await fetchCategories();
    return categories;
  } catch {
    toast.add({
      color: "error",
      title: "Ocorreu um erro ao carregar as categorias",
      description: "Tente novamente mais tarde.",
    });

    return [];
  }
};

const getProfissionals = async () => {
  try {
    setLoading(true);
    const { data, pagination } = await fetchProfessionals(
      page.value,
      PROFESSIONALS_PER_PAGE,
      currentCategory.value,
      currentSearchTerm.value,
      currentSort.value,
    );

    return { data: [...data], pagination };
  } catch {
    toast.add({
      color: "error",
      title: "Ocorreu um erro ao carregar os profissionais",
      description: "Tente novamente mais tarde.",
    });

    return { data: [], pagination: buildDefaultPagination() };
  } finally {
    setLoading(false);
  }
};

const onPageChange = async () => {
  const { data } = await getProfissionals();
  setProfessionals(data);
};

watchDebounced(
  [currentCategory, currentSearchTerm, currentSort],
  async () => {
    page.value = 1;
    const { data, pagination } = await getProfissionals();
    setProfessionals(data);
    setTotalPages(pagination.totalPages);
  },
  { debounce: 500 },
);
</script>
