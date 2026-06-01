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

    <USelect :disabled="isLoading" />

    <USelectMenu
      :disabled="isLoading"
      :items="getCategoriesWithAllOption()"
      :default-value="currentCategory"
      @update:model-value="setCurrentCategory"
    />
  </div>
</template>

<script setup lang="ts">
const { getCategoriesWithAllOption } = useCategoriesStore();
const { isLoading } = useLayoutLoadingStore();
const {
  currentCategory,
  currentSearchTerm,
  setCurrentCategory,
  setCurrentSearchTerm,
} = useAppliedFiltersStore();
</script>
