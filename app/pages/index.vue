<template>
  <div>
    <CardProfessionalList :professionals="professionals" />

    <UPagination v-if="!firstLoading" v-model:page="page" :total="totalPages" />
  </div>
</template>

<script setup lang="ts">
import { PROFESSIONALS_PER_PAGE } from "~/utils/page-config";

const { fetchProfessionals } = useProfessionalsApi();

const { page, total: totalPages } = usePagination();
const professionals = ref<Professional[]>([]);
const firstLoading = ref(true);

onMounted(async () => {
  const { data, pagination } = await getProfissionals();

  professionals.value = data;
  totalPages.value = pagination.totalPages;
  firstLoading.value = false;
});

const getProfissionals = async () => {
  const { data, pagination } = await fetchProfessionals(
    page.value,
    PROFESSIONALS_PER_PAGE,
  );

  return { data, pagination };
};
</script>
