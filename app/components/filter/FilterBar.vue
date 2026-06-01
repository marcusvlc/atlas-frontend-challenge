<template>
  <div class="flex w-full gap-2">
    <UInput
      icon="i-lucide-search"
      size="md"
      variant="outline"
      class="flex-1"
      placeholder="Search..."
    />

    <USelect :disabled="isLoading" />

    <USelectMenu
      :disabled="isLoading"
      :items="getCategoriesWithAllOption()"
      v-model="currentCategory"
    />
  </div>
</template>

<script setup lang="ts">
const { getCategoriesWithAllOption, currentCategory } = useCategoriesStore();
const { isLoading } = useLayoutLoadingStore();
</script>
