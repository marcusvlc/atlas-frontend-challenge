<template>
  <div class="flex w-full gap-2">
    <UInput
      :model-value="currentSearchTerm"
      icon="i-lucide-search"
      size="md"
      variant="outline"
      class="flex-1"
      @update:model-value="setCurrentSearchTerm"
      placeholder="Busque por nome ou profissão..."
    />

    <USelect
      :default-value="currentSort"
      @update:model-value="(value: string) => setCurrentSort(value as SortType)"
      :disabled="isLoading"
      :items="getSortingOptions()"
    />

    <USelectMenu
      :disabled="isLoading"
      :items="getCategoriesWithAllOption()"
      :default-value="currentCategory"
      @update:model-value="setCurrentCategory"
    />
  </div>
</template>

<script setup lang="ts">
import type { SortType } from "~~/shared/constants/sort";

const { getCategoriesWithAllOption } = useCategoriesStore();
const { isLoading } = useLayoutLoadingStore();
const {
  currentCategory,
  currentSearchTerm,
  setCurrentCategory,
  setCurrentSearchTerm,
} = useAppliedFiltersStore();
const { currentSort, setCurrentSort } = useSortingStore();
const { getSortingOptions } = useSortingOptions();
</script>
