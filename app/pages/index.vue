<template>
  <div class="flex flex-col h-screen p-4">
    <SkeletonPage v-if="isLoading" />

    <div class="flex flex-col flex-1 items-center gap-4 w-full" v-else>
      <CardProfessionalList :professionals="professionals" />

      <UPagination
        class="mt-auto"
        v-model:page="page"
        :total="totalPages"
        @update:page="onPageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PROFESSIONALS_PER_PAGE,
  buildDefaultPagination,
} from "~/utils/page-config";

const { fetchProfessionals } = useProfessionalsApi();

const { page, total: totalPages, setTotalPages } = usePagination();
const { professionals, setProfessionals } = useProfessionalsStore();
const toast = useToast();

const isLoading = ref(true);

onMounted(async () => {
  const { pagination, data } = await getProfissionals();

  setProfessionals(data);
  setTotalPages(pagination.totalPages);
});

const getProfissionals = async () => {
  try {
    isLoading.value = true;
    const { data, pagination } = await fetchProfessionals(
      page.value,
      PROFESSIONALS_PER_PAGE,
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
    isLoading.value = false;
  }
};

const onPageChange = async () => {
  const { data } = await getProfissionals();
  setProfessionals(data);
};
</script>
