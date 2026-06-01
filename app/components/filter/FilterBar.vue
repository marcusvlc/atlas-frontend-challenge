<template>
  <div class="flex w-full gap-2">
    <UInput
      icon="i-lucide-search"
      size="md"
      variant="outline"
      class="flex-1"
      placeholder="Search..."
    />

    <USelect />

    <USelectMenu
      :items="getCategoriesWithAllOption()"
      v-model="currentCategory"
    />
  </div>
</template>

<script setup lang="ts">
import { ALL_CATEGORIES } from "../../../shared/constants/filters";

const { getCategoriesWithAllOption, currentCategory } = useCategoriesStore();
</script>
